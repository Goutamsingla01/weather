const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1164acafccmsh9679d384675a6c5p10d3a5jsnfaa8fc2b3fde',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function f1(city){
try {
    cityDisplay.innerHTML=city;
    const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    console.log(result.temp);
    temp.innerHTML=result.temp;
    temp2.innerHTML=result.temp;
    feels_like.innerHTML=result.feels_like;
    humidity.innerHTML=result.humidity;
    humidity2.innerHTML=result.humidity;
    min_temp.innerHTML=result.min_temp;
    max_temp.innerHTML=result.max_temp;
    wind_speed.innerHTML=result.wind_speed;
    wind_speed2.innerHTML=result.wind_speed;
    wind_degrees.innerHTML=result.wind_degrees;
    sunrise.innerHTML=result.sunrise;
    sunset.innerHTML=result.sunset;
} catch (error) {
	console.error(error);
}
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    f1(cityName.value)
})
f1("Delhi");

async function f2(city){
    try {
        const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city;
        const response = await fetch(url, options);
        const result = await response.json();
        return await result;
    } catch (error) {
        console.error(error);
    }
    }

    
        
        Array.from(document.querySelectorAll('#row')).forEach(async function(element) {
            let cityBus=element.children[0].textContent
            console.log(cityBus)
            f3=(await f2(cityBus))
            element.children[1].innerHTML=f3.temp
            element.children[2].innerHTML=f3.min_temp
            element.children[3].innerHTML=f3.max_temp
            element.children[4].innerHTML=f3.feels_like
            element.children[5].innerHTML=f3.humidity
            element.children[6].innerHTML=f3.wind_speed
            element.children[7].innerHTML=f3.wind_degrees
            element.children[8].innerHTML=f3.cloud_pct
            element.children[9].innerHTML=f3.sunrise
            element.children[10].innerHTML=f3.sunset
        });
        
 