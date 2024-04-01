// creating a guestlist array
let GuestList =["Ayesha", " Nihaal", "Maria" , "Zunaira"];
//making variable for those who dont come
let dontcome = GuestList [2];
// print the name who cant come
console.log(dontcome , "dont want to come ");
// add or remove values from guestlist array
GuestList.splice(2, 1 , "Sumaira");
//message print for bigger table
console.log("Good News! we have found a bigger table for a dinner ");
// adding a new value at starting index of array
GuestList.unshift("Alia");
// adding a new value at ending index of array
GuestList.push("Hamna")
// get a middle index array
let middleIndex: number = Math.floor (GuestList.length / 2);
// adding a new value  to middle guest index of array
GuestList.splice(middleIndex, 0,"Maham");
// print message of updated list 
console.log("updated list of our guests");
//sending a invitation message to our guest one by one by thier names
GuestList.forEach(oneGuest => console.log(`Salam ${oneGuest} Would You Like To Dinner With Me?`));