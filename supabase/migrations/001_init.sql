CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone_number TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title_am TEXT NOT NULL,
  title_en TEXT NOT NULL,
  one_sentence_am TEXT NOT NULL,
  one_sentence_en TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS templates (
  id TEXT PRIMARY KEY,
  category_id TEXT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  title_am TEXT NOT NULL,
  title_en TEXT NOT NULL,
  purpose_am TEXT NOT NULL,
  purpose_en TEXT NOT NULL,
  body_am TEXT NOT NULL,
  legal_refs TEXT[] NOT NULL DEFAULT '{}',
  submitted_by TEXT REFERENCES users(id) ON DELETE SET NULL,
  is_approved BOOLEAN NOT NULL DEFAULT TRUE,
  download_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
