const apiKey = 'a7805fc65820c7d1ce2393d7cb064149';
const temperature=document.querySelector("#temperature")
const type=document.querySelector("#type")
const description=document.querySelector("#description")
const wind=document.querySelector("#wind")
const error=document.querySelector("#error")
const info=document.querySelector("#weather-info")

function getWeather(){
    const city=document.querySelector("#city-input").value
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      return response.json();
    })
    .then(data => {
        console.log(data)
        error.innerHTML=""
        info.style.display="block"
        temperature.innerHTML=Math.round(data.main.temp) + "°C"
        type.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
        description.innerHTML=data.weather[0].description
        wind.innerHTML=data.wind.speed + "km/h"
    })
    .catch(error => {
        console.log(error)
        showError()
    });
}


function showError() {
  info.style.display = "none";
  error.innerHTML = "City not found <span>&#x1F61E;</span>"; // Emoji for a sad face
}
