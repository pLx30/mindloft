// src/pages/Home.tsx
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import CallToAction from "../components/CallToAction";

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
    <section className="py-20 bg-zinc-950 text-white">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
    So nutzt du Mindloft
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 text-center">
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-md">
      <div className="text-purple-500 text-3xl mb-2">1️⃣</div>
      <h3 className="text-xl font-semibold mb-2">Account erstellen</h3>
      <p className="text-zinc-400">Registriere dich kostenlos und starte direkt mit deinem persönlichen Bereich.</p>
    </div>
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-md">
      <div className="text-purple-500 text-3xl mb-2">2️⃣</div>
      <h3 className="text-xl font-semibold mb-2">Ziele & Bereiche wählen</h3>
      <p className="text-zinc-400">Definiere deine Ziele und aktiviere Module wie Gesundheit, Finanzen oder Reflexion.</p>
    </div>
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-md">
      <div className="text-purple-500 text-3xl mb-2">3️⃣</div>
      <h3 className="text-xl font-semibold mb-2">Täglich nutzen</h3>
      <p className="text-zinc-400">Tracke deine Fortschritte, reflektiere deinen Tag und nutze KI-Feedback.</p>
    </div>
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-md">
      <div className="text-purple-500 text-3xl mb-2">4️⃣</div>
      <h3 className="text-xl font-semibold mb-2">Erfolge analysieren</h3>
      <p className="text-zinc-400">Sieh deine Entwicklung mit visuellen Auswertungen und Berichten.</p>
    </div>
  </div>
</section>
<section className="py-20 bg-black text-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
      Sieh selbst, wie es funktioniert
    </h2>
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Vorschau / Screenshot-Box */}  
      <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border border-zinc-800">
        <div className="bg-zinc-800 text-left p-4">
          <p className="text-zinc-300 text-sm mb-2">Beispiel: Tägliche Reflexion</p>
          <div className="bg-black p-4 rounded-xl h-60 flex flex-col justify-between">
            <p className="text-white text-lg italic mb-4">„Worauf bin ich heute stolz – und warum?“</p>
            <div className="text-zinc-500 text-xs">GPT-Vorschlag: "Du hast heute deinen Fokus gehalten – super Arbeit."</div>
          </div>
        </div>
      </div>

      {/* Beschreibung daneben */}
      <div className="md:w-1/2">
        <h3 className="text-2xl font-semibold mb-4">Tägliche Micro-Sessions</h3>
        <p className="text-zinc-400 mb-4">
          Die Module in Mindloft sind kurz, fokussiert und mit KI-Unterstützung gestaltet. Du bekommst gezielte
          Reflexionsfragen und direktes Feedback, das dich weiterbringt – ohne Zeitverlust.
        </p>
        <p className="text-zinc-400">
          So bleibt dein Kopf frei für das, was wirklich zählt. Jeder Tag bringt Wachstum.
        </p>
      </div>
    </div>
  </div>
</section>
<CallToAction />
    </div>
    
    
  );
}
