import { render, screen } from "@testing-library/react";
import Registration from "../pages/registration/Registration";
import { StepsProvider } from "../contexts/Registration.context";

describe("Registration", () => {
  test("renders the title", () => {
    render(
      <StepsProvider>
        <Registration />
      </StepsProvider>
    );

    const title = screen.getByRole("heading", {
      name: /seminar registration/i,
    });
    expect(title).toBeInTheDocument();
  });

  test("renders steps", () => {
    render(
      <StepsProvider>
        <Registration />
      </StepsProvider>
    );

    const stepsContainer = screen.getByRole("main");
    expect(stepsContainer).toBeInTheDocument();

    const step1 = screen.getByText(/step 1/i);
    const step2 = screen.getByText(/step 2/i);
    const step3 = screen.getByText(/step 3/i);

    expect(stepsContainer).toContainElement(step1);
    expect(stepsContainer).toContainElement(step2);
    expect(stepsContainer).toContainElement(step3);
  });
});
