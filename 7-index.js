function displayDateTime() {
    const now = new Date();
    const dayOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ][now.getDay()];
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
    const dateTimeString = `${dayOfWeek} ${time}`;
    document.getElementById("date-time").textContent = dateTimeString;
  }
  
  function convertToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }
  
  document.getElementById("convert-link").addEventListener("click", function (e) {
    e.preventDefault();
    const tempCelsius = parseFloat(
      document.getElementById("temp-celsius").textContent
    );
    if (e.target.textContent === "Convert to Fahrenheit") {
      const tempFahrenheit = convertToFahrenheit(tempCelsius);
      document.getElementById("temp-celsius").textContent = tempFahrenheit;
      e.target.textContent = "Convert to Celsius";
    } else {
      document.getElementById("temp-celsius").textContent = 17;
      e.target.textContent = "Convert to Fahrenheit";
    }
  });
  
  document
    .getElementById("city-search-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      const cityInput = document.getElementById("city-input").value;
      document.getElementById("city-result").textContent = `City: ${cityInput}`;
    });
  
  displayDateTime();

const apiKey = 'f54e3b1562279d53d062638431ad1249'; 
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if (city) {
        fetchWeather(city);
    }
});

function fetchWeather(city) {
    const url = `${baseUrl}?q=${city}&appid=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperatureCelsius = data.main.temp - 273.15;
            const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

            document.getElementById('weatherInfo').innerHTML = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${temperatureCelsius.toFixed(2)}&deg;C / ${temperatureFahrenheit.toFixed(2)}&deg;F</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function getCurrentLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchWeatherByCoords(latitude, longitude);
        });
    } else {
        alert("Geolocation is not supported in your browser.");
    }
}
fetch(url)
.then(response => response.json())
.then(data => {
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;
    const weatherIconClass = `owf owf-${data.weather[0].id}`;

    const resultText = `City: ${data.name}, Temperature: ${temperatureCelsius.toFixed(2)}°C, Description: ${data.weather[0].description} <i class="${weatherIconClass}"></i>`;

    // Display result in an h3 element with the weather icon
    document.getElementById('resultText').innerHTML = resultText;
    // Display wind speed in an h3 element
    document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} m/s`;

    // Display humidity in an h3 element
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
    // Update the time and date in the h4 element
    updateDateTime();
})
.catch(error => {
    console.error('Error fetching weather data:', error);
});

function fetchWeatherByCoords(latitude, longitude) {
    const url = `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperatureCelsius = data.main.temp - 273.15;
            const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

            const resultText = `City: ${data.name}, Temperature: ${temperatureCelsius.toFixed(2)}°C / ${temperatureFahrenheit.toFixed(2)}°F, Description: ${data.weather[0].description}`;

        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
} 

function getCurrentLocation() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            fetchWeatherByCoords(latitude, longitude);
        });
    } else {
        alert("Geolocation is not supported in your browser.");
    }
}

function fetchWeatherByCoords(latitude, longitude) {
    const url = `${baseUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const temperatureCelsius = data.main.temp - 273.15;
            const temperatureFahrenheit = (temperatureCelsius * 9/5) + 32;

            const resultText = `City: ${data.name}, Temperature: ${temperatureCelsius.toFixed(2)}°C / ${temperatureFahrenheit.toFixed(2)}°F, Description: ${data.weather[0].description}`;
            
           
            document.getElementById('resultText').textContent = resultText;

            const axios = require('axios');

const weatherDescription = data.weather[0].description;
const unsplashApiUrl = https;//api.unsplash.com/photos/random?query=${weatherDescription}&orientation=landscape&client_id=wSM76rP3L2vzq8ipLb4s8MWA0LUfRGTMrHvTpzAEO-4;

axios.get(unsplashApiUrl)
  .then(response => {
    const backgroundImageUrl = response.data.urls.regular;
    body.style.backgroundImage = url($[backgroundImageUrl])
  })
  .catch(error => {
    console.log(error);
    // handle errors
  });

            updateDateTime();
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
    }

document.getElementById('convertButton').addEventListener('click', () => {
    const temperatureUnit = document.getElementById('tempUnit').value;
    const currentTemperature = document.getElementById('currentTemperature').textContent;
    let convertedTemperature;

    if (temperatureUnit === 'celsius') {
        // Convert to Celsius
        convertedTemperature = currentTemperature;
    } else {
        // Convert to Fahrenheit
        const celsiusTemperature = parseFloat(currentTemperature);
        const fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
        convertedTemperature = fahrenheitTemperature.toFixed(2) + '°F';
    }

    document.getElementById('currentTemperature').textContent = convertedTemperature;
});
document.getElementById('convertButton').addEventListener('click', () => {
    const temperatureUnit = document.getElementById('tempUnit').value;
    const currentTemperature = document.getElementById('currentTemperature').textContent;
    let convertedTemperature;

    if (temperatureUnit === 'celsius') {
        // Convert to Celsius
        convertedTemperature = currentTemperature;
    } else {
        // Convert to Fahrenheit
        const celsiusTemperature = parseFloat(currentTemperature);
        const fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;
        convertedTemperature = fahrenheitTemperature.toFixed(2) + '°F';
    }

    document.getElementById('currentTemperature').textContent = convertedTemperature;
});
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('dateTime').textContent = `Date and Time: ${dateTimeString}`;
}
