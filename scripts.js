
document.getElementById("search").addEventListener("click", function(){

    let city = document.getElementById("place").value;
    const key = "3369900f5b58c49516413f8ecdb9439d";
    const base= "https://api.openweathermap.org/data/2.5/"
    const url = `${base}weather?q=${city}&appid=${key}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {

        const {weather} = data;
        const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
        
        document.getElementById("icon").src = icon;
        name = document.getElementById("city-name").innerText = data.name;
        document.getElementById("temperature").innerText = Math.round(data.main.temp) + "°C";
        document.getElementById("clouds").innerText = data.weather[0].description;
        document.getElementById("place").value = ""; 

    })

});


