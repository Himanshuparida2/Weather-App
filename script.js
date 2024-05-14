const search = document.querySelector("#search-button");

search.addEventListener('click', () => {
    const Apikey = "ce7a699b9595e24a22e8fb0d26354d4c";
    const city = document.querySelector(".search-bar input").value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Apikey}`)
    .then(Response => Response.json())
    .then(json => {
        const image = document.querySelector(".weather-details img");
        const temperature = document.querySelector(".weather-details h1");
        const humidity = document.querySelector("#percentage");
        const wind = document.querySelector("#percent");

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = '4102328_hot_sun_weather_icon.png';
                break;
            case 'Rain':
                image.src = '4102320_cloud_heavy rain_rain_weather_icon.png';
                break;
            case 'Snow':
                image.src = '4102322_cloud_cold_snow_weather_icon.png';
                break;
            case 'Clouds':
                image.src = '4102314_cloud_cloudy_sun_sunny_weather_icon.png';
                break;
            case 'Mist':
                image.src = '4102315_cloud_weather_icon.png';
                break;
            case 'Haze':
                image.src = '4102315_cloud_weather_icon.png';
                break;
            default:
                image.src = '4102314_cloud_cloudy_sun_sunny_weather_icon.png';
        }
        
        temperature.textContent = `${json.main.temp}°C`;
        humidity.textContent = `${json.main.humidity}%`;
        wind.textContent = `${json.wind.speed} m/s`;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
    });
});
