// https://api.openweathermap.org/data/2.5/weather?q=Germany&appid=&units=metric

//always use const variable because - "let" allows you to reassign a variable's value after it's declared, while "const" creates a constant variable, meaning its value cannot be changed once

const apikey = "8b42e0b37501e22481f0b6ca6ef5124c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox = document.querySelector(".search input")
const searchbtn = document.querySelector(".search button")


async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
    document.querySelector(".humidity").innerHTML = (data.main.humidity);
    document.querySelector(".wind").innerHTML = (data.wind.speed) + " Km/h";


    if (data.weather[0].main == "Clear") {
        document.querySelector(".weather-icon").src = "images/clear.png"
    }
    else if (data.weather[0].main == "Clouds") {
        document.querySelector(".weather-icon").src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Rain") {
        document.querySelector(".weather-icon").src = "images/rain.png"
    }
    else if (data.weather[0].main == "Drizzel") {
        document.querySelector(".weather-icon").src = "images/drizzel.png"
    }
    else if (data.weather[0].main == "Mist") {
        document.querySelector(".weather-icon").src = "images/mist.png"
    }

    document.querySelector(".weather").style.display = "block";
}


searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value)
})

searchbox.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        checkweather(searchbox.value)
    }
})

