/* Created by stacy on 1/28/14.
 * Name: Stacy Faude
 * Date: 1-28-14
 * Assignment: Goal 11 Assign Final
 * */

// Global Variable #1: The current student record to display
var record = 0;

// Global Variable #2: Students
var students = [];

////function to add student to global array of students
//function addStudent(name,address,city,state,gpa){
//    console.log('********** Adding New Student **********');
//    var gpas = new Array();
//    for (var i=0; i<gpa.length;i++){
//        console.log('********** Check GPA **********');
//        //Check for valid GPA
//        if(isGPA([i])){
//            console.log(gpa[i] + ' is a valid GPA.');
//            //format the GPA
//            gpas[i] = formatGPA(gpa[i]);
//            console.log('Format GPA: ' + gpas[i]);
//        }
//    }
//
//    console.log('*******************************');
//
//    //create student object
//    var student = {name: name, address:{address: address, city: city, state: state}, gpa: gpas};
//    //adds the student object to the students array
//    students.push(student);
//}

// function to check for valid GPA
function isGPA(n) {
    var gpa = parseFloat(n);
    // if GPA is float and between 0-4
    if(!isNaN(gpa) && gpa >= 0 && gpa <= 4){
        // get 2 decimal places
        gpa=gpa.toFixed(2);
        return true;
    }
    return false;
}

// function to format gpa 2 decimals, used in GPA validation and Average GPA
function formatGPA(n) {
    return parseFloat(n).toFixed(2);
}

// function to get the average gpa, accepts array of GPAs
function avgGPA(gpa){
    var total = 0;
    // loop GPA and add to total
    for (var i=0;i<gpa.length;i++){
        total += +gpa[i];
    }
    // return and format average gpa
    return formatGPA(total / gpa.length);
}

// function to format date
function displayDate(d){
    return d.getMonth() + 1 + '/' + d.getDate() + '/' + d.getFullYear();
}

// function to display students in console
function displayConsole(){
    for (var i=0;i<students.length;i++){
        console.log('Name: ' + students[i].name);
        console.log('Address: ' + students[i].address.address + ', ' + students[i].address.city + ', ' + students[i].address.state);
        console.log('GPA: ' + students[i].gpa.join(","));
        console.log('Date: ' + displayDate(students[i].date));
        console.log('-------------------');
    }
}

// function to display student info, accepts integer (index of students array)
function displayRecord(i){
    document.getElementById('name').innerHTML = students[i].name;
    document.getElementById('address').innerHTML = students[i].address.address + ', ' + students[i].address.city + ', ' + students[i].address.state;
    document.getElementById('gpa').innerHTML = students[i].gpa.join(", ");
    document.getElementById('date').innerHTML = displayDate(students[i].date);
    // call to prototype method
    document.getElementById('gpaavg').innerHTML = students[i].getAvgGpa();
}

// function to get the next student record
function nextRecord(){
    record++;
    displayRecord(record);
    // disable button and show "Done"
    if(record == students.length-1){
        document.getElementById('btn-next').removeEventListener('click',listener,false);
        document.getElementById('btn-next').innerHTML = 'Done!'
    }
}
// Global Variable #3: Button Click Event listener
var listener = function(){nextRecord()};
// Add click event to button
document.getElementById('btn-next').addEventListener('click',listener);

// calls to constructor
new student('Lady Gaga', '1234 Rockstar Road', 'LosAngeles', 'California', [2.9, 4.0, 3.7], new Date());
new student('Luke Bryan', '9876 Country Road', 'Hunting Woods', 'Georgia', [2.5, 4.0, 2.7], new Date());
new student('Stacy Faude','2000 Snowcovered Road','SmallTown', 'Wisconsin',[4.0, 3.9, 4.0], new Date());
//add a student
//addStudent('Justin Bieber', '4545 Bad Avenue', 'Some City', 'Flordia',[2.0, 1.9, 2.1], new Date());
// output updated students array on console
displayConsole();
// display first student record
displayRecord(record);