import os
import logging
from flask import Flask, request, jsonify
from flask_cors import CORS
from pinecone import Pinecone
from groq import Groq
from dotenv import load_dotenv
import time
from functools import wraps

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

load_dotenv()

app = Flask(__name__)
CORS(app)

# Configuration
class Config:
    PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
    GROQ_API_KEY = os.getenv("GROQ_API_KEY")
    INDEX_NAME = "myinfo"
    NAMESPACE = "ns1"
    EMBEDDING_MODEL = "multilingual-e5-large"
    LLM_MODEL = "llama3-8b-8192"
    MAX_QUESTION_LENGTH = 500
    TOP_K = 3

# Rate limiting decorator
def rate_limit(max_requests=10, window=60):
    requests = {}
    def decorator(f):
        @wraps(f)
        def decorated_function(*args, **kwargs):
            now = time.time()
            client_ip = request.remote_addr
            
            # Clean old requests
            if client_ip in requests:
                requests[client_ip] = [req_time for req_time in requests[client_ip] if now - req_time < window]
            else:
                requests[client_ip] = []
            
            # Check rate limit
            if len(requests[client_ip]) >= max_requests:
                return jsonify({"error": "Rate limit exceeded. Please try again later."}), 429
            
            requests[client_ip].append(now)
            return f(*args, **kwargs)
        return decorated_function
    return decorator

# Initialize services
try:
    pc = Pinecone(api_key=Config.PINECONE_API_KEY)
    index = pc.Index(Config.INDEX_NAME)
    client = Groq(api_key=Config.GROQ_API_KEY)
    logger.info("Successfully initialized Pinecone and Groq clients")
except Exception as e:
    logger.error(f"Failed to initialize services: {str(e)}")
    raise

def validate_question(question):
    """Validate the input question"""
    if not question:
        return False, "Question is required"
    
    if not isinstance(question, str):
        return False, "Question must be a string"
    
    if len(question.strip()) == 0:
        return False, "Question cannot be empty"
    
    if len(question) > Config.MAX_QUESTION_LENGTH:
        return False, f"Question too long (max {Config.MAX_QUESTION_LENGTH} characters)"
    
    return True, None

def get_embedding(text):
    """Get embedding for the given text"""
    try:
        embed_response = pc.inference.embed(
            model=Config.EMBEDDING_MODEL,
            inputs=[text],
            parameters={"input_type": "query"}
        )
        
        if not embed_response.data:
            raise ValueError("Empty embedding response")
            
        return embed_response.data[0].values
    except Exception as e:
        logger.error(f"Embedding error: {str(e)}")
        raise

def query_knowledge_base(embedding):
    """Query the Pinecone knowledge base"""
    try:
        query_response = index.query(
            vector=embedding,
            top_k=Config.TOP_K,
            include_metadata=True,
            namespace=Config.NAMESPACE
        )
        
        context_parts = []
        scores = []
        
        if query_response.get('matches'):
            for match in query_response['matches']:
                if 'metadata' in match and 'text' in match['metadata']:
                    context_parts.append(match['metadata']['text'])
                    scores.append(match.get('score', 0))
        
        return context_parts, scores
    except Exception as e:
        logger.error(f"Knowledge base query error: {str(e)}")
        raise

def build_enhanced_prompt(question, context_parts, scores):
    """Build an enhanced prompt with better instructions"""
    
    # Determine context quality
    high_quality_context = any(score > 0.8 for score in scores) if scores else False
    context_text = "\n".join(context_parts) if context_parts else ""
    
    system_prompt = """You are Himanshu Gangwar's intelligent personal assistant. Your primary role is to provide accurate, helpful, and engaging information about Himanshu based on the provided context.

CORE RESPONSIBILITIES:
- Answer questions about Himanshu's professional background, skills, experience, and achievements
- Provide contact information (LinkedIn, phone, email) when appropriate
- Maintain a professional yet friendly tone
- Be concise but comprehensive in your responses

RESPONSE GUIDELINES:
1. ACCURACY: Only provide information that is explicitly stated or can be reasonably inferred from the context
2. COMPLETENESS: Give thorough answers when sufficient context is available
3. HONESTY: If information isn't available in the context, clearly state this and offer to help connect them with Himanshu
4. RELEVANCE: Focus on answering the specific question asked
5. PROFESSIONALISM: Maintain a tone that reflects well on Himanshu's personal brand

CONTACT INFORMATION POLICY:
- Provide contact details when someone wants to reach out or when you don't have specific information
- Always encourage direct contact for detailed discussions about opportunities or collaborations

HANDLING INSUFFICIENT CONTEXT:
When you don't have enough information to answer a question:
- Acknowledge the limitation honestly
- Offer to facilitate direct contact with Himanshu
- Provide available contact information
- Suggest what type of information Himanshu could provide directly"""

    user_prompt = f"""CONTEXT INFORMATION:
{context_text if context_text else "No specific context available for this query."}

QUESTION: {question}

Please provide a helpful response following the guidelines above. If the context doesn't contain enough information to answer the question thoroughly, acknowledge this and provide Himanshu's contact information for direct communication."""

    return system_prompt, user_prompt

def generate_response(question, context_parts, scores):
    """Generate response using Groq"""
    try:
        system_prompt, user_prompt = build_enhanced_prompt(question, context_parts, scores)
        
        chat_completion = client.chat.completions.create(
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": user_prompt}
            ],
            model=Config.LLM_MODEL,
            temperature=0.7,
            max_tokens=1000
        )
        
        return chat_completion.choices[0].message.content
    except Exception as e:
        logger.error(f"Response generation error: {str(e)}")
        raise

@app.route("/api/qna", methods=["POST"])
@rate_limit(max_requests=20, window=60)
def qna():
    """Enhanced Q&A endpoint with better error handling and logging"""
    try:
        # Validate request
        if not request.is_json:
            return jsonify({"error": "Content-Type must be application/json"}), 400
        
        data = request.get_json()
        question = data.get("question", "").strip()
        
        # Validate question
        is_valid, error_message = validate_question(question)
        if not is_valid:
            return jsonify({"error": error_message}), 400
        
        logger.info(f"Processing question: {question[:100]}...")
        
        # Get embedding
        embedding = get_embedding(question)
        
        # Query knowledge base
        context_parts, scores = query_knowledge_base(embedding)
        
        # Generate response
        answer = generate_response(question, context_parts, scores)
        
        # Log successful response
        logger.info(f"Successfully generated response for question")
        
        return jsonify({
            "answer": answer,
            "context_quality": "high" if any(score > 0.8 for score in scores) else "medium" if scores else "low",
            "sources_found": len(context_parts)
        })
        
    except ValueError as e:
        logger.error(f"Validation error: {str(e)}")
        return jsonify({"error": "Invalid input provided"}), 400
    
    except Exception as e:
        logger.error(f"Internal server error: {str(e)}")
        return jsonify({"error": "An internal error occurred. Please try again later."}), 500

@app.route("/api/health", methods=["GET"])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "timestamp": time.time(),
        "services": {
            "pinecone": "connected",
            "groq": "connected"
        }
    })

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Endpoint not found"}), 404

@app.errorhandler(500)
def internal_error(error):
    logger.error(f"Internal server error: {str(error)}")
    return jsonify({"error": "Internal server error"}), 500