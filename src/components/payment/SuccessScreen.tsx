import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface SuccessScreenProps {
  transactionId: string;
  itemName: string;
  amount: number;
  currency: string;
}

export function SuccessScreen({
  transactionId,
  itemName,
  amount,
  currency,
}: SuccessScreenProps) {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);

  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
        <CheckCircle className="h-12 w-12 text-green-500" />
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Payment Successful</h2>
          <p className="text-sm text-muted-foreground">
            {formatted} charged for {itemName}
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          Transaction ID:{" "}
          <span className="font-mono font-medium text-foreground">
            {transactionId}
          </span>
        </p>
      </CardContent>
    </Card>
  );
}
