export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        Welcome to <span className="text-cyan-400">Mindloft</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
        Your personal space for growth. Track your habits, set goals, manage health, handle finances and reflect. One place, powered by AI.
      </p>

      <div className="flex gap-4">
        <a
          href="/register"
          className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 transition rounded-xl font-medium"
        >
          Get Started
        </a>
        <a
          href="/login"
          className="px-6 py-3 border border-gray-500 hover:border-white transition rounded-xl font-medium"
        >
          Login
        </a>
      </div>
    </main>
  );
}
