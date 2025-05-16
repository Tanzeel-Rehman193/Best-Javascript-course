//Functions

// Sum function 
// function sum(a,b) {
//     console.log(a+b);
// }
//  sum(3,6);

// Sum function with return 
// function sum(a,b) {
//     s = a+b;
//     return s ;
// }
// let val = sum(4,5);
// console.log(val);

// Arrow function 
// sum function 
// const sum  = (a,b)=>{
//     console.log(a+b);
// }
// sum(7,6);

// Practice question 

// function countvowels(str) {
//     let count = 0;
//     for (let word of str) {
//         console.log(word);
//         if (word === "a" || word === "e" || word === "i" || word === "o" || word === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countvowels("Tanzeel");

// using Arrow function

// let countvowels = (str)=>{
//          let count = 0;
//     for (let word of str) {
//         console.log(word);
//         if (word === "a" || word === "e" || word === "i" || word === "o" || word === "u") {
//             count++;
//         }
//     }
//     console.log(count);
// }
// countvowels("Tanzeel");

// Methods 

// For-Each method
// let arr = [1,2,3,4];
// arr.forEach((val)=>{           // each value at each index
// console.log(val);
// });

// Practice Question
// let arr = [1,2,3,4,5];
// arr.forEach((i)=>{
//     let sqr = i * i;
//     console.log(`Square of number is : ${sqr}`);
// });

// More array methods 
// Map method                       // Use to form a new array with help of previos array values output
// let arr = [1,2,3,4,5,6];
// let newarray = arr.map((val)=>{
//     return val * val;
// });
// console.log(newarray);

// Filter Method                                         // Check each value of array for condition
// let arr =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
// let newarray = arr.filter((val)=>{
//     return val%2!= 0;
// });
// console.log(newarray);

// Reduce Method                            // Perform some operation on array values and return only 1 value as answer
// let arr = [1,2,3,4,5];
// let sum = arr.reduce((res,val)=>{
//     return res+val;
// });
// console.log(sum);

// Practice Question 
// Qno1
// let marks = [78,67,87,,96,91,56,99];
// let Agrade = marks.filter((val)=>{
//     return val>90;
// })
// console.log(Agrade);

//Qno2
// let number = prompt("Enter any numnber?");
// let arr = [];
// for(let i=1;i<=number;i++){
//     arr[i-1]=i;
// }
// console.log(arr);
// //sum
// let sum = arr.reduce((res,val)=>{
//     return res+val;
// })
// console.log(`sum of all numbers is ${sum}`);
// // product
// let product = arr.reduce((res,val)=>{
//     return res*val;
// });
// console.log(`product of all numbers is ${product}`);