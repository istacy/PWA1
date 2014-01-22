/* Created by stacy on 1/8/14.
* Name: Stacy Faude
* Date: 1-18-14
* Assignment: Goal 4 - Duel 3
* */


//self-executing function
(function(){

    console.log("FIGHT!");

    //player name
    player1 = {'name':'Spiderman','damage':20,'health':100};
    player2 = {'name':'Batman','damage':20,'health':100};

    //rounds
    var round=0;

    //function fight(){
    fight_btn.onclick = function fight(){
        //console.log("in the fight function");

        document.getElementById("fight_box");


            var minDamage1 = player1.damage * .5;
            var minDamage2 = player2.damage * .5;
            var f1 = Math.floor(Math.random()*(player1.damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2.damage-minDamage2)+minDamage2);

            //inflict damage
            player1.health-=f1;
            player2.health-=f2;

            console.log(player1.name+": "+player1.health + "  " + player2.name+":"+player2.health);

            //output players health
            document.getElementById("player1-health").innerHTML = player1.name+": " + player1.health;
            document.getElementById("player2-health").innerHTML = player2.name+": " + player2.health;

            var result = winnerCheck();
            console.log(result);
            if (result==="no winner"){
                round++;
                document.getElementById("round_number").innerHTML=round;
            }else{
                document.getElementById("scores").innerHTML=result;
                // remove the fight button and display  "Game Over"
                document.getElementById("fight_btn").innerHTML="Game Over";
            }

        };


    function winnerCheck(){

        //console.log("in winner Check FN");

        //code will go here
        var result="no winner";
        if (player1.health<1 && player2.health<1){
            result = "You Both Die";
        } else if(player1.health<1){
            result =player1.name +" WINS!!!"
        } else if (player2.health<1){
            result = player1.name+" WINS!!!"
        }
        return result;
    }

    //The program starts here
    //console.log('programs starts');
    //fight();

})();

