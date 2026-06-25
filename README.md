# Ryslinge City – Hjemmeside

Officiel hjemmeside for **Ryslinge City** Minecraft-serveren. Bygget med
[Next.js](https://nextjs.org) (App Router) og klar til deploy på
[Vercel](https://vercel.com).

## Kom i gang lokalt

```bash
npm install
npm run dev
```

Åbn [http://localhost:3000](http://localhost:3000) i din browser.

## Tilpas indholdet

- **Server-IP:** ret `SERVER_IP` øverst i `app/page.tsx`.
- **Tekst & sektioner:** rediger `app/page.tsx`.
- **Farver & styling:** rediger `app/globals.css`.
- **Titel/SEO:** rediger `metadata` i `app/layout.tsx`.

## Deploy til Vercel

1. Push dette repo til GitHub.
2. Gå til [vercel.com/new](https://vercel.com/new) og importér repoet.
3. Vercel opdager automatisk Next.js – tryk **Deploy**. Ingen konfiguration nødvendig.

Hver gang du pusher til `main`, deployer Vercel automatisk på ny.

## Scripts

| Kommando        | Beskrivelse                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start udviklingsserver               |
| `npm run build` | Byg til produktion                   |
| `npm run start` | Kør produktions-build lokalt         |
| `npm run lint`  | Kør ESLint                           |
