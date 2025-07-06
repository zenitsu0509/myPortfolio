import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('API route received request');
    
    // Get backend URL from environment variable
    const backendUrl = process.env.PYTHON_BACKEND_URL;
    
    // If no backend URL is configured, return a friendly message
    if (!backendUrl || backendUrl === 'https://placeholder-backend.com') {
      return NextResponse.json({
        answer: "Hi! I'm Himanshu's AI assistant. I'm currently being set up and will be available soon to answer questions about Himanshu's background, skills, and experience. In the meantime, feel free to explore the portfolio and contact Himanshu directly through the contact section!",
        context_quality: "info",
        sources_found: 0
      });
    }
    
    // Forward request to Python backend
    const response = await fetch(`${backendUrl}/api/qna`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      // Add timeout for better error handling
      signal: AbortSignal.timeout(30000) // 30 seconds timeout
    });

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('API route error:', error);
    
    // Return a user-friendly error message
    return NextResponse.json({
      answer: "I'm currently experiencing some technical difficulties. Please try again in a moment, or feel free to reach out to Himanshu directly through the contact section for any inquiries!",
      context_quality: "error",
      sources_found: 0
    });
  }
}
