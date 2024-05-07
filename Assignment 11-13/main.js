"use strict";
//Assignment 11
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["Amna", "Maliha", "Neelam", "Minha"];
//loop
//for each
//for loop
for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
}
//for each
names.forEach(name => {
    console.log(name);
});
//for of names
for (const friendsname of names) {
    console.log(friendsname);
}
//Assignment 12
for (let index = 0; index < names.length; index++) {
    console.log(`hello,${names[index]} how are you today?`);
}
//for each
names.forEach(name => {
    console.log(`hello,${name} how are you today?`);
});
//for of names
for (const friendsname of names) {
    console.log(`hi dear${friendsname}how are you today`);
}
//Assignment 13
let transportationmode = ["corolla", "yaris", "aqua"];
for (let index = 0; index < transportationmode.length; index++) {
    console.log(`i would like to own a${transportationmode[index]}`);
}
