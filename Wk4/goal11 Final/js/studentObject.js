/**
 * Created by stacy on 1/29/14.
 * Stacy Faude
 * 1-29-14
 * Goal 11 - Final
 */

// constructor function creates a new student object
function student(name, address, city, state, gpa, date)
{
    var fulladdress = {address:address,city:city,state:state,state:state};
    this.name = name;
    this.address = fulladdress;

    var gpas = new Array();
    for (var i=0;i<gpa.length;i++){
        // check for valid GPA
        if(isGPA(gpa[i])){
            // format the GPA
            gpas[i] = formatGPA(gpa[i]);
        }
    }
    this.gpa = gpas;
    this.date = date;
    // add student to students array
    students.push(this);
}
// prototype method to cacalculate and format Average GPA
student.prototype.getAvgGpa = function() {
    return avgGPA(this.gpa);
};