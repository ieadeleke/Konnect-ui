const BASE_URL =
  (import.meta.env as Record<string, string | undefined>).VITE_API_BASE_URL ??
  "https://prod-api.konnectbd.com/api/v1";

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
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

  const data = body as { status?: string; message?: string } | null;
  if (!res.ok || data?.status === "error") {
    throw new ApiError(data?.message || `Request failed (${res.status})`, res.status);
  }
  return body as T;
}

export type ReferralDetails = {
  is_sl?: boolean;
  name?: string;
  [key: string]: unknown;
};

export async function validateReferralCode(code: string): Promise<ReferralDetails> {
  const res = await request<{ data: ReferralDetails }>(
    `/auth/validate_referal_code/${encodeURIComponent(code)}`
  );
  return res.data;
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
  return request(`/auth/sign-up/user`, {
    method: "POST",
    body: JSON.stringify({
      lga: "",
      state: "",
      first_name: input.first_name,
      last_name: input.last_name,
      email: input.email,
      password: input.password,
      confirm_password: input.password,
      referral_code: input.referral_code,
      image: "",
      home_address: "",
      phone_code: input.phone_code,
      phone_number: input.phone_number,
      role_id: 1,
      is_ra: false,
      app: "web",
      is_so: false,
    }),
  });
}
