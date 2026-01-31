# Kosmogenit — Official Website

Official web presentation of **Kosmogenit** — a multidisciplinary artist working at the intersection of sound, visuals, and digital space.
This website serves as a central place for presenting music releases, visual identity, and ongoing artistic projects.
Designed with a strong focus on atmosphere, rhythm, and minimalism.

---

## Tech Stack

- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Radix UI**
- **Lucide Icons**
- **Recharts**

---

## Development

**Install dependencies:**

pnpm install
    or
npm install
    or
yarn install


**Run the development server:**

pnpm dev
    or
npm run dev
    or
yarn dev

Open http://localhost:3000 in your browser.


**You can start editing the main page by modifying:**

app/page.tsx

---

🎯 KOSMOGENIT Web - Faza 0.3: Environment Setup ✅

## Šta je urađeno:

### ✅ Faza 0.3.1: Environment Variables Setup
- Kreiran `.env.example` sa svim potrebnim environment varijablama
- Kreiran `.env.local` za lokalni development
- Postavljene sigurnosne mere (`.env*` fajlovi u `.gitignore`)

### ✅ Environment Varijable:
- **Site Configuration:** SITE_URL, SITE_NAME, SITE_DESCRIPTION
- **Artist Info:** ARTIST_NAME, ARTIST_GENRE, ARTIST_LOCATION
- **Social Media:** INSTAGRAM, YOUTUBE, TIKTOK, SPOTIFY, APPLE_MUSIC
- **YouTube:** CHANNEL_ID za LatestMediaSection
- **Contact:** CONTACT_EMAIL, BOOKING_EMAIL

### ✅ Prethodno urađeno (Faze 0.1 & 0.2):
- Tailwind CSS v4 setup ✅
- Path alias `@/` konfigurisan ✅
- Build prolazi bez grešaka ✅

## Šta sledi:
- **0.3.2** Dokumentacija env varijabli u README
- **0.3.3** Environment validation sa zod
- **Faza 1** TypeScript tipovi & struktura

## Tech Stack:
- Next.js 16.1.6 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Radix UI komponente
