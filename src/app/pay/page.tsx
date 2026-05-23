import { OrderSummary } from "@/components/payment/OrderSummary";
import { CardForm } from "@/components/payment/CardForm";
import type { OrderData } from "@/types/payment";

// Static order for now — replaced by PaymentPage orchestrator in MVP 3
const DEMO_ORDER: OrderData = {
  id: "order-001",
  itemName: "Pro Subscription (1 month)",
  amount: 29.99,
  currency: "USD",
};

export default function PayPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/40 p-4">
      <div className="w-full max-w-md space-y-4">
        <OrderSummary
          itemName={DEMO_ORDER.itemName}
          amount={DEMO_ORDER.amount}
          currency={DEMO_ORDER.currency}
        />
        <CardForm />
      </div>
    </main>
  );
}
