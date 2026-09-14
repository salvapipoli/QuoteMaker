# Attivare account e sincronizzazione cloud

QuoteMaker non deve mai gestire password direttamente nel browser. Per account reali, usa Supabase Authentication e una tabella protetta da Row Level Security.

1. Crea un progetto Supabase.
2. In Authentication, abilita Email/password e configura l'URL del sito.
3. Crea una tabella `quotes` con: `id uuid primary key`, `user_id uuid not null`, `payload jsonb not null`, `updated_at timestamptz not null default now()`.
4. Abilita RLS e aggiungi policy che permettano lettura/scrittura soltanto quando `auth.uid() = user_id`.
5. Crea `config.js` (non pubblicarlo se contiene informazioni non destinate al pubblico) con URL e chiave anon del progetto.
6. Sostituisci l'adapter provvisorio in `js/auth.js` con il client Supabase e abilita il repository cloud.

La chiave anon è pensata per il frontend, ma la protezione reale dipende dalle policy RLS. Non inserire mai una service-role key in questa app.
