import { useState } from "react";
import { sendToGPT } from "../../lib/gpt/sendToGPT";

export default function Health() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await sendToGPT(input, "health");
    setResponse(res);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-400">
        Mindloft 🧠 Health
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          className="bg-gray-800 border border-gray-600 rounded-md p-4"
          placeholder="Wie fühlst du dich körperlich oder mental?"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 rounded-md px-6 py-2 font-semibold"
        >
          Zustand analysieren
        </button>
      </form>

      {response && (
        <div className="mt-8 p-4 bg-gray-900 rounded-md border border-gray-700 whitespace-pre-wrap">
          {response}
        </div>
      )}
    </div>
  );
}
