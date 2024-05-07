"use strict";
let guestlist = ["Umer", "fatimah", "Ayesha"];
guestlist.forEach(guest => {
    console.log(`dear ${guest}, youu are invited to dinner`);
});
//map method
//invite guest
let invitation = guestlist.map(guest => `dear ${guest}, youu are invited to dinner`);
console.log(invitation);
//assignment 15
let guestslist = ["Umer", "fatimah", "Ayesha"];
//who is unable to attend dinner
let unableAttend = guestslist.splice(1.1)[0];
console.log(`${unableAttend}unable to attend dinner`);
//push
guestlist.push("hina naseer");
//console.log(guestlist)
// print a message
guestlist.forEach(guests => {
    console.log(`dear ${guests} you are cordially invited to dinner`);
});
//assignment 16
console.log("Great news we have a bigger table now");
guestslist.unshift("sarwat");
//splice for adding in middle
guestslist.splice(Math.floor(guestslist.length / 2), 0, "Anwer");
console.log(guestlist);
//PUSH FOR Add in the llast
guestlist.push("Ammad");
//for each
guestlist.forEach(guests => {
    console.log(`hi ${guests} you all are invited to dinner`);
});
