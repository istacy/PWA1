/*
 * GUESSING GAME:
 *
 * Created By: Stacy Faude
 * Date: 1-18-14
 * 
 * GUESSING GAME
 */



(function (){
    var x = Math.floor(Math.random() * 10) + 1;

    var dom = {
        input: document.querySelector("#input"),
        output: document.querySelector("#output"),
        button: document.querySelector("button")
    };

    var status;

    var validateInput = function(){
        playersGuess = parseInt(dom.input.value);

        if(isNAN(playersGuess)){//check for proper data type

        }
    };

})();