var letters = ["a", "b", "c"];

var wins = 0;
var losses = 0;
var left = 9;
var guesses = 9;
var guessesTried = [];
var psychicLetter;


//math.floor = returns the largest integer less than or equal to a given number.
//math.random = chooses random number in array
var newLetter = function () {
    psychicLetter = letters[Math.floor(Math.random() * letters.length)];
};

var tried = function () {
    document.getElementById("guesses").innerHTML = "Guesses so far: " + guessesTried.join(",");
};

var guessesLeft = function () {
    document.getElementById("left").innerHTML = "Guesses Left: " + left;
};

var newGame = function () {
    guessedLetters = [];
    left = 9;
    newLetter();
    guessesLeft();
    tried();
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    left--;
    guessesTried.push(userGuess);
    tried();
    guessesLeft();
    if (left > 0) {
        if (userGuess == psychicLetter) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins:" + wins;
            newGame();
        }
    } else if (left == 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses:" + losses;
        newGame();
    }
};