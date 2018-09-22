/*********************************************************************************
* WEB222 – Assignment 01
* I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
* this assignment has been copied manually or electronically from any other source (including web sites)
* or distributed to other students.
*
* Name: Angadpreet Baidwan Student ID: 135421170 Date: May 13, 2018
*
********************************************************************************/


/*****************************
* Task 1
*****************************/
var name = "Angadpreet Baidwan"; var courses = 5; var program = "CPA"; var ptJob = "don't have";
console.log("My name is " + name + " and I'm in " + program +
           ". I'm taking " + courses + " courses in this semester and I " +
           ptJob + " a part-time job now.\n\n");

/*****************************
* Task 2
*****************************/
var year = 2018;
var age = prompt("Please enter your age:", "18");
console.log("You were born in the year of " + (year - age) + ".\n");
var study = prompt("Enter the number of years you expect to study in the college:", "3");
console.log("You will graduate from Seneca college in the year of " + (year + study / 1) + ".\n\n");

/*****************************
* Task 3
*****************************/
var celsius = 20;
console.log(celsius + "°C is " + (celsius * 9 / 5 + 32) + "°F.\n");
var fahren = 70;
console.log(fahren + "°F is " + Math.round((fahren - 32) * 5 / 9) + "°C.\n\n");

/*****************************
* Task 4
*****************************/
for (var i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i + " is even\n");
  }
  else {
    console.log(i + " is odd\n");
  }
}
console.log("\n");

/*****************************
* Task 5
*****************************/
function largerNum (num1, num2) { // function declaration approach
  if (num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}
var greaterNum = function (num1, num2) { // function expression approach
  if (num1 > num2) {
    return num1;
  }
  else {
    return num2;
  }
}
var num1 = 5; var num2 = 12;
console.log("The larger number of " + num1 + " and " + num2 + " is " + largerNum(num1, num2) + ".\n");
console.log("The larger number of " + num1 + " and " + num2 + " is " + greaterNum(num1, num2) + ".\n\n");

/*****************************
* Task 6
*****************************/
function Evaluator () {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  if ((sum /arguments.length) >= 50) {
    return true;
  }
  else {
    return false;
  }
}
console.log("Average greater than or equal to 50: " + Evaluator(10, 100, 15) + "\n");
console.log("Average greater than or equal to 50: " + Evaluator(25, 75, 50) + "\n");
console.log("Average greater than or equal to 50: " + Evaluator(65, 55, 80) + "\n\n");

/*****************************
* Task 7
*****************************/
var Grader = function (grade) {
  if (grade >= 80) {
      return "A";
  }
  else if (grade >= 70) {
    return "B";
  }
    else if (grade >= 60) {
    return "C";
  }
    else if (grade >= 50) {
    return "D";
  }
    else {
    return "F";
  }
}
console.log("The mark " + 75 + " is equivalent to grade " + Grader(70) + ".\n");
console.log("The mark " + 92 + " is equivalent to grade " + Grader(92) + ".\n");
console.log("The mark " + 47 + " is equivalent to grade " + Grader(47) + ".\n\n");

/*****************************
* Task 8
*****************************/
function showMultiples (num, numMultiples) {
  var output = "";
  for (var i = 1; i <= numMultiples; i++) {
    output = output + " " + num*i;
  }
  return output;
}
console.log("The first " + 4 + " multiples of " + 5 + " are" + showMultiples(5,4) + ".\n");
console.log("The first " + 3 + " multiples of " + 9 + " are" + showMultiples(9,3) + ".\n");
console.log("The first " + 6 + " multiples of " + 12 + " are" + showMultiples(12,6) + ".\n\n");