 // premitive datatypes
 const age = 20;
 let name = "TAnzeel";
 let x;
 y = null;
 isfollow = true;
 z = BigInt(123);
 console.log(age,name,x,y);

// non premitive datatype(objects)
 const student = {
    name : "Tanzeel",
    age :20,
    cgpa : 3.53,
    ispass: true,
 }
 console.log(student);
 console.log(student["name"]);
 console.log(student.age);

 //how to update in objects variable
 student["name"]= "Waleed";
console.log(student.name);
student["age"] = student["age"] + 2;
console.log(student.age);
