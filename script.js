// git add . && git commit -m "weatherApp" && git push
const form = document.getElementById('weatherForm');
const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
});

async function getWeather() {
    const city = document.getElementById('location').value.trim();
    const country = document.getElementById('nation').value.trim();
    
    if ((city === "") ||(country === "")) {
        if (city === ""){
        console.log("City name is empty. Please provide a valid city.");
        alert("City name is empty. Please provide a valid city.")
        return;
        }
        else if (country === ""){
            console.log("Country name is empty. Please provide a valid Country.");
            alert("Country name is empty. Please provide a valid Country.")
            return;
        }
    }

    const API_URL = `http://api.weatherapi.com/v1/current.json?key=4e641f723b1b472aadd222152251501&q=${encodeURIComponent(city)},${country}&aqi=yes`;

    try {
        const data = await fetch(API_URL);
        const jsonValue = await data.json();
        console.log(jsonValue);
    } catch (err) {
        console.error('Error fetching weather data:', err);
    }
}
