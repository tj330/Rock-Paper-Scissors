const startButton = document.getElementById('start');
const userDiv = document.getElementById('userDiv'); 
const compDiv = document.getElementById('compDiv');
const resultDiv = document.getElementById('resultDiv')
const restart = document.getElementById('restart')
const option = document.getElementsByClassName('option')
const playAgainButton = document.getElementById('playAgain')

startButton.addEventListener('click', () => {
    mainMenu.style.display = 'none';
    gamePanel.style.display = 'flex';
});

for (let i = 0; i < option.length; i++) {
            option[i].addEventListener('click', () => {
                choice(option[i].id)
            });
        }

function randomChoice() {
    const choices = ["rock", "paper", "scissor"]
    const random = Math.floor(Math.random() * choices.length)
    return choices[random]
}

function choice(userChoice) {
    userDiv.style.display = 'none';
    resultDiv.style.display = 'block';
    compChoice = randomChoice()
    resultDiv.innerHTML=`Computer Choice is: ${compChoice}`
    setTimeout(() => {
        resultDiv.style.display = 'none';
        console.log(userChoice, compChoice)
        result(userChoice, compChoice)
        resultDiv.style.display = 'block'
        restart.style.display = 'block'
      }, "1000");
    
}

function result(userChoice, compChoice) {
    if (userChoice == compChoice) {
        resultDiv.innerHTML="Result: Draw"
        
    }
    else if(userChoice == wins[compChoice]) {
        resultDiv.innerHTML="Result: Computer wins"
    }
    else{
        resultDiv.innerHTML="Result: User wins"
    }
}

wins = {'rock': 'scissors',
    'paper': 'rock',
    'scissors': 'paper'
}


playAgainButton.addEventListener('click', () => {
    resultDiv.style.display = 'none'
    restart.style.display = 'none'
    userDiv.style.display = 'block'
})