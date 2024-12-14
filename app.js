const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API key

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    
    if (response.ok) {
        const data = await response.json();
        document.getElementById('cityName').innerText = `City: ${data.name}`;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    } else {
        document.getElementById('cityName').innerText = 'City not found';
        document.getElementById('temperature').innerText = '';
        document.getElementById('description').innerText = '';
    }
}
