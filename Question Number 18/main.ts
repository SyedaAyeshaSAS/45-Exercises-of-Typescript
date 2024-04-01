// making a array of countries and print its originla order 
let countriestoVisit : string[] =["Saudi Arabic","Japan", "Turkey", "Germany"];
console.log("original order:", countriestoVisit);

//print a array in alphabetical order without modifying the actual aray list
console.log("Alphabetical order :",[...countriestoVisit].sort());

// show that arrays is still in its original order
console.log("still in original order:",countriestoVisit);

//print a array in reversed order without modifying the actual aray list
console.log("Reverse order :",[...countriestoVisit].reverse());

// show that arrays is still in its original order
console.log("still in original order:",countriestoVisit);

//we changed the original array order now 
console.log("original array reversed :", countriestoVisit.reverse());

//print the array to show the its back to its original order 
console.log("back to original order :", countriestoVisit.reverse());

//print a array in alphabetical order 
console.log(" sorted in Alphabetical order :",countriestoVisit.sort());

//we changed the original array order now aging
console.log("original array reversed again:", countriestoVisit.reverse());