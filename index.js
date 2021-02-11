function getWeather(apikey, zip, callback) {
  const units = 'imperial';
  const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;
  fetch(path)
    .then((res) => res.json())
    .then((json) => {
      callback(json);
    })
    .catch((err) => console.log(err.message));
}

export default getWeather;
