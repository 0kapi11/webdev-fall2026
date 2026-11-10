/* 
  =================================================================================
  JS Comparison Operators Lesson
  =================================================================================
*/
// ///let x = 7;
// let y = "7";
// // > more than
// console.log(
//     x > 10, x > 6
// );
// // >= more than or equal to
// console.log(
//     x >= 10, x >= 7
// );
// // < less than
// console.log(
//     x < 10, x < 6
// );
// // <= less than or equal to
// console.log(
//     x <= 10, x <= 7
// );
// // == equal to
// console.log(
//     x == 7, x == 6
// );
// // != not equal to

// console.log(
//     x != 7
// );
// // === strict equality. y is a string, x is not
// console.log(
//     x === 7, x === y
// );
// // !== strict not equal to
// console.log(
//     x !== y
// );///
/*
### TASKS ###

1. Create two variables, called a and b. Assign the value 10 to a and 15 to b.
Check to see if a is more than b, log the answer to the console.

2. Use the relevant comparison operator to identify whether a is equal to "10".
Log your answer to the console.

3. Check once again to see if a is equal to "10", this time making sure to check
against the type as well. Log your answer to the console.

4. If x is equal to "5" and y is equal to 6, what would the result of the following
be? x !== y? true

*/

// let a = 10;
// let b = 15;

// console.log(
//     a > b
// );

// console.log(
//     a==10
// );

// console.log(
//     a === "10"
// );

/* 
  =================================================================================
  JS Logical Operators Lesson
  =================================================================================
*/
// let a = 1;
// a=!a; 
// console.log(typeof a, a);
// let b = 0;
// b=!b

// console.log(typeof b, b);
// // truthy and falsey values
// let c = 1;
// c= !c;
// console.log(typeof c, c);

// let d= 0;
// d= !d;

// console.log(typeof d, d);

// let g=1;
// let h=0;

// if(!h) {
//     console.log("hello");
// }

// // && logical and operator
// if(x && !h) {
//     console.log("hello");
// }
// // || logical or operator
// if(x || h) {
//     console.log("hello");
// }

/*g || alert("this is ignored since x is true");
h || alert("this is alerted since y is false");/*
/*
### TASKS ###

1. Will the result of the following be true or false? true */

/*let a = "Dev Dreamer";
let b = '';

if (a || b) {
    console.log("hello");
}

/* 2. Will the result of the following be true or false? true */

/*a = "Dev Dreamer";
b = '';

if (a && true && !b) {
    console.log("hello")
}/*
true
/* 3. Create the following variables a = -1; b = 1; create an if statement using a 
logical && operator. Will the expression evaluate to true?
if(a && b) {
    console.log("hello)} true */


/* 
  =================================================================================
  JS if else Statements Lesson
  =================================================================================
*/

// if statements
// let game = 'sonic';

// if(game === 'sonic') {
//     console.log("the condition is true");
// }

// if else statements
// let game = 'mario';

// if(game === 'sonic') {
//     console.log("the condition is true");
// } else {
//     console.log("the condition is false");
// }

// if else if else statements
// let roll = 2;

// if(roll === 4) {
//     console.log("you rolled a four");
// } else if (roll === 5) {
//     console.log("you rolled a five");
// } else if (roll === 6) {
//     console.log("you rolled a siz");
// } else {
//     console.log('you rolled less than four');
// }

/*
### TASKS ###

1. What will the following code display in the console?

let num = 10 + 2;

if (num > 2 && num < 20) {
    console.log("TRUE");
} else {
    console.log("FALSE");
True
2. Create a variable called user and set its value to 'employee'. Create an else if
statement to first check if user is equal to guest, if this is true, console.log 
'Login Denied', then check if user is equal to employee and console.log 
'Successfully Logged in'.
user = 'employee'
if (user === 'guest){
    console.log('login denied;
} else if (user === 'employee){
 console.log('successfully logged in');}
3. Assign your first name to a variable called myName and create an if statement to
see if the number of letters in your name is more than 5, if it is alert "More than 
5", next check to see if it is exactly 5 letters, if it is alert "Exactly 5 letters",
if neither of these is true then alert "Less than 5 letters".
let myName='oliver';

let nameLength=myName.length;

if (nameLength >5) {
    alert("more than 5 letters")    
} else if (nameLength===5){}
    alert("exactly 5 letters")
}else{
    alert("less than five letters")
}
*/
// Displaying script.js.