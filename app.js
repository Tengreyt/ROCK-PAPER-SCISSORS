const choices = ["камень", "бумага", "ножницы"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "У вас ничья!";
    }
    else{
        switch(playerChoice){
            case "камень":
                result = (computerChoice === "ножницы") ? "Ты выиграл!" : "Ты проиграл!";
                break;
            case "бумага":
                result = (computerChoice === "камень") ? "Ты выиграл!" : "Ты проиграл!";
                break;
            case "ножницы":
                result = (computerChoice === "бумага") ? "Ты выиграл!" : "Ты проиграл!";
                break;
        }
    }

    playerDisplay.textContent = `Игрок: ${playerChoice}`;
    computerDisplay.textContent = `Компьютер: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "Ты выиграл!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "Ты проиграл!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}