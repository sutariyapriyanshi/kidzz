let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".result-container")
let msg = document.querySelector("#msg")

let turnO =true;  // playerX, playerY
let count = 0;
let winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){ // playerO
            box.innerText = "O";
            turnO = false;
        }
        else{ // playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; // it will disabling the box so we can't change value
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner) 
        {
            gameDraw();
        }
    });
});

const gameDraw = () =>{
    msg.innerText = "It's a Draw";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
    }
};


const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () => {
    for (pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                showWinner(pos1val);
            }
        }
    }
};

const resetGame = () =>{
    boxes.forEach((box) => {
        turnO = true;
        enableBoxes();
        box.innerText = "";
        msgContainer.classList.add("hide");
    });
};

// newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);