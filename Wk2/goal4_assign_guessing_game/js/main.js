/*
 * GUESSING GAME:
 *
 * Created By: Stacy Faude
 * Date: 1-18-14
 * 
 * GUESSING GAME
 */

//Game variables
//(function (){
//
//    var x = Math.floor(Math.random() * 10) + 1;
//    var turns = 3;
//    var hint = 'Guess my number, 1-10!';
//
//    while (turns > 0) {
//        var guess = prompt(hint +
//          ' You have ' + turns + ' guesses left.');
//        if (!guess) break;
//        guess = Number(guess);
//        if (guess == x) {
//            document.write('<p>YOU WIN!</p>');
//            turns = 0;
//        } else {
//            hint = 'Nope.';
//            if (guess < x) hint += ' Too small!';
//            if (guess > x) hint += ' Too big!';
//            turns = turns - 1;
//        }
//    }
//alert('The secret number was ' + x + '.');
//
//})();

(function (){
    var x = Math.floor(Math.random() * 10) + 1;
    var turns = 3;
    var dom = {
        input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector("button")
    };

    var status;

    while (turns > 0){
        var guess = (document.querySelector("output"));
        if (!guess) break;
        guess = Number(guess);
        if (guess == x) {
            document.querySelector("output").innerHTML("You win");
            turns = 0;
        } else {
            document.querySelector("output").innerHTML("Guess Again");
            if (guess < x) document.querySelector("output").innerHTML("Too Small!");
            if (guess > x) document.querySelector("output").innerHTML("Too Big!");
            turns = turns - 1;
        }
    }
//
//    var validateInput = function(){
//        playersGuess = parseInt(dom.input.value);
//
//        if(isNAN(playersGuess)){//check for proper data type
//
//        }
//    };

})();