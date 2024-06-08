"use strict";
//assignment 18
let placetovisit = ["Canada", "Turkey", "dubai", "Maldives", "KSA"];
console.log("original order", placetovisit);
//printing in alphabetical order
console.log("Alphabetical order", placetovisit.slice().sort());
console.log("reverse order", placetovisit.slice().sort().reverse());
console.log("original order", placetovisit);
console.log("reverse order change");
placetovisit.reverse();
console.log(placetovisit);
console.log("origninal order", placetovisit.sort());
console.log(placetovisit);
console.log("reverse alphabetical order", placetovisit.sort().reverse());
console.log(placetovisit);
//Assignment 20
let languages = ["arabic", "chinese", "french", "English"];
console.log("list of different languages", languages.forEach(languageofothercountries => {
    console.log(languageofothercountries);
}));
