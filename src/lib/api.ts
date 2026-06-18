// Hardcoded for testing — ignore env so the live build always hits the new backend.
const BASE_URL = "https://new-backend-production.apps.konnectbd.com/api/v1";

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

function messageFrom(body: unknown, status: number): string {
  const message = (body as { message?: unknown })?.message;
  if (Array.isArray(message)) return message.join(", ");
  if (typeof message === "string" && message) return message;
  return `Request failed (${status})`;
}

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  let body: unknown = null;
  try {
    body = await res.json();
  } catch {
    body = null;
  }

  if (!res.ok) {
    throw new ApiError(messageFrom(body, res.status), res.status);
  }
  return body as T;
}

// TEMPORARY: exposed in the client bundle. Move this to the backend and rotate the key.
const LISTCLEAN_API_KEY = "Mzk4NmI2ZWI1NC0xNzgxODEyOTMw";

const BAD_EMAIL_STATUSES = new Set([
  "dirty",
  "invalid",
  "undeliverable",
  "bounce",
  "spamtrap",
  "do_not_mail",
]);

export type EmailCheck = { ok: boolean; status?: string; message?: string };

export async function checkEmail(email: string): Promise<EmailCheck> {
  if (!LISTCLEAN_API_KEY) return { ok: true };
  try {
    const res = await fetch(
      `https://api.listclean.xyz/v1/verify/email/${encodeURIComponent(email)}`,
      { headers: { "X-Auth-Token": LISTCLEAN_API_KEY } }
    );
    if (!res.ok) return { ok: true };
    const body = (await res.json()) as { data?: { status?: string; remarks?: string } };
    const status = (body?.data?.status ?? "").toString().toLowerCase();
    const ok = !BAD_EMAIL_STATUSES.has(status);
    return {
      ok,
      status,
      message: ok ? undefined : body?.data?.remarks || "That email looks undeliverable.",
    };
  } catch {
    return { ok: true };
  }
}

export type SignUpInput = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone_code: string;
  phone_number: string;
  referral_code: string | null;
};

export async function signUpUser(input: SignUpInput) {
  const payload: Record<string, unknown> = {
    firstName: input.first_name,
    lastName: input.last_name,
    email: input.email,
    password: input.password,
    app: "web",
    phoneNumber: input.phone_number,
    phoneCode: input.phone_code,
  };
  if (input.referral_code) {
    payload.referralCode = input.referral_code;
  }
  return request(`/auth/register`, {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
