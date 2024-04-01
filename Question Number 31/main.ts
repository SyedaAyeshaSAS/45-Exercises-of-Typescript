//creating a array
let userNames = ["Maham","Alia","Hamna","Admin","Sumaira"];
userNames=[]
if(userNames.length===0){
    console.log("your array is empty we need to find some users!")
}
else{
//using foreach loop on array
userNames.forEach(oneuser => {
    if(oneuser==="Admin"){
        console.log(`HELLO ${oneuser} would you like to see a status report ?`);
    }
    else{
        console.log(`HELLO ${oneuser} thankyou for logging in again.`);
    }
})
}