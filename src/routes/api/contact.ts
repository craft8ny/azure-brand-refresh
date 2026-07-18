import { createFileRoute } from "@tanstack/react-router";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

export const Route = createFileRoute("/api/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
          return Response.json(
            { ok: false, error: "Email service not configured." },
            { status: 500 },
          );
        }

        let body: ContactPayload;
        try {
          body = (await request.json()) as ContactPayload;
        } catch {
          return Response.json(
            { ok: false, error: "Invalid request body." },
            { status: 400 },
          );
        }

        const name = (body.name ?? "").trim();
        const email = (body.email ?? "").trim();
        const company = (body.company ?? "").trim();
        const message = (body.message ?? "").trim();

        if (!name || !email || !message) {
          return Response.json(
            { ok: false, error: "Missing required fields." },
            { status: 400 },
          );
        }
        if (name.length > 200 || email.length > 200 || company.length > 200 || message.length > 5000) {
          return Response.json(
            { ok: false, error: "Input too long." },
            { status: 400 },
          );
        }

        const escape = (s: string) =>
          s
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        const subject = `New enquiry from ${name}${company ? ` (${company})` : ""}`;
        const html = `
          <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.5;">
            <h2 style="margin:0 0 16px;">New website enquiry</h2>
            <p><strong>Name:</strong> ${escape(name)}</p>
            <p><strong>Email:</strong> ${escape(email)}</p>
            ${company ? `<p><strong>Company:</strong> ${escape(company)}</p>` : ""}
            <p><strong>Project details:</strong></p>
            <p style="white-space: pre-wrap;">${escape(message)}</p>
          </div>
        `;
        const text = [
          `Name: ${name}`,
          `Email: ${email}`,
          company ? `Company: ${company}` : null,
          "",
          "Project details:",
          message,
        ]
          .filter(Boolean)
          .join("\n");

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: "VTS Universe Website <onboarding@resend.dev>",
            to: ["firasfaiqshajoeril@gmail.com"],
            reply_to: email,
            subject,
            html,
            text,
          }),
        });

        if (!resendRes.ok) {
          const errText = await resendRes.text();
          console.error("Resend send failed", resendRes.status, errText);
          return Response.json(
            { ok: false, error: "Failed to send message. Please email us directly." },
            { status: 502 },
          );
        }

        return Response.json({ ok: true });
      },
    },
  },
});