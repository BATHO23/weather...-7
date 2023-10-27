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
    const temperatureCelsius = data.main.temp;
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;

    const resultText = `City: ${data.name}, Temperature: <i class="fas fa-thermometer-half"></i> ${temperatureCelsius.toFixed(2)}°C, Description: ${data.weather[0].description}`;
    
    // Display result in an h3 element with Font Awesome icon
    document.getElementById('resultText').innerHTML = resultText;

    // Display wind speed in an h3 element
    document.getElementById('windSpeed').textContent = `Wind Speed: ${windSpeed} m/s`;

    // Display humidity in an h3 element
    document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;

    // Change background image dynamically
    const backgroundImageUrl = getBackgroundImage(data.weather[0].description);
    body.style.backgroundImage = `url(${backgroundImageUrl})`;

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
            const backgroundImageUrl = getBackgroundImage(data.weather[0].description);
            body.style.backgroundImage = `url(${backgroundImageUrl})`;
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


            const backgroundImageUrl = getBackgroundImage(data.weather[0].description);
            body.style.backgroundImage = `url(${backgroundImageUrl})`;

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