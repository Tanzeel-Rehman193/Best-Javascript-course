// loops 
//For loops

// let sum = 0;
// for(let i = 0;i<=5;i++){
//     sum = sum +i;
// }
// console.log(sum);

// while loops

// let i=1;
// while (i<=3) {
//     console.log(i);
//     i++;
// }

// Do while loops

// let i=20;
// do{
//     console.log("Tanzeel");
//     i++;
// } while (i<=4);

// For-of loops

// let name = "Tanzeel rehman";
// for (let i of name) {
//     console.log(i);
// }

// for in loops

// let student = {
//     name: "Ali",
//     age : 20,
//     city : "Sahiwal",
// }
// for (let key in student){
//     console.log("Key is :", key , "values",student[key]);
// }

// practice questions 
// Qno 1
// print all even numbers from 0 to 100?
// for(let i=0;i<=100;i++){
//     if (i%2==0) {
//         console.log("Even number is :"+i);
//     }
// }

// Qno 2
// let gameno = 12;
// let userguess = prompt("Guess the right number");
// while (userguess != gameno) {
//      userguess = prompt("You entered wrong number,Enter another number");
// }
// console.log("Congrats you enter the right number");

// Strings

// let str = "Tanzeel";
// let str2 = 'Tanzeel';
// console.log(str.length);
// console.log(str[0]);
// console.log(str[4]);

// Template literals + Escape charecters

// let specialstring = `this is a \n template literal is \t ${4*5}`;
// console.log(specialstring);

// let obj ={
//     item : "Pen",
//     price: 50,
// }
// console.log(`The cost of ${obj.item} is ${obj.price}`);

// String methods 

// let str= `tanZEEl rehman`;
// let str2 = `siddiqui`;
//console.log(str.toUpperCase());                  //To print capital charecters 
//console.log(str.toLowerCase());                  //To print small charecters 
// console.log(str.trim());                           // To remove white spaces from starting and ending 
// console.log(str.slice(2,5));                        // to cut specific piece of a string 
// let res = str.concat(str2);
// console.log(res);                                    // To join/concat two strings 
// console.log(str.replace("Z","B"));                      // To saerch value and replace with new value
// console.log(str.charAt(6));                            // To find place of specific charecter in string

// practice question 

// let attherate = "@";
// let input =  prompt("Enter your username?");
// console.log('Username =',input);
// let res = attherate.concat(input);
// console.log(`Username should  be ${res}${res.length}`);