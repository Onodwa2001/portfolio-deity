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
            answer: `I recently graduated with a Diploma in ICT in Applications Development from CPUT in April 2024, where I excelled academically, earning 16 distinctions and being invited to join the Golden Key Association. During my time at university, I gained a solid foundation in Java and Spring Boot.
                    Professionally, I spent 6 months as a Software Engineer intern at LexisNexis, where I honed my skills in debugging, writing unit tests, and maintaining software, along with implementing user analytics tracking. This experience gave me a real-world understanding of software development and the importance of clean, maintainable code.
                    Currently, I'm working at BIIC, where I've had the opportunity to collaborate with a team to build an app for the faculty of business at CPUT. In addition to development, I've also taken on leadership roles, conducting interviews, mentoring interns, and guiding them in innovative projects.
                    In my spare time, I built Phoenix Tutorium, a tutor finder web application that allows users to connect with tutors and chat directly on the platform. This project reflects my passion for creating solutions that make a difference`
        },
        {
            id: 2,
            question: 'What are your strengths?',
            answer: 'I enjoy doing things that others do not want to do 💪'
        },
        {
            id: 3,
            question: 'What are your weaknesses?',
            answer: 'My hearing is a little bad 😅'
        },
        {
            id: 4,
            question: 'What are your skills?',
            answer: 'I know both frontend 🌍, backend 🛜, databases 🏬 and REST APIs ✈️. I am proficient in JavaScript, TypeScript, and Java. I am familiar with C# and PHP. \nMy tech stack for small projects is React, NodeJS and Express, MongoDB.\nMy choice for bigger projects is NextJS or Angular and Spring Boot or ASP.NET'
        },
        {
            id: 5,
            question: 'I would like to hire you',
            answer: 'If you scroll to the bottom of the page ⬇️⬇️⬇️, you will find all my social media. You can also leave a message ✉️ on the contact form and I will get in touch with you as soon as possible ✨.'
        }
    ];

    const messagesEndRef = useRef(null);

    const toggleChatbot = () => {
        setIsOpen(prevState => !prevState);
    };

    const handleQuestionChoice = (id) => {
        const question = options.find(op => op.id === id);
        setSelected(prevQuestions => [...prevQuestions, question]);
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
                className={`fixed bottom-4 right-4 w-full max-w-lg bg-gray-800 ${isOpen ? '' : 'hidden'} text-white rounded-lg shadow-lg transition-transform transform translate-y-0 opacity-100 animate-float`}
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
                            <p>Thou hast summoned the divine presence.</p>
                        </div>
                        <div className="bg-gray-700 p-2 rounded-lg mr-14">
                            <p>Speak thy will, and I shall bestow upon thee my wisdom and favor.</p>
                        </div>

                        {selected.map((chosenQuestion, index) => (
                            <div key={index}>
                                <div className="bg-gray-600 p-2 rounded-lg ml-14">
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
                        <button
                            key={option.id}
                            className="border p-2 m-2 text-xs bg-gray-800 border-neon rounded-lg text-neon hover:bg-gray-700 hover:border-white transition-transform transform hover:scale-105"
                            onClick={() => handleQuestionChoice(option.id)}
                        >
                            {option.question}
                        </button>
                    ))}
                    <button
                        style={{ position: 'absolute', right: 20, bottom: 20 }}
                        className="text-xs text-neon hover:text-white transition-transform transform hover:scale-110"
                    >
                        Show other questions
                    </button>
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
