"use client"
import { useEffect, useState } from 'react';
import { ChatAltIcon, XIcon } from '@heroicons/react/outline';

export default function ChatbotPopup() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => {
        console.log('Hi')
        setIsOpen(prevState => !prevState);
    };

    return (
        <div style={{ position: 'absolute', zIndex: 2 }}>
            {/* Chatbot Icon */}
            <button
                onClick={toggleChatbot}
                className={`fixed bottom-4 right-4 bg-neon ${isOpen ? 'hidden' : ''} p-3 rounded-full shadow-lg transition-transform transform translate-y-12 hover:scale-110 animate-float`}
            >
                <ChatAltIcon className="w-8 h-8 text-white" />
            </button>

            {/* Chatbot Popup */}
            <div
                className={`fixed bottom-4 right-4 w-80 max-w-full bg-gray-800 ${isOpen ? '' : 'hidden'} text-white rounded-lg shadow-lg transition-transform transform translate-y-0 opacity-100 animate-float`}
            >
                <div className="flex items-center justify-between p-4 border-b border-gray-700">
                    <h2 className="text-xl font-semibold">Onodwa Siyotula</h2>
                    <button
                        onClick={toggleChatbot}
                        className="p-2 rounded-full hover:bg-gray-700"
                    >
                        <XIcon className="w-6 h-6 text-white" />
                    </button>
                </div>
                <div className="p-4 overflow-y-auto h-60">
                    {/* Chat messages go here */}
                    <div className="space-y-4">
                        <div className="bg-gray-700 p-2 rounded-lg">
                            <p>Thou hast summoned the divine presence. </p>
                        </div>
                        <div className="bg-gray-700 p-2 rounded-lg">
                            <p>Speak thy will, and I shall bestow upon thee my wisdom and favor.</p>
                        </div>
                        <div className="bg-gray-600 p-2 rounded-lg text-right">
                            <p>I have a question about your portfolio.</p>
                        </div>
                    </div>
                </div>
                <div className="p-4 border-t border-gray-700">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        className="w-full p-2 bg-gray-900 rounded-lg text-white placeholder-gray-500"
                    />
                </div>
            </div>

            {/* Floating animation CSS */}
            <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
