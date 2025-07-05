import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('API route received request');
    
    // Use environment variable for backend URL, fallback to localhost for development
    const backendUrl = process.env.PYTHON_BACKEND_URL || 'http://localhost:5001';
    
    // Forward request to Python backend
    const response = await fetch(`${backendUrl}/api/qna`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    console.log('Backend response status:', response.status);

    if (!response.ok) {
      throw new Error(`Backend responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to connect to backend service. Please check if the backend is running.' },
      { status: 500 }
    );
  }
}
