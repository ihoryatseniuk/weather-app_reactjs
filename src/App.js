import classes from "./styles/App.module.css";
import Input from "./components/Input/Input.jsx";
import Weather from "./components/Weather/Weather.jsx";
import Error from "./components/Error/Error.jsx";
import { fetchWeather } from "./API/fetchWeather";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();

  const search = async () => {
    const data = await fetchWeather(city);
    setWeather(data);
    setCity("");
  };

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
