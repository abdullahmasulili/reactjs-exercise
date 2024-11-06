/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Posts from "./Posts";

describe("Posts Component", () => {
  test("render posts if request succeed", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "Fist post" }],
    });
    render(<Posts />);

    const postItem = await screen.findAllByRole("listitem");

    expect(postItem).not.toHaveLength(0);
  });
});
