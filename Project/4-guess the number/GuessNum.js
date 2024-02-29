let ranomNum = (parseInt(Math.random() * 100 + 1));

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessslot = document.querySelector(".guesses")
const remaining= document.querySelector(".lastResult")
const lowhigh = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")


let preGuess = []
let numGuess = 1
let playGame = true

if (playGame){
    submit.addEventListener("click",function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //validation of value eg :from 1 to 100 

    if (isNaN(guess)){
        alert("please Enter a Valid Number")
    }else if (guess < 1){
        alert("please Enter a number more than 1")
    }else if (guess > 100){
        alert("please Enter number less than hundred")
    }else {
        preGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess)
            displayMessage(`GameOver, Random number was ${ranomNum}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    
}

function checkGuess(guess){
    //check value equal to random number
    if (guess === ranomNum){
        displayMessage(`You guessed it right`)
        endGame()

    }else if (guess < ranomNum){
        displayMessage("Number is too low")
    }else if (guess > ranomNum){
        displayMessage("Number is too High")
    }

}

function displayGuess(guess){
    userInput.value = ""
    guessslot.innerHTML += `${guess}, `
    numGuess++ 
    remaining.innerHTML = `${12 - numGuess}`

}

function displayMessage(message){
    lowhigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ""
    userInput.setAttribute("disabled", "")
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
    
}

function newGame(){
    const newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", function(e){
        ranomNum = (parseInt(Math.random() * 100 + 1));
        preGuess = []
        numGuess = 1
        guessslot.innerHTML = ""
        remaining.innerHTML = `${12 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)        
        playGame = true

    })
}

