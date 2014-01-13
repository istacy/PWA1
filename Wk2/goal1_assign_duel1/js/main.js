/* Created by stacy on 1/8/14.
* Name: Stacy Faude
* Date: 1-8-14
* Assignment: Goal 1 - Assignment
* */


//self-executing function
(function(){

    console.log("FIGHT!");

    //player name
    var player1Name = "Spiderman";
    var player2Name = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var player1Health = 100;
    var player2Health = 100;

    //rounds
    var round=0;

    function fight(){
        //console.log("in the fight function");

        alert(player1Name+":"+player1Health+" *START* "+player2Name+":"+player2Health);

        for (var i = 0; i < 10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            player1Health-=f1;
            player2Health-=f2;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            console.log(player1Name+": "+player1Health + "  " + player2Name+":"+player2Health);

            var result = winnerCheck();
            console.log(result);
            if (result==="no winner"){
                round++;
                alert(player1Name+":"+player1Health+"  *ROUND "+round+" OVER"+"*  "+player2Name+":"+player2Health);
            }else{
                alert(result);
                break;
            };

        };
    };

    function winnerCheck(){

        //console.log("in winner Check FN");

        //code will go here
        var result="no winner";
        if (player1Health<1 && player2Health<1){
            result = "You Both Die";
        } else if(player1Health<1){
            result =player2Name+" WINS!!!"
        } else if (player2Health<1){
            result = player1Name+" WINS!!!"
        };
        return result;
    };

    //The program starts here
    //console.log('programs starts');
    fight();

})();