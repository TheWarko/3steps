import { render, screen, fireEvent } from "@testing-library/react";
import Step1 from "../../pages/registration/steps/Step1";
import { StepsProvider } from "../../contexts/Registration.context";

describe("Step1", () => {
  const renderComponent = () => {
    return render(
      <StepsProvider>
        <Step1 />
      </StepsProvider>
    );
  };
  test("renders the component", () => {
    renderComponent();

    expect(
      screen.getByText("How many people will be attending?")
    ).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("updates attendeeNames on select change", () => {
    renderComponent();

    // Simulate selecting 2 attendees
    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "2" } });

    // Simulate filling inputs
    const inputs = screen.getAllByRole("textbox");
    fireEvent.change(inputs[0], { target: { value: "Mario" } });
    expect(inputs[0]).toHaveValue("Mario");
    fireEvent.change(inputs[1], { target: { value: "Rossi" } });
    expect(inputs[1]).toHaveValue("Rossi");
  });

  test("display image", () => {
    renderComponent();

    const select = screen.getByRole("combobox");
    const doneWrapper = screen.getByAltText("Done").parentElement;

    expect(doneWrapper).not.toHaveClass("visible");

    // Simulate selecting and filling 2 attendees
    fireEvent.change(select, { target: { value: "2" } });
    const inputs = screen.getAllByRole("textbox");
    fireEvent.change(inputs[0], { target: { value: "Mario" } });
    fireEvent.change(inputs[1], { target: { value: "Rossi" } });

    // After all inputs are filled, image visible
    expect(doneWrapper).toHaveClass("visible");

    // Clear input and verify image hidden
    fireEvent.change(inputs[0], { target: { value: "" } });
    expect(doneWrapper).not.toHaveClass("visible");
  });
});
