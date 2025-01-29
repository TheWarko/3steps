import { render, screen, fireEvent } from "@testing-library/react";
import Step3 from "../../pages/registration/steps/Step3";
import { StepsProvider } from "../../contexts/Registration.context";

describe("Step3", () => {
  const renderComponent = () => {
    return render(
      <StepsProvider>
        <Step3 />
      </StepsProvider>
    );
  };

  test("renders Step3", () => {
    renderComponent();

    expect(screen.getByText("Are you ready to rock?")).toBeInTheDocument();

    // Checkbox
    const checkbox = screen.getByRole("checkbox", {
      name: "Are you ready to rock?",
    });
    expect(checkbox).not.toBeChecked();

    // Button
    const button = screen.getByRole("button", {
      name: "Complete Registration",
    });
    expect(button).toBeDisabled();
  });

  test("enables button after checkbox is checked", () => {
    renderComponent();

    // Check the checkbox
    const checkbox = screen.getByRole("checkbox", {
      name: "Are you ready to rock?",
    });
    fireEvent.click(checkbox);

    // Verify the checkbox is checked
    expect(checkbox).toBeChecked();

    // Verify the button is now enabled
    const button = screen.getByRole("button", {
      name: "Complete Registration",
    });
    expect(button).not.toBeDisabled();
  });
});
