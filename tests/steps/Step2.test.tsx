import { render, screen, fireEvent } from "@testing-library/react";
import Step2 from "../../pages/registration/steps/Step2";
import { StepsProvider } from "../../contexts/Registration.context";

describe("Step2 Component", () => {
  const renderComponent = () => {
    return render(
      <StepsProvider>
        <Step2 />
      </StepsProvider>
    );
  };

  test("Renders Step2", () => {
    renderComponent();

    // Check titles
    expect(
      screen.getByText("Would you like your company name on your badges?")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Will anyone in your group require special accommodations?"
      )
    ).toBeInTheDocument();

    // Check radios
    expect(
      screen.getByLabelText("Yes", { selector: 'input[name="companyBadge"]' })
    ).toBeInTheDocument();
    expect(
      screen.getByLabelText("No", { selector: 'input[name="companyBadge"]' })
    ).toBeInTheDocument();

    // Check companyName not visible
    const companyNameWrapper = screen.getByLabelText("Company Name:");
    expect(companyNameWrapper).toBeInTheDocument();
    expect(companyNameWrapper.closest("div")).not.toHaveClass("visible");

    // Check Done image not visible
    const doneImage = screen.getByAltText("Done");
    expect(doneImage).toBeInTheDocument();
    expect(doneImage.closest("div")).not.toHaveClass("visible");
  });

  test("Show/Hide companyName", () => {
    renderComponent();

    const companyNameWrapper = screen.getByLabelText("Company Name:");

    // Select YES for companyBadge
    fireEvent.click(
      screen.getByLabelText("Yes", { selector: 'input[name="companyBadge"]' })
    );

    // Check companyName input is visible
    expect(companyNameWrapper.closest("div")).toHaveClass("visible");

    // Select NO to hide input
    fireEvent.click(
      screen.getByLabelText("No", { selector: 'input[name="companyBadge"]' })
    );

    // Check companyName input is hidden
    expect(companyNameWrapper.closest("div")).not.toHaveClass("visible");
  });

  test("Show/hide Done image", () => {
    renderComponent();

    // Select YES for companyBadge and fill company name
    fireEvent.click(
      screen.getByLabelText("Yes", { selector: 'input[name="companyBadge"]' })
    );
    fireEvent.change(screen.getByLabelText("Company Name:"), {
      target: { value: "Test Company" },
    });

    // Select YES for specialAccomodation
    fireEvent.click(
      screen.getByLabelText("Yes", {
        selector: 'input[name="specialAccomodation"]',
      })
    );

    // Check Done image is visible
    const doneImage = screen.getByAltText("Done");
    expect(doneImage.closest("div")).toHaveClass("visible");

    // Clear the companyName input
    fireEvent.change(screen.getByLabelText("Company Name:"), {
      target: { value: "" },
    });

    // Check Done image is hidden
    expect(doneImage.closest("div")).not.toHaveClass("visible");
  });
});
