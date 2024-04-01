var GuestList = ["Ayesha", " Nihaal", "Maria", "Zunaira"];
var dontcome = GuestList[2];
console.log(dontcome, "dont want to come ");
GuestList.splice(2, 1, "Sumaira");
GuestList.forEach(function (Guest) { return console.log("Salam ".concat(Guest, " Would You Like To Dinner With Me?")); });
