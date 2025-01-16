// git add . && git commit -m "weatherApp" && git push
const location = document.getElementById('location').value
const URL = `http://api.weatherapi.com/v1/current.json?key=4e641f723b1b472aadd222152251501&q=${location}&aqi=yes`