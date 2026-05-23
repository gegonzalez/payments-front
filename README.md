# Payments Front

Credit card payment page built with Next.js 16, shadcn/ui, and react-hook-form.
Built incrementally across 5 MVPs to explore the full modern React/Next.js stack.

## Stack

| Layer | Tool |
|-------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript strict |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Forms | react-hook-form v7 + zod v4 |
| Testing | Vitest + React Testing Library |
| E2E | Playwright (MVP 4) |

## Local Development

```bash
# Install dependencies
npm install

# Copy env vars
cp .env.example .env.local
# Edit .env.local and set NEXT_PUBLIC_PAYMENT_API_URL

# Start dev server
npm run dev
# → http://localhost:3000/pay
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_PAYMENT_API_URL` | Full URL of the payment POST endpoint |

## Commands

```bash
npm run dev        # development server
npm run build      # production build (must pass with zero TS errors)
npm test           # run unit + integration tests once
npm run test:watch # watch mode
```

## Routes

| Route | Description |
|-------|-------------|
| `/pay` | Credit card payment page |

## MVP Roadmap

| MVP | Goal | Status |
|-----|------|--------|
| 0 | Scaffold, config, docs baseline | ✅ |
| 1 | Static UI components | ✅ |
| 2 | Form validation + input masking | ⏳ |
| 3 | API integration + state machine | ⏳ |
| 4 | Polish, accessibility, E2E | ⏳ |

## Architecture Decisions

See [`docs/adr/`](docs/adr/) for all Architecture Decision Records.
