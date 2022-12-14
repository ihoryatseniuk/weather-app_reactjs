import styles from "./Cities.module.css";

const Cities = ({ cities, search, deleteCityHandler }) => {
  console.log(cities);
  const onSelectCityHandler = (city) => {
    search(city);
  };
  const onDeleteCityHandler = (id) => {
    deleteCityHandler(id);
  };
  return (
    <>
      <div className={styles["container"]}>
        {cities.map((city) => (
          <div className={styles["city-btn"]} key={city.id}>
            <li
              onClick={(e) => {
                onSelectCityHandler(city);
              }}
            >
              {city.name}
            </li>
            <div
              onClick={() => {
                onDeleteCityHandler(city.id);
              }}
              key={city.id}
              className={styles["image-container"]}
            >
              <img src={`images/close-btn.png`}></img>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cities;
