let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector('#msg');

const getRandomChoices = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    message.innerText = "It's a draw";
    message.style.backgroundColor = 'black';
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        document.getElementById("user").innerText = userScore;
        message.innerText = `YOU WIN!, Your ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = 'green';
    } else {
        compScore++;
        document.getElementById("comp").innerText = compScore;
        message.innerText = `YOU lOSE!, ${compChoice} beats your ${userChoice}`;
        message.style.backgroundColor = 'red';
    }
};

const playGame = (userChoice) => {
    //Generate Computer Choices
    const compChoice = getRandomChoices();//gives computer's choice from among rock/paper/scissors

    if (userChoice === compChoice) {
        //it's a draw
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            // compchice is in-between scissors/paper
            userWin = compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper") {
            // compchice is in-between scissors/rock
            userWin = compChoice === "scissors" ? false : true ;
        } else {
            // compchice is in-between rock/paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});