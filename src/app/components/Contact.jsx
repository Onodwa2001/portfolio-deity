"use client";

import { useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const [result, setResult] = useState();
    const [loading, setLoading] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        const messageObj = { name, email, message };

        fetch('/api/emails', {
            method: 'POST',
            body: JSON.stringify(messageObj)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setResult(data)
            })
            .catch(error => {
                console.log(error)
                setResult(error)
            })
            .finally(() => {
                setLoading(false)
                setTimeout(() => {
                    setResult('');
                }, 8000);
            });
    }

    return (
        <section id="contact" className="py-20 bg-darkGray text-white flex justify-center items-center min-h-screen">
            <div className="relative bg-gray-800 backdrop-blur-lg p-10 rounded-xl shadow-neon border border-neon max-w-lg w-full">
                <h2 className="text-4xl font-extrabold text-center mb-12">
                    Speak thy will
                </h2>

                {/* {loading && <div className="my-4">Processing...</div>} */}
                {result && <div className="my-4 text-center">{result.message}</div>}
                
                {/* Social Media Icons */}
                <div className="justify-center flex space-x-8 mb-10">
                    <a href="https://www.instagram.com/viggo.exe/" target="_blank" rel="noopener noreferrer" className="text-neon hover:text-white transition-transform transform hover:scale-125">
                        <FaInstagram size={30} />
                    </a>
                    <a href="https://github.com/Onodwa2001/" target="_blank" rel="noopener noreferrer" className="text-neon hover:text-white transition-transform transform hover:scale-125">
                        <FaGithub size={30} />
                    </a>
                    <a href="https://www.linkedin.com/in/onodwa-siyotula-biic" target="_blank" rel="noopener noreferrer" className="text-neon hover:text-white transition-transform transform hover:scale-125">
                        <FaLinkedin size={30} />
                    </a>
                </div>
                
                <form className="flex flex-col space-y-6">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-4 rounded-lg bg-transparent border border-neon text-white focus:outline-none focus:ring-2 focus:ring-neon transition-all transform hover:scale-105"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-4 rounded-lg bg-transparent border border-neon text-white focus:outline-none focus:ring-2 focus:ring-neon transition-all transform hover:scale-105"
                    />
                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="p-4 rounded-lg bg-transparent border border-neon text-white focus:outline-none focus:ring-2 focus:ring-neon transition-all transform hover:scale-105"
                        rows="6"
                    />
                    <button
                        onClick={sendEmail}
                        className="p-4 bg-neon text-darkGray font-bold rounded-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-neon focus:ring-opacity-50"
                    >
                        {loading ? 'Processing...' : 'Send'}
                    </button>
                </form>
                <div className="absolute inset-0 pointer-events-none border border-neon rounded-xl opacity-30 animate-pulse"></div>

            </div>

            {/* Floating animation CSS */}
            <style jsx global>{`
                @keyframes text-gradient {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }

                .text-gradient {
                    background: linear-gradient(45deg, #3b82f6, #9333ea, #22d3ee);
                    background-clip: text;
                    color: transparent;
                    animation: text-gradient 3s ease-in-out infinite;
                    background-size: 400% 400%;
                }
                
                .shadow-neon {
                    box-shadow: 0 0 5px #00ffcc, 0 0 15px #00ffcc, 0 0 20px #00ffcc;
                }

                input, textarea {
                    transition: box-shadow 0.3s ease-in-out;
                }

                input:focus, textarea:focus {
                    box-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc;
                }

                .shadow-neon {
                    box-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc;
                }
            `}</style>
        </section>
    );
}
