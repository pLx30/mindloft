// src/pages/Home.tsx
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800 flex justify-between items-center p-4">
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
    <>
      <Hero />
      <FeatureSection />
    </>
    </div>
    
  );
}
