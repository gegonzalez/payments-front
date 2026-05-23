# ADR-001: Tech Stack

**Status:** Accepted  
**Date:** 2026-05-22

## Context

Greenfield payment page. Need to choose a React meta-framework, styling, and component approach.

## Decision

| Concern | Choice | Rationale |
|---------|--------|-----------|
| Framework | Next.js 16 App Router | Latest stable; Server Components reduce client JS; file-based routing |
| Language | TypeScript strict | Catch shape mismatches at compile time — critical for payment payloads |
| Styling | Tailwind CSS v4 | Zero-runtime, utility-first; pairs with Next.js out of the box |
| Components | shadcn/ui | Ships source (not a package); fully customisable; accessible primitives via Radix/Base UI |
| Icon set | lucide-react | Consistent, tree-shakeable SVG icons; included by shadcn |

## Alternatives Considered

- **Create React App / Vite SPA** — no SSR, no App Router conventions; rejected for lack of modern patterns.
- **MUI / Chakra** — opinionated visual style, harder to customize. shadcn gives more control.
- **CSS Modules** — verbose for utility-heavy UI. Tailwind preferred for speed.

## Consequences

- shadcn components live in `src/components/ui/` and are owned by this repo — update them as needed.
- Tailwind v4 uses CSS-first config (`@theme` in globals.css) instead of `tailwind.config.js`.
- Server Components are the default; add `"use client"` only at the orchestration boundary.
