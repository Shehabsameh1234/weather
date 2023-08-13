
"use strict"

let inputFind = document.getElementById("find-input")
let btnfind = document.getElementById("btn-find")

let list = []



async function myreq(city = "cairo") {
    let myres = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=d0e84b5cccb245e6a4772519231208&q=${city}&days=3`).catch((error) => console.log(error))
    let data = await myres.json()
    list = data
   let shehab= list.forecast.forecastday[0].hour
   
    let namecity = document.getElementById("cityname").innerHTML = list.location.name
}
myreq()







// get city name from input
btnfind.addEventListener("click", function () {
    let value = inputFind.value
    myreq(value)
})
// get city name from input





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
    aftertomorrow = "monday"
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
let sameh = document.getElementById("firstday-month").innerHTML = daynumber + " " + currentmonth
// get month












