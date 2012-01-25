// JavaScript Document
/*
3 ways to get elements in your HTML:
- document.getElementById();
- document.getElementsByTagName();
- document.getElementsByClassName();

*/


	console.log("entering JS");

var data = document.getElementById("item");

var isitempty = function(ev) {
	console.log("in function isitempty");
			console.log(data);
			console.log(this.value);
			console.log(ev.target.value);
	if (data.value == "") {
			console.log("item is empty");
			console.log(data.value);
	} else {
			console.log("item is full");
			console.log(data.value);
			createlist();
	} // end else
} // end function isitempty


var createlist = function(ev) {
	console.log("in function createlist");
	newitem = document.createElement("li"); // createElement() makes a new empty HTML tag
	newitem.id = "one";
	document.body.appendChild(newitem); // append child will add an element to the HTML file
	
	
	
	


} // end function create list

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
