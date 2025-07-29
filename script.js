const apiKey = "b5b4a1e4834a9f73ec9811ecf81391b6"; // Your API key

function getWeather() {
    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        document.getElementById("weatherResult").innerText = "Please enter a city name!";
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weatherResult").innerText = "City not found!";
            } else {
                document.getElementById("weatherResult").innerHTML = `
                    <h2>${data.name}</h2>
                    <p>🌡️ Temp: ${data.main.temp} °C</p>
                    <p>💧 Humidity: ${data.main.humidity}%</p>
                    <p>🌬️ Wind: ${data.wind.speed} m/s</p>
                    <p>☁️ ${data.weather[0].description}</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("weatherResult").innerText = "Error fetching data!";
        });
}
