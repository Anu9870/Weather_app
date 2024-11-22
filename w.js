const apiKey = "abedcac8398cc26afba9f293b1618c4a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchCity = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
    var data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".tmp").innerHTML = Math.round(data.main.temp) +"°c";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/hr";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".lon").innerHTML = Math.round(data.coord.lon) +"°";
    document.querySelector(".lat").innerHTML = Math.round(data.coord.lat) +"°";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="images/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="images/clear.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="images/rain.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="images/drizzle.png";
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="images/mist.png";
    }

    //console.log(data);
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchCity.value);
})
