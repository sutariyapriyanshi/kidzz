let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin)
    {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";

    }
};

const playGame = (userChoice) =>{
    // console.log("User choice = ",userChoice);
    const compChoice = genCompChoice();
    // console.log("Comp choice = ",compChoice);

    if(userChoice === compChoice)
    {
        // Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") 
        {
          //scissors, paper
          userWin = compChoice === "paper" ? false : true;
        } 
        else if (userChoice === "paper") 
        {
          //rock, scissors
          userWin = compChoice === "scissors" ? false : true;
        } 
        else 
        {
          //rock, paper
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
      }
};

const drawGame = () =>{
    msg.innerText = "Game was draw. Play again.";
    msg.style.backgroundColor ="#73a2f8";
};

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});