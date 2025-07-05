import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from pinecone import Pinecone
from groq import Groq
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

pinecone_api_key = os.getenv("PINECONE_API_KEY")
groq_api_key = os.getenv("GROQ_API_KEY")
pc = Pinecone(api_key=pinecone_api_key)
index = pc.Index("myinfo")

client = Groq(api_key=groq_api_key)

@app.route("/api/qna", methods=["POST"])
def qna():
    data = request.get_json()
    question = data.get("question")

    if not question:
        return jsonify({"error": "Question is required"}), 400

    # Embed the question
    embed_response = pc.inference.embed(
        model="multilingual-e5-large",
        inputs=[question],
        parameters={"input_type": "query"}
    )

    if not embed_response.data:
        return jsonify({"error": "Failed to create query embedding."}), 500

    # Query Pinecone
    query_response = index.query(
        vector=embed_response.data[0].values,
        top_k=3,
        include_metadata=True,
        namespace="ns1"
    )

    context = ""
    if query_response.get('matches'):
        for match in query_response['matches']:
            context += match['metadata']['text'] + "\n"

    # Generate answer with Groq
    chat_completion = client.chat.completions.create(
        messages=[
            {
                "role": "system",
                "content": "You are Himanshu Gangwar's personal assistant. Answer questions about him based on the provided context. If the answer isn't in the context, say you don't have the information and provide his LinkedIn and phone number, which are available in the context."
            },
            {
                "role": "user",
                "content": f"Context:\n{context}\n\nQuestion: {question}\n\nAnswer:"
            }
        ],
        model="llama3-8b-8192",
    )

    answer = chat_completion.choices[0].message.content

    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(debug=True, port=5001)
