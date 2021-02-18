async function getWeather(apikey, zip) {
  const units = 'imperial';
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;

  try {
    const res = await fetch(path);
    const json = await res.json();
    console.log(json);
    const weatherData = {
      code: json.cod,
      coord: json.coord,
      temp: json.main.temp,
      feels_like: json.main.feels_like,
      temp_min: json.main.temp_min,
      temp_max: json.main.temp_max,
      description: json.weather[0].description,
    };
    return weatherData;
  } catch (err) {
    return err;
  }
}

export default getWeather;
