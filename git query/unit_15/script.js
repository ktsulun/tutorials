
const button = document.getElementById("go");
const cities = document.getElementById("cities");

// let URL = `http://api.openweathermap.org/data/2.5/weather?q=${cities.value}&appid=70e1ed322b02acbc57d443dd91065f3e`;

button.addEventListener("click", onClick)

function onClick(){
    // console.log(`http://api.openweathermap.org/data/2.5/weather?q=${cities.value}&appid=70e1ed322b02acbc57d443dd91065f3e`);

 fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cities.value}&appid=70e1ed322b02acbc57d443dd91065f3e`)
 .then(
    response=>
    response.ok && response.status === 200
    ? response.json()
    : Promise.reject(response)
    
 )
 .then(
response=>Markup(response)
 )
}



function Markup(response){
   console.log(typeof response.main.temp);
document.querySelector(".city-name")
.textContent=`${response.name}`;
document.querySelector(".features")
.innerHTML=`<img src="https://openweathermap.org/img/wn/${response.weather[0]['icon']}@2x.png">`
document.querySelector(".degrees").textContent = Math.floor(response.main.temp-273) ;
document.querySelector(".disclaimer").textContent=`${response.weather[0]['main']}`;
}