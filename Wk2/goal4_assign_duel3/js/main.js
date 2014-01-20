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

    function fight(){
        //console.log("in the fight function");

//        alert(player1[0]+":"+player1[2]+" *START* "+player2[0]+":"+player2[2]);
        document.getElementById("#fight_box").innerHTML="start";

        for (var i = 0; i < 10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);

            //var minDamage1 = player1[1] * .5;
            //var minDamage2 = player2[1] * .5;
            //var f1 = Math.floor(Math.random()*(player1[1]-minDamage1)+minDamage1);
            //var f2 = Math.floor(Math.random()*(player2[1]-minDamage2)+minDamage2);
            var minDamage1 = player1.damage * .5;
            var minDamage2 = player2.damage * .5;
            var f1 = Math.floor(Math.random()*(player1.damage-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(player2.damage-minDamage2)+minDamage2);

            //console.log(f1);
            //console.log(f2);

            //inflict damage
            //player1[2]-=f1;
            //player2[2]-=f2;
            player1.health-=f1;
            player2.health-=f2;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            //console.log(player1[0]+": "+player1[2] + "  " + player2[0]+":"+player2[2]);
            console.log(player1.name+": "+player1.health + "  " + player2.name+":"+player2.health);

            var result = winnerCheck();
            console.log(result);
            if (result==="no winner"){
                round++;
//                alert(player1[0]+":"+player1[2]+"  *ROUND "+round+" OVER"+"*  "+player2[0]+":"+player2[2]);
            }else{
//                alert(result);
                break;
            };

        };
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
        };
        return result;
    };

    //The program starts here
    //console.log('programs starts');
    fight();

})();