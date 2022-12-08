let r1 = 20 > 10;
let r2 = 20 < 10;
let r3 = 20 == 10;
let r4 = 20 != 10;

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);

let age = 20;



// IF...ELSE...IF
let weekNumber = 5;
let weekName;

if (weekNumber == 1) {
    weekName = 'Monday';
} else if (weekNumber == 2) {
    weekName = 'Tuesday';
} else if (weekNumber == 3) {
    weekName = 'Wednesday';
} else if (weekNumber == 4) {
    weekName = 'Thursday';
} else if (weekNumber == 5) {
    weekName = 'Friday';
} else if (weekNumber == 6) {
    weekName = 'Saturday';
} else if (weekNumber == 7) {
    weekName = 'Sunday';
} else {
    weekName = 'Wrong input';
}

console.log(weekName);

let gender = "male";
let age1 = 19;

if (gender = "male" && age1 >=18){
    console.log("Nasand hursen eregtei");
} else {
    console.log("Nasand hureegui esvel huis tohirohgui bna");
}

// Хувьсагч
// 1.

let a = 85,
    b=75,
    c=96,
    d=69;
let sum = 0;

if (a > 80){
    sum = sum + a;
}

if (b > 80){
    sum = sum + b;
}

if (c > 80){
    sum = sum + c;
}

if (d > 80){
    sum = sum + d;
}

console.log("sum =", sum);

// 2.

let w2 = 3,
    x2 = 7,
    y2 = 2,
    z2 = 4;
let ans = 1;

if (w2 < 5){
    ans = ans * w2;
}

if (x2 < 5){
    ans = ans * x2;
}

if (y2 < 5){
    ans = ans * y2;
}

if (z2 < 5){
    ans = ans * z2;
}

console.log(ans);

// Assignment-1
// 1.

let i = 4 > 3; //true
let iii = 4 < 3; //false
let ii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; //true
let vii = 4 != 4; //false
let iix = 4 !== 4; //false
let ix = 4 != "4"; //false
let x = 4 == "4"; //true
let xi = 4 === "4"; //false

console.log(x);
//2.

let one = 4 > 3 && 10 < 12; // true
let two = 4 > 3 && 10 > 12; // false
let three = 4 > 3 || 10 < 12; // true
let four = 4 > 3 || 10 > 12; // true
let five = !(4 > 3); // false
let six = !(4 < 3); // true
let eight = !(4 > 3 && 10 < 12); // false
let nine = !(4 > 3 && 10 > 12); // true
let ten = !(4 === "4"); // true

console.log(ten);
// easy1

let n = 77;
let dun;

if (n <= 100){
    dun = "A";
}
if (n <= 89){
    dun = "B";
}
if (n <= 79){
    dun = "C";
}
if (n <= 69){
    dun = "D";
}
if (n <= 59){
    dun = "F";
}

console.log(dun);

// easy2

let m = 3;
let days;

if (m = 12){
    days = "31"
}
if (m = 11){
    days = "30"
}
if (m = 10){
    days = "31"
}
if (m = 9){
    days = "30"
}
if (m = 8){
    days = "31"
}
if (m = 9){
    days = "30"
}
if (m = 8){
    days = "31"
}
if (m = 7){
    days = "31"
}
if (m = 6){
    days = "30"
}
if (m = 5){
    days = "31"
}
if (m = 4){
    days = "30"
}
if (m = 3){
    days = "31"
}
if (m = 2){
    days = "28 or 29"
}
if (m = 1){
    days = "31"
}

console.log(days);

// easy3

// easy4
let p = 12;

if (p >= 0){
    console.log("positive");
}else{
    console.log("negative");
}

// easy5

let height = 180, weight = 75;
let bmi = weight / (height * height) * 10000;

if(bmi > 30){
    console.log("het targalalttai");
}else if (bmi > 25){
    console.log("iluudel jintei");
}else if (bmi > 18.5){
    console.log("eruul");
}else if (bmi < 18.5){
    console.log("jingiin dutagdaltai");
}

// easy6

let num = parseInt(prompt(`Tegsh sondgoig shalgah`));

if (num%2 === 0 ){
    num = `tegsh too bna`
}else{
    num = `sondgoi too bna`
}

console.log(num);

// easy7

let num1 = parseInt(prompt(`eyreg sorog toog shalgah`));

if (num1 > 0){
    num1 = `eyreg too bna`
}else{
    num1 = `sorog too bnee`
}

console.log(num1);

// easy8

let yearOfBirth = parseInt(prompt(`Torson onoo oruulna uu`));

let old = 2022 - yearOfBirth;

if (0 <= old && old <= 1){
    old = "Infant";
} else if(1 < old && old <= 3){
    old = "Toddler";
} else if(3 < old && old <= 5){
    old = "Preschool"
} else if(5 < old && old <= 12){
    old = "Gradeschooler"
} else if(12 < old && old <= 18){
    old = "Teen"
} else if(18 < old && old <= 21){
    old = "Young adult"
} else if(21 < old){
    old = "Adult"
}

console.log(`You are: ${old}`);

// Өндөр жилийг олно уу.

let leapYear = 2004;

if(leapYear % 400 == 0){
    leapYear = `It is a leap year`
} else if(leapYear % 100 == 0 ){
    leapYear = `It is NOT a leap year`
} else if(leapYear % 4 == 0){
    leapYear = `It is a leap year`
} else {
    leapYear = `It is NOT a leap year`
}

console.log(leapYear);

// Өгөгдсөн тоонуудын хамгийн их болон хамгийн багыг олно уу.

let a1 = 9;
let b1 = 5;
let c1 = 7;

let res1;

if(c1 < b1){
    res1 = c1;
} else if(b1 < a1){
    res1 = b1;
} else {
    res1 = a1;
}

console.log(`Хамгийн бага тоо ${res1}`);

if(a1 > b1){
    res1 = a1;
} else if(b1 > c1){
    res1 = b1;
} else {
    res1 = a1;
}

console.log(`Хамгийн их тоо ${res1}`);

// 4 тооны бага

let numba1 = 120;
let numba2 = 33;
let numba3 = 10;
let numba4 = 12;
let out;

if(numba4 < numba3){
    out = numba4;
} else if(numba3 < numba2){
    out = numba3;
} else if(numba2 < numba1){
    out = numba2
} else {
    out = numba1
}

console.log(`hamgiin baga too ${out}`);


// Сурагчдын шалгалтын дүнг гаргаарай

let ner = prompt(`Suragchiin neriig oruulna u`);
let onoo = parseInt(prompt(`Suragchiin avsan onoog oruulna u`))
let res;

if(onoo < 59){
    res = `Маш муу`
} else if(60 < 69){
    res = `Хангалттай`
} else if(70 < 79){
    res = `Дунд`
} else if(80 < 89){
    res = `Сайн`
} else if(90 < 100){
    res = `Маш сайн`
}
console.log(`НЭР: ${ner}. АВСАН ОНОО: ${onoo}. ҮНЭЛГЭЭ: ${res}`);

// Тэмцээн

let teamA1 = 96;
let teamA2 = 108;
let teamA3 = 120; //97

let teamB1 = 88;
let teamB2 = 91;
let teamB3 = 110; //96

let scoreA = (teamA1 + teamA2 + teamA3)/3;
let scoreB = (teamB1 + teamB2 + teamB3)/3;

let result;

if(scoreA >= 100 || scoreB >= 100){
    if(scoreA > scoreB){
     result = `Team A is a WINNER`
    } else if (scoreB > scoreA){
     result = `Team B is a WINNER`
    }else{
     result = `TIE`
    }
}else{
 result = `There is NO winner`
}

console.log(result);



// Tip

let price = prompt(`uniin dung oruulna u`);
let price1 = Number(price);

console.log(price1 <= 30000 && price1 >= 5000 ? price1 * 0.15 + price1 : price1 * 0.2 + price1);