const meterToFeetRate = 3.281
const literToGallonRate = 0.264
const kilogramToPoundRate = 2.204
const inputEl = document.getElementById("input-el")
const number = JSON.parse(inputEl.value)
const convert = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEL = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

let data = [
    {meterToFeetRate : 3.281,
     resultFeet : parseFloat(number * meterToFeetRate).toFixed(3),
     resultMeter : parseFloat(number / meterToFeetRate).toFixed(3),
     stringLength : `<p>${number} meters = ${resultFeet} feet | ${number} feet = ${resultMeter} meters</p>`
    },
    {literToGallonRate : 0.264,
     resultGallons : parseFloat(number * literToGallonRate).toFixed(3),
     resultLiters : parseFloat(number / literToGallonRate).toFixed(3),
     stringVolume : `<p>${number} liters = ${resultGallons} gallons | ${number} gallons = ${resultLiters} liters</p>`
    },
    {kilogramToPoundRate : 2.204,
     resultPounds : parseFloat(number * kilogramToPoundRate ).toFixed(3),
     resultKilograms : parseFloat(number / kilogramToPoundRate).toFixed(3),
     stringMass : `<p>${number} kilograms = ${resultPounds} pounds | ${number} pounds = ${resultKilograms} kilograms</p>`
    }
]

convert.addEventListener("click", function(){
    console.log("clicked!")
})