import { addAbortListener } from "events"
import { title } from "process";

//Assignment 40
function music_album(artist:string,title:string,track?:number) {
    const album:{artist:string,title:string,track?:number}={
     artist:artist,
     title:title,
    
}
if (track!==undefined){
    album.track=track;
}
return album
}
const album1=music_album('artist 1','Album title 1')
console.log (album1)
const album2=music_album('artist 2','Album title 2',12)
console.log (album2)

//Assignment 41 


let magiciansname:string[]=['harry potter','hermoine dranger','dumbledore']


function show_magician(magicians:string[]) {
    magicians.forEach(element => {
        console.log(element)    
    });
    
}
show_magician(magiciansname)
   