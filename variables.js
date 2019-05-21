<div>
  <h1 id="msg"></h1>
</div>

// Variables 1 - Containers for storing data

//var keyword
var x = 5;
var y = 20;

console.log(x);
console.log(y);

window.document.getElementById('msg').innerHTML = x;

//new for ES2015 let and const

// ----------------------------------------------------------------------
// variables 2 - programing is like algebra, use variables in expressions

var item1Price = 7.50;
var item2Price = 12.98;

var total = item1Price + item2Price;

console.log(total);

window.document.getElementById('msg').innerHTML = total

// ----------------------------------------------------------------------
// Variables 3 - Naming Rules
// 
// use descriptive names
// letters, digits, underscores, and $
// can't start with digit
// case sensitive

var myNewVariable1 = 'some text';
// var 3myNewVariable = 'error';

var x = 5;
var X = 3;

console.log(x);
console.log(X);

// ----------------------------------------------------------------------
//variables 4 - Assignment Operator = 

var x = 5;

x = x + 5;

var y = x

console.log(x);
console.log(y);

//use == or === to test for equality

// ----------------------------------------------------------------------
// variables 5 - Variables can hold different types of data

var msg = 'Hello world'; // string
var x = 5; // number
var y = 7.39; //number
var javaScriptIsfun = true; //boolean
var today = new Date(); //date object

var doWork = function() { //function
  return 'All Done!';
}

console.log(msg)
console.log(x);
console.log(y);
console.log(javaScriptIsfun);
console.log(today.toDateString());
console.log(doWork());


// Beware!!
// x is originaly a number set it to a string
x = msg;
console.log(x);

// ----------------------------------------------------------------------
// Variables 6
// make sure and use var keyword
// Dont have to assign when declaring will be undefined

// message = 'Happy Birthday'
var message = 'Happy Birthday'
console.log(message);

var msg;
console.log(msg);

msg = 'Hello World';
console.log(msg);

// ----------------------------------------------------------------------
// Variables 7
// String concatination - use + sign

var firstName = 'Darin';
var lastName = 'Milligan';

var fullName = firstName + ' ' + lastName;

console.log(fullName);

// -------------------------------
// template literals ES2016 feature

var nameText = `My full name is ${fullName}`;

console.log(nameText);

// -------------------------------

// what happens when? - string concatination or addition?
var x = '5';
var y = 2;
var z = 7;

var total = x + y + z;
console.log(total);

// -------------------------------

// what happens when?
var a = 5;
var b = 5;
var c = '3';

var total = a + b + c;
console.log(total);


