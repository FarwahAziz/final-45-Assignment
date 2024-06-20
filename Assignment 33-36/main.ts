//Assignment 33

let number:number[]=[1,2,3,4,5,6,7,8,9]

for(let num of number){
    let ordinalending:string;

 if( num=== 1){
    ordinalending="st";}
else if (num=== 2){
    ordinalending="nd";}
else if (num=== 3){
     ordinalending="rd";}
else {
     ordinalending="th";}     
console.log(`${num}${ordinalending}`);}

//Assignment 34

let myfavouritepizzas:string[]=["pepproni pizza","fajita pizza","Afghani pizza"];
for(let pizza of myfavouritepizzas ){

    console.log(`I like ${pizza}`);
}
console.log(`I really like pizza`);

//Assignment 35

let Animals:string[]=["cow","goat","hen"];
for (let animal of Animals){
    console.log(`The ${animal} is useful animal.`)
}
console.log("Any of these animal would make a great pet!");