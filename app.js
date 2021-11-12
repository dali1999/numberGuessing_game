const randomNumber = Math.floor(Math.random()*100)+1;
console.log(randomNumber);
const gameForm = document.querySelector(".game-form");

const guessField = document.querySelector("#guessField");
const guessSubmit = document.querySelector(".guessSubmit");

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

let guessCount = 0;

function printGuesses(guess){
    const span = document.createElement("span");
    guesses.appendChild(span);
    span.innerText = `  ${guess}  `;
}

function checkGuess(guess){
    if(guess !== randomNumber){ //값이 아니면
        lastResult.innerText = "WRONG"
        lastResult.classList.add("paintRed");
        if(guess<randomNumber){
            lowOrHi.innerText = "your previous number is too LOW!"
        }else{
            lowOrHi.innerText = "your previous number is too HIGH!"
        }
    }
    else if(guess === randomNumber){
        lastResult.innerText = "CORRECT!"
        lastResult.classList.add("paintGreen");
        guessField.setAttribute("disabled", "");
        guessSubmit.setAttribute("disabled", "");
    }
}

function handleSubmitGameForm(event){
    event.preventDefault();
    const guess = parseInt(guessField.value);
    console.log(guess);
    guessField.value = "";
    if(guess > 0 && guess <=100){ //입력값이 범위 안이면 
        printGuesses(guess);
        guessCount = guessCount + 1;
        console.log(guessCount);
        checkGuess(guess);
    }else{                        //입력값이 범위 밖이면
        alert("값이 범위 밖입니다!");
    }
    const count = document.querySelector(".count");
    count.innerText = guessCount;
    if(guessCount === 10){
        alert("10번의 기회를 모두 사용하셨습니다")
        window.location.reload()
    }
}
gameForm.addEventListener("submit", handleSubmitGameForm);






