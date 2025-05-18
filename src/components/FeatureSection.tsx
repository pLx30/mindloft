import { LucideTarget, LucideRepeat, LucideTrendingUp } from "lucide-react";

const features = [
  {
    icon: <LucideTarget className="w-8 h-8 text-purple-500" />,
    title: "Ziele setzen & erreichen",
    description: "Definiere messbare Ziele und verfolge deine Fortschritte – jeden Tag.",
  },
  {
    icon: <LucideRepeat className="w-8 h-8 text-purple-500" />,
    title: "Tägliche Reflexion",
    description: "Lerne durch gezielte Selbstreflexion, was dich antreibt und bremst.",
  },
  {
    icon: <LucideTrendingUp className="w-8 h-8 text-purple-500" />,
    title: "Kognitive Entwicklung",
    description: "Verstehe deine Entwicklung durch AI-gestützte Auswertungen.",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Was Mindloft für dich tut
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-zinc-900 rounded-2xl p-6 shadow-md hover:shadow-purple-500/20 transition">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
