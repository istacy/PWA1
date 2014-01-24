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
    var goodForm = false;
    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.
        //validateField(id);  //id = is the form input field ID

        // clear the console for easier reading.
        console.clear();
        // get nodeList of inputs (an object like an array with our form elements)
        var formFields = myform.getElementsByTagName('input');
        // loop nodeList of inputs
        for (var i=0;i<formFields.length;i++){
            // ignore the input with id of f_submit (the submit button)
            if(formFields[i].id != 'f_submit'){
                // validate input, returns boolean (true/false) if all validation passes
                goodForm = validateField(formFields[i]);
            }
        }
        // if validation failed, don't submit the form.
        if(!goodForm){
            e.preventDefault();
            return false;
        }
    };

    var validateField = function(inputName){
        if (inputName.name === 'f_username'){
            var pass = /^([A-Z]+[a-zA-Z]*)(\s|\-)?([A-Z]+[a-zA-Z]*)?(\s|\-)?([A-Z]+[a-zA-Z]*)?$/;
        }
        else if (inputName.name === 'f_email'){
            var pass = /^[\w\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/;
        }
        else if (inputName.name === 'f_phone'){
            var pass = /^\(?\d{3}?\)?\s?\-?\d{3}?\-?\d{4}?$/;
        }
        else if (inputName.name === 'f_ssn'){
            var pass = /^\d{3}-\d{2}-\d{4}$/;
        }
        else if (inputName.name === 'f_password'){
            var pass = /[a-zA-Z]\w{3,14}$/;
        }

        var errorMsg = document.getElementById(inputName.name+"_error");
        // match the regular expression for valid input
        if (inputName.value.match(pass)) {
            console.log(inputName.name + " = '" + inputName.value + "' (GOOD)");
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
            return true;
        } else {
            console.log(inputName.name + " = '" + inputName.value + "' (BAD)");
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
            return false;
        }
    };

})();  // end wrapper




