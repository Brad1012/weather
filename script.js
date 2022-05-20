let weather = {
    apikey : "20728caeb33fee324492cdc0e3acff87",
    fetchWeather: function () {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=20728caeb33fee324492cdc0e3acff87"
    )
    .then((response) => response.json())
    .then((data) => console.log(data));
 },
};
