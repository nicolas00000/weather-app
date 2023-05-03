const apiKey = "419f3f2d2813f5d00b5c91c443a254c3"
const apiUnsplash = "https://source.unsplash.com/1600x900/?";

const cityInput = document.getElementById("searcCity")
const buttonSearch = document.getElementById("buttonSearch")


//elements
const nameCity = document.querySelector(".name-city")
const temp = document.querySelector(".temp")
const description = document.querySelector(".clima-information")
const iconTemp = document.querySelector(".icon-temp")
const flag = document.querySelector(".bandeira")
const umidade = document.querySelector(".umidade-information")
const vento = document.querySelector(".vento-information")
const windIcon = document.querySelector(".iconWind")


//functions


function dataApi(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    axios.get(url).then(renderizar)
    
}

function renderizar(dados){
    document.querySelector(".sugestoes").classList.add("hide")
    document.body.style.backgroundImage = `url("${apiUnsplash + dados.data.name}")`;
    nameCity.innerHTML = dados.data.name
    temp.innerHTML = parseInt(dados.data.main.temp) + "°C"
    umidade.innerHTML = dados.data.main.humidity + " %"
    vento.innerHTML = dados.data.wind.speed + " Km/h"
    description.innerHTML = dados.data.weather[0].description;
    windIcon.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${dados.data.weather[0].icon}.png`
    );
    document.querySelector(".informacoes").classList.remove("hide")
}

function sugestion(element){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${element}&units=metric&appid=${apiKey}&lang=pt_br`
    axios.get(url).then(renderizar)
}


//events

buttonSearch.addEventListener("click", (e) =>{
    e.preventDefault()
    const city = cityInput.value
    dataApi(city)
})

cityInput.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
        const city = e.target.value;
        dataApi(city);
}
});