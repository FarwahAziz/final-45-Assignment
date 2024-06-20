"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Assignment 40
function music_album(artist, title, track) {
    const album = {
        artist: artist,
        title: title,
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
const album1 = music_album('artist 1', 'Album title 1');
console.log(album1);
const album2 = music_album('artist 2', 'Album title 2', 12);
console.log(album2);
//Assignment 41 & 42
let magiciansname = ['harry potter', 'hermoine dranger', 'dumbledore'];
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magician(magiciansname);
