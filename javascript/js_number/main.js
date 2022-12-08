// n бутархай тооны хамгийн ойрын бүхэл тоог ол.

let n = prompt(`butarhai too oruul`);

console.log(Math.round(n));

// 3 оронтой той ( n ) ороход тухайн 3 оронтой тооны цифрүүдийн нийлбэрийг ол

let p1 = 456;
let str = String(p1);

console.log(Number(str[0])+ Number(str[1])+ Number(str[2]));

// 1. 2 тоо prompt - оор авна.
// 2. prompt - оор өгсөн 2 тооны хооронд дурын тоо generate хийж гаргана уу.

let num1 = prompt(`ehnii toogoo oruulna uu`)
let num2 = prompt(`suuliin toogoo oruulna uu`)

let a1 = Number(num1);
let b1 = Number(num2);

console.log((Math.round(Math.random() * (b1 - a1)) + a1));

// general triangle

let a = 4;
let b = 3;
let c = (b**2) + (a**2);

console.log(Math.pow(c, 0.5));

// simple assignment 1
console.log(Math.round(Math.random() * 100));

// simple assignment 2

let firstNum = 50;
let secondNum = 255;

console.log(Math.round(Math.random() * (secondNum - firstNum) + firstNum));

// validate phone number
let phoneNum = prompt(`Enter ur phone number`);
// let phoneNum = `+97689803320`;
if(phoneNum.length === 12){
    if(phoneNum[0] === `+` && parseInt(phoneNum.substring(1, 3)) === 976){
        if(parseInt(phoneNum(4)) === Number){
            console.log(`${phoneNum} is a right phone number`);
        }
    }
} else {
    console.log(`WRONG NUMBER`);
}

// Register Number Validation

let register = prompt("registeriin dugaaraa oruulna uu");

if(register.length === 10){
    if(isNaN(parseInt(register[0])) && isNaN(parseInt(register[1]))){
        if(parseInt(register.substring(2))){
            console.log("Та монгол улсын регистрийн дугаарыг зөв орууллаа");
        } 
    } 
} else { 
    console.log("Та монгол улсын иргэний бүртгэлийн дугаарыг буруу орууллаа");
}