import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Emoji listesi Testleri", () => {
  let items;

  beforeEach(() => {
    render(<App />);
  });

  test("should be effectively rendered in the header", () => {
    items = screen.getByText("Emoji Search");
    expect(items).toBeInTheDocument();
  });

  test("emoji list should be created successfully", () => {
    items = screen.getAllByAltText(/100/i);
    expect(items.length).toEqual(1);
  });

  test("When filtering is done, the emoji list should be rendered in accordance with this filter.", () => {
    const input = screen.getByPlaceholderText("Search Emoji");
    userEvent.type(input, "100");
    items = screen.getAllByAltText(/100/i);
    expect(items.length).toEqual(1);
  });

  test("all list elements should be clickable", () => {
    items = screen.getAllByText("Click to copy emoji");
    items.map((item) => userEvent.click(item));
  });
});
