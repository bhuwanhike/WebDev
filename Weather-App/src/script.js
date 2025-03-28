const api = "d7380800899c280f92c73c9e823e9c00";

let humidity = document.querySelector("#humidity");
let windspeed = document.querySelector("#speed");
let cityname = document.querySelector(".city");
let temp = document.querySelector("#temp");
let weatherimage = document.querySelector(".weatherimage");
let searchcity = document.querySelector("#searchbar");
let searchbtn = document.querySelector("#searchbtn");
let detail = document.querySelector(".details");

// const url = ;
async function weat(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
    );
    if (response.status == 404) {
      cityname.innerHTML = "No data found";
      weatherimage.classList.add("hidden");
      detail.classList.add("hidden");
      temp.classList.add("hidden");
    }

    const result = await response.json();
    humidity.innerHTML = result.main.humidity + "%";
    windspeed.innerHTML = result.wind.speed + "km/h";
    cityname.innerHTML = result.name;
    let tempint = result.main.temp;
    temp.innerHTML = parseInt(tempint) - 273 + "&deg;C";
    if (result.weather[0].main == "Clouds") {
      weatherimage.setAttribute("src", "/images/clouds.png");
    } else if (result.weather[0].main == "Clear") {
      weatherimage.setAttribute("src", "/images/clear.png");
    } else if (result.weather[0].main == "Drizzle") {
      weatherimage.setAttribute("src", "/images/drizzle.png");
    } else if (result.weather[0].main == "Mist") {
      weatherimage.setAttribute("src", "/images/mist.png");
    } else if (result.weather[0].main == "Rain") {
      weatherimage.setAttribute("src", "/images/rain.png");
    } else if (result.weather[0].main == "Snow") {
      weatherimage.setAttribute("src", "/images/snow.png");
    }
  } catch (error) {
    console.error(error);
  }
}

searchbtn.addEventListener("click", () => {
  weat(searchcity.value);
});
