// n бутархай тооны хамгийн ойрын бүхэл тоог ол.

let n = prompt(`butarhai too oruul`);

console.log(Math.round(n));

// 3 оронтой той ( n ) ороход тухайн 3 оронтой тооны цифрүүдийн нийлбэрийг ол

let p1 = 456;
let str = String(p1);

console.log(Number(str[1])+ Number(str[2])+ Number(str[3]));

// 1. 2 тоо prompt - оор авна.
// 2. prompt - оор өгсөн 2 тооны хооронд дурын тоо generate хийж гаргана уу.

let a = prompt(`ehnii toogoo oruulna uu`)
let b = prompt(`suuliin toogoo oruulna uu`)

let a1 = Number(a);
let b1 = Number(b);
console.log((Math.round(Math.random() * (b1 - a1 + 1)) + a1));