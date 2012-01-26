// JavaScript Document
/*
3 ways to get elements in your HTML:
- document.getElementById();
- document.getElementsByTagName();
- document.getElementsByClassName();

*/


console.log("entering JS");
var data = document.getElementById("item"); // variable containing the information about the to-do text box
console.log(data);


var isitempty = function(ev) {
	console.log("in function isitempty");
	if (data.value == "") {
		console.log("item is empty");
		data.className = "textInvalid";
		alert ("you must put something in the New To-Do Item field")
		data.className = "";
	} else {
			console.log("item is full");
			console.log(data.value);
			createlist();
	} // end else
} // end function isitempty


var createlist = function(ev) { // this installs the to do items from the text box to the active Items list
	console.log("in function createlist");
	
//	var tmp = data.value; 
	
// 	var newitem = document.getElementById("active").appendChild(document.createElement("li")).innerHTML = data.value;
	var newitem = document.getElementById("active").appendChild(document.createElement("li"));
	newitem.setAttribute("id", data.value);
	newitem.innerHTML = data.value;
	console.log(newitem);
	
	data.value = ""; // clean out the text box
} // end function createlist





// Get the element, add a click listener...
var activeClicked = document.getElementById("active").addEventListener("click",function(ev) {
	console.log("In function activeClicked");
	
	var tmp = document.getElementById("active")
	console.log(tmp);
	// copy the clicked on data to the closed list
	var newitem = document.getElementById("complete").appendChild(document.createElement("li"));
	newitem.setAttribute("id", ev.target.id);
	newitem.innerHTML = ev.target.id;
	console.log(newitem);
	console.log(ev.target);
	console.log(ev.target.id);
	
	// remove the data from the active items list
	ev.target.removeChild("li");
//	var oldItem = document.removeChild(ev.target);
//	var oldItem = document.getElementById("active").removeChild(ev.target.id);
//	var oldItem = document.getElementById("active").removeChild(getElementById(ev.target.id));
	
	
	console.log(ev);
	console.log(ev.target.nodeValue);
	console.log(ev.target.Element);
	console.log(ev.target.Text);
	console.log(ev.target.Attr);
	// If it was a list item
//	if(e.target &amp;&amp; e.target.nodeName == "LI") {
		// List item found!  Output the ID!
//	console.log("List item ",e.target.id.replace("post-")," was clicked!");
//	}
});

var completeClicked = document.getElementById("complete").addEventListener("click",function(ev) {
	console.log("In function completeClicked");
	console.log(ev);
	// copy the clicked on data to the Active list
	var newitem = document.getElementById("active").appendChild(document.createElement("li"));
	newitem.setAttribute("id", ev.target.id);
	newitem.innerHTML = ev.target.id;
	console.log(newitem);
	console.log(ev.target);
	console.log(ev.target.id);
	
	// remove the data from the complete items list
//	var oldItem = document.removeChild(ev.target);
	var oldItem = document.getElementById("complete").removeChild(ev.target.id);
//	var oldItem = document.getElementById("complete").removeChild(getElementById(ev.target.id));
	
	
	console.log(ev);
	console.log(ev.target.nodeValue);
	console.log(ev.target.Element);
	console.log(ev.target.Text);
	console.log(ev.target.Attr);
	// If it was a list item
//	if(e.target &amp;&amp; e.target.nodeName == "LI") {
		// List item found!  Output the ID!
//	console.log("List item ",e.target.id.replace("post-")," was clicked!");
//	}
});

// document.getElementById("complete").addEventListener("click", makeActive());


var tmp = function(ev) {document.getElementByTagName("li").addEventListener("click", inactive, false);}




var makeInactive = function(ev) {
	console.log("in function makeInactive");
	var targetitem = ev.target;
	var nodeitem = ev.target.nodename;
	console.log(targetitem);
	console.log(nodeitem);

}  // end function makeInactive

var makeActive = function(ev) {
		console.log("in function makeActive");

}  // end function makeActive






// addEventListener("event", function, false = act on down bubble, true = act on up bubble)
document.getElementById("submit").addEventListener("click", isitempty, false);

/*

var buttonLeft;
var buttonRight;
var buttonUp;
var buttonDown;


var createBox = function(ev) {
// 	console.log("It is working");
	removeActiveClass();
	box = document.createElement("div"); // createElement() makes a new empty HTML tag
	box.className = "box active"; //className allows us to manipulate the classes of a tag
	document.body.appendChild(box); // append child will add a element to the HTML file

	var randLeft = Math.round(Math.random() * (document.documentElement.clientWidth - box.offsetWidth));
	box.style.left = randLeft + "px";

	var randTop = Math.round(Math.random() * (document.documentElement.clientHeight - box.offsetHeight));
	box.style.top = randTop + "px";

};

var moveDown = function(ev) {
	var newTop = box.offsetTop + 10;
	box.style.top = newTop + "px";
};

var moveUp = function(ev) {
	var newTop = box.offsetTop - 10;
	box.style.top = newTop + "px";
};

var moveLeft = function(ev) {
	var newLeft = box.offsetLeft - 10;
	box.style.left = newLeft + "px";
};

var moveRight = function(ev) {
	var newLeft = box.offsetLeft + 10;
	box.style.left = newLeft + "px";
};


// addEventListener("event", function, false = act on down bubble, true = act on up bubble)
document.getElementById("create").addEventListener("click", createBox, false);
document.getElementById("down").addEventListener("click", moveDown, false);
document.getElementById("up").addEventListener("click", moveUp, false);
document.getElementById("left").addEventListener("click", moveLeft, false);
document.getElementById("right").addEventListener("click", moveRight, false);

document.documentElement.addEventListener("keydown", function(ev) {
	switch(ev.keyCode) {
		case 37 : moveLeft();
		break;
		case 38 : moveUp();
		break;
		case 39 : moveRight();
		break;
		case 40 : moveDown();
		break;
		default: console.log(ev.keyCode);
		break;
		}
		
		
}, false);

document.getElementById("color").addEventListener("change",function (ev) {
	// inside the event listener "this" refers to the element that the event listener is attached to
	console.log(this.value);
	
	console.log(ev.target.value);
	
	box.style.backgroundColor = this.value;
}, false);

document.documentElement.addEventListener("click", function (ev) {
	if (ev.target.tagName == "DIV") {
		removeActiveClass();
		ev.target.classname = "box active";
		box = ev.target;
	}
	
}, false);

var removeActiveClass = function () {
	var divs = document.getElementsByTagName("div");
	var totalDivs = divs.length;
	
	for (var i =0; i < totalDivs; i++) {
	box.className = "box";
	}
};
*/
