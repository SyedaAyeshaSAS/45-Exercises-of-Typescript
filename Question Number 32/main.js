//current user array
var currentUser = ["Ayesha", "Annie", "Maria", "Nihaal", "Zunaira"];
//new user array
var newUser = ["saima", "Dania", "Ayesha", "Rimsha", "Nihaal"];
//loop through new users to check for users name availibility
newUser.forEach(function (newoneuser) {
    // making a condition for username already exits and save in ourcondition
    var ourcondition = currentUser.some(function (currentoneuser) { return currentoneuser.toLowerCase() === newoneuser.toLowerCase(); });
    //print messages using if else statements
    if (ourcondition) {
        console.log("Sorry ".concat(newoneuser, " is already taken!"));
    }
    else {
        console.log("This username ".concat(newoneuser, " is available"));
    }
});
