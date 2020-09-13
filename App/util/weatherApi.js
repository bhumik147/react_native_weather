const apiKey = "a612116ac90338bc8c3af63ae890355b";

export const weatherApi = (path, { zipcode, coords }, pUnit) => {
    let suffix = "";

    if (zipcode) {
        suffix = `zip=${zipcode},in`;
    } else if (coords) {
        suffix = `lat=${coords.latitude}&lon=${coords.longitude}`;
    } 


    /*`function getWeather(lat, lon, units=“metric”){
var unit = “”;

if(units===“metric”) {
units="&units=metric";
unit = “°C”;
} else if (units===“imperial”) {
units="&units=imperial";
unit = “°F”;
}*/
    let unitsImp = "";
    if (pUnit == "Celsius") {
        unitsImp = "&units=metric";
    }
    else if (pUnit == "Fahrenheit") {
        unitsImp = "&units=imperial";
    }
    //  else if (pUnit == "Celsius") {
    //     unitsImp = "&units=imperial";
    // }

    console.log(`https://api.openweathermap.org/data/2.5${path}?appid=${apiKey}${unitsImp}&${suffix}`);
    return fetch(
        `https://api.openweathermap.org/data/2.5${path}?appid=${apiKey}${unitsImp}&${suffix}`
    ).then(response => response.json());
};
