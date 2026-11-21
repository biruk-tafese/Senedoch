export function normalizeEthiopianPhone(raw: string): string | null {
  const cleaned = raw.replace(/[\s()-]/g, "").trim();
  if (/^\+251[79]\d{8}$/.test(cleaned)) {
    return cleaned;
  }
  if (/^251[79]\d{8}$/.test(cleaned)) {
    return `+${cleaned}`;
  }
  if (/^0[79]\d{8}$/.test(cleaned)) {
    return `+251${cleaned.slice(1)}`;
  }
  return null;
}

export function hashPassword(password: string): string {
  let hash = 2166136261;
  for (let i = 0; i < password.length; i += 1) {
    hash ^= password.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return `fnv1a_${(hash >>> 0).toString(16)}`;
}
