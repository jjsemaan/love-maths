//wait for the DOM to finish loading before running the game
//get the button elements and event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button"); //returuns all the buttons on the page
    //you will get all the buttons as an array
    //now you need to iterate through the array
    // for (let i = 0; i < buttons.length; i++) we will use a better and more advanced syntax
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }

});

/**
 * the main game loop called when the script first loaded
 * and after the user's answer has been processed
 */
function runGame() {
    //create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}