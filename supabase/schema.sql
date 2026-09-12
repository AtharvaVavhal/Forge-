-- Run this once in the Supabase SQL editor (Project → SQL Editor → New query).

create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  business_name text not null,
  email text not null,
  phone text not null,
  project_type text not null,
  description text not null,
  budget text not null,
  timeline text
);

-- Row Level Security stays ON. The app writes using the service role key
-- from the server-side API route, which bypasses RLS entirely, so no
-- public insert policy is needed. This keeps the table unreadable and
-- un-writable from the browser/anon key.
alter table public.contact_submissions enable row level security;