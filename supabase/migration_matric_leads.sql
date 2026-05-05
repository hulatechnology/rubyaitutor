-- Stores lead captures from the static matric study-pack page
create table if not exists matric_leads (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  school      text not null,
  email       text not null,
  subjects    text[] not null default '{}',
  created_at  timestamptz not null default now()
);

-- Allow anyone to insert (public lead form — no auth required)
alter table matric_leads enable row level security;

create policy "public insert"
  on matric_leads for insert
  with check (true);

-- Only service-role / admin can read leads
create policy "service role select"
  on matric_leads for select
  using (false);
