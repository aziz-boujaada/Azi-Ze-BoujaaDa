console.log("script loaded");
function lightDarkMode() {
  const lightMode = document.getElementById("light_mode");
  const darkMode = document.getElementById("dark_mode");
  const weatherSection = document.getElementById("weather_display");

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
const windSpeed = document.querySelector(".wind_speed");
const humidity = document.querySelector(".humidity");
if(!temperature || !windSpeed || !humidity){
    console.error("element not found");
    
}
const apiKey= "55f0946fa2e98f33e4f1b12faa88a2db";
const City = "Casablanca";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${apiKey}&units=metric`)


.then(response => response.json())
.then(data => {

    temperature.innerHTML =`<h3> <i class="fa-solid fa-temperature-low"></i> ${data.main.temp} C°</h3>`
    windSpeed.innerHTML =`<h3> <i class="fa-solid fa-wind"></i>${data.wind.speed} KM/H</h3>`
    humidity.innerHTML =`<h3><i class="fa-solid fa-droplet"></i> ${data.main.humidity} %</h3>`

});

//Forecast for 5 coming days 
const daysContainer =document.querySelectorAll(".forecast_days .day");
if(daysContainer.length===0){
    console.error("this element not found ");
}
fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${City}&appid=${apiKey}&units=metric`)
 .then(response => response.json())
 .then(data=>{
   console.log("forecast 5 days " , data);

  let dailyForecast = [];
   data.list.forEach(entry => {
    let date = entry.dt_txt.split(" ")[0];
    if(!dailyForecast.some(forecast=>forecast.date===date)){
      dailyForecast.push({
        date :date,
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
        <p> <i class="fa-solid fa-calendar-days"></i> ${dailyForecast[index].date}<br></p>
        <p> <i class="fa-solid fa-temperature-low"></i>${dailyForecast[index].temp}C°</p>
        <p> <i class="fa-solid fa-wind"></i> ${dailyForecast[index].wind}KM/h</p>
        <p> <i class="fa-solid fa-droplet"></i> ${dailyForecast[index].humidity}%</p>
        <p> <i class="fa-solid fa-cloud-rain"></i>${dailyForecast[index].rain}mm</p>
      
      `
    }
   });
 });

