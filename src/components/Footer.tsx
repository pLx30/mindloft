// src/components/Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-10 mt-20 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-xl font-semibold mb-2">Mindloft</h3>
          <p className="text-sm text-zinc-500">Dein Raum für reflektiertes Wachstum. KI-gestützt. Privat. Klar.</p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">Rechtliches</h4>
          <ul className="text-sm space-y-1">
            <li>
              <Link to="/impressum" className="hover:underline">Impressum</Link>
            </li>
            <li>
              <Link to="/datenschutz" className="hover:underline">Datenschutz</Link>
            </li>
            <li>
              <Link to="/agb" className="hover:underline">AGB</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-2">Kontakt</h4>
          <ul className="text-sm space-y-1">
            <li><a href="mailto:kontakt@mindloft.io" className="hover:underline">kontakt@mindloft.io</a></li>
            <li className="text-zinc-500">Händlerbund Mitglied</li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xs text-zinc-600 mt-10">
        &copy; {new Date().getFullYear()} Mindloft. Alle Rechte vorbehalten.
      </p>
    </footer>
  );
}
