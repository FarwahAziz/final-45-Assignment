
//Assignment 42 & 43
let magician:string[]=["Harry potter ","dumbledeor","hermaine"]

function copyarray(Arr:string[]) {
    return [...Arr]
}

function make_great(magician_array:string[]) {
    for(let i=0;i<magician_array.length;i++){
        magician_array[i] ='The great' + magician_array[i]}
    
}

function show_magician(magicians:string[]) {
    magicians.forEach(element => {
        console.log(element)    
    });
    
}
const copymagicianarray=copyarray(magician)

make_great(copymagicianarray)

console.log('\n\n This is my original array')
show_magician(magician)

console.log('\n\n This is my modified array')
show_magician(copymagicianarray)


