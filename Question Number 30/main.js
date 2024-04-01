//creating a array
var userNames = ["Maham", "Alia", "Hamna", "Admin", "Sumaira"];
//using foreach loop on array
userNames.forEach(function (oneuser) {
    if (oneuser === "Admin") {
        console.log("HELLO ".concat(oneuser, " would you like to see a status report ?"));
    }
    else {
        console.log("HELLO ".concat(oneuser, " thankyou for logging in again."));
    }
});
