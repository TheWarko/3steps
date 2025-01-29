import styles from "./Registration.module.scss";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import { StepsProvider } from "../../contexts/Registration.context";

const Registration = () => {
  return (
    <div className={styles.registration}>
      <header>
        <h1 className={styles.superTitle}>
          Seminar <span className={styles.inTitle}>Registration</span>
        </h1>
      </header>
      <main>
        <StepsProvider>
          <div className={styles.steps}>
            <Step1 />
            <Step2 />
            <Step3 />
          </div>
        </StepsProvider>
      </main>
    </div>
  );
};

export default Registration;
