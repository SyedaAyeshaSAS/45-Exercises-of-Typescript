function mySandwiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    for (var i = 0; i < items.length; i++) {
        console.log("-".concat(items[i], " "));
    }
}
;
console.log("Enjoy your sandwiches SYEDA AYESHA");
var collection1 = mySandwiches("Ham", "Cheese", "Chicken Tikka");
var collection2 = mySandwiches("Turkey", "Swiss");
var collection3 = mySandwiches("Chicken Malai");
