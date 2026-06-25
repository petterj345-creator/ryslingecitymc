import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE = "rc_admin";

function adminPassword(): string {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) throw new Error("ADMIN_PASSWORD er ikke sat.");
  return pw;
}

/**
 * Session token derived from the admin password. Because the password is a
 * server-only secret, the token cannot be forged by a client.
 */
export function adminToken(): string {
  return createHmac("sha256", adminPassword())
    .update("ryslingecity-admin-v1")
    .digest("hex");
}

export function checkPassword(input: string): boolean {
  const a = Buffer.from(input);
  const b = Buffer.from(adminPassword());
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  const value = store.get(COOKIE)?.value;
  if (!value) return false;
  const expected = adminToken();
  const a = Buffer.from(value);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const ADMIN_COOKIE = COOKIE;
