var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a array of countries and print its originla order 
var countriestoVisit = ["Saudi Arabic", "Japan", "Turkey", "Germany"];
console.log("original order:", countriestoVisit);
//print a array in alphabetical order without modifying the actual aray list
console.log("Alphabetical order :", __spreadArray([], countriestoVisit, true).sort());
// show that arrays is still in its original order
console.log("still in original order:", countriestoVisit);
//print a array in reversed order without modifying the actual aray list
console.log("Reverse order :", __spreadArray([], countriestoVisit, true).reverse());
// show that arrays is still in its original order
console.log("still in original order:", countriestoVisit);
//we changed the original array order now 
console.log("original array reversed :", countriestoVisit.reverse());
//print the array to show the its back to its original order 
console.log("back to original order :", countriestoVisit.reverse());
//print a array in alphabetical order 
console.log(" sorted in Alphabetical order :", countriestoVisit.sort());
//we changed the original array order now aging
console.log("original array reversed again:", countriestoVisit.reverse());
