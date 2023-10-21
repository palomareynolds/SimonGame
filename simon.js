
let order = [] // keep track of the order of the lights
let playerOrder = []; //order that the plays press the color
let flash; //number of flahses 
let turn; //what turn we are on
let good; // true/false weather is the player are doind irght/wrong
let compTurn; //true/false computers turn platyer turn
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
})

onButton.addEventListener('click', (event) => {
    if (onButton.checked === true) {
        on = true;
        turnCounter.innerHTML = "-"
    } else {
        on = false;
        turnCounter.innerHTML = ""
    }
})
