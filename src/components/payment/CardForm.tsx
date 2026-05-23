"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CreditCard } from "lucide-react";

interface CardFormProps {
  onSubmit?: () => void;
  isSubmitting?: boolean;
}

export function CardForm({ onSubmit, isSubmitting = false }: CardFormProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base font-semibold">
          <CreditCard className="h-4 w-4" />
          Card Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-1.5">
          <Label htmlFor="cardholderName">Cardholder Name</Label>
          <Input
            id="cardholderName"
            placeholder="Jane Smith"
            autoComplete="cc-name"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="cardNumber">Card Number</Label>
          <Input
            id="cardNumber"
            placeholder="1234 5678 9012 3456"
            autoComplete="cc-number"
            inputMode="numeric"
            maxLength={19}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="expiry">Expiry</Label>
            <Input
              id="expiry"
              placeholder="MM/YY"
              autoComplete="cc-exp"
              inputMode="numeric"
              maxLength={5}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              placeholder="123"
              autoComplete="cc-csc"
              inputMode="numeric"
              maxLength={4}
            />
          </div>
        </div>

        <Button
          type="button"
          className="w-full"
          disabled={isSubmitting}
          onClick={onSubmit}
        >
          {isSubmitting ? "Processing…" : "Pay Now"}
        </Button>
      </CardContent>
    </Card>
  );
}
