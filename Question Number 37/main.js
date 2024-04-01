//making a function
function makeShirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Typescript"; }
    console.log(" Creatring a ".concat(size, " Shirt With the ").concat(printMessage, " Print On Shirt"));
}
//calling a function with medium size and default message 
makeShirt("Medium");
//calling a function with default  values
makeShirt();
//calling a function now with small size and different print message
makeShirt("Small", "I Love Javascript");
