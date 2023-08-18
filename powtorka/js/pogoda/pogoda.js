function getWeatherForecastForCity(city) {}

function getWeatherForCity(miasto) {
  const api_key = "ac6428ea7fc0ef9caef037d08a02ce91";
  // const miasto = "Lodz";
  const endpoint =
    `https://api.openweathermap.org/data/2.5/weather?q=${miasto}&units=metric&lang=pl&appid=` +
    api_key;

  fetch(endpoint)
    .then((response) => response.json())
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
function submitForm(event) {
  event.preventDefault();
  // console.log(event);
  const cityName = document.getElementById("cityName").value;
  // console.log(cityName);
  getWeatherForCity(cityName);
}

document.getElementById("formularz").addEventListener("submit", submitForm);
// getApiData("Warszawa");
getWeatherForCity(document.getElementById("cityName").value);
