import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
      <p className={styles.text}>Завантаження...</p>
    </div>
  );
};
