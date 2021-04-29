

var cityInputEl = document.querySelector("#city-name");
var submitbtn = document.querySelector(".submit-btn")
var city = [];

var d = moment().format("MMM Do YYYY") 
// d.setAttribute("heading h4")      
      
       document.getElementById("currentDay").innerHTML = d;
// "http://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&APPID=a84acfeca58c314cd811a6eeefed64ff"


var saveCity = function() {
  localStorage.setItem("city", JSON.stringify(city));
}


var getWeatherApi = function() {
  var searchCity = cityInputEl.value
  // call function for button to place city in list
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&units=imperial&APPID=a84acfeca58c314cd811a6eeefed64ff").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
    generateWeatherCard(data)
    getForecastApi(searchCity)
    saveCity()

  });
});
  };
  
 

  var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
  };

  // submitbtn.addEventListener("click", getWeatherApi);
  // submitbtn.addEventListener("click", getForecastApi);
  

function generateWeatherCard(data) {
  var weatherCard = document.querySelector("#weather-card")
  
  weatherCard.classList.add("#weather-card")
  var cityName = document.createElement("h1");
  cityName.textContent = data.name;
  weatherCard.append(cityName)
  var temp = document.createElement("h3");
  temp.textContent = "Temp: "+data.main.temp;
  weatherCard.append(temp);
  var wind = document.createElement("h3");
  wind.textContent = "Wind: "+data.wind.speed;
  weatherCard.append(wind);
  var humidity = document.createElement("h3");
  humidity.textContent = "Humidity: "+data.main.humidity;
  weatherCard.append(humidity);


}

// var cityInputE2 = document.querySelector("#city-forecast");
// var submitbtn2 = document.querySelector("#submit-btn2")


var getForecastApi = function(searchCity) {
  // var searchCity = cityInputE1.value
  // call function for button to place city in list
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+searchCity+"&units=imperial&APPID=a84acfeca58c314cd811a6eeefed64ff").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
    generateForecastCard(data)
  });
});
  };

  // submitbtn.addEventListener("click", getForecastApi);

  function generateForecastCard(data) {
    

//  for (var i = 0; i < data.list.length; i+=8){


  
  var forecastCard = document.querySelector("#first-day")    
    forecastCard.classList.add("#first-day")
    var cityName = document.createElement("h1");
    cityName.textContent = data.list[0].dt_txt;
    forecastCard.append(cityName)
    var temp = document.createElement("h3");
  temp.textContent = "Temp: "+data.list[0].main.temp;
 forecastCard.append(temp);
  var wind = document.createElement("h3");
  wind.textContent = "Wind: "+data.list[0].wind.speed;
 forecastCard.append(wind);
  var humidity = document.createElement("h3");
  humidity.textContent = "Humidity: "+data.list[0].main.humidity;
 forecastCard.append(humidity);
 
 var forecastCard = document.querySelector("#second-day")    
 forecastCard.classList.add("#second-day")
 var cityName = document.createElement("h1");
 cityName.textContent = data.list[8].dt_txt;
 forecastCard.append(cityName)
 var temp = document.createElement("h3");
temp.textContent = "Temp: "+data.list[8].main.temp;
forecastCard.append(temp);
var wind = document.createElement("h3");
wind.textContent = "Wind: "+data.list[8].wind.speed;
forecastCard.append(wind);
var humidity = document.createElement("h3");
humidity.textContent = "Humidity: "+data.list[8].main.humidity;
forecastCard.append(humidity);
 
var forecastCard = document.querySelector("#third-day")    
    forecastCard.classList.add("#third-day")
    var cityName = document.createElement("h1");
    cityName.textContent = data.list[16].dt_txt;
    forecastCard.append(cityName)
    var temp = document.createElement("h3");
  temp.textContent = "Temp: "+data.list[16].main.temp;
 forecastCard.append(temp);
  var wind = document.createElement("h3");
  wind.textContent = "Wind: "+data.list[16].wind.speed;
 forecastCard.append(wind);
  var humidity = document.createElement("h3");
  humidity.textContent = "Humidity: "+data.list[16].main.humidity;
 forecastCard.append(humidity);
  
 var forecastCard = document.querySelector("#forth-day")    
 forecastCard.classList.add("#forth-day")
 var cityName = document.createElement("h1");
 cityName.textContent = data.list[24].dt_txt;
 forecastCard.append(cityName)
 var temp = document.createElement("h3");
temp.textContent = "Temp: "+data.list[24].main.temp;
forecastCard.append(temp);
var wind = document.createElement("h3");
wind.textContent = "Wind: "+data.list[24].wind.speed;
forecastCard.append(wind);
var humidity = document.createElement("h3");
humidity.textContent = "Humidity: "+data.list[24].main.humidity;
forecastCard.append(humidity);

var forecastCard = document.querySelector("#fifth-day")    
    forecastCard.classList.add("#fifth-day")
    var cityName = document.createElement("h1");
    cityName.textContent = data.list[32].dt_txt;
    forecastCard.append(cityName)
    var temp = document.createElement("h3");
  temp.textContent = "Temp: "+data.list[32].main.temp;
 forecastCard.append(temp);
  var wind = document.createElement("h3");
  wind.textContent = "Wind: "+data.list[32].wind.speed;
 forecastCard.append(wind);
  var humidity = document.createElement("h3");
  humidity.textContent = "Humidity: "+data.list[32].main.humidity;
 forecastCard.append(humidity);

  saveCity()

  }
  
  submitbtn.addEventListener("click", getWeatherApi);
  
  