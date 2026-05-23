import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SuccessScreen } from "./SuccessScreen";

describe("SuccessScreen", () => {
  const props = {
    transactionId: "txn-abc-123",
    itemName: "Pro Plan",
    amount: 29.99,
    currency: "USD",
  };

  it("renders success heading", () => {
    render(<SuccessScreen {...props} />);
    expect(screen.getByText("Payment Successful")).toBeInTheDocument();
  });

  it("renders transaction ID", () => {
    render(<SuccessScreen {...props} />);
    expect(screen.getByText("txn-abc-123")).toBeInTheDocument();
  });

  it("renders formatted amount and item name", () => {
    render(<SuccessScreen {...props} />);
    expect(screen.getByText(/\$29\.99.*Pro Plan/)).toBeInTheDocument();
  });
});
