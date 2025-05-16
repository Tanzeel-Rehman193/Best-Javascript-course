// Arrays 

// let Student = [97,78,67,45,34];
// console.log(Student);
// console.log(Student.length);
// student[2] = 78;
// loopover in arrays  // using for loop for numbers or strings separately

// for (let i = 0; i<5;i++){
//     console.log(Student[i]);
// }

// using for-of loops for individually accessing indexes of array

// let cities = ["burewala","Lahore","Sahiwal"];
// for (const city of cities) {
//     console.log(city);
//     console.log(city.toUpperCase());
// }

// Practice questions 
// Qno1
// let sum= 0;
// let marks = [85,97,37,76,60];
// for(let i = 0; i<5; i++){
//     console.log(marks[i]);
//     sum=sum+marks[i];
// }
// let avg = sum/marks.length;
// console.log("Average is :",avg);

// Qno 2

// let price = [300,275,456];
// for(let i=0; i<3;i++){
//     console.log(`Actual price is :${price[i]}`);
// let off = 10/100 * price[i];
//  price[i]= price[i] - off;
//  console.log("Discounted price is",price[i]);
// }

// Arrays methods 
let vage = ["Potatoes","chilli","Coliflower","Ginger"];

// vage.push("Carrot","Ladyfinger");                    // To put value in last of array
// console.log(vage);

// let deletevalue = vage.pop();                        // It will delete last item of array and return
// console.log(deletevalue);

// console.log(vage);                                   
// console.log(vage.toString());                        // To convert array into string

// let fruits = ["Apple","Banana"];                     // To join two arrays
// console.log(vage.concat(fruits));                  

// vage.unshift("Ladyfinger");                          // To put value in start of array
// console.log(vage);

// let deletevalue = vage.shift();                     // It will delete first item of array and return
// console.log(deletevalue);

// console.log(vage.slice(0,2));                       // To print a piece of array [0,2).It will not change in original array
// console.log(vage);

// vage.splice(1,1,"onion");                // To add, delete and replace in array. it will change in original array. (start,delete,new)
// console.log(vage);

// Practice question 
// Qno1

// let companies = ["Boomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.shift();
// companies.splice(1,1,"Ola");
// companies.push("Amazon");
// console.log(companies);



