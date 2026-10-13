import styles from "./Disclaimer.module.scss";

export const Disclaimer = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`${styles.disclaimer} ${className}`}>{children}</p>
);
