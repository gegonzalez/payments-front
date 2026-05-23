@AGENTS.md

## Environment

- Node 20.15.1 — vitest v4 incompatible; stack pinned to vitest@2, vite@5
- jsdom ESM conflict on this Node — test environment must be `happy-dom`
- `@testing-library/dom` must be installed explicitly alongside `@testing-library/react`
- `@rolldown/binding-darwin-arm64` may need explicit install if vitest fails with "Cannot find native binding"

## Pinned versions (do not change)

- `next@16.2.6`, `vitest@^2.1.9`, `@vitest/ui@^2.1.9`, `vite@^5.4.21`
- `npm audit fix --force` breaks these — 8 moderate vulnerabilities in dev deps are safe to leave

## Commands

- `npm test` — Vitest run (unit + integration), currently 18 tests
- `npm run test:watch` — watch mode
- `npm run dev` — dev server → http://localhost:3000/pay
- shadcn non-interactive init: `echo "" | npx shadcn@latest init -d`

## Stack notes

- Next.js 16, Tailwind v4 — CSS-first config in `globals.css`, no `tailwind.config.js`
- Test setup: Vitest 2 + happy-dom, setup file at `src/test/setup.ts`
