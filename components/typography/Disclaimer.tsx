import styles from "./Disclaimer.module.scss";

export const Disclaimer = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <i className={`${styles.disclaimer} ${className}`}>{children}</i>;
