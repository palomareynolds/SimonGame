/*-------------------------------- Constants --------------------------------*/
const colors = ["green", "red", "yellow", "blue"]


/*-------------------------------- Variables --------------------------------*/
let count = 1;
let turnColors = [];
let color = "";

/*------------------------ Cached Element References ------------------------*/
// Buttons
const startBtn = document.getElementById("start")
const audioGreen = document.getElementById("audio1");
const audioRed = document.getElementById("audio2");
const audioYellow = document.getElementById("audio3");
const audioBlue = document.getElementById("audio4");
const green = document.getElementsByClassName("green");
// const playGreen =  document.getElementById("audioGreen")

/*----------------------------- Event Listeners -----------------------------*/
    startBtn.addEventListener("click", init())
    


/*-------------------------------- Functions --------------------------------*/
function init() {
        randomColor()
        // playSound(color)
}

function randomColor() {
    let random = Math.floor(Math.random() * colors.length)
    color = colors[random]
    turnColors.push(color)
    console.log(turnColors)
}

// function playSound(currColor) {
//     if(currColor === "green") {
//         audioGreen.play();

//     }
// }

//-----------



// ----
// const greenSound = document.getElementById("greenSound");
// const audioGreen = document.getElementById("audio1");

// greenSound.addEventListener("click", playSound);

// function playSound() {
//     audioGreen.play()
//     // try using case switch
// }

// const clickSound = document.querySelectorAll("audio");




audioGreen.addEventListener("click", function() {
    document.getElementById("audioGreen").play();
});

audioRed.addEventListener("click", function() {
    document.getElementById("audioRed").play();
});

audioYellow.addEventListener("click", function() {
    document.getElementById("audioYellow").play();
});

audioBlue.addEventListener("click", function() {
    document.getElementById("audioBlue").play();
});




