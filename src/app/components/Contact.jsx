"use client"

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-darkGray text-white flex justify-center items-center min-h-screen">
            <div className="relative bg-opacity-30 bg-white backdrop-blur-lg p-10 rounded-xl shadow-neon border border-neon max-w-lg w-full">
                <h2 className="text-6xl font-extrabold text-center mb-12 text-gradient">Contact Me</h2>
                <form className="flex flex-col space-y-6">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-4 rounded-lg bg-transparent border border-neon text-white focus:outline-none focus:ring-2 focus:ring-neon transition-all"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-4 rounded-lg bg-transparent border border-neon text-white focus:outline-none focus:ring-2 focus:ring-neon transition-all"
                    />
                    <textarea
                        placeholder="Message"
                        className="p-4 rounded-lg bg-transparent border border-neon text-white focus:outline-none focus:ring-2 focus:ring-neon transition-all"
                        rows="6"
                    />
                    <button
                        type="submit"
                        className="p-4 bg-neon text-darkGray font-bold rounded-lg hover:bg-deepBlue transition-colors transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-neon focus:ring-opacity-50"
                    >
                        Send
                    </button>
                </form>
                <div className="absolute inset-0 pointer-events-none border border-neon rounded-xl opacity-30 animate-pulse"></div>
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
                
                .shadow-neon {
                    box-shadow: 0 0 5px #00ffcc, 0 0 15px #00ffcc, 0 0 20px #00ffcc;
                }
            `}</style>
        </section>
    );
}
