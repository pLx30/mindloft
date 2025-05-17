export async function sendToGPT(input: string, topic: string): Promise<string> {
  const systemPrompt = `You are a helpful AI coach for the topic '${topic}'. Respond with concise, useful, motivational advice.`;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: input },
      ],
    }),
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content || "No response.";
}
