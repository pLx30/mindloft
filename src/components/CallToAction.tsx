// src/components/CallToActionBar.tsx
import { Link } from "react-router-dom";

export default function CallToActionBar() {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-blue-500 text-white py-12 px-6 mt-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Bereit, dein Mindset zu transformieren?
        </h2>
        <p className="mb-6 text-lg sm:text-xl">
          Starte jetzt kostenlos mit Mindloft und entdecke deine stärkste Version.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/register"
            className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Jetzt starten
          </Link>
          <Link
            to="/login"
            className="border border-white px-6 py-3 rounded-md font-semibold text-white hover:bg-white hover:text-black transition"
          >
            Ich habe bereits ein Konto
          </Link>
        </div>
      </div>
    </section>
  );
}
