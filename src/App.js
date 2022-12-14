import classes from "./styles/App.module.css";
import Input from "./components/Input/Input.jsx";
import Weather from "./components/Weather/Weather.jsx";
import Error from "./components/Error/Error.jsx";
import { fetchWeather } from "./API/fetchWeather";
import { useState, useEffect } from "react";
import Cities from "./components/Cities/Cities";

function App() {
  const [cities, setCities] = useState(
    localStorage.getItem("cities") === null
      ? []
      : JSON.parse(localStorage.getItem("cities"))
  );

  const [weather, setWeather] = useState();

  const search = async (city) => {
    const data = await fetchWeather(city);

    if (data.cod === 200) {
      citiesLocalStorage(city);
    }
    setWeather(data);
  };

  const citiesLocalStorage = (city) => {
    if (cities.includes(city.id)) {
      setCities([...cities]);
    } else {
      setCities([...cities, city]);
    }
  };

  const reloadFetching = async () => {
    let storage = JSON.parse(localStorage.getItem("city"));
    const data = await fetchWeather(storage);
    setWeather(data);
  };

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  useEffect(() => {
    reloadFetching();
  }, []);

  if (weather) {
    return (
      <div>
        <h1 className={classes.header}>Weather App</h1>
        <Input search={search} />
        <Cities search={search} cities={cities} />
        {weather.cod === 200 ? <Weather weather={weather} /> : <Error />}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className={classes.header}>Weather App</h1>
        <Input search={search} />
        <Cities search={search} cities={cities} />
      </div>
    );
  }
}

export default App;
