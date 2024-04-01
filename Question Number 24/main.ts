//DEFINE VARIABLES
let apple = "apple"
let uppercaseapple = "APPLE";
let ten =10;
let tewenty = 20;
let fruits =["apple","banana","orange"," watermelon"];
//test for equality and unequality with string 
console.log("\n is apple is equal to apple?");
console.log(apple == "apple");
console.log("\n is apple is not equal to apple?");
console.log(apple != "apple");
//TEST USING LOWERCASE FUNCTION
console.log ("\n is APPLE  is equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase()=="apple");
console.log ("\n is APPLE  is not  equal to apple after converting to lowercase?");
console.log(uppercaseapple.toLowerCase()!="apple");
//numerical testing
console.log ("\n is ten is equal tewenty?");
console.log(ten==20);
console.log ("\n is ten is not equal tewenty?");
console.log(ten!=20);
console.log ("\nis ten is greater than tewenty?");
console.log(ten>20);
console.log ("\n is ten is smaller than tewenty?");
console.log(ten<20);
//greater than or equal to 
console.log ("\nis ten is greater than or equal to tewenty?");
console.log(ten>=20);
//smaller than or equal to 
console.log ("\n is ten is smaller than or equal to tewenty?");
console.log(ten<=20);
// test using and or operators
//using and operator false and true
console.log ("\n is ten is smaller than tewenty and ten equal to tewenty?");
console.log(ten<20 && ten == 20);
console.log ("\n is ten is greater than zero and tewenty is  equal to tewenty?");
console.log(ten>0 && tewenty == 20);
//using or operator true and false
console.log ("\n is ten is greater than zero and tewenty is not  equal to tewenty?");
console.log(ten>0 || tewenty != 20);
console.log ("\n is ten is smaller than tewenty and ten equal to tewenty?");
console.log(ten<20 || ten == 20);
console.log ("\n is ten is greater than tewenty and ten is  equal to tewenty? \n");
console.log(ten>20 || ten == 20);
//test whether an item is include in array 
console.log("\nis orange includes in my fruits array")
console.log(fruits.includes("orange"));
console.log("\nis orange not includes in my fruits array")
console.log(!fruits.includes("orange"));



