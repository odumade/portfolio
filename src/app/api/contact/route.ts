export async function POST(request: Request) {
  let body: { name?: string; email?: string; subject?: string; message?: string; website?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (body.website) return Response.json({ ok: true, mode: "demo" });

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !subject || message.length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false, error: "Check the form and try again." }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return Response.json({ ok: true, mode: "demo" });

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, subject, message }),
    });
    if (!response.ok) {
      return Response.json({ ok: false, error: "The message could not be delivered." }, { status: 502 });
    }
    return Response.json({ ok: true, mode: "live" });
  } catch {
    return Response.json({ ok: false, error: "The message could not be delivered." }, { status: 502 });
  }
}
