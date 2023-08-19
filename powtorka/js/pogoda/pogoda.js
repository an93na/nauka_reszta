function getDataFromApi(endpoint, city) {
  const api_key = "ac6428ea7fc0ef9caef037d08a02ce91";
  const host = `https://api.openweathermap.org/data/2.5`;
  const url =
    host + endpoint + "?q=" + city + "&units=metric&lang=pl&appid=`" + api_key;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}
function getWeatherForecastForCity(city) {
  const endpoint = "/forecast";
  getDataFromApi(endpoint, city);
}
// wczesniej nazywała się getApiData
function getWeatherForCity(city) {
  const endpoint = "/weather";

  getDataFromApi(endpoint, city)
    .then((data) => {
      console.log(data); // wyświetlanie danych w konsoli
      const city = data.name;
      const temp = data.main.temp;
      const desc = data.weather[0].description;
      const icon =
        "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

      // wstawienie danych do HTML
      document.getElementById("city").textContent = city;
      document.getElementById("temp").textContent = temp + "°C";
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
