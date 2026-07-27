import { isValidEmail } from "@/utils/email";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_NEWSLETTER_LIST_ID;

  if (!apiKey || !listId) {
    console.error("Variables d'environnement Brevo manquantes");
    return NextResponse.json({ error: "Configuration serveur incomplète" }, { status: 500 });
  }

  const { email } = await request.json();

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email invalide" }, { status: 400 });
  }

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      listIds: [Number(listId)],
      updateEnabled: true,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: "Échec de l'inscription" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
