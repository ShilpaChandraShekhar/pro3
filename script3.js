const apiKey = "PASTE_YOUR_API_KEY_HERE";

async function getWeather() {

const city = document.getElementById("cityInput").value;

if(city === ""){
alert("Enter city name");
return;
}

try{

const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
);

const data = await response.json();

if(data.cod !== 200){
document.getElementById("weather").innerHTML = "City not found";
return;
}

document.getElementById("weather").innerHTML = `
<h2>${data.name}</h2>
<p>Temperature: ${data.main.temp} °C</p>
<p>${data.weather[0].description}</p>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
`;

}catch(error){
document.getElementById("weather").innerHTML = "Error fetching weather";
}

}