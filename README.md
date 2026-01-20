# RHViewer (Rviewer AI)

RViewer is a Next.js app for AI-powered interview practice. It ships with a marketing landing page, authenticated dashboard, and live voice interview sessions. The app stores interviews, transcripts, and payment status in Postgres via Prisma.

## Features

- Landing page with hero, how it works, pricing, and CTA sections
- Clerk authentication with protected app routes
- Dashboard metrics: total interviews, completed interviews, avg time, success rate
- Create interviews with role and level selections
- Live voice interview room powered by Vapi (mic controls + live transcript)
- Interview summary with transcript review
- Free trial gating with Stripe embedded checkout to unlock unlimited access
- Stripe webhook handling to activate paid access

## Tech Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4 + PostCSS
- shadcn/ui + Radix UI primitives
- Clerk authentication
- Prisma 7 with @prisma/adapter-pg + PostgreSQL
- Vapi Web SDK for realtime voice interviews
- Stripe (embedded checkout + webhook)
- React Hook Form + Zod, sonner toasts, lucide-react icons

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file (see Environment Variables below).
3. Generate Prisma client (also runs on `postinstall`):

```bash
npx prisma generate
```

4. Apply migrations:

```bash
npx prisma migrate dev
```

5. Start the dev server:

```bash
npm run dev
```

Open http://localhost:3000.

## Environment Variables

Create `.env` with these keys:

```bash
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

NEXT_PUBLIC_VAPI_WEB_TOKEN=...

STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Notes:
- `DATABASE_URL` is the Postgres connection string used by Prisma.
- `NEXT_PUBLIC_APP_URL` is used for Stripe `return_url`.
- `NEXT_PUBLIC_VAPI_WEB_TOKEN` is required for the browser Vapi client.

## Stripe Setup

- Update the Stripe price ID in `app/api/checkout/route.ts`.
- Set the webhook endpoint to `/api/webhook`.
- The webhook marks the user as paid and unlocks unlimited access.

## Vapi Setup

- Set `NEXT_PUBLIC_VAPI_WEB_TOKEN` for the web client.
- Update the Vapi assistant ID in `app/interview/[interviewId]/page.tsx` (the `vapi.start` call).

## Routes

Public pages:
- `/` landing page
- `/sign-in` and `/sign-up` (Clerk)

Authenticated app:
- `/dashboard` metrics and interview list
- `/dashboard/interview/[interviewId]` interview summary + transcript

Interview room:
- `/interview/[interviewId]` live interview session

API routes:
- `POST /api/create-interview` create a new interview
- `GET /api/interviews` list interviews for the logged-in user
- `GET /api/interview/[id]` fetch a single interview
- `POST /api/interview/[id]/complete` finalize interview + save transcript + mark trial used
- `POST /api/checkout` create Stripe embedded checkout session
- `POST /api/webhook` Stripe webhook handler
- `GET /api/user/status` paid/trial status for UI gating

## Data Model (Prisma)

- `User`: Clerk userId, email, name, trial status, payment status
- `Interview`: name, role, level, startedAt, completedAt, transcript (JSON)
- `Payment`: amount, userId, timestamps

## Project Structure

- `app/(root)` marketing landing page
- `app/(auth)` auth pages (Clerk)
- `app/(dashboard)` dashboard routes and layout
- `app/interview` live interview room
- `app/api` API routes
- `componentes/Shared` shared UI, interview creation dialog, Stripe modal
- `components/ui` shadcn/ui primitives
- `lib` Prisma client, Vapi SDK, helpers

## Scripts

- `npm run dev` start dev server
- `npm run build` production build
- `npm run start` start production server
- `npm run lint` run ESLint

## Notes

- `proxy.ts` contains the Clerk middleware and public route allowlist.
- Free trial is consumed after a completed interview.
