import styles from "./Cities.module.css";

const Cities = ({ cities }) => {
  console.log(cities);
  return (
    <>
      <div className={styles["container"]}>
        {cities.map((city) => (
          <li className={styles["city"]}>{city}</li>
        ))}
      </div>
    </>
  );
};

export default Cities;
