var myArray = [[1,2,3], [4,5], [6,7, [8, 9]]];

//square brackets - to take array values
console.log(myArray[2][2]);

//push function - to push values at end
var ourArray = ['Dinesh"', "Bode"];
ourArray.push(["is","happy"])
ourArray.push(["John" , 100]);
console.log(ourArray);
console.log(ourArray[3][1])

//pop function - to remove array value (last one)
var array = [1,2,3,4]
console.log(array.pop())
console.log("After pop "+array)

//shift function - to remove array values from start
console.log(array.shift());
console.log("After Shift "+ array);

//unshift function - Add element at begining of array
console.log(array.unshift("Hi"));
console.log("After unshift "+array)

//Shopping List - array of arrays
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3]]
console.log(myList);

//Writing reusable functions
function reusableFunction() {
	console.log("Function called...!!!");
}

reusableFunction();
reusableFunction();

//Passing values to function through function parameters
function ourFunctionWithArgs(a,b) {
	console.log(a-b);
}
ourFunctionWithArgs(10,5);

//Global scope functions
// 1. Remove var to make variable global inside functions
// 2. Create variable in global scope i.e outside functions
var myGlobal = 10;

function funOops() {
	var oopsGlobal = 5;
}

function funGlobal() {
	var output = "";
	if(typeof myGlobal != "undefined") {
		output += "myGlobal: " +myGlobal;
	}

	if(typeof oopsGlobal != "undefined") {
		output += " oopsGlobal: "+oopsGlobal;
	}
	console.log(output);
}

funOops();
funGlobal();

//Local vs global scope
var num = 10;
function funLocal()
{
	var myVar = 10;
	var num = 20;
	console.log("Local variable have precedence over global "+num);
}
console.log(num);

funLocal();
//console.log(myVar);

//Return a value from function with return statement
function funReturn(val)
{
	return 10-val;
}
console.log(funReturn(100));

//Understanding undefined return value from function
var sum=0;
function funUndefined()
{
	sum = 10+20;
}
console.log(funUndefined());

//Assignment with return value
function funAssignment()
{
	return 10;
}
var assign = funAssignment();
console.log(assign);

//**Stand in Line - **Queue
function nextInLine(arr, item)
{
	arr.push(item);
	arr.shift();
}
var arr =[1,2,3,4];
console.log("Before calling method "+JSON.stringify(arr));
nextInLine(arr, 100);
console.log("After calling method "+JSON.stringify(arr));	

//Boolean values
function funcBoole()
{
	return true;
}

//If statements
function funIfTesting(val)
{
	if(val)
		console.log("It's True");
	else
		console.log("It's false");
}

funIfTesting(true);

//Equality operators
function funEquality(val)
{
	if(val == true)
		console.log("It's True");
	else
		console.log("It's false");
}

funEquality(true);

//Strict equality operator  ===
console.log(3 == '3')
console.log(3 === '3')

console.log(3 == "3")
console.log(3 === "3")

//Inequality operator != 
//Strict inequality operator !==
console.log(3 !== "3")

//Operators
// < , > , Logical and - && , Or || 
//Else if 
//If else chaining, switch

//Return boolean from functions
function funcReturnBool(a, b)
{
	return a < b;
}
console.log(funcReturnBool(10,20));

//** Build javascript objects
var ourDog = {
	"name" : "Tipu",
	"legs" : 4,
	"tails": 1,
	"friends": ["everything"]
};

var myDog = {
	"name": "Quency",
	"legs" : 3,
	"tails": 2,
	"friends" : []
};

//Access object using dot notation
console.log(myDog.name);

//Access object using bracket notation
console.log(myDog["name"]);
console.log(myDog['name']);

//Update object properties
myDog['name'] = "Dinesh";
console.log(myDog.name);

//Adding properties to object
myDog.bark = "bow-bow";
console.log(JSON.stringify(myDog));

//Delete properties from object
delete myDog.bark;
console.log(myDog);

//Objects for lookups
function phoneticLookup(val){
	var result = "";

	var lookup = {
		"alpha" : "Adams",
		"bravo" : "boston",
		"charlie" : "Chicago"
	};

	result = lookup[val];
	return result;
}
console.log(phoneticLookup("bravo"));

//** object.hasOwnProperty()
var citiesPopulation = {
	"udupi" : 10000,
	"yellapur" : 88888
}
function checkProp(val)
{
	if(citiesPopulation.hasOwnProperty(val))
	{
		return citiesPopulation[val];
	}
	else {
		return "Property "+ val + " is not present";
	}
}

console.log(checkProp("udupi"));


//Manipulating complex objects
var record = [
{
	"album":"asdfasd",
	"year":2020,
	"format" : [
		"Youtube"
	]
},

{
	"album":"bbbbbb",
	"year":2022,
	"format":["CD", "Youtube"]
}
];

console.log(record);

// while loop, for loop, do while loop

//Iterate through items in array
var myArray = [1 , 2, 3, 4]

for(var value in myArray)
{
	console.log(value);
}

//Profile lookup
var contacts = [
{
	"firstName" : "Dinesh",
	"lastName"  : "Bode",
	"number"    : "87123456",
	"likes"     : ["magic", "running", "Gaming"]
},
{
	"firstName" : "Pooja",
	"lastName"  : "Bode",
	"number"    : "912345667",
	"likes"     : ["running", "Gaming"]
}
];

function profileLookup(name, prop) {
	for(var i=0; i<contacts.length; i++) {
		if(contacts[i].firstName === name) {
			return contacts[i][prop] || "No such Property";
		}
	}
	return "No such Property exists";
}

var data = profileLookup("Dinesh", "likes");
console.log(data);

//Random number between 0 and 19
var rand = Math.floor(Math.random() * 20);
console.log(rand);

//parseInt function
function parseInteger(base, value)
{
	return parseInt(value, base);
}

console.log(parseInteger(2, "1000"));

//Ternary opertor
// return num > 0 ? true : false; 

//Difference between var and let
//let does not allow to declare variable twise
var a=10;
var a=20;

//let value=20;
//let value=20; // Error : Duplicate declaration

//Example program
//Use strict mode to catch common coding mistakes , 
//use let and const instead of var to avoid recreation of same variable
let catName = "Quincy";
let quote;

catName = "Beu";

function catTalk() {
	"use strict"; // Strict mode

	catName = "Oliver";
	quote = catName + " says Meow!!"
	console.log(quote);
}

catTalk();

// Compare scope of var and let
//1. var is global scope or locally in FUNCTION, there is no block scope in var
//2. let is having bloack scope where its declared in

function checkScope()
{
	"use strict";
	var i="function scope";
	if(true) {
		var i="block scope";
		console.log("Block scope is is ",i);
	}
	console.log("Function scope i is ", i);
}

checkScope();


//Decle readonly variable with const keyword
const NAME = "Dinesh";
//const NAME = "Pooja"; // Identifier 'name' has already been declared

//Mutate the array of const type
//We cant reassign const array
const s = [5, 6, 7];

function editInPlace() {
	"use strict";

	s[0] = 2;
	s[1] = 3;
	s[2] = 4;
	console.log(s);

	s.push(10);
	console.log(s);

	//s= [2,3,4];  //TypeError: Assignment to constant variable.
	//console.log(s);
}
editInPlace();

//Prevent object mutation
function freezeObj() {
	"use strict";
	const MATH_CONSTANTS = {
		PI: 3.14
	};

	//Object.freeze(MATH_CONSTANTS);

	try {
		MATH_CONSTANTS.PI = 3.15; // TypeError: Cannot assign to read only property 'PI' of object '#<Object>'
		console.log(MATH_CONSTANTS.PI);
	} catch(ex) {
		console.log(ex);
	}
}

freezeObj();

//Use arraow functions to write concise anonymous functions

var magic = () => {
	return new Date();
}

const magicShort = () => new Date();

console.log(magic());
console.log(magicShort());

//Write arrow functions with parameters.

const joinFunction = (array1, array2) => array1.concat(array2);

console.log(joinFunction([1,2,3], [4,5,6])); 

//Write higher order arrow functions - map, filter and reduce
const realNumberArray = [4, 5.6, 7.7, 8, 66.7, -2];

const squareList = (arr) => {
	const squaredIntegers = arr.filter(x => Number.isInteger(x) && x>0).map(x => x*x);
	console.log(squaredIntegers);
}
squareList(realNumberArray);


//Default parameters
const increment = (number, value = 1) => {
	return number+value;
}

console.log(increment(2));
console.log(increment(2,20));


//Rest operator - create array and assign with values
const sumArray = (function() {
	return function sum(...args){
		//const args = [x, y, z];
		return args.reduce((a,b) => a+b, 0);
	};
})();

console.log(sumArray(1,2,3));


//Use spread operator to Evaluate Arrays in-place
const arrayMonths = ['JAN', 'FEB', 'MAR'];
let arrayMonths1;
(function() {
	arrayMonths1 = [...arrayMonths]; //arrayMonths1 has copied values from arrayMonths , it will not contains reference to copied array.
	arrayMonths[0]='Potato';
})();
console.log(arrayMonths1);

//Use destructuring assignment to assign variables from objects
var vowel = {x: 3.6, y:7.7, z:8.9};

//Older way of assigning values 
var x = vowel.x;
var y = vowel.y;
var z = vowel.z;


//Using destructuring opertor { :}
const {x:aa, y:bb, z:cc} = vowel;
console.log(vowel);

const AVG_TEMPERATURE = {
	today : 35,
	tomorow : 40
};

function getTempOfTmr(avgTemp) {
	"use strict";
	const { tomorow : tempOfTomorrow} = avgTemp;
	return tempOfTomorrow;
}

console.log(getTempOfTmr(AVG_TEMPERATURE));

//Destructung with nested objects
const LOCAL_FORECAST = {
	today : { min : 20, max: 35},
	tomorow : { min : 25, max: 40}
}

const { tomorow : { max : maxOfTomorrow }} = LOCAL_FORECAST;

console.log(maxOfTomorrow);

//Use destructuring assignment to assign variables from arrays.
const [xx, yy, , zz] = [1,2,3,4,5,6,7];
console.log(xx,yy,zz);

//Ex2
let firstVal=5, secondVal=10;

[firstVal,secondVal]=[secondVal,firstVal];

console.log(firstVal);
console.log(secondVal); 

//Use destructuring assignment with the rest operator.
const source = [1,2,3,4,5,6,7];

const [ , , ...sourceDestructured] = source;

console.log(sourceDestructured);

//Use destructuring assignment to pass an Object as a Function's parameters
const stats = {
	max : 50,
	min : 20,
	median : 35,
	mode : 22
}

const half = ({median, min}) => {
	return (median+min)/2;
}

console.log(half(stats));


//Create Strings using template Literals.  - `    `
const person = {
	name : "Dinesh",
	age : 30
};

const greeting = `Hello, My name is ${person.name} !
and my age is ${person.age}`;

console.log(greeting);

//Write Concise object Literal declarations using Simple Fields

/*const createPerson = (name, age, gender) => {
	return {
		name:name,
		age:age,
		gender:gender
	};
}*/
const createPerson = (name, age, gender) => ({name, age, gender});

console.log(createPerson("Dinesh",30,"Male"));


//Write concise declarative functions (We can declare functions inside objects) 
const bicycle = {
	gear :2,
	setGear(newGear) {
		"use strict";
		this.gear = newGear;
	}
};
console.log(bicycle.gear);
bicycle.setGear(5);
console.log(bicycle.gear);

//Use class Syntax to define a constructor function ( ES6 provide syntax to create objects using class keyword)
class SpaceShuttle {
	constructor(targetPlanet) {
		this.targetPlanet = targetPlanet;
	}
}

var zeus = new SpaceShuttle('Zupiter');
console.log(zeus);

//Use getters and setters to control access to an object
class Book {
	constructor(author) {
		this._author = author;
	}

	//Getter
	get writer() {
		return this._author;
	}

	//setter
	set writer(updatedAuthor) {
		this._author = updatedAuthor;
	}
}

const newBook = new Book("Rich dad vs Poor dad");
console.log(newBook._author);
newBook.author = " blah blah";
console.log(newBook._author);


//Ex2 :
function makeClass() {
	class Thermostat  {
		constructor(temp) {
			this._temp = 5/9 *(temp -32);
		}

		get temperature() {
			return this._temp;
		}
		set temperature(updatedTemp) {
			this._temp = updatedTemp;
		}
	}
	return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);







