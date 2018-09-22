/*********************************************************************************
* WEB222 – Assignment 02 Part B
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Angadpreet Baidwan Student ID: 135421170 Date: June 10, 2018
*
********************************************************************************/

// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1
console.log("*** Task 1***");
var last = courses.pop();
console.log("\nCourse " + last.code + " was deleted from the array (courses)");
var ibc233 = { code: 'IBC233', name: 'iSERIES Business Computing', hours: 4, url: 'https://scs.senecac.on.ca/~ibc233/'};
var oop244 = { code: 'OOP244', name: 'Introduction to Object Oriented Programming', hours: 4, url: 'https://scs.senecac.on.ca/~oop244/'};
var web222 = { code: 'WEB222', name: 'Internet Fundamentals', hours: 4, url: 'https://scs.senecac.on.ca/~web222/'};
var dbs201 = { code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'https://scs.senecac.on.ca/~dbs201/'};
console.log("Adding new course objects into the array (courses)");
courses.push(ibc233);
courses.push(oop244);
courses.push(web222);
courses.push(dbs201);
console.log("\nCourse objects in the array (courses):");
for (var i = 0; i < courses.length; i++) {
    console.log(courses[i].code + ', ' + courses[i].name + ', ' 
                + courses[i].hours + ' hours/week, website: ' + courses[i].url);
}

// task 2
console.log("\n*** Task 2 ***\n\n");
var john = Object.create(student);
john.name = "John Smith", john.dob = new Date(1999, 8, 10), john.sid = "010456101", john.program = "CPA", john.gpa = 4;
var jim = Object.create(student);
jim.name = "Jim Carrey", jim.dob = new Date(1992, 0, 17), jim.sid = "012345678", jim.program = "CPD", john.gpa = 3.5;
var jb = Object.create(student);
jb.name = "Justin Bieber", jb.dob = new Date(1994, 2, 1), jb.sid = "0987654321", jb.program = "CAN", jb.gpa = 3;
var jt = Object.create(student);
jt.name = "Justin Trudeau", jt.dob = new Date(1992, 0, 12), jt.sid = "123456789", jt.program = "CAN", jt.gpa = 4;
var students = [john, jim, jb, jt];
function std_display (std, index) {
    console.log(index + ": " + std.toString());
}
console.log("Student objects in the array (students):");
students.forEach(std_display);