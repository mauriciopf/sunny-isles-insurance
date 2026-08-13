# Sunny Isles Insurance

Production website for [sunnyislesinsurancefl.com](https://sunnyislesinsurancefl.com)

Built with **Next.js 16**, **React 19**, **TypeScript**, **Tailwind CSS 4**, and **Vercel**.

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deploy to Vercel

1. Push to GitHub, connect to Vercel
2. Add environment variables from `.env.example`
3. Add domain `sunnyislesinsurancefl.com` in Vercel settings
4. Add `www` redirect to apex domain

## CRM Integration

Add your integration code in:
- `app/api/quote/route.ts`
- `app/api/contact/route.ts`

Supports: Resend, HubSpot, GoHighLevel, Salesforce, Supabase, Webhooks.
