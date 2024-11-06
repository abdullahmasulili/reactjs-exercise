import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greetings from "./Greetings";

describe("Greetings component", () => {
  test("render Hello World", () => {
    render(<Greetings />);
    const headingText = screen.getByText(/hello world/i);
    expect(headingText).toBeInTheDocument();
  });

  test("render initial text before button clicked", () => {
    render(<Greetings />);

    const initialText = screen.getByText(/good to see you/i);

    expect(initialText).toBeInTheDocument();
  });

  test("render changed text after button clicked", () => {
    render(<Greetings />);

    const changeTextButton = screen.getByText("Change Text");

    userEvent.click(changeTextButton);

    const changedText = screen.getByText(/changed/i);

    expect(changedText).toBeInTheDocument();
  });

  test("does not render initial text after button clicked", () => {
    render(<Greetings />);

    const changeTextButton = screen.getByText("Change Text");

    userEvent.click(changeTextButton);

    const initialText = screen.queryByText(/good to see you/i);

    expect(initialText).toBeNull();
  });
});
