import styles from "./RequiredField.module.scss";
export default function RequiredField() {
  return <span className={styles.error}> *</span>;
}
