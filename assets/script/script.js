

var cityInputEl = document.querySelector("#city-name");
var submitbtn = document.querySelector(".submit-btn")


// "http://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&APPID=a84acfeca58c314cd811a6eeefed64ff"




var getWeatherApi = function() {
  var searchCity = cityInputEl.value
  // call function for button to place city in list
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&units=imperial&APPID=a84acfeca58c314cd811a6eeefed64ff").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
    generateWeatherCard(data)
    getForecastApi(searchCity)
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
//     var forecastCard = document.querySelector("#first-day")    
//     forecastCard.classList.add("#first-day")
//     var cityName = document.createElement("h1");
//     cityName.textContent = data.list[0].dt_txt;
//     forecastCard.append(cityName)
//     var temp = document.createElement("h3");
//   temp.textContent = "Temp: "+data.list[0].main.temp;
//  forecastCard.append(temp);
//   var wind = document.createElement("h3");
//   wind.textContent = "Wind: "+data.list[0].wind.speed;
//  forecastCard.append(wind);
//   var humidity = document.createElement("h3");
//   humidity.textContent = "Humidity: "+data.list[0].main.humidity;
//  forecastCard.append(humidity);

 for(var i = 0; i < data.list.length; i+=8){

  var forecastCard = document.querySelector("#first-day")    
    forecastCard.classList.add("#first-day")
    var cityName = document.createElement("h1");
    cityName.textContent = data.list[i].dt_txt;
    forecastCard.append(cityName)
    var temp = document.createElement("h3");
  temp.textContent = "Temp: "+data.list[i].main.temp;
 forecastCard.append(temp);
  var wind = document.createElement("h3");
  wind.textContent = "Wind: "+data.list[i].wind.speed;
 forecastCard.append(wind);
  var humidity = document.createElement("h3");
  humidity.textContent = "Humidity: "+data.list[i].main.humidity;
 forecastCard.append(humidity);
 }
    
// function cityList() {
//   var newbtn = 
// }
  }
  // var searchCity = cityInputEl.value
  submitbtn.addEventListener("click", getWeatherApi);
  // submitbtn.addEventListener("click", getForecastApi);

  // possible multifetch with one button

  // Promise.all([
  //   fetch("https://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&units=imperial&APPID=a84acfeca58c314cd811a6eeefed64ff"),
  //   fetch("https://api.openweathermap.org/data/2.5/forecast?q="+searchCity+"&units=imperial&APPID=a84acfeca58c314cd811a6eeefed64ff")
  // ]).then(function (responses) {
  //   // Get a JSON object from each of the responses
  //   return Promise.all(responses.map(function (response) {
  //     return response.json();
  //   }));
  // }).then(function (data) {
  //   // Log the data to the console
  //   // You would do something with both sets of data here
  //   console.log(data);
  // }).catch(function (error) {
  //   // if there's an error, log it
  //   console.log(error);
  // });

  