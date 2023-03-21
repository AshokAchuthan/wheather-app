function Search(){
    City = city_name.value;
    console.log(City);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=396d649e2c85b3298edadccc585c5580`)
    .then(response=>response.json())
    // console.log(response)
    .then(data=>displayWeather(data))
    .catch(error=>{
        alert("failed to fetch city wheather details");
        
    })
}
function displayWeather(cityDetails){
    console.log(cityDetails);//
    c_name=cityDetails.name;
    console.log(c_name);//kochi
    temperature=Math.round(cityDetails.main.temp-273.15);
    feel_temp=Math.round(cityDetails.main.feels_like-273.15)
    humidity=cityDetails.main.humidity;
    visibility=cityDetails.visibility;
    wind=cityDetails.wind.speed
    description=cityDetails.weather[0].description
    icon=cityDetails.weather[0].icon;

    
    let weatherData=`<h2>Weather in ${c_name}</h2>
                        <div id="icon" class="d-flex justify-content-center align-items-center">
                             <img src="http://openweathermap.org/img/w/${icon}.png" alt="">
                            <h1>${temperature}°C</h1>
                        </div>
                        <div>
                            <h3>${description}</h3>
                        </div>
                    </center>
                    <div class=" mt-5 mb-5  d-flex justify-content-between">
                        <div class="details text-center">
                            <i class="fa-solid fa-cloud"></i>
                            <h3>${feel_temp}°C</h3>
                            <h3>Feels like</h3>
                        </div>
                        <div class="details text-center">
                            <i class="fa-solid fa-droplet"></i>
                            <h3>${humidity}%</h3>
                            <h3>humidity</h3>
                        </div>
                        <div class="details text-center">
                            <i class="fa-solid fa-wind"></i>
                            <h3>${wind}kmph</h3>
                            <h3>Wind</h3>
                        </div>
                        <div class="details text-center">
                            <i class="fa-solid fa-eye"></i>
                            <h3>${visibility}</h3>
                            <h3>Visibility</h3>
                        </div>
                    </div>
                `
output.innerHTML=weatherData;
console.log(weatherData);

}


