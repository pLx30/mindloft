import { useState } from "react";
import { sendToGPT } from "../../lib/gpt/sendToGPT";

export default function Habits() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await sendToGPT(input, "habits");
    setResponse(res);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">Mindloft – Habits</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="What habit would you like to work on?"
          className="p-4 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none min-h-[120px]"
        />

        <button
          type="submit"
          className="bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 rounded-xl hover:scale-105 transition-all font-semibold"
        >
          Get Insights
        </button>
      </form>

      {response && (
        <div className="mt-8 bg-white/5 p-6 rounded-xl border border-white/10">
          <h2 className="font-bold text-lg mb-2 text-purple-300">Mindguide Response:</h2>
          <p className="text-white/80 whitespace-pre-line">{response}</p>
        </div>
      )}
    </div>
  );
}
