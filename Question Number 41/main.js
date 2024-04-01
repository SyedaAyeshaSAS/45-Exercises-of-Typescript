//define a function to print each magician name from an array
function showMagician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define an array containig magicians name
var magicianNames = ["harry potter", "ayesha", "uzma", "suma"];
//call the function to print each magician names
showMagician(magicianNames);
