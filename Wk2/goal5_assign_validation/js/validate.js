/*
     Developed by the JavaScript team at Fullsail
     Date: 1306

     Stacy Faude
     Jan 19, 2014
     Goal 5 Assignment - Validation
*/

// username (id = f_username) --> ^([A-Z]+[a-zA-Z]*)(\s|\-)?([A-Z]+[a-zA-Z]*)?(\s|\-)?([A-Z]+[a-zA-Z]*)?$
// email (id = f_email) --> /^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/
// phone number (id = f_phone) -->  ^\(?\d{3}?\)?\-?\d{3}?\-?\d{4}?$
// social security number (id = f_ssn) -->  ^\d{3}-\d{2}-\d{4}$
// password (id = f_password) -->  [a-zA-Z]\w{3,14}$

(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(id);  //id = is the form input field ID


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === 'f_username'){
            var pattern = '^([A-Z]+[a-zA-Z]*)(\s|\-)?([A-Z]+[a-zA-Z]*)?(\s|\-)?([A-Z]+[a-zA-Z]*)?$';

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.


        }

        var pass = '^[a-zA-Z]\w{3,14}$';
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }
    };

})();  // end wrapper



