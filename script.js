let weather = {
    apikey : "20728caeb33fee324492cdc0e3acff87",
    fetchWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city
             + "&units=metric&appid="
             + this.apikey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
        },
        displayWeather: function(data) {
            const { name } = data;
            const { icon, description } = data.weather[0];
            const { temp,humidity } = data.main;
            const { speed } = data.wind;
            console.log(name,icon,description,temp,humidity,speed)
            document.querySelector(".city").innerText = "Weather in " + name;
 }
};
