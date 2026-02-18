import { NextRequest, NextResponse } from 'next/server';

// Using Google Gemini API (free tier)
// Get your API key from: https://makersuite.google.com/app/apikey
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent';

export async function POST(request: NextRequest) {
  try {
    const { message, conversationHistory } = await request.json();

    if (!message) {
      return NextResponse.json(
        { success: false, error: 'Message is required' },
        { status: 400 }
      );
    }

    if (!GEMINI_API_KEY) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Gemini API key not configured. Please set GEMINI_API_KEY in environment variables.' 
        },
        { status: 500 }
      );
    }

    // System prompt for Dhanvantri Farms chatbot
    const systemPrompt = `You are a helpful assistant for Dhanvantri Farms, a leading smart farming solutions provider in India. 
    
Company Information:
- Services: Polyhouse, Net House (Shade Net), Hydroponics, Organic Farming, Mushroom Farming, Indoor Saffron, Warehouse, Cold Storage, Automation
- Phone: +91-7415282414
- Email: info@dhanvantrifarms.com
- Location: Near Old SBI, Garhakota, District Sagar, Madhya Pradesh 470229, India

Your role:
1. Help users understand our farming solutions
2. Answer questions about Polyhouse, Shade Net, and other services
3. Provide guidance on land requirements, costs, subsidies, and profits
4. Be friendly, professional, and informative
5. If users ask about specific services, provide detailed information
6. Always offer to connect them with our experts for personalized consultation

Keep responses concise, helpful, and in a friendly tone.`;

    // Build conversation context
    const conversationContext = conversationHistory
      .map((msg: { role: string; content: string }) => `${msg.role === 'user' ? 'User' : 'Assistant'}: ${msg.content}`)
      .join('\n');

    const fullPrompt = `${systemPrompt}\n\nConversation History:\n${conversationContext}\n\nUser: ${message}\nAssistant:`;

    // Call Gemini API
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: fullPrompt
          }]
        }]
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API error:', errorData);
      return NextResponse.json(
        { success: false, error: 'Failed to get response from AI' },
        { status: 500 }
      );
    }

    const data = await response.json();
    
    // Extract the response text
    const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                      'I apologize, but I could not generate a response. Please try again.';

    return NextResponse.json({
      success: true,
      message: aiResponse,
    });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
