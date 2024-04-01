//creating a array
let userNames = ["Maham","Alia","Hamna","Admin","Sumaira"];
//using foreach loop on array
userNames.forEach(oneuser => {
    if(oneuser==="Admin"){
        console.log(`HELLO ${oneuser} would you like to see a status report ?`);
    }
    else{
        console.log(`HELLO ${oneuser} thankyou for logging in again.`);
    }
})