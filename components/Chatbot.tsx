'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  role: 'user' | 'assistant' | 'system';
  content: string;
  type?: 'text' | 'button';
  buttons?: { label: string; value: string }[];
}

interface UserData {
  interest?: string;
  landSize?: string;
  subsidyInfo?: boolean;
  costDetails?: boolean;
  expertCall?: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<UserData>({});
  const [currentStep, setCurrentStep] = useState<number>(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const initialMessage: Message = {
    role: 'system',
    content: '🌿 Welcome to Dhanvantri Farms!\n\nI\'m here to help you with smart farming solutions. Let\'s get started!',
    type: 'text',
  };

  const step1Message: Message = {
    role: 'system',
    content: '1️⃣ What are you interested in?',
    type: 'button',
    buttons: [
      { label: '🏠 Polyhouse', value: 'polyhouse' },
      { label: '🌤 Shade Net', value: 'shade-net' },
      { label: '🌱 Need Guidance', value: 'guidance' },
    ],
  };

  const step2Message: Message = {
    role: 'system',
    content: '2️⃣ How much land do you have?',
    type: 'button',
    buttons: [
      { label: '📏 <1 Acre', value: '<1' },
      { label: '1–3 Acres', value: '1-3' },
      { label: '3+ Acres', value: '3+' },
    ],
  };

  const step3Message: Message = {
    role: 'system',
    content: '3️⃣ Do you want subsidy info?',
    type: 'button',
    buttons: [
      { label: '💰 Yes', value: 'yes' },
      { label: 'No', value: 'no' },
    ],
  };

  const step4Message: Message = {
    role: 'system',
    content: '4️⃣ Want project cost & profit details?',
    type: 'button',
    buttons: [
      { label: '📊 Yes, send details', value: 'yes' },
    ],
  };

  const step5Message: Message = {
    role: 'system',
    content: '5️⃣ Shall our expert call you?',
    type: 'button',
    buttons: [
      { label: '📞 Yes', value: 'call' },
      { label: '💬 WhatsApp', value: 'whatsapp' },
    ],
  };

  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      setMessages([initialMessage, step1Message]);
      setCurrentStep(1);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleButtonClick = async (value: string, buttonLabel: string) => {
    // Add user's button selection as a message
    const userMsg: Message = {
      role: 'user',
      content: buttonLabel,
      type: 'text',
    };
    setMessages((prev) => [...prev, userMsg]);

    // Update user data based on current step
    if (currentStep === 1) {
      setUserData({ ...userData, interest: value });
      setCurrentStep(2);
      setTimeout(() => {
        setMessages((prev) => [...prev, step2Message]);
      }, 500);
    } else if (currentStep === 2) {
      setUserData({ ...userData, landSize: value });
      setCurrentStep(3);
      setTimeout(() => {
        setMessages((prev) => [...prev, step3Message]);
      }, 500);
    } else if (currentStep === 3) {
      setUserData({ ...userData, subsidyInfo: value === 'yes' });
      setCurrentStep(4);
      setTimeout(() => {
        setMessages((prev) => [...prev, step4Message]);
      }, 500);
    } else if (currentStep === 4) {
      setUserData({ ...userData, costDetails: value === 'yes' });
      setCurrentStep(5);
      setTimeout(() => {
        setMessages((prev) => [...prev, step5Message]);
      }, 500);
    } else if (currentStep === 5) {
      setUserData({ ...userData, expertCall: value });
      
      // Send final summary and connect user
      const getInterestLabel = (interest?: string) => {
        if (interest === 'polyhouse') return '🏠 Polyhouse';
        if (interest === 'shade-net') return '🌤 Shade Net';
        if (interest === 'guidance') return '🌱 Need Guidance';
        return interest || 'Not specified';
      };

      const getLandLabel = (land?: string) => {
        if (land === '<1') return '📏 <1 Acre';
        if (land === '1-3') return '1–3 Acres';
        if (land === '3+') return '3+ Acres';
        return land || 'Not specified';
      };

      const summary = `Perfect! ✅ Here's what we've noted:\n\n` +
        `🌿 Interest: ${getInterestLabel(userData.interest)}\n` +
        `📏 Land Size: ${getLandLabel(userData.landSize)}\n` +
        `💰 Subsidy Info: ${userData.subsidyInfo ? 'Yes' : 'No'}\n` +
        `📊 Cost & Profit Details: Requested\n` +
        `📞 Contact: ${value === 'call' ? 'Phone Call' : 'WhatsApp'}\n\n` +
        `Our farming expert will reach out to you shortly! 🚀\n\n` +
        `📞 Phone/WhatsApp: +91-7415282414\n` +
        `📧 Email: info@dhanvantrifarms.com\n\n` +
        `Thank you for choosing Dhanvantri Farms! 🌿`;

      const summaryMsg: Message = {
        role: 'assistant',
        content: summary,
        type: 'text',
      };
      
      setTimeout(() => {
        setMessages((prev) => [...prev, summaryMsg]);
        
        // Open WhatsApp or prepare for call
        if (value === 'whatsapp') {
          const whatsappUrl = `https://wa.me/917415282414?text=${encodeURIComponent('Hello! I am interested in your farming solutions.')}`;
          window.open(whatsappUrl, '_blank');
        }
      }, 500);
    }
  };

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMsg: Message = {
      role: 'user',
      content: content.trim(),
      type: 'text',
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Build conversation history for context
      const conversationHistory = messages
        .filter((msg) => msg.role !== 'system')
        .map((msg) => ({
          role: msg.role,
          content: msg.content,
        }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content.trim(),
          conversationHistory: [...conversationHistory, { role: 'user', content: content.trim() }],
        }),
      });

      const data = await response.json();

      if (data.success) {
        const aiMsg: Message = {
          role: 'assistant',
          content: data.message,
          type: 'text',
        };
        setMessages((prev) => [...prev, aiMsg]);
      } else {
        const errorMsg: Message = {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again or contact us directly at +91-7415282414',
          type: 'text',
        };
        setMessages((prev) => [...prev, errorMsg]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMsg: Message = {
        role: 'assistant',
        content: 'Sorry, I couldn\'t process your message. Please try again or contact us at +91-7415282414',
        type: 'text',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleOpen}
          className="fixed bottom-24 right-6 z-50 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white rounded-full p-4 shadow-2xl hover:shadow-green-600/50 transition-all duration-300 group"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Chat with us
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-gray-900"></div>
          </div>
        </motion.button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[90vw] sm:w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Dhanvantri Farms</h3>
                  <p className="text-xs text-green-100">We're online</p>
                </div>
              </div>
              <button
                onClick={handleClose}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      msg.role === 'user'
                        ? 'bg-green-600 text-white'
                        : msg.role === 'system'
                        ? 'bg-blue-100 text-blue-900'
                        : 'bg-white text-gray-900 shadow-sm border border-gray-200'
                    }`}
                  >
                    {msg.role === 'user' ? (
                      <User className="w-4 h-4 inline mr-2" />
                    ) : (
                      <Bot className="w-4 h-4 inline mr-2" />
                    )}
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    
                    {msg.type === 'button' && msg.buttons && (
                      <div className="mt-3 space-y-2">
                        {msg.buttons.map((button, btnIndex) => (
                          <button
                            key={btnIndex}
                            onClick={() => handleButtonClick(button.value, button.label)}
                            className="block w-full text-left px-3 py-2 bg-white hover:bg-green-50 text-gray-800 rounded-lg border border-gray-300 hover:border-green-500 transition-colors text-sm"
                          >
                            {button.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white rounded-2xl px-4 py-2 shadow-sm border border-gray-200">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !inputMessage.trim()}
                  className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
