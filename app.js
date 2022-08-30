'use strict'
//Selecting the UI elements i.e inputs, result-text, button.
const feet = document.querySelector('#feet')
const inches = document.querySelector('#inches')
const weight = document.querySelector('#weight')
const result = document.querySelector('#result')
const btn = document.querySelector('button')

//Converting values to meters
const heightInMeters = () => (feet.value / 3.28084)
const heightInInches = () => (inches.value * 0.0254)

//Adding converted values and squaring it
const totalHeight = () => (heightInMeters() + heightInInches())**2

//Calculating BMI and assigning the result
const calculate = () => result.textContent = weight.value / totalHeight()

//adding event listener to button & calling the calculate fn as a callback
btn.addEventListener('click', calculate)
