function getWeather(apikey, zip) {
  const units = 'imperial';
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;

  const resPromise = fetch(path);
  const jsonPromise = resPromise.then((res) => res.json());

  return jsonPromise;
}

export default getWeather;
