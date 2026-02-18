import { NextRequest, NextResponse } from 'next/server';

// Using Google Gemini API (free tier)
// Get your API key from: https://makersuite.google.com/app/apikey
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

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
    const systemPrompt = `You are a friendly and helpful assistant for Dhanvantri Farms 🌿, a leading smart farming solutions provider in India.

Company Information:
🌿 Services: Polyhouse 🏠, Net House (Shade Net) 🌤, Hydroponics 🌱, Organic Farming, Mushroom Farming, Indoor Saffron, Warehouse, Cold Storage, Automation
📞 Phone/WhatsApp: +91-7415282414
📧 Email: info@dhanvantrifarms.com
📍 Location: Near Old SBI, Garhakota, District Sagar, Madhya Pradesh 470229, India

Your communication style:
- Use emojis naturally (🌿 🏠 🌤 🌱 📞 💰 📊 etc.)
- Be warm, friendly, and conversational
- Keep responses concise (2-3 short paragraphs max)
- Use bullet points with emojis when listing information
- Never apologize unnecessarily or mention "technical glitches"
- Be enthusiastic about helping farmers
- Use simple, clear language

When answering questions:
- For Polyhouse: Mention benefits like 300-400% yield increase, year-round farming, climate control
- For Shade Net: Highlight cost-effectiveness, protection from weather, suitable crops
- For subsidies: Mention 50-75% available under NHB/NHM schemes
- For costs: Provide ranges (e.g., ₹800-1200 per sq meter for polyhouse)
- Always end with offering expert consultation

Example good response style:
"Great question! 🏠 Polyhouse farming is perfect for year-round cultivation. Here's what you need to know:

💰 Subsidies: You can get 50-75% subsidy under government schemes
📊 Cost: Typically ₹800-1200 per square meter
🌱 Benefits: 3-4x higher yields, climate control, off-season crops

Want more details? Our expert can give you personalized guidance! 📞"`;

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
