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
    var turns = 3;
    var dom = {
        input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector("button")
    };

    console.log(x);
    //dom.output.innerHTML = x;


    var validateInput = function(){
        playersGuess = parseInt(dom.input.value);

        if(isNAN(playersGuess)){//check for proper data type
            dom.output.innerHTML = "Please enter a valid number";
        };

    dom.button.onclick = function makeGuess(){
        if(x < playersGuess){
            dom.output.innerHTML = "You are too low";
        }
        if(x > playersGuess){
            dom.output.innerHTML = "You are too high";
        }
        else{
            dom.output.innerHTML = "Correct, You WIN";
        }
        };
    };


})();


