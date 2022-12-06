import styles from "./Error.module.css";

const Error = () => {
  return (
    <>
      <div className={styles["error-message"]}>Such town was not found.</div>
    </>
  );
};

export default Error;
