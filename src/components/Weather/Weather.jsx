import styles from "./Weather.module.css";

const Weather = ({ weather }) => {
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles["name_country"]}
        >{`${weather.name},  ${weather.sys.country}`}</div>
        <div className={styles.temperature}>{`${weather.main.temp} °C`}</div>
        <div className={styles.image}>
          <img src={`images/${weather.weather[0].icon}.png`}></img>
        </div>
        <div className={weather.description}>
          {weather.weather[0].description}
        </div>
      </div>
    </>
  );
};

export default Weather;
