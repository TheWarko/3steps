import { StepsContext } from "../../../contexts/Registration.context";
import styles from "./Step2.module.scss";
import Box from "@/components/Box";
import Image from "next/image";
import { useContext, useEffect } from "react";

const Step2 = () => {
  const { steps, setSteps, currentStep, setCurrentStep } =
    useContext(StepsContext);
  const { companyBadge, specialAccomodation, companyName } = steps[1].fields;

  // Update currentStep
  useEffect(() => {
    currentStep > 0 && setCurrentStep(checkAllFieldsFilled() ? 2 : 1);
  }, [currentStep, companyBadge, specialAccomodation, companyName]);

  const handleCompanyBadgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Update fields
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[1].fields.companyBadge = value;
      value === "no" && (newSteps[1].fields.companyName = "");
      return newSteps;
    });
  };

  const handleSpecialAccomodationChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;

    // Update fields
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[1].fields.specialAccomodation = value;
      return newSteps;
    });
  };

  const handleCompanyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Update fields
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[1].fields.companyName = value;
      return newSteps;
    });
  };

  const checkAllFieldsFilled = () => {
    return (
      companyBadge &&
      specialAccomodation &&
      (companyBadge === "no" || (companyBadge === "yes" && companyName))
    );
  };

  return (
    <Box
      color={steps[1].color}
      label={steps[1].label}
      disabled={steps[1].disabled}
    >
      <div className={styles.question}>
        <h3 className={styles.questionTitle}>
          Would you like your company name on your badges?
        </h3>
        <div className={styles.radioGroup}>
          <input
            type="radio"
            id="companyBadgeYes"
            name="companyBadge"
            value="yes"
            onChange={handleCompanyBadgeChange}
            checked={companyBadge === "yes"}
          />
          <label htmlFor="companyBadgeYes">Yes</label>
          <input
            type="radio"
            id="companyBadgeNo"
            name="companyBadge"
            value="no"
            onChange={handleCompanyBadgeChange}
            checked={companyBadge === "no"}
          />
          <label htmlFor="companyBadgeNo">No</label>
        </div>

        <div
          className={`${styles.companyNameWrapper} ${
            companyBadge === "yes" ? styles.visible : ""
          }`}
        >
          <label htmlFor="companyName" className={styles.companyLabel}>
            Company Name:
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={companyName}
            onChange={handleCompanyNameChange}
          />
        </div>
      </div>

      <div className={styles.question}>
        <h3 className={styles.questionTitle}>
          Will anyone in your group require special accommodations?
        </h3>
        <div className={styles.radioGroup}>
          <input
            type="radio"
            id="specialAccomodationYes"
            name="specialAccomodation"
            value="yes"
            onChange={handleSpecialAccomodationChange}
            checked={specialAccomodation === "yes"}
          />
          <label htmlFor="specialAccomodationYes">Yes</label>
          <input
            type="radio"
            id="specialAccomodationNo"
            name="specialAccomodation"
            value="no"
            onChange={handleSpecialAccomodationChange}
            checked={specialAccomodation === "no"}
          />
          <label htmlFor="specialAccomodationNo">No</label>
        </div>
      </div>

      <div
        className={`${styles.doneWrapper} ${checkAllFieldsFilled() ? styles.visible : ""}`}
      >
        <Image src="/images/done.png" alt="Done" width="100" height="100" />
      </div>
    </Box>
  );
};

export default Step2;
