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

// bodlogo 1

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

// bodlogo 2

let w = 3,
    x = 7,
    y = 2,
    z = 4;
let ans = 1;

if (w < 5){
    ans = ans * w;
}

if (x < 5){
    ans = ans * x;
}

if (y < 5){
    ans = ans * y;
}

if (z < 5){
    ans = ans * z;
}

console.log(ans);

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

// Tip

let price = prompt(`uniin dung oruulna u`);
let price1 = Number(price);

console.log(price1 <= 30000 && price1 >= 5000 ? price1 * 0.15 + price1 : price1 * 0.2 + price1);