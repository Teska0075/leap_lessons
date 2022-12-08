// 1. Өгөгдсөн 2 тооны ихийг олох функц бич.

// function max(a,b) {
//     let arrayOfNumbers = [a,b];
//     let max = 0;

//     for(let i = 0; i < arrayOfNumbers.length; i++){
//     if(max < arrayOfNumbers[i]){
//         max = arrayOfNumbers[i];
//     }
// }
// return max;
// }
// console.log(max(1,6));

// 2. Өгөгдсөн array -аас өгөгдсөн тоо байгаа эсэхийг олох функц бич. Тухайн тоо байвал индексийг буцаана. Байхгүй бол -1 буцаана.

let randomNums1 = [1,2,3,4,5,6,7,8,9];
function find(a,randomNums) {
    for(let i = 0; i < randomNums.length; i++){
        if (randomNums[i] == a ) {
            return a;
        }
    }
    return -1;
}
console.log(find(1, randomNums1));;

// 3. Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.

let symbols = [`q`, `w`, `e`, `r`, `t`, `y`];
function icon(a, sym){
    for(let i=0; i < sym.length; i++){
        if (sym[i] === a ){
            return a
        }
    }
    return -1;
}

console.log(icon(`l`,symbols));

// 4. Өгөгдсөн 2 тоон интервал дахь санамсаргүй тоо буцаах функц бич.

function pick1(a, b){
    return Math.round(Math.random() * (b - a) + a); 
}

console.log(pick1(1, 6));

// 5. Өгөгдсөн array - ийн дундажыг олох функц бич.
// let arrayOfNumbers = [43, 56, 23];

// let sum = 0;

// for(let i=0; i < arrayOfNumbers.length; i++){
//     sum = sum + arrayOfNumbers[i];
// }
// let a = sum / arrayOfNumbers.length

// console.log(`Sum of all numbers: ${a}`);

function findAverage(array){
    let average = 0;
    for (let i=0; i < array.length; i++){
        average += array[i];
    }
    average = average / array.length;
    return average;
}

console.log(findAverage([43, 56, 23]));



