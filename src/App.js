import classes from "./styles/App.module.css";
import Input from "./components/Input/Input.jsx";
import Weather from "./components/Weather/Weather.jsx";
import Error from "./components/Error/Error.jsx";
import { fetchWeather } from "./API/fetchWeather";
import { useState, useEffect } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();

  const search = async (storage) => {
    const data = await fetchWeather(city);
    setWeather(data);
    localStorage.setItem("city", JSON.stringify(city));
    setCity("");
  };

  const realoadFetching = async () => {
    let storage = JSON.parse(localStorage.getItem("city"));
    const data = await fetchWeather(storage);
    setWeather(data);
    setCity("");
  };

  useEffect(() => {
    realoadFetching();
  }, []);

  if (weather) {
    return (
      <div>
        <h1 className={classes.header}>Weather App</h1>
        <Input setCity={setCity} city={city} search={search} />
        {weather.cod === 200 ? <Weather weather={weather} /> : <Error />}
      </div>
    );
  } else {
    return (
      <div>
        <h1 className={classes.header}>Weather App</h1>
        <Input setCity={setCity} city={city} search={search} />
      </div>
    );
  }
}

export default App;
