// Events 1 - Button click event handler

<div>
  <button onclick="DoSomework()">Click Me</button>
</div>


function DoSomework() {
    var msg = 'Hello world'
    alert(msg);
  }
  
  
  // What are Events for?
  // Handle user actions, verify user input, handle browser actions (example MapLoading event)
  // 
  // Common Events for HTML Elements
  // 
  // onchange
  // onclick
  // onmouseover
  // onmouseout
  // onkeydown
  // onload
  
// ----------------------------------------------------------------------------------------------
// 
// Events 2 - handler for onclick event

<button onclick="displayDate()">The time is?</button>

<div>
  <h1 id="demo"></h1>
</div>

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }
  