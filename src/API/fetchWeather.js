const api = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "8d7604b0aa004f632327b91356b902d6",
};

export const fetchWeather = async (city) => {
  console.log(city);
  const data = await fetch(
    `${api.base}weather?q=${city}&appid=${api.key}&units=metric`
  )
    .then((data) => data.json())
    .catch((error) => {
      console.log(error);
    });
  return data;
};
