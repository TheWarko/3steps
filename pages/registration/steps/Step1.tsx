import { StepsContext } from "../../../contexts/Registration.context";
import styles from "./Step1.module.scss";
import Box from "@/components/Box";
import Image from "next/image";
import { useContext, useEffect } from "react";

const Step1 = () => {
  const { steps, setSteps, setCurrentStep } = useContext(StepsContext);

  const { numAttendees = 0, attendeeNames = [] } = steps[0].fields;
  const NUM_ATTENDEES = 5;

  useEffect(() => {
    const allFieldsFilled =
      attendeeNames.length > 0 &&
      attendeeNames.slice(0, numAttendees).every((name) => name.trim() !== "");
    setCurrentStep(allFieldsFilled ? 1 : 0);
  }, [attendeeNames, numAttendees]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newNumAttendees = parseInt(e.target.value);

    // Update fields
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[0].fields.numAttendees = newNumAttendees;
      newSteps[0].fields.attendeeNames = Array(newNumAttendees).fill("");
      return newSteps;
    });
  };

  const handleInputChange = (index: number, value: string) => {
    const newAttendeeNames = [...attendeeNames];
    newAttendeeNames[index] = value;

    // Update fields
    setSteps((prevSteps) => {
      const newSteps = [...prevSteps];
      newSteps[0].fields.attendeeNames = newAttendeeNames;
      return newSteps;
    });
  };

  return (
    <Box
      color={steps[0].color}
      label={steps[0].label}
      disabled={steps[0].disabled}
    >
      <div className={styles.question}>
        <h3 className={styles.questionTitle}>
          How many people will be attending?
        </h3>
        <select id="numAttendees" onChange={handleChange} value={numAttendees}>
          <option value="0">Please Choose</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div
        className={`${styles.attendeesWrapper} ${
          numAttendees > 0 ? styles.visible : ""
        }`}
        style={{ "--num-attendees": numAttendees } as React.CSSProperties}
      >
        <h3 className={styles.attendeesTitle}>Please provide full names:</h3>
        {[...Array(NUM_ATTENDEES)].map((_, i) => (
          <div key={i} className={styles.attendeesField}>
            <label htmlFor={`name${i + 1}`} className={styles.attendeesLabel}>
              Attendee {i + 1} Name:
            </label>
            <input
              type="text"
              id={`name${i + 1}`}
              name={`name${i + 1}`}
              value={attendeeNames[i] || ""}
              onChange={(e) => handleInputChange(i, e.target.value)}
              className={styles.attendeesInput}
            />
          </div>
        ))}
      </div>

      <div
        className={`${styles.doneWrapper} ${
          numAttendees > 0 && attendeeNames.every((name) => name.trim() !== "")
            ? styles.visible
            : ""
        }`}
      >
        <Image src="/images/done.png" alt="Done" width="100" height="100" />
      </div>
    </Box>
  );
};

export default Step1;
