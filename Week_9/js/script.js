alert("Please do not make any noise.");
//java and javascript are case sensitive thus writing alert as Alert would not work.
console.log("Hi, I am Karan");
//to check the output go to inspect in and in console. console.log is used to find and identify errors, find out how the js is working. We do not use any extension for js as the interpreter is already on browser. In chrome, intrepreter is called v8. chakra is js interpreter for microsoft edge. caraken is js interpreter for opera. mozilla has 3 js interpreter.nitro is js interpreter for safari.
console.log("I am 21 years old");
//it is sequential programming, reads the codes in sequence from top to bottom.
console.log(document.getElementById("paragraph").innerHTML);
//DOM( Document of Object Model) manipulation of codes of HTML and CSS. DOM selector is method of object, object here being document.DOM selector(getElementaById, getElementByClassName, getElementByTagName), Here innerHTML catches the content of paragraph and throws it to console.this works in HTML file
console.log(typeof document)
//this typeof shows the data type.
document.getElementById("paragraph").innerHTML="<h1>Hello</h1>";
//this overwrites the content of id paragraph by replacing it with hello as a h1 heading.
// document.getElementById("paragraph").style.color="blue";
// //.style changes in CSS files
// document.getElementById("paragraph").style.background="black";
document.getElementById("paragraph").style.csstext="color:blue; background:red";
//This is to write multiple changes required in CSS.
const age = 21;
// age=22, error comes if tried to override in const
var age1 = 19;
age1=32
let age2 = 20;//declaring variables
age2 = 43
console.log(age);
console.log(age1);
console.log(age2);
// once a constant is defined, its value cannot be changed. var and let lets you override the value
var name="Karan";//string declaration, can also use single inverted commas
console.log(typeof name);

console.log(prompt("Enter your name:"));
//prompt is used to take user input in popup.

document.getElementById("message").innerHTML="Hello"+" "+"My name is:"+name+" "+"I am"+ age + " "+"years old"+"!";