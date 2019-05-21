// Functions 1

// Example
function add(x,y){
  return x + y;
}

var sum = add(4,5);
console.log(sum);


//---------------------------
// function syntax
function name(parameter1, parameter2, parameter3) {
  // code to be executed
}


//---------------------------
// using function with function keyword - added to global scope
console.log(doWork());

function doWork() {
  return 'result of calling doWork';
}

//--------------------------------------------------------------------------
//Functions 2 - function as variable
var multiply = function(x,y) {
    return x*y;
  }
  
  var answer = multiply(2,3);
  
  console.log(answer);
  
  //---------------------------
  //function as variable must declare variable before using
  
  // console.log(doSomeWork()); //causes an error since doSomeWork is not defined yet
  
  var doSomeWork = function() {
    return 'all done';
  }

  console.log(doSomeWork());
  
//--------------------------------------------------------------------------
// Functions 3
// function invocation (call)

var doWork = function() {
    return 'finished';
  }
  
  // execute function log result
  console.log(doWork());
  
  // opps
  console.log(doWork);
  
//--------------------------------------------------------------------------
// Functions 4 
// Functions and variable scope

// code here can NOT use myVariable

// console.log(myVariable);

function myFunction() {
    var myVariable = 'someText';
    console.log(myVariable);
    // code here CAN use myVariable
  }
  
  myFunction();
  
  // console.log(myVariable);
  
  // code here can NOT use myVariable
  
//--------------------------------------------------------------------------
// Functions 5
// A nested function example with scope example

var num1 = 20;
var num2 = 40;
var name = 'Jimmy';

function getScore() {
  var num1 = 2,
      num2 = 3;
  
  function add() {
    return name + ' scored ' + (num1 + num2);
  }
  
  return add();
}

console.log(getScore());   