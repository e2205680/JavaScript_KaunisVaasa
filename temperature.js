const temperature = document.getElementById("temperature");
const temperatureFeelsLike = document.getElementById("temperature_feels_like");
const windSpeed = document.getElementById("wind_speed");

async function apiTemperature() {

    try{

        //let temperature = document.getElementsById("temperature");
        const response = await fetch("http://api.weatherunlocked.com/api/current/fi.65100?app_id=cb363626&app_key=5a70eb7b532cfced90229538b5e8fe8c");

        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();

        temperature.innerText = "Lämpötila: " + data.temp_c + "°C";
        temperatureFeelsLike.innerText = "Lämpötilan tunne: " + data.feelslike_c + "°C";
        windSpeed.innerText = "Tuulen nopeus: " + data.windspd_ms + " m/s"

        console.log("Temperature: " + data.temp_c + "°C");
        console.log("Temperature feels like: " + data.feelslike_c + "°C");
        console.log("Wind speed: " + data.windspd_ms + " m/s");
        
       }
    
      
    catch(error){
        console.error(error);
    }  
}

apiTemperature();