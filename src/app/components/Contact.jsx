export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-darkGray text-white flex justify-center">
            <div className="bg-opacity-30 bg-white backdrop-blur-lg p-10 rounded-lg shadow-neon">
                <h2 className="text-5xl font-bold text-center mb-10">Contact Me</h2>
                <form className="flex flex-col space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="p-4 rounded-lg bg-transparent border border-neon text-white"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-4 rounded-lg bg-transparent border border-neon text-white"
                    />
                    <textarea
                        placeholder="Message"
                        className="p-4 rounded-lg bg-transparent border border-neon text-white"
                    />
                    <button
                        type="submit"
                        className="p-4 bg-neon text-darkGray font-bold rounded-lg hover:bg-deepBlue transition-colors"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
}
