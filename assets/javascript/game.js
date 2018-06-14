
var wins = 0;
var losses = 0;
var goal = 0;
var total = 0;

var crystalNumber = [];
var gameOver = false;

newGame();
updateGameState();

function updateGameState() {
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#randomNumber").text(goal);
    $("#totalNumber").text(total);
}

function newGame() {
    total = 0;
    goal = randomNumber(19, 120);
    crystalNumber.push(randomNumber(1,12));
    crystalNumber.push(randomNumber(1,12));
    crystalNumber.push(randomNumber(1,12));
    crystalNumber.push(randomNumber(1,12));
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max + 1) + min);
}

$(".crystal").click(function() {
	$("#status").text("");

    var crystalValue = parseInt($(this).attr('value'));

    total = total + crystalNumber[crystalValue];

    if (total > goal) {
        // you lose
        $("#status").text("Sorry you lose!!!");
        losses++;
        newGame();
    }

    if (total === goal) {
        // you win
        $("#status").text("Congratulions you win!!!");
        wins++;
        newGame();
    }

    updateGameState();
});