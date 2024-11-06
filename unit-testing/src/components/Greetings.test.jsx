import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";

describe("Greetings component", () => {
  test("render Hello World", () => {
    render(<Greetings />);
    const headingText = screen.getByText(/hello world/i);
    expect(headingText).toBeInTheDocument();
  });
});
