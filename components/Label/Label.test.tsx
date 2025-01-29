import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Label from "./Label";

describe("Label component", () => {
  test("renders the text correctly", () => {
    const labelText = "Test Label";
    render(<Label text={labelText} />);

    const labelElement = screen.getByText(labelText);
    expect(labelElement).toBeInTheDocument();
  });
});
