import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleGenAI } from "@google/genai";

// Simple ID generator
const generateId = () => Math.random().toString(36).substr(2, 9);

interface Message {
  id: string;
  type: 'text' | 'card';
  content: any;
  sender: 'user' | 'ai';
  timestamp: string;
}

const Chat: React.FC = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'text',
      content: 'Good morning, Budi! Ready to tackle your health goals today?',
      sender: 'ai',
      timestamp: 'Today, 9:41 AM'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: generateId(),
      type: 'text',
      content: input,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');

    // --- Gemini API Integration (Simulated if no key) ---
    // If we had a key, we would use:
    // const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    // const response = await ai.models.generateContent({ model: 'gemini-3-flash-preview', contents: input });
    
    // For this demo, we mock the specific response flow from the screenshot if the user says "tired"
    setTimeout(() => {
        let responseMessage: Message;
        
        if (input.toLowerCase().includes('tired')) {
             responseMessage = {
                id: generateId(),
                type: 'card',
                content: {
                    text: [
                        "It's okay to feel tired, Budi. Listen to your body.",
                        "Your data shows you've hit 5,000 steps for 3 days straight. That's fantastic momentum!",
                        "How about we aim for just 3,000 today? Consistency matters more than intensity right now."
                    ],
                    suggestion: {
                        amount: '3,000',
                        unit: 'steps today',
                        actions: ['Accept 3,000 Steps Goal', 'Skip Today']
                    }
                },
                sender: 'ai',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
             };
        } else {
            responseMessage = {
                id: generateId(),
                type: 'text',
                content: "I understand. Let's keep moving forward at your own pace.",
                sender: 'ai',
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
        }
        setMessages(prev => [...prev, responseMessage]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark relative">
      <header className="bg-surface-light dark:bg-surface-dark px-4 py-4 flex items-center justify-between shadow-sm z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors inline-flex items-center justify-center">
            <span className="material-symbols-outlined text-gray-500 dark:text-gray-400">arrow_back</span>
          </button>
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary/20">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGH_47xOUHcwnal6rLwIi6q1keRubrYDU-YuPRAEaq-OOhx-vCPJNI9zOUjNvWBCn3SAQcZgu9ILsMFoCE7nuKX_4XJDDYlpM3lwO2oTGnnSJELe4iNIjhjcPwod-bZLlX7DSc4Y9SFmA3I2yJhb009lG4oSKitJpzLMnniu2YpLjhjs-R3zuu_nFU4XxeLH7QhQBMi5CGubHqAmbQi9kfnzhE1sBrj5ra5hd0I14Cvbw6WJkBWsGRUHhAogXP3eBJU6dcH0luq-6y" alt="AI Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-primary rounded-full border-2 border-white dark:border-surface-dark"></div>
          </div>
          <div>
            <h1 className="font-semibold text-lg leading-tight text-slate-900 dark:text-white">MetaHealth</h1>
            <p className="text-xs text-primary font-medium">Active now</p>
          </div>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-gray-400">
          <span className="material-symbols-outlined">more_vert</span>
        </button>
      </header>

      <div className="flex-1 overflow-y-auto no-scrollbar p-4 space-y-6 pb-48">
        <div className="flex justify-center">
          <span className="text-xs font-medium text-gray-400 bg-gray-100 dark:bg-white/5 px-3 py-1 rounded-full">Today, 9:41 AM</span>
        </div>

        {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : ''} animate-fade-in-up`}>
                {msg.sender === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 mt-1 overflow-hidden">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP3k727xUrCMftGBgmTe8YwOFHWg5aUvn_ZYkyC2-dvtc7Mo5M4O5003_Zr16LiVwM6AW7SzktkLxgbpeY9na2S9G8_bAsYb6ESTsK20fSMDevKbibuOkFtstWOB36Zr9E3OkgOCAh5anyGRw9kU-gjilcRQnG9w9JpLnTMZHF_VpMQGlzfXU1qpx83ROIdL98sXGgw3pRc_5ZuvpS1OK-mmY0sP5eCC6Pj52pVQaD_wUOC4weBiyGx9NenNOth8_0m1bFoHpB4FMq" alt="AI" className="w-full h-full object-cover" />
                    </div>
                )}
                
                <div className={`flex flex-col gap-1 max-w-[85%] ${msg.sender === 'user' ? 'items-end' : ''}`}>
                    {msg.type === 'text' && (
                        <div className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                            msg.sender === 'user' 
                                ? 'bg-primary text-background-dark rounded-tr-none font-medium' 
                                : 'bg-surface-light dark:bg-surface-dark text-slate-900 dark:text-gray-200 border border-gray-100 dark:border-white/5 rounded-tl-none'
                        }`}>
                            {msg.content}
                        </div>
                    )}

                    {msg.type === 'card' && (
                         <div className="flex flex-col gap-3">
                            <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-2xl rounded-tl-none shadow-sm text-sm leading-relaxed text-slate-900 dark:text-gray-200 border border-gray-100 dark:border-white/5">
                                {msg.content.text.map((line: string, i: number) => {
                                    const parts = line.split(/(5,000 steps|3 days straight|3,000 today)/g);
                                    return (
                                        <p key={i} className={i > 0 ? "mt-2" : ""}>
                                            {parts.map((part, j) => {
                                                if (part === '5,000 steps' || part === '3 days straight') return <strong key={j} className="text-secondary font-semibold">{part}</strong>;
                                                if (part === '3,000 today') return <strong key={j} className="text-primary font-bold">{part}</strong>;
                                                return part;
                                            })}
                                        </p>
                                    );
                                })}
                                <div className="mt-3 flex items-center gap-1.5 text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                                    <span className="material-symbols-outlined text-xs">insights</span>
                                    Based on Apple Health Data
                                </div>
                            </div>
                            <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-primary/20 rounded-xl p-4 flex flex-col gap-3 shadow-sm">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Suggested Adjustment</span>
                                    <span className="bg-primary/20 text-primary-dark dark:text-primary text-[10px] font-bold px-2 py-0.5 rounded-full">New Goal</span>
                                </div>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-slate-900 dark:text-white">{msg.content.suggestion.amount}</span>
                                    <span className="text-sm font-medium text-gray-500 mb-1.5">{msg.content.suggestion.unit}</span>
                                </div>
                                <div className="grid grid-cols-1 gap-2 mt-1">
                                    <button className="w-full py-3 bg-primary hover:bg-primary-dark transition-colors text-background-dark font-semibold rounded-lg text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]">
                                        <span className="material-symbols-outlined text-sm">check_circle</span>
                                        {msg.content.suggestion.actions[0]}
                                    </button>
                                    <button className="w-full py-3 bg-transparent border border-secondary/30 text-secondary hover:bg-secondary/5 transition-colors font-medium rounded-lg text-sm active:scale-[0.98]">
                                        {msg.content.suggestion.actions[1]}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {msg.sender === 'user' && (
                        <span className="text-[10px] text-gray-400 font-medium mr-1">Read 9:42 AM</span>
                    )}
                </div>
            </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="absolute bottom-24 left-4 right-4 z-20">
        <div className="bg-surface-light dark:bg-surface-dark p-2 rounded-2xl shadow-lg border border-gray-100 dark:border-white/5 flex items-end gap-2">
          <button className="p-2.5 rounded-full bg-gray-100 dark:bg-white/5 text-gray-500 hover:text-primary transition-colors flex-shrink-0">
            <span className="material-symbols-outlined">add</span>
          </button>
          <div className="flex-1 bg-gray-50 dark:bg-white/5 rounded-xl flex items-center px-3 py-2 focus-within:ring-2 focus-within:ring-primary/50 transition-all">
            <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if(e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                    }
                }}
                className="w-full bg-transparent border-none p-0 text-sm focus:ring-0 resize-none max-h-24 text-slate-900 dark:text-gray-200 placeholder-gray-400 font-display" 
                placeholder="Type a message..." 
                rows={1}
            />
          </div>
          <button onClick={handleSendMessage} className="p-2.5 rounded-full bg-primary/20 text-primary-dark dark:text-primary hover:bg-primary hover:text-background-dark transition-all flex-shrink-0">
             {input.trim() ? <span className="material-symbols-outlined">send</span> : <span className="material-symbols-outlined">mic</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;