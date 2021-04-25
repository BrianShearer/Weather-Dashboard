

var cityInputEl = document.querySelector("#city-name");
var submitbtn = document.querySelector("#submit-btn")







var getWeatherApi = function() {
  var searchCity = cityInputEl.value
  // call function for button to place city in list
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+searchCity+"&APPID=a84acfeca58c314cd811a6eeefed64ff").then(function(response) {
  response.json().then(function(data) {
    console.log(data);
    generateWeatherCard(data)
  });
});
  };
  
 

  var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
  };

  submitbtn.addEventListener("click", getWeatherApi);

function generateWeatherCard(data) {
  var weatherCard = document.querySelector("#weather-card")
  
  weatherCard.classList.add("#weather-card")
  var cityName = document.createElement("h2");
  cityName.textContent = data.name;
  weatherCard.append(cityName)
  // var temp = document.createElement("h3");
  // temp.textContent = "current; "+data.main.temp;
  // weatherCard.append(temp);


}

// function cityList() {
//   var newbtn = 
// }
  