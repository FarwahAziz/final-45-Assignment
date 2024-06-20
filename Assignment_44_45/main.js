"use strict";
//Assignment 44
Object.defineProperty(exports, "__esModule", { value: true });
function making_sandwich(items) {
    console.log("\n Make your sandwich with ");
    items.forEach(element => console.log(' - ' + element));
    console.log('Enjoy your sandwiches!');
}
;
making_sandwich(['chicken patti', 'cheese', 'lettuce']);
making_sandwich(['chicken', 'beef', 'ham']);
function storecarInfo(manufacture, modelname, ...extraoption) {
    const carinfo = Object.assign({ manufacture,
        modelname }, Object.assign({}, ...extraoption));
    return carinfo;
}
let mycar = storecarInfo("toyota", "corolla", { color: "silver", year: "2024" });
console.log(mycar);
