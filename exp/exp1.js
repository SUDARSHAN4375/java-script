
// activity 1 

const a = 10; // const values cannot 
let b = 20; // let access the varibles only in block of code.
var c = 30; // older method --global access
/*
console.log(a);
console.log(b);
console.log(c);
*/
document.write(a);
document.write(b);
document.write(c);

// Activity 2
/*
console.log("Activity 2")
{
    let x =20;
    var y =40;
    const z =50;
}

 // console.log(x);// cannot be print the value block scope
console.log(y);
//console.log(z); // cannot access coz scope

*/

 // Activity 3 --  data types 
//undefined 
let x;
document.write(x)
document.write("typeof(x) = ",typeof(x))
document.write("\n")

/*
console.log(x); //  x = undefined 
console.log("typeof(x) = ",typeof(x))
console.log("\n")
*/ 

//number
let number = null;  //
/*
console.log("typeof(number) = ",typeof(number)) // number = Null
console.log("\n")
*/
document.write("typeof(number) = ",typeof(number)) // number = Null
document.write("\n")


// BigInt 
let y = BigInt("123");
/* 
console.log(typeof(y));
console.log("typeof(y) = ", y);
console.log("\n")*/
(typeof(y));
document.write("typeof(y) = ", y);
document.write("\n")


// symbol/*
let z = Symbol("Hello");
/*console.log(z);
console.log("typeof(z) = ",typeof(z))
console.log("\n")
*/
/*
document.write(z);
document.write("typeof(z) = ",typeof(z));
document.write("\n");
*/

// string 
let string = "Sudarshan";
document.write(string);
document.write("typeof(string ) = ",typeof(string))
document.write("\n")


// activity 4 -- student info
let fristname = "Sudarshan";
let age = 22;
let email = "svshinde4375@gmail.com";
let  lastname = "Shinde" ;
let collagename ="DKTE";
/*
console.log("Frist name : ",fristname);
console.log("Last name : ",lastname);
console.log("Age =",age);
console.log("Email = ",email);
console.log("Colllage name : ",collagename);
*/
document.write("Frist name : ",fristname);
document.write("Last name : ",lastname);
document.write("Age =",age);
document.write("Email = ",email);
document.write("Colllage name : ",collagename);


// activity 5 ---even or odd
let num =10;
if(num % 2 ==0)
{
    document.write(num,"is even")
}
else{
    document.write(num,"is even");
}

// activity 6 ---pass or fail

let result = 80;
if(result >= 40){
    document.write("Student is pass")
}
else{
   document.write("Student is fail");
}

// activity 
