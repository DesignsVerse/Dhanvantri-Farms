# Gemini Chatbot Setup Guide

## Overview
The Dhanvantri Farms website includes an AI-powered chatbot using Google's Gemini API (free tier) that helps users:
- Get information about farming solutions
- Answer questions about services
- Collect user requirements through structured flow
- Connect users with experts

## Setup Instructions

### 1. Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey) or [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key" or "Get API Key"
4. Copy your API key

### 2. Add API Key to Environment Variables

Create a `.env.local` file in the root directory (if it doesn't exist):

```env
GEMINI_API_KEY=your_api_key_here
```

**Important:** 
- Never commit `.env.local` to version control
- The file is already in `.gitignore`
- For production, add the environment variable in your hosting platform (Vercel, Netlify, etc.)

### 3. Restart Development Server

After adding the API key, restart your development server:

```bash
npm run dev
```

## Chatbot Features

### Structured Flow
The chatbot guides users through:
1. **Interest Selection**: Polyhouse, Shade Net, or Need Guidance
2. **Land Size**: <1 Acre, 1-3 Acres, 3+ Acres
3. **Subsidy Information**: Yes/No
4. **Cost & Profit Details**: Request information
5. **Expert Contact**: Phone call or WhatsApp

### General Q&A
Users can also ask general questions about:
- Farming solutions
- Services offered
- Pricing information
- Technical details
- Company information

## API Endpoint

The chatbot uses: `/api/chat`

**Request:**
```json
{
  "message": "What is polyhouse farming?",
  "conversationHistory": [
    { "role": "user", "content": "Hello" },
    { "role": "assistant", "content": "Hi! How can I help?" }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Polyhouse farming is..."
}
```

## Troubleshooting

### Chatbot not responding?
1. Check if `GEMINI_API_KEY` is set in `.env.local`
2. Verify the API key is valid
3. Check browser console for errors
4. Ensure the API route is accessible: `/api/chat`

### API Key errors?
- Make sure you're using the free tier API key from Google AI Studio
- Check if the API key has proper permissions
- Verify the key hasn't exceeded rate limits

### Rate Limits
The free tier has rate limits. If you hit them:
- Wait a few minutes
- Consider upgrading to a paid plan for production use
- Implement rate limiting on your end

## Customization

### Modify System Prompt
Edit `app/api/chat/route.ts` to change the chatbot's behavior and knowledge base.

### Change Chatbot Appearance
Edit `components/Chatbot.tsx` to customize:
- Colors and styling
- Button labels
- Flow steps
- Welcome message

## Production Deployment

1. Add `GEMINI_API_KEY` to your hosting platform's environment variables
2. Restart your application
3. Test the chatbot functionality
4. Monitor API usage and costs

## Support

For issues or questions:
- Check the [Gemini API Documentation](https://ai.google.dev/docs)
- Review error logs in browser console
- Contact Dhanvantri Farms support: +91-7415282414
