import styles from "./Step3.module.scss";
import Box from "@/components/Box";
import { StepsContext } from "../../../contexts/Registration.context";
import { useContext } from "react";

const Step3 = () => {
  const { steps, setSteps, resetSteps } = useContext(StepsContext);

  const { youRock } = steps[2].fields;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;

    // Update fields
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[2].fields.youRock = value;
      return newSteps;
    });
  };

  return (
    <Box
      color={steps[2].color}
      label={steps[2].label}
      disabled={steps[2].disabled}
    >
      <div className={styles.question}>
        <div>
          <label className={styles.questionTitle} htmlFor="youRock">
            Are you ready to rock?
          </label>
          <input
            type="checkbox"
            id="youRock"
            name="youRock"
            onChange={handleChange}
            checked={youRock}
          />
        </div>
        <button
          className={styles.btnComplete}
          disabled={!youRock}
          onClick={resetSteps}
        >
          Complete Registration
        </button>
      </div>
    </Box>
  );
};

export default Step3;
