# RHViewer

RViewer is a Next.js app with a marketing landing page and a dashboard shell for an interview-prep product. The UI is built with Tailwind CSS and shadcn/ui components, with a clean separation between the public site and the dashboard area.

## Tech Stack

- Next.js (App Router) and React
- TypeScript
- Tailwind CSS v4 + PostCSS
- shadcn/ui + Radix UI primitives
- class-variance-authority + tailwind-merge + clsx for class composition
- lucide-react icons
- React Hook Form + Zod (form handling and validation)

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm (or your preferred package manager)

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### Build and Run Production

```bash
npm run build
npm run start
```

### Lint the Project

```bash
npm run lint
```

## Project Structure

- `app/(root)`: Public/marketing pages (home, sections like Hero, Pricing, CTA)
- `app/(dashboard)`: Dashboard routes and layout
- `components/ui`: Reusable UI primitives (shadcn/ui)
- `components`: Shared components outside the app directory
- `lib`: Utilities and shared helpers
- `hooks`: Custom React hooks
- `public`: Static assets

## Path Aliases

The project uses a path alias for cleaner imports:

- `@/*` maps to the project root (configured in `tsconfig.json`)

Example:

```ts
import { Button } from "@/components/ui/button"
```

## Notes

- No environment variables are required by default.
- Styling lives in `app/globals.css` and is composed with Tailwind utility classes.
