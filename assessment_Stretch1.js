// #1 create a variable called 'myName' and assign it to your name as a string

// CODE HERE
var myName = "Albert Ahn";

// #2 create a variable called 'faveNum' and assign it to your favorite number

// CODE HERE
var favNum = 7;

// #3 create a variable called 'lovesCode' and set it to true

// CODE HERE

var lovesCode = true;

// #4 Using the previously created variables, create a new variable called 'me' that combines the myName and faveNum varible to create a sentence like this 'My name is Bryan and my favorite number is 3'

// CODE HERE
var me = "My name is " + myName + " and my favorite number is " + favNum + " and it is " + lovesCode + " that I love to code."

// #5 Using the previously created faveNum variable, create a new variable called 'trueFaveNum' that outputs true when comparing faveNum to your favorite number.

// CODE HERE
var trueFaveNum = (favNum === 7);
console.log(trueFaveNum);

// #6 Create a new variable called notHakeem using the previously created myName variable, test that your name DOES NOT equal 'Hakeem Olajuwon'. If your name does happen to be Hakeem Olajuwon, test against 'Karl Malone'

// CODE HERE
var notHakeem = (myName === "Hakeem Olajuwon");
console.log(notHakeem);

// #7 Create an if statement that checks the age variable below. If age is greater than 16, then set canDrive to true otherwise set canDrive to false. The canDrive variable will be set by the unit test so do not adjust it.
var age = 18;
var canDrive;
if (age > 16) {
  canDrive = true;
  console.log(canDrive);
} else if (age <= 16) {
  canDrive = false;
  console.log(canDrive);
} else {
  console.log("incorrect input");
}


// CODE HERE

// #8 Create an if statement inside of the responseCreator function that 
// sets the colorResponse variable value based off of a passed in value. 
// The param value passed in will be added in the unit test. 
// If the param value is 'green' set colorResponse variable to 'Green is okay'. 
// If the param value is 'red' set reponse variable to 'I heart red'. 
// Otherwise set the colorResponse variable to 'What is your favorite color?'. 
// make sure to return the colorResponse variable at the end once it has been properly set.

var colorResponse;

var responseCreator = function(param){
  if (param === "green") {
    colorResponse = "Green is okay";
    console.log(colorResponse);
  } else if (param === "red") {
    colorResponse = "I heart red";
    console.log(colorResponse);
  } else {
    colorResponse === "What is your favorite color"
    console.log(colorResponse);
  }
}

/* I take it that "function" refers to some undefined function that is merely 
referred to as 'function' for this practice problem?

It is my understanding that you cannot have a function defined as 'function' because:
"Uncaught SyntaxError: Unexpected token function"

What follows is the answer I initially presumed to be correct.*/

var colorResponse = '';

function someFunction(param) {
  if (param === "blue") {
    console.log(colorResponse = "blue blabla")
  } else if (param === "red") {
    console.log(colorResponse = "red blabla")
  } else {
    console.log (colorResponse = "else")
  }
}

var responseCreator = someFunction(param);


/* #9 Create a function called 'sum' that takes in a parameter and 
returns the sum of that parameter. */

function sum(p1,p2) {
  sumParameter = p1+p2;
  console.log(sumParameter);
}

/* #10 Create a function called greeter that takes in two parameters, 
name(a string) and number(a number). 
Have greeter return a string that says something like this
'Hi! I am Bryan and I am 28 years old" but with the appropriate values. */


function greeter(name,number) {
  if (name.length !== undefined) {
      if (number > 0) {
          console.log("My name is " + name + " and I am " + number + " y.o.");
      } else {
          console.log("input an age value > 0");
      }
  } else {
      console.log("input a name");
  }
}

greeter("Albert", 28);

