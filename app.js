'use strict'
//Selecting the UI elements i.e inputs, result-text, button.
const feet = document.querySelector('#feet')
const inches = document.querySelector('#inches')
const weight = document.querySelector('#weight')
const metricRes = document.querySelector('#metric')
const imperialRes = document.querySelector('#imperial')
const btn = document.querySelector('button')
const showText = document.querySelector('.hidden')

//Converting values to meters & lbs
const heightInMeters = () => (feet.value / 3.28084)
const heightInInches = () => (inches.value * 0.0254)
const weightInPounds = () => (weight.value * 2.20462)

//Cooking the denominators!!
const totalMeters = () => (heightInMeters() + heightInInches()) ** 2
const totalInches = () => {
    let res = (heightInMeters() + heightInInches())
    res *= 39.3701
    return res ** 2
}

//Calculating BMI
const metric = () => weight.value / totalMeters()
const imperial = () => 703 * weightInPounds() / totalInches()

//Fn to get the result and display
const calculate = () => {
    if (!feet.value || !inches.value || !weight.value) {
        alert('You must have values for \n\ Height & Weight')
    } else {
        metricRes.textContent = `Metric: ${+metric().toFixed(2)}`;
        imperialRes.textContent = `Imperial: ${+imperial().toFixed(2)}`;
        showText.classList.toggle('hidden')
    }
}

//adding event listener to button & the calculate fn as a callback
btn.addEventListener('click', calculate)
