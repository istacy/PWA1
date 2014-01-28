/**
 * Created by:
 * Class: PWA1
 * Goal: Goal9
 */

console.log("start canvas");

(function(){

    // Step 1.a. Create a Canvas dynamically and name it “canvas”.
    var canvas = document.createElement("canvas");

    //Step 1.b. Set Canvas border size of “width = 400” and “height = 300”.
    canvas.width = 400;
    canvas.height = 400;

    //Step 1.c. Add the “canvas” created in “1 (above)” to the DOM, using the .appendChild method.
    document.body.appendChild(canvas);

    //Step 1.d. Setup the variable “ctx” and make it equal to the “canvas.getContext(‘2d’);”
    var ctx = canvas.getContext('2d');

//***********************************************

    //Step 2.a.  Create an variable named “chartData” that stores an array of 4 numbers, from 1 to 100. This will represent 4 grades a student may have received.
    var chartData = [70,80,90,100];

    //Step 2.b. Create another variable called “maxBarHeight” that stores the maximum height a bar can be in pixels. Initialize the variable to 200 pixels.
    var maxBarHeight = 200;

//***********************************************

    //Step 3.a. Create a new image container in a variable named “img”.
    var img = new Image();

    //Step 3.b. Set the .src for the "img" variable to “images/bg.jpg”.
    img.src = "images/bg.jpg";

    //Step 3.c. Create the image and wait for it to load before instantiating "drawImage".
    //Step 3.c.i Create the “new Image()”.
    //Step 3.c.ii. Instantiate the "drawImage" with the parameters of (img, 0, 0, “put the canvas width here”, “put the canvas height here”).
    //Step 3.c.iii. Call a function named “drawBars”, which will draw the bars (or rectangles) on the “images/bg.jpg” image using the parameters stored in the variable “chartData”, which was created above.

    img.addEventListener('drawBars',function(){
       ctx.drawImage(img, 0, 0, 400, 400);

    }, false);

//***********************************************

    //Step 4 Function “drawBars”
    //Step 4.a. Set the font that will be used for the numbers that will be placed on top of each bar to “14px Georgia”.
    ctx.font = "14px Georgia";

    //Step 4.b. Create a FOR loop which will loop through each number in the “chartData” array and draw a rectangle on the “images/bg.jpg” created above.
    for(var i=0; i<chartData; i++){

        //Step 4.b.i. Use the .beginPath to start the draw of each bar.
        ctx.beginPath();

        //Step 4.b.ii.Create a .fillStyle that is equal to “rgba(100, 200, 200, 0.75)”.
        ctx.fillStyle = "rgba(100, 200, 200, 0.75)";

        //Step 4.b.iii. Use the following to apply the correct height of each bar, according to the data. As well as take into the consideration the max height defined above of 200 pixels.
        var height = maxBarHeight*chartData[i]/100;

        //Step 4.b.iv. Position and draw each bar correctly by using the .rect method. In the .rect method you will want to use the following parameters “(i*80+90, 270-height, 50, height)”.
        ctx.rect(i*80+90, 270,50);

        //Step 4.b.v. Call the .fill method to fill in the bars with the .fillStyle defined in “ii” (above).
        ctx.fill();

        //Step 4.b.vi. Create a .fillStyle that will be used to write the numbers above each bar in white. The parameters for the .fillStyle should equal to “rgb(255, 255, 255)”.
        ctx.fillStyle = "rgb(255, 255, 255)";

        //Step 4.b.vii. Call the .fillText method to write out the numbers above the bars using the .fillStyle defined in “vii.” (directly above).
        ctx.fill();
    }

        //Step 4.c. Create a call to a function named “drawChartText();” (located directly below). This function will be used to write any text that the bar chart needs.

//***********************************************

        //Step 5. Function “drawChartText”
        //Step 5.a.Write a title in the upper left of the bar chart.
        //Step 5.a.i. Set the font that will be used for the header to “20px Georgia”.
        ctx.font = '20px Georgia';

        //Step 5.a.ii. Create a .fillStyle that will be used to write the header in white. The parameters for the .fillStyle should equal to “rgb(255, 255, 255)”.
        ctx.fillStyle = "rgb(255, 255, 255)";

        //Step 5.a.iii. Call the .fillText method to write out the header “TEST GRADES” in position “x=30” and “y=30”.
        ctx.fillText('Test Grades', 30, 30);

        //Step 5.b Write a label below each bar item in the image.
        //Step 5.b.i. Create a variable named “xAxisData” that stores an array of labels for each item in the “chartData” array. There should be 4 labels to match the “chartData” items.
        var xAxisData = chartData;

        //Step 5.b.ii. Set the font that will be used for the label to “14px Georgia”.
        ctx.font = '14px Georgia';

        //Step 5.b. Create a .fillStyle that will be used to write the label in black. The parameters for the .fillStyle should equal to “rgb(0, 0, 0)”.
        ctx.fillStyle = "rgb(0, 0, 0)";

        //Step 5.b.iv. Create a FOR loop to loop through the “xAxisData” array, and use the .fillText to display the text under each bar. The .fillText parameters should be “(xAxisData[i],i*80+95, 290)”
        for (var i=0; i<0; i++){
            ctx.fillText(xAxisData[i],i*80+95, 290);
    }


})();