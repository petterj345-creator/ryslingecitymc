# Ryslinge City — Dansk MMORPG

Hjemmeside for Minecraft-MMORPG-serveren **Ryslinge City**. Viser endgame-kort,
custom bosser, unikke items, klasser og daglige belønninger — og har et
**visionsboard**, du selv kan styre fra et admin-panel.

Bygget med **Next.js 15** (App Router) + **React 19** + **TypeScript**, med
**Supabase** (Postgres) til visionsboardet. Klar til deploy på **Vercel**.

## Kom i gang lokalt

```bash
npm install
cp .env.example .env.local   # udfyld værdierne
npm run dev
```

Åbn http://localhost:3000 — og admin-panelet på http://localhost:3000/admin

## Miljøvariabler

| Variabel | Hvad | Hemmelig? |
| --- | --- | --- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase projekt-URL | Nej |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/publishable key | Nej |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key — bruges kun server-side til at skrive til boardet | **Ja** |
| `ADMIN_PASSWORD` | Adgangskode til `/admin` | **Ja** |

Find Supabase-nøglerne under **Project Settings → API**. Læg aldrig de
hemmelige nøgler i git — `.env.local` er allerede i `.gitignore`.

## Database

Tabellen `roadmap_items` driver visionsboardet. Den er beskyttet med Row Level
Security: alle kan **læse**, men alle **skrivninger** sker server-side via
service role key gennem admin-panelet.

## Admin-panel

`/admin` er beskyttet med `ADMIN_PASSWORD`. Når du er logget ind kan du tilføje,
redigere og slette features på boardet. Ændringer vises med det samme på forsiden.

## Struktur

```
app/            Sider (forside + /admin) og server actions
components/      UI-sektioner (hero, atlas-kort, bosser, items, klasser, board …)
lib/            Supabase-klienter, roadmap-datalag, admin-auth, config
```

Server-IP'en sættes ét sted: `lib/config.ts`.

## Deploy til Vercel

1. Importér repoet på [vercel.com/new](https://vercel.com/new).
2. Tilføj de fire miljøvariabler ovenfor under **Settings → Environment Variables**.
3. **Deploy**. Hver push til `main` deployer automatisk.
