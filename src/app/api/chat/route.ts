import { answerFromPortfolio, buildSystemPrompt } from "@/lib/assistant";

type ChatMessage = { role: "user" | "assistant"; content: string };

export async function POST(request: Request) {
  let messages: ChatMessage[] = [];
  try {
    const body = (await request.json()) as { messages?: ChatMessage[] };
    messages = Array.isArray(body.messages) ? body.messages.slice(-8) : [];
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const last = messages.filter((message) => message.role === "user").at(-1)?.content?.trim() ?? "";
  if (!last || last.length > 2000) {
    return Response.json({ error: "Ask a question in 2000 characters or fewer." }, { status: 400 });
  }

  const fallback = answerFromPortfolio(last);
  const key = process.env.AI_API_KEY;
  if (!key) return Response.json({ reply: fallback, mode: "demo" });

  const base = (process.env.AI_BASE_URL || "https://api.openai.com/v1").replace(/\/$/, "");
  const model = process.env.AI_MODEL || "gpt-4o-mini";

  try {
    const response = await fetch(`${base}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.3,
        messages: [
          { role: "system", content: buildSystemPrompt() },
          ...messages.map((message) => ({ role: message.role, content: message.content })),
        ],
      }),
    });

    if (!response.ok) {
      return Response.json({ reply: fallback, mode: "demo" });
    }

    const data = (await response.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const reply = data.choices?.[0]?.message?.content?.trim();
    if (!reply) return Response.json({ reply: fallback, mode: "demo" });
    return Response.json({ reply, mode: "live" });
  } catch {
    return Response.json({ reply: fallback, mode: "demo" });
  }
}
