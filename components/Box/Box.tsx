import styles from "./Box.module.scss";
import Label from "@/components/Label";

interface BoxProps {
  color: string;
  children: React.ReactNode;
  label?: string;
  disabled?: boolean;
}

const Box = ({ children, color, label, disabled }: BoxProps) => {
  return (
    <div
      className={`${styles.box} ${styles[color]} ${disabled ? styles.disabled : ""}`}
    >
      {label && (
        <div className={styles.label}>
          <Label text={label} />
        </div>
      )}
      {children}
    </div>
  );
};

export default Box;
