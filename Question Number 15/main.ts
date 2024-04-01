let GuestList =["Ayesha", " Nihaal", "Maria" , "Zunaira"];
let dontcome = GuestList [2];
console.log(dontcome , "dont want to come ");
GuestList.splice(2, 1 , "Sumaira");
GuestList.forEach(Guest => console.log(`Salam ${Guest} Would You Like To Dinner With Me?`));