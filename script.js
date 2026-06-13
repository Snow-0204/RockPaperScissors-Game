let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

//to change the msg paragraph
const msg = document.querySelector("#msg");

//win counts of user
const userScoreMsg = document.querySelector("#user-score");
//win counts of computer
const compScoreMsg = document.querySelector("#comp-score");

//Random computer choice(Rock,Paper,Scissors)
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random()*3); //to generate random choice from option
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerText = "Game Was Draw😯"; //Changes the text from "Play your move" to "Game Was Draw"
    msg.style.backgroundColor = "aqua";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++; //insreases the number when user wins.
        userScoreMsg.innerText = userScore; //display the user scores.
        msg.innerText = `(You win!😀) Your ${userChoice} Beats ${compChoice}`; //Changes the text from "Play your move" to "You Win"
        msg.style.backgroundColor = "green";
    } else {
        compScore++; //insreases the number when computer wins.
        compScoreMsg.innerText = compScore; //display the computer scores.
        msg.innerText = `(You Lost😢) ${compChoice} Beats Your ${userChoice}`; //Changes the text from "Play your move" to "You Lose"
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    //computer choice
    const compChoice = genCompChoice();
    //comparing the comp and user result and deciding thr winner
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    } else {
        let userWin = true;//to track the user win
        if(userChoice === "rock"){
            //if comp choose paper(false) means comp will win.
            //if comp choose scissors(ture) means user will win.
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper"){
            //if comp choose rock(true) means user will win.
            //if comp choose scissors(false) means comp will win.
            userWin = compChoice === "rock" ? true : false;
        } else if(userChoice === "scissors") {
            //if comp choose rock(false) means comp will win.
            //if comp choose paper(ture) means user will win.
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

//user choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice);
    });
});