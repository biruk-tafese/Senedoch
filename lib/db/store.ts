import {
  CategoryId,
  DocumentCategory,
  DocumentTemplate,
  SEED_CATEGORIES,
  SEED_TEMPLATES,
} from "@/data/seed-templates";
import { hashPassword, normalizeEthiopianPhone } from "@/lib/auth/phone";

export interface UserRecord {
  id: string;
  fullName: string;
  phoneNumber: string;
  passwordHash: string;
  role: "user" | "admin";
  createdAt: string;
}

export interface SafeUser {
  id: string;
  fullName: string;
  phoneNumber: string;
  role: "user" | "admin";
  createdAt: string;
}

interface SenedochStore {
  users: UserRecord[];
  categories: DocumentCategory[];
  templates: DocumentTemplate[];
}

const STORAGE_KEY = "senedoch_db_v1";

const globalStore = globalThis as typeof globalThis & {
  __senedochMemoryStore?: SenedochStore;
};

function defaultStore(): SenedochStore {
  return {
    users: [],
    categories: SEED_CATEGORIES,
    templates: SEED_TEMPLATES,
  };
}

export function readStore(): SenedochStore {
  if (typeof window !== "undefined") {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as SenedochStore;
        return {
          users: Array.isArray(parsed.users) ? parsed.users : [],
          categories: SEED_CATEGORIES,
          templates: [
            ...SEED_TEMPLATES,
            ...(Array.isArray(parsed.templates)
              ? parsed.templates.filter(
                  (item) => !SEED_TEMPLATES.some((seed) => seed.id === item.id)
                )
              : []),
          ],
        };
      }
    } catch {
      // Fallback to memory store
    }
  }

  if (!globalStore.__senedochMemoryStore) {
    globalStore.__senedochMemoryStore = defaultStore();
  }
  return globalStore.__senedochMemoryStore;
}

export function writeStore(next: SenedochStore): void {
  globalStore.__senedochMemoryStore = next;
  if (typeof window !== "undefined") {
    try {
      const customOnly = next.templates.filter(
        (t) => !SEED_TEMPLATES.some((s) => s.id === t.id)
      );
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          users: next.users,
          categories: SEED_CATEGORIES,
          templates: customOnly,
        })
      );
    } catch {
      // Ignore storage quota errors
    }
  }
}

export function signupWithPhone(input: {
  fullName: string;
  phoneNumber: string;
  password: string;
}): { ok: true; user: SafeUser } | { ok: false; error: string } {
  const fullName = input.fullName.trim();
  if (fullName.length < 2) {
    return { ok: false, error: "Full name is required." };
  }
  const normalizedPhone = normalizeEthiopianPhone(input.phoneNumber);
  if (!normalizedPhone) {
    return { ok: false, error: "Invalid Ethiopian phone number." };
  }
  if (input.password.length < 4) {
    return { ok: false, error: "Password must be at least 4 characters." };
  }

  const store = readStore();
  const exists = store.users.some((u) => u.phoneNumber === normalizedPhone);
  if (exists) {
    return { ok: false, error: "An account with this phone number already exists." };
  }

  const record: UserRecord = {
    id: `usr_${Date.now()}`,
    fullName,
    phoneNumber: normalizedPhone,
    passwordHash: hashPassword(input.password),
    role: "user",
    createdAt: new Date().toISOString(),
  };

  writeStore({
    ...store,
    users: [record, ...store.users],
  });

  return {
    ok: true,
    user: {
      id: record.id,
      fullName: record.fullName,
      phoneNumber: record.phoneNumber,
      role: record.role,
      createdAt: record.createdAt,
    },
  };
}

export function loginWithPhone(input: {
  phoneNumber: string;
  password: string;
}): { ok: true; user: SafeUser } | { ok: false; error: string } {
  const normalizedPhone = normalizeEthiopianPhone(input.phoneNumber);
  if (!normalizedPhone) {
    return { ok: false, error: "Invalid Ethiopian phone number." };
  }

  const store = readStore();
  const found = store.users.find(
    (u) =>
      u.phoneNumber === normalizedPhone &&
      u.passwordHash === hashPassword(input.password)
  );

  if (!found) {
    return { ok: false, error: "Invalid phone number or password." };
  }

  return {
    ok: true,
    user: {
      id: found.id,
      fullName: found.fullName,
      phoneNumber: found.phoneNumber,
      role: found.role,
      createdAt: found.createdAt,
    },
  };
}

export function createTemplateSample(input: {
  categoryId: CategoryId;
  titleAm: string;
  titleEn?: string;
  purposeAm: string;
  purposeEn?: string;
  bodyAm: string;
}): { ok: true; template: DocumentTemplate } | { ok: false; error: string } {
  const titleAm = input.titleAm.trim();
  const purposeAm = input.purposeAm.trim();
  const bodyAm = input.bodyAm.trim();

  if (!titleAm || !purposeAm || !bodyAm) {
    return { ok: false, error: "Title, purpose, and document body are required." };
  }

  const store = readStore();
  const template: DocumentTemplate = {
    id: `tpl_${Date.now()}`,
    categoryId: input.categoryId,
    titleAm,
    titleEn: input.titleEn?.trim() || titleAm,
    purposeAm,
    purposeEn: input.purposeEn?.trim() || purposeAm,
    bodyAm,
    legalRefs: ["DARS / ፍ/ብ/ሕ"],
    isApproved: true,
    downloadCount: 0,
    createdAt: new Date().toISOString(),
  };

  writeStore({
    ...store,
    templates: [template, ...store.templates],
  });

  return { ok: true, template };
}
