import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { CardForm } from "./CardForm";

describe("CardForm (static layout)", () => {
  it("renders cardholder name field", () => {
    render(<CardForm />);
    expect(screen.getByLabelText(/cardholder name/i)).toBeInTheDocument();
  });

  it("renders card number field", () => {
    render(<CardForm />);
    expect(screen.getByLabelText(/card number/i)).toBeInTheDocument();
  });

  it("renders expiry field", () => {
    render(<CardForm />);
    expect(screen.getByLabelText(/expiry/i)).toBeInTheDocument();
  });

  it("renders CVV field", () => {
    render(<CardForm />);
    expect(screen.getByLabelText(/cvv/i)).toBeInTheDocument();
  });

  it("renders submit button", () => {
    render(<CardForm />);
    expect(screen.getByRole("button", { name: /pay now/i })).toBeInTheDocument();
  });

  it("disables button while submitting", () => {
    render(<CardForm isSubmitting={true} />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("shows processing text while submitting", () => {
    render(<CardForm isSubmitting={true} />);
    expect(screen.getByRole("button")).toHaveTextContent(/processing/i);
  });
});
