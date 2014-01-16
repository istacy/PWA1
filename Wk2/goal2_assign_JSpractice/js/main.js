/*
Stacy Faude
1-13-14
JS Practice
 */

// self-executing function
(function(){

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
         - accept 1 parameter into the function that will be an array of unlimited numbers
         - find the average of all the numbers
         - return the average from the function
         - console.log the answer outside of the function

     2.  create a function named 'fullName'
         - accept 2 parameters into the function that are strings (firstname and lastname)
         - return the name after it has been concatenated
         - console.log the answer outside of the function

     3.  create a function named 'wordCount'
         - accept 1 parameter into the function that is a long string of text words
         - create a function that counts all the words and return the answer
         - console.log the answer outside of the function

     4.  create a function named 'charCount'
         - accept 1 parameter into the function that is a long string of text
         - return length of the array of string characters
         - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
         - accept 1 parameter into the function that is a a one word string
         - return the number of vowels in the word
         - console.log the answer outside of the function

     6.  create a function named 'findNum'
         - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
         - if the second parameter being passed is "false" or null then
             - create an array with all of the odd numbers from
                the array
         - else - create an array with all of the even numbers
            from the array
         - return the array
         - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");

//    var avgNumbers = function(arr){
//        //code goes here
//    };
//    console.log('avg number = ', avgNumbers([1,2,3,4,5]));

    var arrNumbers=[1,2,3,4,5];
    console.log("My array is:" + arrNumbers);

    function getAvg(myArray)
    {
        var total = 0;
        for (var i = 0; i < myArray.length; i++) {
            total = +total + +myArray[i];
        }
        console.log("total = " + total);
        return total / myArray.length;
    }
    console.log("The average is " + getAvg(arrNumbers));

    //--------------------------------------------------------
    console.log("2. concat first and last name");

     //var name = ['James ','Bond'];
     //var fullName = name[0].concat(name[1]);
     //console.log(fullName);


    function fullName(firstname, lastname){
        var firstname ='James ';
        var lastname = 'Bond';
        var name = firstname.concat(lastname);
        return name;
    }

    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");

    var ipsum = "this is test text that is being used as input to a function"
    myString = String(ipsum);
    console.log('Changed to a string: ', typeof myString, myString);

        //PUT FUNCTION HERE
        function wordCount(ipsum){
            var count = 0;
            for (var i = 0; i < ipsum.length; i++) {
                if (ipsum.charAt(i) == " ") {
                    count ++;
                }
            }
            return count + 1;
        }


    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

        //Character count
        var ipsum = "this is test text that is being used as input to a function"
        myString = String(ipsum);
        console.log('Test char count: ', myString.length);

        //PUT FUNCTION HERE
        function charCount(ipsum) {
            var strCount = myString.length;
            return strCount;
        }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

    console.log('Test for counting vowels');
    var word = 'JavaScript';
    var syl = 0;

    for(var i=0; i<word.length; i++) {
        if('aouie'.search(word[i]) > -1){
            syl++;
        }
    }

    console.log(syl+" vowels");

        //PUT FUNCTION HERE

    function vowelsInWord(str) {
        var vowels = str.match(/[aeiou]/gi);
        return vowels && vowels.length;
    }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");

        //PUT FUNCTION HERE

    function findNum(){

    }

    console.log(findNum([31,22,4,67,83,6,5,4]));
    console.log(findNum([31,22,4,67,83,6,5,4], false));

})();