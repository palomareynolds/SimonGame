
let order = [] // keep track of the order of the lights
let playerOrder = []; //order that the plays press the color
let flash; //number of flahses 
let turn; //what turn we are on
let good; // true/false weather is the player are doind irght/wrong
let compTurn; //true/false computers turn player turn
let intervalId;
let strict = false; //stric button on or off
let noise = true; //
let on = false; //if the power button is on/off
let win; //if the player has won the game


// We create a variable for every element we are going to interact with
const turnCounter = document.querySelector("#turn"); 
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict");
const onButton = document.querySelector("#on");
const startButton = document.querySelector("#start");

strictButton.addEventListener('click', (event) => {
    if (strictButton.checked ===  true) {
        strict = true;
    } else {
        strict = false;
    }
});

onButton.addEventListener('click', (event) => {
    if (onButton.checked === true) {
        on = true;
        turnCounter.innerHTML = "-";
    } else {
        on = false;
        turnCounter.innerHTML = "";
        clearColor();
        clearInterval(intervalId);

    }
});

startButton.addEventListener('click', (event) => {
    if (on || win) {
        play();
    }
});

//reset the variables when th button play is pressed
function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    //fill up the order array with random numberr that indicates the location of each color
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1)
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}

function gameTurn() {
    on = false;

    if (flash === turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if (compTurn) {
        clearColor();
        setTimeout(() => {
            if (order[flash] === 1) one();
            if (order[flash] === 2) two();
            if (order[flash] === 3) three();
            if (order[flash] === 4) four();
            flash++;
        }, 200);
    }
}

function one() {
    if (noise) {
        var audio = document.getElementById("clip1")
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen"
}

function two() {
    if (noise) {
        var audio = document.getElementById("clip2")
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "tomato"
}

function three() {
    if (noise) {
        var audio = document.getElementById("clip3")
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "yellow"
}

function four() {
    if (noise) {
        var audio = document.getElementById("clip4")
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightskyblue"
}