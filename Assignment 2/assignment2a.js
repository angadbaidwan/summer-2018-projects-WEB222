/*********************************************************************************
* WEB222 – Assignment 02 Part A
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Angadpreet Baidwan Student ID: 135421170 Date: June 10, 2018
*
********************************************************************************/

/*****************************
* Step 1
*****************************/
var e1, e2, e3, e4, e5, e6, e7, str;

/*****************************
* Step 2
*****************************/
function capFirstLetter(f_name) {
  f_name = f_name.substring(0,1).toUpperCase() + f_name.substr(1, f_name.length).toLowerCase();
  return f_name;
}
e1 = prompt("Enter your first name:", "Angadpreet");
e1 = capFirstLetter(e1);

/*****************************
* Step 3
*****************************/
var getAge = function(b_year) {
  return ((new Date()).getFullYear() - b_year);
}
e2 = Number(prompt("Enter your birth year:", "1998"));
e2 = e2;

/*****************************
* Step 4
*****************************/
e3 = prompt("Enter your college's name:", "seneca college");
var college = e3.split(" ");
e3 = capFirstLetter(college[0]) + " " + capFirstLetter(college[1]);

/*****************************
* Step 5
*****************************/
e4 = prompt("Enter 5 favorite sports seperated by comma:", "hockey,football,basketball,tennis,golf");
e4 = e4.replace(/football/g, "soccer");
e4 = e4.split(",");
e5 = prompt("Enter an extra favorite sport:", "formula 1");
e4.push(e5);

/*****************************
* Step 6
*****************************/
for (var i = 0; i < e4.length; i++) {
  e4[i] = e4[i].toUpperCase();
}
e4.sort();

/*****************************
* Step 7
*****************************/
function getDateString(date) {
   return String(date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate());
}
e6 = new Date();
e7 = getDateString(e6);

/*****************************
* Step 8
*****************************/
str = "User Info:\n\nname (e1): " + e1 + "\nage (e2): " + e2
      + "\nschool (e3): " + e3 + "\nfavorite sports (e4):\n        " 
      + e4.join("\n        ") + "\ncurrent date (e7): " + e7;
console.log(str);