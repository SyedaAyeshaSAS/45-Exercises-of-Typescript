//current user array
let currentUser = ["Ayesha","Annie","Maria", "Nihaal","Zunaira"];
//new user array
let newUser = ["saima","Dania","Ayesha","Rimsha","Nihaal"];
//loop through new users to check for users name availibility
newUser.forEach(newoneuser =>{
    // making a condition for username already exits and save in ourcondition
   let ourcondition = currentUser.some(currentoneuser => currentoneuser.toLowerCase()===newoneuser.toLowerCase())
   //print messages using if else statements
if(ourcondition){
    console.log(`Sorry ${newoneuser} is already taken!`)
}else{
    console.log(`This username ${newoneuser} is available`)
}
})