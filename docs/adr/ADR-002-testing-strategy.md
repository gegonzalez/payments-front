# ADR-002: Testing Strategy

**Status:** Accepted  
**Date:** 2026-05-22

## Context

Need a testing setup that covers pure logic, component behaviour, and full user flows without a real API.

## Decision

| Layer | Tool | What it covers |
|-------|------|---------------|
| Unit | Vitest + jsdom | Pure functions (formatters, schemas) |
| Integration | Vitest + React Testing Library | Component behaviour, form submission, state transitions |
| E2E | Playwright (MVP 4) | Full browser flow against dev server |

**Why Vitest over Jest:**  
Same API as Jest; native ESM support; much faster cold start; integrates with Vite's module resolution (same aliases, same transforms as the app).

**Why RTL over Enzyme/other:**  
Tests user-visible behaviour, not implementation details. Queries mirror how users and assistive tech interact with the page.

**API mocking strategy (MVP 3):**  
Use `vi.stubGlobal('fetch', ...)` for unit tests of `payment-api.ts`.  
Use MSW (Mock Service Worker) for integration tests — intercepts at the network level, closest to reality without a real server.

## Consequences

- Every MVP ships with tests. No feature is "done" without passing tests.
- `npm test` runs all tests once (CI-friendly). `npm run test:watch` for development.
- Playwright tests run separately against a live dev or preview server.
- Test files live next to their source: `foo.ts` → `foo.test.ts`.
