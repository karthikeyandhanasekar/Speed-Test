

//DOM value
const startDOM = document.querySelector('.startbtn')
const answerbtnDOM = document.querySelector('.answerbtn')
const submitbtnDOM = document.querySelector('.submitbtn')
const questionanswerDOM = document.querySelector('.questionanswer')
const progessDOM = document.querySelector("#progessvalue")
const number1DOM = document.querySelector(".number1")
const number2DOM = document.querySelector(".number2")
const answerDOM = document.querySelector('#answer')
const pointDOM = document.querySelector('.point')
const currentquestionno = document.querySelector('.currentquestionno')
const totalquestionoDOM = document.querySelectorAll('.totalquestiono')
const resultdisplayDOM = document.querySelector(".resultdisplay")

//variable
let number1 = 0, number2 = 0, result = 0, points = 0, totalquestion = 0


const RandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min

const RenderNumber = () => {
    number1 = RandomNumber(1, 10)
    number2 = RandomNumber(1, 10)
    result = number1 * number2
    number1DOM.innerHTML = number1
    number2DOM.innerHTML = number2
}

// start btn click event
startDOM.onclick = () => {
    totalquestion = prompt("Enter No of Question")
    if (totalquestion === null || isNaN(Number(totalquestion)) || totalquestion === '') {
        alert("Invalid Number")
        startDOM.click()
        return
    }
    console.log(totalquestion);
    startDOM.classList.toggle("hide")
    questionanswerDOM.classList.toggle("hide")
    progessDOM.max = totalquestion - 1

    totalquestionoDOM.forEach(ele => ele.innerHTML = totalquestion)
    RenderNumber()
}

//process answer
const checkanswer = () => {
    if (!isNaN(answerDOM.valueAsNumber)) {

        if (result === Number(answerDOM.value)) {
            points += 1
            pointDOM.innerHTML = points

            resultdisplayDOM.classList.remove('wrong')

            resultdisplayDOM.classList.add('correct')
            resultdisplayDOM.innerHTML = "Correct Answer"

        }
        else {
            resultdisplayDOM.classList.remove('correct')
            resultdisplayDOM.classList.add('wrong')
            resultdisplayDOM.innerHTML = "Wrong Answer"
        }

        progessDOM.value += 1
        currentquestionno.innerHTML = progessDOM.value + 1
        answerDOM.value = 0

        RenderNumber()

        if (progessDOM.value === (totalquestion - 1)) {
            answerbtnDOM.classList.toggle('hide')
            submitbtnDOM.classList.toggle('hide')
        }
        return
    }
    else {
        alert("Answer Invalid")
        return
    }

}

//Buttons click event

answerbtnDOM.onclick = checkanswer

submitbtnDOM.onclick = () => {
    alert("submitted,Start Again")
    window.location.reload()
}
