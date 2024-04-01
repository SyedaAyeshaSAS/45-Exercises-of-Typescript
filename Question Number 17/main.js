// creating a guestlist array
var GuestList = ["Ayesha", " Nihaal", "Maria", "Zunaira"];
//making variable for those who dont come
var dontcome = GuestList[2];
// print the name who cant come
console.log(dontcome, "dont want to come ");
// add or remove values from guestlist array
GuestList.splice(2, 1, "Sumaira");
//message print for bigger table
console.log("Good News! we have found a bigger table for a dinner ");
// adding a new value at starting index of array
GuestList.unshift("Alia");
// adding a new value at ending index of array
GuestList.push("Hamna");
// get a middle index array
var middleIndex = Math.floor(GuestList.length / 2);
// adding a new value  to middle guest index of array
GuestList.splice(middleIndex, 0, "Maham");
// print message of updated list 
console.log("updated list of our guests");
//sending a invitation message to our guest one by one by thier names
GuestList.forEach(function (oneGuest) { return console.log("Salam ".concat(oneGuest, " Would You Like To Dinner With Me?")); });
// print bad news message that we can only invite two guests now
console.log(" Unfortunately! the new dinner table wont arrive on time , so i can only invite two guests to dinner with me .");
//using while loop to remove guest from array until only two names remain
while (GuestList.length > 2) {
    var removeguest = GuestList.pop();
    console.log("Sorry, ".concat(removeguest, " i cant invite you to Dinner"));
}
// last two names that are still invited we now give invitation to them 
console.log("invitations to the last two guests");
GuestList.forEach(function (lastTwo) { return console.log(" luckily ".concat(lastTwo, " , you are still invited to dinner ")); });
// removing last two guest to list
GuestList.pop();
GuestList.pop();
// make sure empty list
console.log("empty ist :", GuestList);
