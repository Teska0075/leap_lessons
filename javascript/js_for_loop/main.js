// Fibonacci

const number = parseInt(prompt("Enter number:"));
let num1 = 0;
let num2 = 1;
let res = "";

for(let i=0; i <= number; i++){
    console.log(num1)
    res= num1 + num2;
    num1 = num2;
    num2 = res;
}

// Pyramid
// let row = 5;

// for(let i = 0; i < row; i++){
//     let print = "";
//     for(let a = 0; a < row-i; a++) print += " ";
//     for(let b = 0; b < i; b++) print += "* ";
//     console.log(print);     
// }