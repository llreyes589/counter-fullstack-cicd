import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  it("renders the App component", () => {
    render(<App />);
    expect(screen.getByText(/counter:/i)).toBeInTheDocument();
  });

  //   it('increments the count when the "Increment" button is clicked', async () => {
  //     render(<App />);
  //     const incrementButton = screen.getByRole("button", { name: /Increment/i });
  //     const countElement = screen.getByTestId("count");

  //     // Use fireEvent or userEvent to simulate a click
  //     await userEvent.click(incrementButton);

  //     expect(countElement).toHaveTextContent("1");
  //   });
});
