import { useState, useEffect } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "27000000000"; // Replace with your WhatsApp number (no + or spaces)
const MESSAGE = "Hi, I have a question about Ruby.";

const WhatsAppButton = () => {
  const [showGreeting, setShowGreeting] = useState(false);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  useEffect(() => {
    const timer = setTimeout(() => setShowGreeting(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {showGreeting && (
        <div className="relative bg-white border border-border shadow-xl rounded-2xl p-4 mb-1 max-w-[200px] animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button 
            onClick={() => setShowGreeting(false)}
            className="absolute -top-2 -right-2 bg-background border border-border rounded-full p-1 shadow-sm hover:bg-muted transition-colors"
          >
            <X className="w-3 h-3 text-muted-foreground" />
          </button>
          <p className="text-sm font-medium text-foreground leading-snug">
            Hi! How can we help you?
          </p>
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-white border-r border-b border-border rotate-45" />
        </div>
      )}
      
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        onClick={() => setShowGreeting(false)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 group"
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
          <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.129 6.744 3.047 9.383L1.054 31.2l6.012-1.93a15.9 15.9 0 008.938 2.734C24.824 32 32 24.824 32 16.004 32 7.176 24.824 0 16.004 0zm9.32 22.608c-.39 1.1-2.272 2.04-3.137 2.112-.864.072-1.664.388-5.608-1.168-4.74-1.872-7.724-6.744-7.956-7.056-.232-.312-1.896-2.52-1.896-4.808s1.2-3.412 1.624-3.876c.424-.464.928-.58 1.236-.58.308 0 .616.004.884.016.284.012.664-.108.94.716.308.892 1.044 3.06 1.136 3.28.092.22.152.476.032.768-.12.292-.18.476-.356.732-.176.256-.372.572-.532.768-.176.212-.36.444-.156.868.204.424.912 1.684 1.96 2.728 1.348 1.344 2.484 1.76 2.836 1.956.352.196.556.164.76-.1.204-.264.876-1.02 1.108-1.372.232-.352.464-.292.784-.176.32.116 2.032.96 2.38 1.132.348.176.58.264.664.408.088.144.088.836-.3 1.64z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
