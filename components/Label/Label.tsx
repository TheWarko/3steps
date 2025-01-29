import styles from "./Label.module.scss";

interface LabelProps {
  text: string;
}

const Label = ({ text }: LabelProps) => {
  return <h2 className={styles.label}>{text}</h2>;
};

export default Label;
