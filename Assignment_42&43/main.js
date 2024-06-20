"use strict";
//Assignment 42 & 43
let magician = ["Harry potter ", "dumbledeor", "hermaine"];
function copyarray(Arr) {
    return [...Arr];
}
function make_great(magician_array) {
    for (let i = 0; i < magician_array.length; i++) {
        magician_array[i] = 'the great' + magician_array[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagicianarray = copyarray(magician);
make_great(copymagicianarray);
console.log('\n\n this is my original array');
show_magician(magician);
console.log('\n\n this is my modified array');
show_magician(copymagicianarray);
// function the_greatmagicians(greet:string){
//     for(let item of magician){
//         console.log(greet ,item)
//     }
// }
//  Call the make_great() function
// let greatMagicians = ([...magician]);
// console.log("\n\n  This is modified array")
// the_greatmagicians("The great magician")  
