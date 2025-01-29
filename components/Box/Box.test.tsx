import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Box from "./Box";

describe("Box component", () => {
  test("renders children correctly", () => {
    render(
      <Box color="green">
        <p>Test content</p>
      </Box>
    );

    const childElement = screen.getByText("Test content");
    expect(childElement).toBeInTheDocument();
  });

  test("applies the correct color class", () => {
    render(
      <Box color="blue">
        <p>Test content</p>
      </Box>
    );

    const boxElement = screen.getByText("Test content").closest("div");
    expect(boxElement).toHaveClass("blue");
  });

  test("applies the disabled class when disabled is true", () => {
    render(
      <Box color="green" disabled>
        <p>Test content</p>
      </Box>
    );

    const boxElement = screen.getByText("Test content").closest("div");
    expect(boxElement).toHaveClass("disabled");
  });

  test("does not apply the disabled class when disabled is false", () => {
    render(
      <Box color="green" disabled={false}>
        <p>Test content</p>
      </Box>
    );

    const boxElement = screen.getByText("Test content").closest("div");
    expect(boxElement).not.toHaveClass("disabled");
  });

  test("renders the label when provided", () => {
    render(
      <Box color="brown" label="Test Label">
        <p>Test content</p>
      </Box>
    );

    const labelElement = screen.getByText("Test Label");
    expect(labelElement).toBeInTheDocument();
  });
});
