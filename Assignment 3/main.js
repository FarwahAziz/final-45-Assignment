"use strict";
//storing a person name in a variable
let personname = "Farwah Aziz";
//printing a person name in lowerCase
console.log(personname.toLowerCase());
//printing a person name in upperCase
console.log(personname.toUpperCase());
//printing a person name in TitleCase
console.log(personname.replace(/\p\w/g, c => c.toUpperCase()));
