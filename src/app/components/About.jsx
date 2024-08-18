"use client";

import { useEffect, useState } from 'react';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Set isClient to true after the component has mounted
        setIsClient(true);

        const handleScroll = () => {
            const element = document.getElementById('about');
            const rect = element.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="about" className="relative py-20 bg-darkGray text-white overflow-hidden h-min-[100vh]">
            {/* Right Curtain */}
            {isClient && (
                <div
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(20, 1fr)', border: 'solid #00FFFF 2px', gridTemplateRows: 'repeat(20, 1fr)', position: 'absolute', width: '50%', marginLeft: '50%', height: '100%', zIndex: 1 }}
                    className={`absolute h-full inset-0 ${isVisible ? 'transition-transform duration-[3000ms] ease-in-out' : 'transition-none'} ${isVisible ? 'transform translate-x-full' : 'transform -translate-x-0'}`}
                >
                    {Array.from({ length: 400 }).map((_, i) => (
                        <div key={i} className="w-full h-full bg-black text-neon flex items-center justify-center font-mono">
                            {Math.random() > 0.5 ? '1' : '0'}
                        </div>
                    ))}
                </div>
            )}

            {/* Left Curtain */}
            {isClient && (
                <div
                    style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(20, 1fr)', 
                        border: 'solid #00FFFF 2px',
                        gridTemplateRows: 'repeat(20, 1fr)', 
                        position: 'absolute', 
                        width: '50%', 
                        height: '100%', 
                        zIndex: 1 
                    }}
                    className={`absolute h-full inset-0 ${isVisible ? 'transition-transform duration-[3000ms] ease-in-out' : 'transition-none'} ${isVisible ? 'transform -translate-x-full' : 'transform translate-x-0'}`}
                >
                    {Array.from({ length: 400 }).map((_, i) => (
                        <div key={i} className="w-full h-full bg-black text-neon flex items-center justify-center font-mono">
                            {Math.random() > 0.5 ? '1' : '0'}
                        </div>
                    ))}
                </div>
            )}

            {/* Actual content */}
            <div className={`relative ${isVisible ? 'opacity-100 transition-opacity duration-1000 ease-in-out' : 'opacity-0'}`}>
                <h2 className="text-6xl font-extrabold text-center mb-12 text-neon">About Lord Onodwa Siyotula</h2>
                <p className="ml-[20%] mr-[20%] text-center"></p>
                <CodeStyledObject />
                <div className="flex flex-wrap justify-center gap-8 mt-[50px]">
                    <div className="w-full max-w-sm p-8 bg-gradient-to-r from-blue-800 to-purple-900 border border-transparent rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
                        <h3 className="text-4xl font-semibold mb-4 text-neon">Experience</h3>
                        <p className="text-lg">A year of coding experience with a passion for building complex applications. Always pushing the boundaries of innovation.</p>
                    </div>
                    
                    <div className="w-full max-w-sm p-8 bg-gradient-to-r from-blue-800 to-purple-900 border border-transparent rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-2xl">
                        <h3 className="text-4xl font-semibold mb-4 text-neon">Skills</h3>
                        <p className="text-lg">Proficient in JavaScript, Typescript, React, Next.js, Tailwind CSS, NodeJS, ExpressJS, Java, Spring Boot, MySQL, PostgresQL, and Docker. Creating visually stunning and performant applications with well organized APIs and a managed CI/CD pipeline.</p>
                    </div>
                </div>
            </div>

            {/* Floating animation CSS */}
            <style jsx global>{`
                @keyframes text-gradient {
                    0% { background-position: 0% 0%; }
                    50% { background-position: 100% 0%; }
                    100% { background-position: 0% 0%; }
                }

                .text-gradient {
                    background: linear-gradient(45deg, #3b82f6, #9333ea, #22d3ee);
                    background-clip: text;
                    color: transparent;
                    animation: text-gradient 3s ease-in-out infinite;
                    background-size: 400% 400%;
                }
            `}</style>
        </section>
    );
}

const CodeStyledObject = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white font-mono text-sm ml-[30%] mr-[30%]">
      <pre>
        <span className="text-green-400">const</span> deity = {'{'}

        <br />
        <span className="ml-5 text-cyan-400">name</span>: <span className="text-yellow-200">"Onodwa Siyotula"</span>,
        <br />
        <span className="ml-5 text-cyan-400">education</span>: <span className="text-yellow-200">"Diploma in ICT: Applications Development"</span>,
        <br />
        <span className="ml-5 text-cyan-400">availableForHire</span>: <span className="text-yellow-200">true</span>
        <br />
        {'}'}
      </pre>
    </div>
  );
};
