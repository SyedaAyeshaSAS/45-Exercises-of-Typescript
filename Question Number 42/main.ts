//define a function to print each magician name from an array
function showMagician(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
function makeGreat (magician: string[]){
    return magician.map(name => ` The Great ${name}`);

}
//define an array containig magicians name
let magicianNames = ["harry potter","ayesha","uzma","suma"];
//call the function to print each magician names
let GreatMagicians = makeGreat(magicianNames);
console.log(GreatMagicians)
