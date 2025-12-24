
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { PORTFOLIO_DATA } from '../constants';

const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', content: string}[]>([
    { role: 'model', content: `Hi! I'm ${PORTFOLIO_DATA.name.split(' ')[1]}'s assistant. (Demo Mode: Ask me about projects or skills!)` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {isOpen ? (
        <div className="glass-panel w-80 md:w-96 h-[500px] rounded-2xl flex flex-col shadow-2xl overflow-hidden border border-blue-500/30">
          <div className="p-4 bg-blue-500/20 flex justify-between items-center border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-bold">AI Assistant <span className="text-[8px] opacity-50 px-1 border border-white/20 rounded">DEMO</span></span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 text-sm">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl relative group ${
                  msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white/10 text-gray-200 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && <div className="text-gray-500 text-xs animate-pulse">Thinking...</div>}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white text-sm focus:outline-none focus:border-blue-500"
              />
              <button type="submit" className="p-2 bg-blue-500 rounded-xl hover:bg-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
              </button>
            </div>
            <p className="text-[10px] text-gray-600 mt-2 text-center">Free Static Version - Audio Disabled</p>
          </form>
        </div>
      ) : (
        <button onClick={() => setIsOpen(true)} className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all">
          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </button>
      )}
    </div>
  );
};

export default AIChatbot;
