//making a function
function makeShirt (size: string = "Large", printMessage:string ="I Love Typescript" ){
    console.log(` Creatring a ${size} Shirt With the ${printMessage} Print On Shirt`)
}
//calling a function with medium size and default message 
makeShirt("Medium");
//calling a function with default  values
makeShirt();
//calling a function now with small size and different print message
makeShirt("Small", "I Love Javascript")