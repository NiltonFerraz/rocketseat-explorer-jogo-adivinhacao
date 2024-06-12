const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterPress)

//funções callback
function handleTryClick(event) {
    event.preventDefault() //não faça o padrão

    const inputNumber = document.querySelector("#inputNumber")

    console.log("estou sendo clicado!!!!!!!!!!")

    if(Number(inputNumber.value) == "") {
        alert("Por favor escolha um número")
    }
    else {
        if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
            alert('Número inválido!!!! Tente outro')
            inputNumber.value = ""
            xAttempts++
        }
        else {
            if (Number(inputNumber.value) == randomNumber) {
                toggleScreen()
    
                // .querySelector(".screen2 h2")
                // .innerText = `acertou em ${xAttempts} tentativas`
                // pode ser na forma de cima ou desta abaixo
                screen2.querySelector("h2").innerText = `acertou em ${xAttempts} tentativas`
            }
            inputNumber.value = ""
            xAttempts++
        }
    }
}

    function handleResetClick() {
        toggleScreen()
        xAttempts = 1
        randomNumber = Math.round(Math.random() * 10)

    }

    function toggleScreen() {
        screen1.classList.toggle("hide")
        screen2.classList.toggle("hide")
    }

    function enterPress(e) {
        if (e.key == 'Enter' && screen1.classList.contains('.hide')) {
            handleResetClick()
        }
    }
    