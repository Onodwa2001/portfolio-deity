"use client"
import { useEffect, useState, useRef } from 'react';
import { ChatAltIcon, XIcon } from '@heroicons/react/outline';

export default function ChatbotPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState([]);

    const options = [
        {
            id: 1,
            question: 'Tell me about yourself',
            answer: 'Dope guy'
        },
        {
            id: 2,
            question: 'What are your strengths?',
            answer: 'I do hard stuff'
        },
        {
            id: 3,
            question: 'What are your weaknesses?',
            answer: 'I get bored by routine'
        },
        {
            id: 4,
            question: 'What are your skills?',
            answer: 'Java and stuff'
        },
        {
            id: 5,
            question: 'I would like to hire you',
            answer: 'Okay'
        }
    ]

    const messagesEndRef = useRef(null);

    const toggleChatbot = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleQuestionChoice = (id) => {
        const question = options.find(op => op.id === id);
        setSelected(prevQuestions => [...prevQuestions, question]);
    }

    const renderResponse = () => {
        
    }

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [selected]);

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
                className={`fixed bottom-4 right-4 w-[400px] max-w-full bg-gray-800 ${isOpen ? '' : 'hidden'} text-white rounded-lg shadow-lg transition-transform transform translate-y-0 opacity-100 animate-float`}
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
                        <div className="bg-gray-700 p-2 rounded-lg mr-14">
                            <p>Thou hast summoned the divine presence. </p>
                        </div>
                        <div className="bg-gray-700 p-2 rounded-lg mr-14">
                            <p>Speak thy will, and I shall bestow upon thee my wisdom and favor.</p>
                        </div>

                        {selected.map((chosenQuestion, index) => (
                            <div key={index}>
                                <div className="bg-gray-600 p-2 rounded-lg text-right ml-14">
                                    <p>{chosenQuestion.question}</p>
                                </div>
                                <div className="bg-gray-700 p-2 rounded-lg mr-14 mt-[18px]">
                                    <p>{chosenQuestion.answer}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef}></div>
                    </div>
                </div>
                <div className="p-4 border-t border-gray-700" style={{ position: 'relative' }}>
                    {options.map(option => (
                        <button key={option.id} className='border p-2 m-2 text-xs' style={{ borderRadius: 8 }} onClick={() => handleQuestionChoice(option.id)}>{option.question}</button>
                    ))}
                    <button style={{ position: 'absolute', right: 20, bottom: 20 }} className='text-xs text-neon'>Show other questions</button>
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
