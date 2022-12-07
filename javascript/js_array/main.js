// ARRAY OF NUMBERS

// 1. arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул. 43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11

// let arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];

// // 2. Array доторх тоонуудын нийлбэрийг ол.

// let sum = 0;

// for(let i=0; i < arrayOfNumbers.length; i++){
//     sum += arrayOfNumbers[i]
// }
// console.log(`Sum of all numbers: ${sum}`);

// 3. Хамгийн их тоог ол.

// let max = 0;

// for(let i = 0; i < arrayOfNumbers.length; i++){
//     if(max < arrayOfNumbers[i]){
//         max = arrayOfNumbers[i];
//     }
// }
// console.log(`hamgiin ih utga n: ${max}`);


// 4. Хамгийн бага тоог ол.

// let min = arrayOfNumbers[1];

// for(let i = 0; i < arrayOfNumbers.length; i++){
//     if(min > arrayOfNumbers[i]){
//         min =arrayOfNumbers[i];
//     }
// }
// console.log(`hamgiin baga utga n: ${min}`);


// 5. Array - ийн эхэнд дурын 1 тоог нэм.

//  arrayOfNumbers.unshift(77);
//  console.log(arrayOfNumbers);

 // 6. Array - ийн төгсгөлд дурын 1 тоог нэм.

//  arrayOfNumbers.push(88);
//  console.log(arrayOfNumbers);


// SIMPLE ARRAY - 1


// Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу. 

let itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`];

//console.log() ашиглан array хэвлэх
console.log(itCompanies);

//Array дахь компаниудын length хэвлэх
console.log(itCompanies.length);

//Эхний компани, дунд болон сүүлчийн компанийг хэвлэх
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);

//Компани бүрийг хэвлэх
console.log(`${itCompanies}`);

//Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга
console.log(itCompanies[0].toLowerCase());

//Array - г өгүүлбэр болгон хэвлэ: Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon зэрэг мэдээллийн технологийн томоохон компаниуд.
console.log(`${itCompanies} зэрэг мэдээллийн технологийн томоохон компаниуд.`);