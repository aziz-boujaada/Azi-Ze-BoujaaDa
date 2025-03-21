console.log("script loaded");

const lightMode = document.getElementById("light_mode");
const darkMode = document.getElementById("dark_mode");
const weatherSection = document.getElementById("weather_display");
function lightDarkMode() {

  if (!lightMode || !darkMode || !weatherSection) {
    console.error("element not found");
    return;
  }

  lightMode.addEventListener("click", () => {
    weatherSection.classList.remove("dark_mode_colors");
    weatherSection.classList.add("light_mode_colors");
    darkMode.classList.remove("active_mode");
    lightMode.classList.add("active_mode");
  });
  darkMode.addEventListener("click", () => {
    weatherSection.classList.add("dark_mode_colors");
    weatherSection.classList.remove("light_mode_colors");
    darkMode.classList.add("active_mode");
    lightMode.classList.remove("active_mode");
  });
}
lightDarkMode();

//Update clock
function updateClock() {
  const timeDisplay = document.querySelector(".time_display");
  if (!timeDisplay) {
    console.error("time display element not found");
    return;
  }

  setInterval(() => {
    const now = new Date();
    let hours = now.getHours();
    let minute = now.getMinutes();

    if(minute<10){
        minute = "0" + minute;
    }

    let AMPM 
    if(hours>=12){
        AMPM = "PM"
    }else{
        AMPM =  "AM"
    }

    hours = hours%12;
    if(hours===0){
        hours=12;
    }
    timeDisplay.innerHTML = `<h3>${hours} : ${minute} ${AMPM}</h3>`
  },1000);
}
updateClock();



//weather data 

const temperature = document.querySelector(".temperature");
const tempFeelsLike = document.querySelector(".feels_like");
const windSpeed = document.querySelector(".wind_speed");
const humidity = document.querySelector(".humidity");
const visibility = document.querySelector(".visibility");
const pressure = document.querySelector(".pressure");
const YourCity = document.querySelector(".city_display");
const weatherStateShow = document.querySelector(".weather_state");
document.addEventListener("DOMContentLoaded" ,function(){

  if(!temperature ||!tempFeelsLike|| !windSpeed || !humidity || !visibility || !pressure ||!YourCity ||!weatherStateShow){
    console.error("one or more element not found");
    
  }
  
});

//function to get current location
const apiKey = "YOUR_API_KEY";
function UseCurrentLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position) =>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log(` your current position : ${lat} , ${lon}`);
      getWeatherByLocation(lat ,lon ,apiKey);
  
    },
    (error)=>{
      console.error("get location failed" ,error.message)
    }
    
  )
  }else{
    console.error("browser not supported location")
  }
}

//get weather by user location
function getWeatherByLocation(lat , lon ,apiKey){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
  .then(response=> response.json())
  .then (data => {
   
    UpdateWeatherUI(data);
    comingDaysForecast({name: data.name} ,apiKey); 
 
  })
}
function UpdateWeatherUI(data){
 

  const weatherConditions = data.weather[0].description;
  console.log("description " ,weatherConditions);
  const weatherIcon = data.weather[0].icon;
  console.log("icon " ,weatherIcon);
  
  YourCity.innerHTML = `<h3>${data.name}</h3>`;
  
  weatherStateShow.innerHTML = `
   <h3>${weatherConditions}</h3>
   <img src="https://openweathermap.org/img/wn/${weatherIcon}.png" alt="${weatherConditions}">
  `
  const ImgUrlJpg = `images/${weatherConditions.replace(/\s/g , "_")}.jpg`
  
  weatherSection.style.backgroundImage = `url("${ImgUrlJpg}")`
  
  
  temperature.innerHTML =`<h3> <span><i class="fa-solid fa-temperature-low"></i> temperature <br> </span> ${data.main.temp} C°</h3>`
  tempFeelsLike.innerHTML =`<h3><span><i class="fa-solid fa-temperature-low"></i> feels like <br> </span> ${data.main.feels_like} C°</h3>`
  windSpeed.innerHTML =`<h3><span><i class="fa-solid fa-wind"></i> wind <br> </span> ${data.wind.speed} KM/H</h3>`
  humidity.innerHTML =`<h3><span><i class="fa-solid fa-droplet"></i>Humidity <br> </span> ${data.main.humidity} %</h3>`
  visibility.innerHTML =`<h3><span><i class="fa-solid fa-eye"></i>Visibility <br> </span> ${(data.visibility/1000).toFixed(1)} KM</h3>`
  pressure.innerHTML =`<h3><span><i class="fa-solid fa-gauge"></i> Pressure <br> </span> ${data.main.pressure} Hpa</h3>`
   
  }

//fetch cities from Json file
let cityList = [];
fetch("moroccan-cities.json")
.then(response => response.json())
.then(data =>{
  cityList = data
})
.catch(error=> console.error("upload cities failed" , error))

// function to Get cities weather 
function GetCitiesWeather(){
const UserInput = document.getElementById("cityInput").value.trim().toLowerCase();
const foundCity = cityList.find(city => city.name.toLowerCase()===UserInput);

if(!foundCity){
 UseCurrentLocation();
 return;
}else{
  
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${foundCity.name}&appid=${apiKey}&units=metric`)


.then(response => response.json())
.then(data => {
  UpdateWeatherUI(data);
  comingDaysForecast(foundCity ,apiKey);

})

}
}


//Forecast for 5 coming days 
function comingDaysForecast(city ,apiKey){

  const daysContainer =document.querySelectorAll(".forecast_days .day");
  if(daysContainer.length===0){
      console.error("this element not found ");
  }
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city.name}&appid=${apiKey}&units=metric`)
   .then(response => response.json())
   .then(data=>{
     console.log("forecast 5 days " , data);
  
    let dailyForecast = [];
     data.list.forEach(entry => {
      let date = entry.dt_txt.split(" ")[0];
      let dayName = new Date(date).toLocaleDateString("en-US" , {weekday :"long"});
      if(!dailyForecast.some(forecast=>forecast.date===date)){
        dailyForecast.push({
          date :date,
          dayName:dayName,
          temp: entry.main.temp,
          wind : entry.wind.speed,
          humidity : entry.main.humidity,
          rain: entry.rain ? (entry.rain["3h"] || 0) : 0
        });
      }
     });
  
     daysContainer.forEach((day ,index)=>{
      if(dailyForecast[index]){
        day.innerHTML= `
          <p> <i class="fa-solid fa-calendar-days"></i> ${dailyForecast[index].dayName}</p>
          <p> <i class="fa-solid fa-temperature-low"></i>${dailyForecast[index].temp}C°</p>
          <p> <i class="fa-solid fa-wind"></i> ${dailyForecast[index].wind}KM/h</p>
          <p> <i class="fa-solid fa-droplet"></i> ${dailyForecast[index].humidity}%</p>
          <p> <i class="fa-solid fa-cloud-rain"></i>${dailyForecast[index].rain}mm</p>
        
        `
      }else{
        UpdateWeatherUI(data)
      }
     });
   });
}


