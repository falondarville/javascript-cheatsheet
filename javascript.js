// All of these exercises are based off of Derek Banas' JavaScript Tutorial published on YouTube
// https://www.youtube.com/watch?v=fju9ii8YsGs


//print a message to HTML with data input by user
//check if user provided name
//if users clicks "cancel" upon being prompted, "else" statement will console log
// var yourName = prompt("What is your name?");

// if(yourName != null) {
// 	document.getElementById("sayHello").innerHTML = ("Hello " + yourName);
// } else {
// 	console.log("Please enter your name next time.");
// }

//NUMBERS

//basic arithmetic
document.write("5 + 4 = ", 5 + 4, "<br />");
document.write("5 - 4 = ", 5 - 4, "<br />");
document.write("5 * 4 = ", 5 * 4, "<br />");
document.write("5 / 4 = ", 5 / 4, "<br />");
document.write("5 % 4 = ", 5 % 4, "<br />");

//determine approximate max and min numbers 
document.write("Max Num = ", Number.MAX_VALUE, "<br />");
document.write("Min Num = ", Number.MIN_VALUE, "<br />");

//determine how precise numbers are in Javascript
//add one more zero to both of the numbers below and the computer will output 0.2
//lesson: numbers are approximates when you go over 16 digits of value
//this is not JavaScript specific, but true of most programming languages
precisionTest = 0.1000000000000001;
document.write(precisionTest + 0.1000000000000001, "<br />")

//round numbers to determined number of places while performing arithmetic
//try taking "toFixed" out of the following to see that the outputted number would otherwise have 4 places after the decimal
var balance = 1563.87;
document.write("Monthly payment : ", (balance/12).toFixed(2), "<br />");


//incrementing and decrementing
var randomNumber = 5;

document.write("randomNumber++ = ", randomNumber++, "<br />");

document.write("++randomNumber = ", ++randomNumber, "<br />");

document.write("randomNumber-- = ", randomNumber--, "<br />");

document.write("--randomNumber = ", --randomNumber, "<br />");

//shortcut arithmetic
document.write("randomNumber += 5 = ", randomNumber += 5, "<br />");

document.write("randomNumber -= 5 = ", randomNumber -= 5, "<br />");

document.write("randomNumber *= 5 = ", randomNumber *= 5, "<br />");

document.write("randomNumber /= 5 = ", randomNumber /= 5, "<br />");

//select other arithmetic values
document.write("Math.E = ", Math.E, "<br />");
document.write("Math.PI = ", Math.PI, "<br />");
document.write("Math.ceil(6.45) = ", Math.ceil(6.45), "<br />");
document.write("Math.floor(6.45) = ", Math.floor(6.45), "<br />");
//standard round (.5 rounds up, less than .5 rounds down)
document.write("Math.round(6.45) = ", Math.round(6.45), "<br />");
//cube root
document.write("Math.cbrt(1000) = ", Math.cbrt(1000), "<br />");
document.write("Math.log(10) = ", Math.log(10), "<br />");

//round with up down with a max and min value
//the following selects a number between 1 and 10
document.write("Random # (1-10) = ", Math.floor((Math.random() * 10) +1), "<br />");

//convert string to number 
document.write("Converted String: ", Number("3.14"), "<br />");

//convert string to integer
//an integer is a whole number (negative and positive)
document.write("Convered Int : ", parseInt("5"), "<br />");

//convert float (decimaled number)
document.write("Converted Float : ", parseFloat("3.14"), "<br />");

//STRINGS

//concatenation of strings using +
var randomString = "A long " + "string that " + "goes on and on";

//get length of string
document.write("String length ", randomString.length + "<br />");

//index inside string
//"goes" starts at 19th character in the string
document.write("Index for \"goes\" : ", randomString.indexOf("goes"), "<br />");

//take part out of string using slice
//outputs what you are taking out of the string
document.write("randomString.slice(19.23) " + randomString.slice(19,23), "<br />");

//take out all of string remaining beginning at particular point
//outputs what you are taking out of the string
document.write("randomString.slice(19) " + randomString.slice(19) + "<br />");

//takes out string portion beginning at particular index and according to particular character denotation. For example, the following begins to slice at character 19 and slices 4 characters length
document.write("randomString.substr(19,4) ", randomString.substr(19,4), "<br />");

//replace parts of string
document.write(randomString.replace("and on", "forever") + "<br />");

//determine character at particular index 
document.write("At Index 2 : ", randomString.charAt(2) + "<br />");

//split a string into an array
//the following splits the string in seperate arrays at the spaces
var randomStringArray = randomString.split(" ");
console.log(randomStringArray);






