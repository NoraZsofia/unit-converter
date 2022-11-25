const inputEl = document.getElementById("input-el")
const convert = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEL = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const meterToFeetRate = 3.281
const literToGallonRate = 0.264
const kilogramToPoundRate = 2.204

function convertUnits(){
   const number = JSON.parse(inputEl.value)
   const resultFeet = parseFloat(number * meterToFeetRate).toFixed(3)
   const resultMeter = parseFloat(number / meterToFeetRate).toFixed(3)
   const resultGallons = parseFloat(number * literToGallonRate).toFixed(3)
   const resultLiters = parseFloat(number / literToGallonRate).toFixed(3)
   const resultPounds = parseFloat(number * kilogramToPoundRate ).toFixed(3)
   const resultKilograms = parseFloat(number / kilogramToPoundRate).toFixed(3)
   let lengthString = `<p>${number} meters = ${resultFeet} feet | ${number} feet = ${resultMeter} meters</p>`
   let volumeString = `<p>${number} liters = ${resultGallons} gallons | ${number} gallons = ${resultLiters} liters</p>`
   let massString = `<p>${number} kilograms = ${resultPounds} pounds | ${number} pounds = ${resultKilograms} kilograms</p>`
   
   //inputEl.value = ""
   lengthEl.innerHTML = `<h3>Length (Meter/Feet)</h3>`
   volumeEL.innerHTML = `<h3>Volume (Liters/Gallons)</h3>`
   massEl.innerHTML = `<h3>Mass (Kilograms/Pounds)</h3>`
       
   lengthEl.innerHTML += lengthString
   volumeEL.innerHTML += volumeString
   massEl.innerHTML += massString 
   
}

convert.addEventListener("click", function(){
    convertUnits()
    isClicked = true
})

inputEl.addEventListener("mouseover",function(){
    inputEl.value = ""
})