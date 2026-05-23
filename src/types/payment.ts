export interface OrderData {
  id: string;
  itemName: string;
  amount: number;
  currency: string;
}

export interface TransactionResult {
  transactionId: string;
  status: "approved" | "declined";
}

export type PaymentState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; transactionId: string }
  | { status: "error"; message: string };
