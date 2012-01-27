// JavaScript Document

var data = document.getElementById("item"); // variable containing the information about the to-do text box

var isitempty = function(ev) {
	// check to see if the text field has something in it
	if (data.value == "") { // if empty let the user know, in no uncertain terms
		data.className = "textInvalid";
		alert ("you must put something in the New To-Do Item field")
		data.className = "";
	} else {
		createlist(); // something is entered, add it to the active list
	} // end else
} // end function isitempty


var createlist = function(ev) { // this installs the to do items from the text box to the active Items list
	var newitem = document.getElementById("active").appendChild(document.createElement("li")); // create the new <li> element in the active field 
	newitem.setAttribute("id", data.value);	// give it an id tag of the same value as the data being entered
	newitem.innerHTML = data.value; // add the information from the to-do field into the <li> element

	data.value = ""; // clean out the text box
} // end function createlist


// Get the element, add a click listener to the parent <ol> element
var activeClicked = document.getElementById("active").addEventListener("click",function(ev) {
	 // this function moves the item from the active to the complete boxes
	var tmp = document.getElementById("active")
	// copy the clicked on data to the closed list
	var newitem = document.getElementById("complete").appendChild(document.createElement("li"));  // create the new <li> element in the complete field 
	newitem.setAttribute("id", ev.target.id); // set the id tag to the same value as the data being moved
	newitem.innerHTML = ev.target.id; // put the info into the <li> element
	// remove the data from the active items list
	ev.target.parentNode.removeChild(ev.target); 
},false); // end of function activeClicked


var completeClicked = document.getElementById("complete").addEventListener("click",function(ev) {
	 // this function moves the item from the complete to the active boxes
	var newitem = document.getElementById("active").appendChild(document.createElement("li"));  // create the new <li> element in the active field 
	newitem.setAttribute("id", ev.target.id); // set the id tag to the same value as the data being moved
	newitem.innerHTML = ev.target.id;  // put the info into the <li> element
	// remove the data from the complete items list
	ev.target.parentNode.removeChild(ev.target);
},false); // end of function completeClicked

document.documentElement.addEventListener("keydown", function(ev) {
	// look for the return key to enter data
	switch(ev.keyCode) {
		case 13 : isitempty();
		break;
		default: console.log(ev.keyCode);
		break;
		}
}, false);

// when someone clicks on the submit button move the data in the to-do field to the active box through isitempty
document.getElementById("submit").addEventListener("click", isitempty, false);
