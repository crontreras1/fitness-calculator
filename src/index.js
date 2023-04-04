// DOM
const male = document.getElementById('male-button')
const female = document.getElementById('female-button')
const calcBtn = document.getElementById('calc-equation')


// male & female formula function 
function maleFormula (weight, height, age) {
    const maleEq = (10 * weight) + (6.25 * height) - (5 * age) + 5
    return maleEq
}
maleFormula(65, 172, 25)
function femaleFormula (weight, height, age) {
    const femaleEq = (10 * weight) + (6.25 * height) - (5 * age) - 161
    return femaleEq
}

// final answer
function calcKcal () {
    // Get weight value
    const weight = document.getElementById('input-weight') 
    const valueW = weight.value
    
    // Get height value
    const height = document.getElementById('input-height')
    const valueH = height.value
    // Get age value
    const age = document.getElementById('input-age')
    const valueA = age.value

    const answer = document.getElementById('answer')

    if (valueW && valueH && valueA) {
        if (male.checked) {
            const values = maleFormula(valueW, valueH, valueA)
            const text = answer.innerHTML = `Debes consumir ${values} calorias para mantener tu peso`
            alert(text) 
        } else if (female.checked) {
            const values = femaleFormula(valueW, valueH, valueA)
            const text = answer.innerHTML = `Debes consumir ${values} calorias para mantener tu peso`
            alert(text) 
        } else {
            alert('Debes elegir un genero')
        }
    } else {
        alert('Debes llenar todas la casillas')
    }
}

calcBtn.addEventListener('click', calcKcal)


