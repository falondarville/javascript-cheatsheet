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

//trim white space before or after string
randomString = randomString.trim();

//change to all caps
document.write(randomString.toUpperCase() + "<br />");

//change to all lower case
document.write(randomString.toLowerCase() + "<br />");

//style strings
var styleString = "Random String";

document.write(styleString.big(), "<br />");
document.write(styleString.bold(), "<br />");
document.write(styleString.fontcolor("blue"), "<br />");
document.write(styleString.fontsize("20px"), "<br />");
document.write(styleString.italics(), "<br />");
document.write(styleString.link("#"), "<br />");
document.write(styleString.small(), "<br />");
document.write(styleString.strike(), "<br />");
document.write(styleString.sub(), "<br />");
document.write(styleString.sup(), "<br />");

//CONDITIONALS

//relational operators: === != > < >= <=
//logical operators: && || !

//demonstration of <= operator
var age = 8;

if (age>= 5 && age <= 6) {
	document.write("Go to kindergarten" + "<br />");
} else if (age > 18) {
	document.write("Go to college" + "<br />");
} else {
	document.write("Go to grade ", age - 5, "<br />");
}

//demonstration of true and false logic 
document.write("true || false : ", true || false, "<br />");
document.write("!true : ", !true, "<br />");
document.write("\"5\" == 5 = ", ("5" == 5), "<br />");
document.write("\"5\" === 5 = ", ("5" === 5), "<br />");

//switch statements
var myAge = 6;

switch(myAge) {
	case 5:
	case 6:
		document.write("Go to kindergarten", "<br />");
	//use break when you want to stop checking values
	break;

	case 7 :
		document.write("Go to 1st grade", "<br />");
	break;
	//use default to denote the fall-back action
	default:
		document.write("I don't know", "<br />");
}

//(condition) ? ifTrue : ifFalse
// add condition then assign true otherwise false
var canIVote = (age>=18) ? true : false;
document.write(canIVote + "<br />");

//while loops
//while condition is true, loop will run
var i = 1;

while (i <= 10) {
	document.write(i + "<br />");
	i++;
}

//do will loop
//while condition is true, loop will run. All do while loop run at least once
// do {
// 	var guess = prompt("Guess a number between 1 and 20");
// } while (guess != 15)
// //this will happen if the user guesses correctly
// alert("You guess 15!");

//for loop
for(j = 0; j <= 20; j++) {
//if numbers are even
//continue means go to the next iteration, so this will print odd numbers
	if((j % 2) === 0) {
		continue;
	}
//breaks the loop
	if(j === 15) {
		break;
	}
	document.write(j + "<br />");
}

//for in loop
var customer = {name : "Bob Thomas", address : "123 Main", balance: 50.50}
// for each key (k) in the loop
for(k in customer) {
	document.write(customer[k] + "<br />")
}

//ARRAYS

//get value at index in array
var tomSmith = ["Tom Smith", "123 Main", 120.50];

document.write("1st Index ", tomSmith[0], "<br />");

//add value to array through index specification
tomSmith[3] = "tSmith@aol.com";

//denote location of value you want to overwrite and state how many places you want to overwrite
//first number is the location of the index I want to delete, in this case "120.50", the second tells the computer how many values to delete
tomSmith.splice(2,1, "Pittsburg", "PA");

console.log(tomSmith[2]);

//turn an array into a string
document.write("Array : ", tomSmith.valueOf(), "<br />");

//turn an array into a string using specific formatting
document.write("Array : ", tomSmith.join(", "), "<br />");

//delete an index
delete tomSmith[3];

//sort alphabetically
//note that numbers in array appear first
document.write(tomSmith.sort()+ "<br />");

//sort from smallest to largest number
//note that to sort from largest to smallest, switch the x and y order
var numbers = [4, 3, 9, 1, 20, 43];

numbers.sort(function(x,y) {return x -y});

document.write(numbers.sort(function(x,y) {return x -y})+ "<br />");

//join two arrays together
var firstString = ["this", "that", "though", "thus"];

var secondString = ["thought", "thing", "tinker"];

var combinedArray = firstString.concat(secondString);

document.write(combinedArray, "<br />");

//remove the last item from one array
firstString.pop();

//add item to the end of an array
firstString.push("things");

//delete the first item in an array
firstString.shift();

//add items to the beginning of an array
firstString.unshift("think");

//print items in an array by iterating through a for loop
for( i = 0; i < firstString.length; i++ ) {
	document.write(firstString[i], "<br />");
}

//FUNCTIONS

//check if a value is inside an array by using a function
var thisArray = ["cow", "pig", "owl", "reindeer", "unicorn", "velociraptor"];

function inArray(arraytoCheck, value) {
	for ( i = 0; i < thisArray.length; i ++ ) {
		if(thisArray[i] === value) {
			return true;
		}
	}
	return false;
}

document.write("In Array : ", inArray(thisArray, "pig"), "<br />");

document.write("In Array : ", inArray(thisArray, "T-rex"), "<br />");

//passing functions
//note that var2 is a local variable
//pass functions through another function to do multiple tasks at once
function times2(number) {
	var var2 = 2;
	return number * var2;
}

function times3(number) {
	return number * 3;
}

function multiply(func, number) {
	return func(number);
}

document.write("2 * 15 = ", multiply(times2, 15), "<br />");

document.write("3 * 15 = ", multiply(times3, 15), "<br />");

//function expressions
//when you store functions in variables, you can easily add functions to an array
var triple = function(number) {
	return number * 3;
}

document.write("3 * 45 = ", multiply(triple, 45), "<br />");

//function without argument restrictions
function getSum() {

	var sum = 0;
	for (i = 0; i < arguments.length; i ++) {

		sum += arguments[i];
	}
	return sum;
}

document.write("Sum = ", getSum(1, 12, 2, 3, 3, 4, 5, 6), "<br />");

//perform a function on a string
function times4(theArray) {

	var newArray = [];
	for( i = 0; i < theArray.length; i ++) {
		newArray.push(theArray[i] * 4);
	}
	return newArray;
}

document.write("Times 4 = ", times4([1, 1, 2, 3, 4, 5, 6]), "<br />");

//recursive functions
//these are functions that call themselves
function factorial(number) {

	if (number <= 1) {
		return 1;
	} else {
		return number * factorial(number - 1);
	}
}

document.write("Factorial of 4 = ", factorial(4), "<br />");

//EVENT HANDLING

//see HTML to see where this function is being called
function openAlert(message){
	alert(message);
}

//get the key code upon user typing
function getChar(event) {
	if(event.which == null) {
		return String.fromCharCode(event.keyCode);
	} else if (event.which != 0 && event.charCode != 0){ 
		return String.fromCharCode(event.which);
	} else {
		return null;
	}
}

//dynamically print the keys pressed
document.getElementById("charInput").onkeypress =
	function(event) {
		var char = getChar(event || window.event)
		if(!char) return false;

		document.getElementById("keyData").innerHTML = char + " was clicked";
		return true;
	}

 //onfocus function, click into input field will print message to screen
document.getElementById("charInput").onfocus = function(event) {
	document.getElementById("keyData").innerHTML = "Input Gained Focus";
}

//onselect function, highlight some content within your input to see message on screen
document.getElementById("charInput").onselect = function(event) {
	document.getElementById("keyData").innerHTML = "Text Selected";
}

//onclick function for hide element
document.getElementById("logoButton").onclick = function(event) {
	document.getElementById("logo").className = "hidden";
}

//onclick function to show element
document.getElementById("showButton").onclick = function(event) {
	document.getElementById("logo").className = "show";
}

//clear inputs in input fields
//gets element by tag name as opposed to class or id
document.getElementById("clearInputs").onclick = function(event) {
	var inputElements = document.getElementByTagName("input");

	for(var i=0; i < inputElements.length; i ++) {
		if (inputElements[i].type == "text") {
			inputElements[i].value = "";
		}
	}
}




