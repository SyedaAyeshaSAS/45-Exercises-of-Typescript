//define a function to print each magician name from an array
function showMagician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function makeGreat(magician) {
    return magician.map(function (name) { return " The Great ".concat(name); });
}
//define an array containig magicians name
var magicianNames = ["harry potter", "ayesha", "uzma", "suma"];
//call the function to print each magician names
var GreatMagicians = makeGreat(magicianNames);
console.log(GreatMagicians);
