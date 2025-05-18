// src/pages/Home.tsx
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold text-cyan-400">Mindloft</h1>
        <nav className="flex items-center gap-6">
          <a href="#features" className="hover:text-cyan-400">Features</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
          <Link to="/login" className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500">
            Login
          </Link>
          <Link to="/register" className="ml-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">Register</Link>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center text-center py-32 px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
          Unlock Your Mind with <span className="text-cyan-400">Mindloft</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10">
          Your personal AI space to track habits, goals, thoughts and growth. Organized. Focused. Private.
        </p>
           <>
      <Hero />
      <FeatureSection />
    </>
        <div className="flex gap-4">
          <Link to="/register" className="px-6 py-3 bg-purple-600 rounded text-white hover:bg-purple-500">
            Get Started
          </Link>
          <a href="#features" className="px-6 py-3 border border-gray-600 rounded text-gray-300 hover:text-white hover:border-white">
            Learn More
          </a>
        </div>
      </main>
    </div>
    
  );
}
