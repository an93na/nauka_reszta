function getIconUrl(icon) {
  return "https://openweathermap.org/img/w/" + icon + ".png";
}

function getTempText(temp) {
  return temp + "°C";
}

function getDateTimeFromTimestamp(timestamp) {
  const date = new Date(timestamp*1000)
  const year = date.getFullYear()
  const month = date.getMonth()+1
  const day = date.getDate()
  const hour = date.getHours()
  const minutes = date.getMinutes()
const seconds = date.getSeconds()
  return date
}

function getDataFromApi(endpoint, city) {
  const api_key = "ac6428ea7fc0ef9caef037d08a02ce91";
  const host = "https://api.openweathermap.org/data/2.5";
  const url =
    host + endpoint + "?q=" + city + "&units=metric&lang=pl&appid=" + api_key;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
function getWeatherForecastForCity(city) {
  const endpoint = "/forecast";
  getDataFromApi(endpoint, city).then((data) => {
    console.log(data);
  });
}
// wczesniej nazywała się getApiData
function getWeatherForCity(city) {
  // const miasto = "Lodz";
  const endpoint = "/weather";

  getDataFromApi(endpoint, city)
    .then((data) => {
      console.log(data);
      const city = data.name;
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const icon = getIconUrl(data.weather[0].icon);

      // wstawienie danych do HTML
      document.getElementById("city").textContent = city;
      document.getElementById("temp").textContent = getTempText(temp);
      document.getElementById("desc").textContent = desc;
      document.getElementById("icon").src = icon;
    })
    .catch((error) => console.error(error));
}

function getCityName() {
  return document.getElementById("cityName").value;
}

function submitForm(event) {
  event.preventDefault();
  // console.log(event);
  getWeatherForCity(getCityName());
  getWeatherForecastForCity(getCityName());
}

document.getElementById("formularz").addEventListener("submit", submitForm);
// getApiData("Warszawa");
getWeatherForCity(getCityName());
getWeatherForecastForCity(getCityName());
