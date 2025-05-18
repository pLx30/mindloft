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
      <section className="py-20 bg-zinc-950 text-white">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
    So nutzt du Mindloft
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4 text-center">
    
    {/* Schritt 1 */}
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-md">
      <div className="text-purple-500 text-3xl mb-2">1️⃣</div>
      <h3 className="text-xl font-semibold mb-2">Account erstellen</h3>
      <p className="text-zinc-400">Registriere dich kostenlos und starte direkt mit deinem persönlichen Bereich.</p>
    </div>

    {/* Schritt 2 */}
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-md">
      <div className="text-purple-500 text-3xl mb-2">2️⃣</div>
      <h3 className="text-xl font-semibold mb-2">Ziele & Bereiche wählen</h3>
      <p className="text-zinc-400">Definiere deine Ziele und aktiviere Module wie Gesundheit, Finanzen oder Reflexion.</p>
    </div>

    {/* Schritt 3 */}
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-md">
      <div className="text-purple-500 text-3xl mb-2">3️⃣</div>
      <h3 className="text-xl font-semibold mb-2">Täglich nutzen</h3>
      <p className="text-zinc-400">Tracke deine Fortschritte, reflektiere deinen Tag und nutze KI-Feedback.</p>
    </div>

    {/* Schritt 4 */}
    <div className="bg-zinc-900 p-6 rounded-2xl shadow-md">
      <div className="text-purple-500 text-3xl mb-2">4️⃣</div>
      <h3 className="text-xl font-semibold mb-2">Erfolge analysieren</h3>
      <p className="text-zinc-400">Sieh deine Entwicklung mit visuellen Auswertungen und Berichten.</p>
    </div>
  </div>
</section>
    </section>
    
  );
}
