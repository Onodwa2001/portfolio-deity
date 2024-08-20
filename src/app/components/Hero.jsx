import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white relative"
      style={{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1705861144413-f02e38354648?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D), linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
      }}
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-neon glow-neon animate-pulse">
        Congratulations 🎉🎊
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 mb-8 max-w-xl md:max-w-2xl mx-auto opacity-80 animate-fadeIn px-4 sm:px-0">
        Thou hast arrived at the realm of the Codex Citadel 🏰. Explore! The deity of digitization awaiteth thee.
      </p>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
        <Link href="#projects">
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-neon text-black font-bold rounded-lg transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-neon">
            Survey the Divine Artifacts
          </button>
        </Link>
        <Link href="#contact">
          <button className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-neon text-neon font-bold rounded-lg transform hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-neon">
            Seek the Divine Counsel
          </button>
        </Link>
      </div>
    </section>
  );
}
