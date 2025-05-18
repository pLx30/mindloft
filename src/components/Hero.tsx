export default function Hero() {
  return (
    <section className="h-[90vh] bg-black text-white flex items-center justify-center text-center px-4">
      <div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Unlock Your Mind with <span className="text-cyan-400">Mindloft</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto mb-8">
          Your personal AI space to track habits, goals, thoughts and growth. Organized. Focused. Private.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/register" className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-xl text-white font-medium">
            Get Started
          </a>
          <a href="#features" className="border border-zinc-600 px-6 py-3 rounded-xl text-white font-medium">
            Learn More
          </a>
        </div>
      </div>
    </section>
    
  );
}
