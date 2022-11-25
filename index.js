const inputEl = document.getElementById("input-el")
const convert = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-el")
const volumeEL = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
inputEl.value = ""

convert.addEventListener("click", function(){
   //console.log(inputEl.value)
   //console.log(typeof(inputEl.value))
   const number = JSON.parse(inputEl.value)
   //console.log(typeof number)
   const resultFeet = parseFloat(number * 3.281).toFixed(3)
   const resultMeter = parseFloat(number / 3.281).toFixed(3)
   const resultGallons = parseFloat(number * 0.264).toFixed(3)
   const resultLiters = parseFloat(number / 0.264).toFixed(3)
   const resultPounds = parseFloat(number * 2.204 ).toFixed(3)
   const resultKilograms = parseFloat(number / 2.204).toFixed(3)
   
   inputEl.value = ""
    
   lengthEl.innerHTML += `
   <p>${number} meters = ${resultFeet} feet | ${number} feet = ${resultMeter} meters</p>
   `
   volumeEL.innerHTML += `
   <p>${number} liters = ${resultGallons} gallons | ${number} gallons = ${resultLiters} liters</p>
   `
   massEl.innerHTML += `
   <p>${number} kilograms = ${resultPounds} pounds | ${number} pounds = ${resultKilograms} kilograms</p>
   `
}
)












