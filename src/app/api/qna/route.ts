import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('API route received request:', body);
    
    // Forward request to Python backend
    const response = await fetch('http://localhost:5001/api/qna', {
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
    console.log('Backend response data:', data);
    return NextResponse.json(data);
    
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: 'Failed to connect to backend service. Make sure the Python backend is running on port 5001.' },
      { status: 500 }
    );
  }
}
