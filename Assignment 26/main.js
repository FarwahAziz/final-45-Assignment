"use strict";
//Assignment 25
let Aliencolour = "green";
if (Aliencolour === "green") {
    console.log("your player earned 5 points");
}
Aliencolour = "green";
if (Aliencolour === "yellow") {
    console.log("your player earned 5 points");
}
//Assignment 26
//making if else chain
let alienColour = "yellow";
if (alienColour === "yellow") {
    console.log("your player earned 5 points");
}
else {
    console.log("your player earned 10 points");
}
//print an else statement in next chain
alienColour = 'green';
if (alienColour === "yellow") {
    console.log("your player earned 5 points");
}
else {
    console.log("your player earned 10 points");
}
//Assignment 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
let Aliencolor = "green";
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
if (Aliencolor === "green") {
    console.log(" player earned 5 points.");
}
else if (Aliencolor === "yellow") {
    console.log("player earned 10 points.");
}
else if (Aliencolor === "red") {
    console.log(" player earned 15 points.");
}
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
Aliencolor = "yellow";
if (Aliencolor === "green") {
    console.log("player earned 5 points.");
}
else if (Aliencolor === "yellow") {
    console.log("player earned 10 points.");
}
else if (Aliencolor === "red") {
    console.log(" player earned 15 points.");
}
Aliencolor = "red";
if (Aliencolor === "green") {
    console.log(" player earned 5 points.");
}
else if (Aliencolor === "yellow") {
    console.log(" player earned 10 points.");
}
else if (Aliencolor === "red") {
    console.log(" version 3 player earned 15 points.");
}
;
