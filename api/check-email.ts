type Req = { method?: string; body?: unknown };
type Res = {
  setHeader: (k: string, v: string) => void;
  status: (code: number) => Res;
  json: (body: unknown) => void;
};

const BAD_STATUSES = new Set([
  "dirty",
  "invalid",
  "undeliverable",
  "bounce",
  "spamtrap",
  "do_not_mail",
]);

export default async function handler(req: Req, res: Res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ ok: true, message: "Method not allowed" });
    return;
  }

  const apiKey = process.env.LISTCLEAN_API_KEY;
  if (!apiKey) {
    res.status(200).json({ ok: true, skipped: "not_configured" });
    return;
  }

  const body = (typeof req.body === "string" ? safeParse(req.body) : req.body) as
    | { email?: string }
    | null;
  const email = (body?.email ?? "").toString().trim();
  if (!email) {
    res.status(400).json({ ok: false, message: "Email is required." });
    return;
  }

  try {
    const upstream = await fetch(
      `https://api.listclean.xyz/v1/verify/email/${encodeURIComponent(email)}`,
      { headers: { "X-Auth-Token": apiKey } }
    );
    const data = (await upstream.json().catch(() => ({}))) as {
      status?: string;
      remarks?: string;
      message?: string;
    };

    if (!upstream.ok) {
      res.status(200).json({ ok: true, skipped: "upstream_error" });
      return;
    }

    const status = (data.status ?? "").toString().toLowerCase();
    const ok = !BAD_STATUSES.has(status);
    res.status(200).json({
      ok,
      status,
      message: ok ? undefined : data.remarks || "That email looks undeliverable.",
    });
  } catch {
    res.status(200).json({ ok: true, skipped: "request_failed" });
  }
}

function safeParse(s: string): unknown {
  try {
    return JSON.parse(s);
  } catch {
    return null;
  }
}
