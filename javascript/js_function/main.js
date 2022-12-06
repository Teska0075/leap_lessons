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

// let randomNums1 = [1,2,3,4,5,6,7,8,9];
// function find(a,randomNums) {
//     let stat = -1;
//     for(let i = 0; i < randomNums.length; i++){
//         let name = randomNums[i]
//         if (name == a) {
//             stat = `${randomNums[i]}`;
//             break;
//         }
//     } 
//     return stat;
// }
// find(9, randomNums1);


// for(let i = 0; i < randomNums.length; i++){
//     if (randomNums[i] == num ) {
//         console.log(randomNums[i]);
//     }else{
//         console.log(-1);
//     }
// }

// let i = 0;
// while (i < randomNums.length) {

//      if (randomNums[i] == num ) {
//      console.log(randomNums[i]);
//      }else{
//         console.log(-1)
//      }
//      i++;
// }

// for(let i = 0; i < randomNums; i++){
//     if (randomNums[i] == num ) {
//         console.log(randomNums[i]);
//         }else{
//             console.log(-1);
//         }
// }

// let randomNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function find(a,randomNum1){

//     let stat = `-1`;

//     for(let i=0;i < randomNum1; i++){
//         let name = randomNums[i];
//         if(name == a){
//             stat = i;
//             break;
//         }
//     }
//     return stat;
// }

// console.log(find(2,randomNums));