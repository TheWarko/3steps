import React, { createContext, useState, useEffect } from "react";

interface StepFields {
  numAttendees?: number;
  attendeeNames?: string[];
  companyBadge?: string | null;
  specialAccomodation?: string | null;
  companyName?: string;
  youRock?: boolean;
}

interface Step {
  label: string;
  color: string;
  disabled: boolean;
  fields: StepFields;
}

interface StepsContextType {
  steps: Step[];
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setSteps: React.Dispatch<React.SetStateAction<Step[]>>;
  resetSteps: () => void;
}

const DEFAULT_STEPS: Step[] = [
  {
    label: "Step 1",
    color: "green",
    disabled: false,
    fields: { numAttendees: 0, attendeeNames: [] },
  },
  {
    label: "Step 2",
    color: "blue",
    disabled: true,
    fields: {
      companyBadge: null,
      specialAccomodation: null,
      companyName: "",
    },
  },
  {
    label: "Step 3",
    color: "brown",
    disabled: true,
    fields: { youRock: false },
  },
];

export const StepsContext = createContext<StepsContextType>({
  steps: DEFAULT_STEPS,
  currentStep: 0,
  setCurrentStep: () => {}, // No-op functions to prevent runtime errors
  setSteps: () => {},
  resetSteps: () => {},
});

export const StepsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState<Step[]>(
    JSON.parse(JSON.stringify(DEFAULT_STEPS))
  );

  // Update disabled box
  useEffect(() => {
    setSteps((prevSteps) =>
      prevSteps.map((step, index) => ({
        ...step,
        disabled: index > currentStep,
      }))
    );
  }, [currentStep]);

  // Reset steps
  const resetSteps = () => {
    setCurrentStep(0);
    setSteps(JSON.parse(JSON.stringify(DEFAULT_STEPS)));
  };

  return (
    <StepsContext.Provider
      value={{ steps, currentStep, setCurrentStep, setSteps, resetSteps }}
    >
      {children}
    </StepsContext.Provider>
  );
};
