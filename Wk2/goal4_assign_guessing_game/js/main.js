/*
 * GUESSING GAME:
 *
 * Created By: Stacy Faude
 * Date: 1-18-14
 * 
 * GUESSING GAME
 */

//Game variables
(function (){
    var x = Math.floor(Math.random() * 10) + 1;
    console.log('The random number is ' + x);
    var guesses = 0;
    var tries = 3;
    var dom = {
        input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector("button")
    };

    // the validate function, referenced from the makeGuess() function
    function isInteger(value) {
        // parse users input value to integer and decimal to make sure it's really an integer, since parseInt returns only the first number in a string
        if (!isNaN(parseInt(value,10)) && (parseFloat(value,10) == parseInt(value,10))){
            if(value > 0 && value <= 10){
                return true;
            }
        };
        return false;
    }

    function checkGuesses(playerGuesses){
        // if player guesses less than value of tries minus 1 because guesses start at 0
        if(playerGuesses > tries-1){
            console.log('Too many guesses. Game Over.');
            dom.output.innerHTML = dom.output.innerHTML + "You've guessed too many times. Game over.";
            // remove listener
            dom.button.removeEventListener('click',listener,false);
            return false;
        }
        return true;
    }

    // the main function, referenced in the addEventListener
    function makeGuess(){
        var playersGuess = dom.input.value;

        if(guesses == tries)
            return false; // return false with keypress when guesses are reached.

        // pass the playersGuess to isInteger() function in the IF statement. Returns boolean (true/false).
        if(isInteger(playersGuess)){
            console.log('The input: ' + playersGuess + ' is a valid integer.');
            if(playersGuess < x){
                // add 1 to the guesses
                guesses++;
                console.log('The guess was too low.');
                dom.output.innerHTML = "Guess " + guesses +": You are too low.";
                checkGuesses(guesses);
            }
            else if(playersGuess > x){
                // add 1 to the guesses
                guesses++;
                console.log('The guess was too high.');
                dom.output.innerHTML = "Guess " + guesses +": You are too high.";
                checkGuesses(guesses);
            }
            else{
                console.log('The guess was right on.');
                dom.output.innerHTML = "Correct, You WIN";
                // remove listener
                dom.button.removeEventListener('click',listener,false);
            }
        } else {
            console.log('The input is not a valid integer between 1 and 10.');
            dom.output.innerHTML = "Please enter an integer.";
        }

    };

    var listener = function(){makeGuess()};
    var keypressListener = function (e) {
        var key = e.which || e.keyCode;
        if (key == 13) // 13 is enter
            makeGuess();
    };
    // add listener
    dom.button.addEventListener('click',listener);
    dom.input.addEventListener('keypress', keypressListener);

})();