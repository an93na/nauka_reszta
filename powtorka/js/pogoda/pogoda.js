function getIconUrl(icon) {
  return "https://openweathermap.org/img/w/" + icon + ".png";
}

function getTempText(temp) {
  return temp + "°C";
}
function getNumberAsStringWithLeadingZero(value) {
  if (value <= 9) {
    return `0${value}`;
  }
  return `${value}`;
}
function getDateTimeFromTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = getNumberAsStringWithLeadingZero(date.getMonth() + 1);
  const day = getNumberAsStringWithLeadingZero(date.getDate());
  const hour = getNumberAsStringWithLeadingZero(date.getHours());
  const minutes = getNumberAsStringWithLeadingZero(date.getMinutes());
  const seconds = getNumberAsStringWithLeadingZero(date.getSeconds());
  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
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
  const forecastList = document.getElementById("forecast-list");
  const endpoint = "/forecast";
  function canShowItem(timestamp) {
    const hours = ["09", "15"];
    const date = new Date(timestamp * 1000);
    const hour = getNumberAsStringWithLeadingZero(date.getHours());
    return hours.includes(hour)
  }
  getDataFromApi(endpoint, city).then((data) => {
    // console.log(data);
    data.list.forEach((item) => {
      console.log(item);
      if (canShowItem(item.dt)) {
        const li = document.createElement("li");
        const content = `
      <img src="${getIconUrl(item.weather[0].icon)}" />
      <p>${item.dt_txt}</p>
      <p>${getTempText(item.main.temp)}</p>
      <p>${item.weather[0].description}</p>
      `;
        li.innerHTML = content;
        forecastList.appendChild(li);
      }
    });
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
console.log(getDateTimeFromTimestamp(1693194009));
