/*

Stacy Faude
1-23-14
	* Mid Terms for PWA-1
*/


//Global Variable #1: the current student record to display
var record = 0;

//Global Variable #2: Students
var students = [
    {name: 'Stacy Faude', address:{address: '2000 Snowcovered Road', city: Chicago, state: Illinois}, gpa: [4.0, 4.0, 4.0]},
    {name: 'Lady Gaga', address:{address: '1234 Rockstar Road', city: Los Angeles, state: California}, gpa: [3.0, 2.5, 3.8]},
    {name: 'Luke Bryan', address:{address: '9876 Country Road', city: Smalltown, state: Georgia}, gpa: [3.8, 4.0, 3.6]}
    ];

//function to add student to global array of students
function addStudent(name,address,city,state,gpa){
    console.log('********** Adding New Student **********');
    var gpas = new Array();
    for (var i=0; i<gpa.length;i++){
        console.log('********** Check GPA **********');
        //Check for valid GPA
        if(isGPA([i])){
            console.log(gpa[i] + ' is a valid GPA.');
            //format the GPA
            gpas[i] = formatGPA[i]);
            console.log('Format GPA: ' + gpas[i]);
        }
    }

    //create student object
    var student = {name: name, address:{address: address, city: city, state: state}, gpa: gpas};
    //adds the student object to the students array
    students.push(student);
}

//Function to check for valid GPA
function isGPA(n){
    var gpa = parseFloat(n);
    //if GPA is flaot and between 0-4
    if(!isNaN(gpa) && gpa >= 0 && gpa <= 4){
        //get 2 decimal places
        gpa=gpa.toFixed(2);
        return true;
    }
    return false;
}

