import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { OrderSummary } from "./OrderSummary";

describe("OrderSummary", () => {
  it("renders item name", () => {
    render(<OrderSummary itemName="Pro Plan" amount={29.99} currency="USD" />);
    expect(screen.getByText("Pro Plan")).toBeInTheDocument();
  });

  it("formats amount as currency", () => {
    render(<OrderSummary itemName="Pro Plan" amount={29.99} currency="USD" />);
    expect(screen.getByText("$29.99")).toBeInTheDocument();
  });

  it("shows currency badge", () => {
    render(<OrderSummary itemName="Pro Plan" amount={29.99} currency="USD" />);
    expect(screen.getByText("USD")).toBeInTheDocument();
  });

  it("shows Total label", () => {
    render(<OrderSummary itemName="Pro Plan" amount={29.99} currency="USD" />);
    expect(screen.getByText("Total")).toBeInTheDocument();
  });
});
