// 1declare array fuction 
let numbers = [10, 20, 30];

function fun1(){
    console.log("Welcome to JavaScript");
}

fun1();
console.log(numbers);

//2 count vowels
let text = "Sudarshan";
let vowelCount = 0;

for (let i = 0; i < text.length; i++) {
    let char = text[i].toLowerCase();
    if ("aeiou".includes(char)) {
        vowelCount++;
    }
}

console.log("Total vowels:", vowelCount);

//3 reverse the string 

let str = "Sudarshan";
let revStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    revStr = revStr + str[i];
}

console.log("Reverse string is:", revStr);


//4 array largest element

let arr = [15, 8, 42, 3, 27];
let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Maximum element is:", max);

//5 check panlidrome in string

let str1 = "level";
let reverseStr = "";

for (let i = str1.length - 1; i >= 0; i--) {
    reverseStr = reverseStr + str1[i];
}

if (str1 === reverseStr) {
    console.log("String is Palindrome");
} else {
    console.log("String is Not Palindrome");
}

//6fabonachi series

let n = 10;
let a = 0, b = 1, c;

console.log("Fibonacci Series:");

for (let i = 1; i <= n; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}


//7remove the duplicates from array

let arr1 = [1, 2, 2, 3, 4, 4, 5];
let unique = [];

for (let i = 0; i < arr1.length; i++) {
    if (!unique.includes(arr1[i])) {
        unique.push(arr1[i]);
    }
}

console.log("Array without duplicates:", unique);

