import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Send } from 'lucide-react';

// Replace this URL with your actual hosted image path
const FEMALE_AVATAR = "https://stories.telesky.co.ke/wp-content/uploads/2024/07/Avatar.png";
const USER_AVATAR = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100";

interface Choice {
  label: string;
  nextStep: string;
}

interface ChatNode {
  message: string;
  choices?: Choice[];
}

const CHAT_FLOW: Record<string, ChatNode> = {
  start: {
    message: "Hello! I'm Shrishti, your Medical Assistant. How can I help you today?",
    choices: [
    //   { label: "Symptom Checker", nextStep: "symptoms" },
      { label: "Book Appointment", nextStep: "booking" },
    //   { label: "General Inquiry", nextStep: "inquiry" },
    ],
  },
  symptoms: {
    message: "I understand. To better assist, are you experiencing any chest pain or shortness of breath?",
    choices: [
      { label: "Yes, it's urgent", nextStep: "emergency" },
      { label: "No, just mild symptoms", nextStep: "mild_symptoms" },
    ],
  },
  emergency: {
    message: "⚠️ Please stop this chat and call emergency services (911) or go to the nearest ER immediately.",
  },
  booking: {
    message: "Which department would you like to visit?",
    choices: [
      { label: "Eye Care", nextStep: "confirm" },
      { label: "Women Care", nextStep: "confirm" },
      { label: "Pediatric Care", nextStep: "confirm" },
      { label: "Cosmo Gynae", nextStep: "confirm" },
      { label: "IVF", nextStep: "confirm" },
    ],
  },
  confirm: {
    message: "Great choice. Our team will reach out to your registered number within 30 minutes to confirm.",
    choices: [{ label: "Back to Start", nextStep: "start" }],
  },
};

const MedicalChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<{ sender: 'bot' | 'user'; text: string }[]>([
    { sender: 'bot', text: CHAT_FLOW.start.message },
  ]);
  const [currentNode, setCurrentNode] = useState<string>('start');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleChoice = (choice: Choice) => {
    setHistory((prev) => [...prev, { sender: 'user', text: choice.label }]);
    
    setTimeout(() => {
      const nextNode = CHAT_FLOW[choice.nextStep];
      setHistory((prev) => [...prev, { sender: 'bot', text: nextNode.message }]);
      setCurrentNode(choice.nextStep);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Launcher Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[url(https://stories.telesky.co.ke/wp-content/uploads/2024/07/Avatar.png)] bg-cover bg-no-repeat text-white p-8 rounded-full shadow-2xl transition-transform hover:scale-110"
      >
        {isOpen ? <X size={28} className='p-4'  /> :  <></>}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] md:w-[400px] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col border border-slate-100 animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="bg-blue-600 p-5 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img src={FEMALE_AVATAR} alt="Assistant" className="w-12 h-12 rounded-full border-2 border-white/30 object-cover" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-600 rounded-full"></span>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Shrishti AI</h3>
                <p className="text-xs text-blue-100 flex items-center gap-1">
                  Online • Shrishti is here to help
                </p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full">
              <X size={20} />
            </button>
          </div>

          {/* Chat History */}
          <div className="h-[380px] overflow-y-auto p-4 bg-slate-50 flex flex-col gap-4">
            {history.map((msg, i) => (
              <div key={i} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Small Avatars in Chat */}
                <img 
                  src={msg.sender === 'bot' ? FEMALE_AVATAR : USER_AVATAR} 
                  className="w-7 h-7 rounded-full object-cover shadow-sm mb-1" 
                  alt="avatar"
                />
                <div className={`max-w-[75%] px-4 py-2.5 rounded-2xl text-[13.5px] leading-relaxed shadow-sm ${
                  msg.sender === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={scrollRef} />
          </div>

          {/* Quick Reply Choices */}
          <div className="p-4 bg-white border-t border-slate-100">
            {CHAT_FLOW[currentNode]?.choices ? (
              <div className="flex flex-wrap gap-2 mb-2">
                {CHAT_FLOW[currentNode].choices?.map((choice) => (
                  <button
                    key={choice.label}
                    onClick={() => handleChoice(choice)}
                    className="text-xs font-semibold py-2.5 px-4 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                  >
                    {choice.label}
                  </button>
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <input 
                  disabled 
                  placeholder="Chat ended. Refresh to restart." 
                  className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-xs italic text-slate-400 outline-none"
                />
              </div>
            )}
            
            {/* Branding Footer */}
            <div className="mt-4 flex justify-center border-t border-slate-50 pt-2">
              <span className="text-[10px] text-slate-300 uppercase tracking-widest font-bold">Secure Medical Portal</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicalChatbot;