# Component Reference

All payment components live in `src/components/payment/`.

## OrderSummary

**File:** `OrderSummary.tsx`  
**Type:** Server-compatible (no hooks, no client APIs)

| Prop | Type | Description |
|------|------|-------------|
| `itemName` | `string` | Product or service name |
| `amount` | `number` | Numeric amount (e.g. `29.99`) |
| `currency` | `string` | ISO 4217 code (e.g. `"USD"`) |

Renders a card with the order line item, currency badge, separator, and formatted total using `Intl.NumberFormat`.

---

## CardForm

**File:** `CardForm.tsx`  
**Type:** Client component (`"use client"`)

| Prop | Type | Description |
|------|------|-------------|
| `onSubmit` | `() => void` *(optional)* | Called when Pay Now is clicked (MVP 1: static handler) |
| `isSubmitting` | `boolean` *(default: false)* | Disables button, shows "Processing…" |

MVP 1: static layout only — no validation or `useForm`.  
MVP 2: upgraded to react-hook-form + zod + masked inputs.

---

## SuccessScreen

**File:** `SuccessScreen.tsx`  
**Type:** Server-compatible

| Prop | Type | Description |
|------|------|-------------|
| `transactionId` | `string` | ID returned from the payment API |
| `itemName` | `string` | For confirmation display |
| `amount` | `number` | For confirmation display |
| `currency` | `string` | ISO 4217 code |

Terminal success state — shown after `PaymentPage` receives an approved response.

---

## ErrorBanner

**File:** `ErrorBanner.tsx`  
**Type:** Client component (button interaction)

| Prop | Type | Description |
|------|------|-------------|
| `message` | `string` | Human-readable error from API or state machine |
| `onRetry` | `() => void` | Resets state machine back to `idle` |

Shown inline (above the form) when `PaymentState.status === "error"`.

---

## PaymentPage *(MVP 3)*

**File:** `PaymentPage.tsx`  
**Type:** Client component (`"use client"`)

Orchestrator — owns the `PaymentState` union, calls `submitPayment`, and renders the correct view based on state.

| Prop | Type | Description |
|------|------|-------------|
| `order` | `OrderData` | Passed from the Server Component in `app/pay/page.tsx` |
