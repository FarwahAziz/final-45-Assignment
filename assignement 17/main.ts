//Assignment 17 
let guestlist:string[]=["umer","Ayesha","ibtisam"];

//shrinking our guestlist 
console.log("unfortunatly our new dinner is not arrived yet so we have to inivite only two peoples")
guestlist.unshift("alice","ben");

console.log("updated list of guestlist", guestlist)

//removing guest from list

while (guestlist.length>2) {
    let removeguest:string | undefined =guestlist.pop();
    if(removeguest!==undefined){
        console.log(`sorry, ${removeguest} we cant invite you`);
    }
    
}
//print a message for those who are invited
guestlist.forEach(invitedguests => {
console.log(`dear ${invitedguests}you are still invited for the dinner`);
    
});
//removing list
guestlist.splice(0,guestlist.length)

console.log(`updatedlist of guest`, guestlist );