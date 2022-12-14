import styles from "./Cities.module.css";

const Cities = ({ cities, search }) => {
  console.log(cities);
  const onSelectCityHandler = (city) => {
    search(city);
  };
  const onDeleteCityHandler = (city) => {};
  return (
    <>
      <div className={styles["container"]}>
        {cities.map((city) => (
          <div className={styles["city-btn"]} key={city.id}>
            <li
              onClick={(e) => {
                onSelectCityHandler(e.target.innerHTML);
              }}
            >
              {city.name}
            </li>
            <div key={city.id} className={styles["image-container"]}>
              <img
                onClick={(e) => {
                  onDeleteCityHandler(e);
                }}
                src={`images/close-btn.png`}
              ></img>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cities;
