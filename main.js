"use strict"

// global var
let inputFind = document.getElementById("find-input")
let btnfind = document.getElementById("btn-find")
let list = []
// global var

async function myreq(city = "cairo") {
    // get data from api
    let myres = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d0e84b5cccb245e6a4772519231208&q=${city}&days=3`).catch((error) => console.log(error))
    let data = await myres.json()
    list = data
    // get data from api

    // display data in html
    let namecity = document.getElementById("cityname").innerHTML = list.location.name
    let currentIcon = document.getElementById("currenticon").setAttribute("src", list.current.condition.icon)
    let currentStatus = document.getElementById("currentstatus").innerHTML = list.current.condition.text
    let cuttentTemp = document.getElementById("cuttenttemp").innerHTML = list.current.temp_c
    let secondDayMaxTemp = document.getElementById("seconddaymaxtemp").innerHTML = list.forecast.forecastday[1].day.maxtemp_c
    let secondDayLowTemp = document.getElementById("seconddaylowtemp").innerHTML = list.forecast.forecastday[1].day.mintemp_c
    let lastDayMaxTemp = document.getElementById("lastdaymaxtemp").innerHTML = list.forecast.forecastday[2].day.maxtemp_c
    let lastDayminTemp = document.getElementById("lastdaymintemp").innerHTML = list.forecast.forecastday[2].day.mintemp_c
    let secondDayStatus = document.getElementById("seconddaystatus").innerHTML = list.forecast.forecastday[1].day.condition.text
    let lastDayStatus = document.getElementById("lastdaystatus").innerHTML = list.forecast.forecastday[2].day.condition.text
    let secondDayIcon = document.getElementById("seconddayicon").setAttribute("src", list.forecast.forecastday[1].day.condition.icon)
    let lastDayIcon = document.getElementById("lastdayicon").setAttribute("src", list.forecast.forecastday[2].day.condition.icon)
    // display data in html

}
myreq()

// get the city img
async function cityimg(cityimg = "cairo") {
    let myImg = await fetch(`https://api.teleport.org/api/urban_areas/slug:${cityimg}/images/`).catch((error) => console.log(error))
    let myData = await myImg.json()
    let imgUrl = myData.photos[0].image.web
    document.querySelector(".bg-image").style.backgroundImage = `url(${imgUrl})`
}
// get the city img

// get user location(city)
async function locationcity() {
    var myres = await fetch(`https://ipinfo.io/json?token=76e6fb570bd7a1`).catch((error) => console.log(error))
    var data = await myres.json()
    var city = data.region
    myreq(city)
};
locationcity()
// get user location(city)

// get city name from input and display the img of the city
btnfind.addEventListener("click", function () {
    let value = inputFind.value
    myreq(value)
    cityimg(value)
   
})
// get city name from input and display the img of the city

// use the enter key to search for the city
document.addEventListener("keypress",function(e){
    if(e.key=="Enter"){
        let value = inputFind.value
        myreq(value)
        cityimg(value)
    }
})
// use the enter key to search for the city


// get day
const valentines = new Date();
const day = valentines.getDay();
const dayNames = ["Sunday", "Monday", "Tuesday", " Wednesday", "Thursday", "friday", "saturday"];
let currentday = dayNames[day];
let tomorrow = dayNames[day + 1];
if (
    tomorrow == undefined) {
    tomorrow = "sunday"
}
let aftertomorrow = dayNames[day + 2];
if (
    aftertomorrow == undefined) {
    aftertomorrow = "sunday"
}
let currentDay = document.getElementById("firstday-day").innerHTML = currentday
let tomorrowday = document.getElementById("tomorrow").innerHTML = tomorrow
let aftertomorrowday = document.getElementById("aftertomorrow").innerHTML = aftertomorrow
// get day

// get month
const thismonth = new Date();
const month = thismonth.getMonth();
const monthNames = ["January", "February", "March", "april", "may", "june", "july", "august", "septemper", "october", "november", "december"];
let currentmonth = monthNames[month];
const daynum = new Date();
let daynumber = daynum.getDate()
let firstdaymonth = document.getElementById("firstday-month").innerHTML = daynumber + " " + currentmonth
// get month
















