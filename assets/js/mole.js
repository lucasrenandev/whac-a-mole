// SELECIONANDO OS ELEMENTOS E ATRIBUINDO EM SUAS VARIÁVEIS
const time = document.querySelector("#time")
const score = document.querySelector("#score")
const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const refresh = document.querySelector("#refresh")
const start = document.querySelector("#start")

// VARIÁVEIS DE APOIO
let hitPosition
let positionId
let timeCountdown
let result = 0
let currentTime = 60

// POSIÇÃO ALEATÓRIA
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove("mole")
    })
    const randomPosition = squares[Math.floor(Math.random() * squares.length)]
    randomPosition.classList.add("mole")

    hitPosition = randomPosition.id
}

// MOVER PERSONAGEM
function moveMole() {
    positionId = setInterval(randomSquare, 500)
}

// PONTUAÇÃO DOS ACERTOS
squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if(square.id === hitPosition ) {
            result ++
            score.textContent = result
            hitPosition = null
        }
    })
})

// CONTAGEM REGRESSIVA
function countdown() {
    currentTime --
    time.textContent = currentTime
    
    if(currentTime === 0) {
        clearInterval(timeCountdown)
        clearInterval(positionId)
        start.style.display = "none"
        refresh.style.display = "block"
        window.alert("Game over. Time expired!")
    }
    
}    

// INICIAR JOGO
start.addEventListener("click", () => {
    pause()
    moveMole()
    timeCountdown = setInterval(countdown, 1000)
})

// PAUSAR JOGO
function pause() {
    clearInterval(timeCountdown)
    clearInterval(positionId)
}

// RECARREGAR PÁGINA/JOGAR NOVAMENTE
refresh.addEventListener("click", () => {
    location.reload()
})