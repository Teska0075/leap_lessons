// // 1. 10 хүртэлх натурал тоог хэвлэх программ бич
console.log(`1.`);

let count = 1;
while (count <= 3) {
console.log(count);
count = count + 1;
}

// // 2. 10 хүртэлх натурал тооны сондгой тоонуудыг хэвлэх программ бич
// console.log(`2.`);

// let c = 0;
// while (c <= 10) {
//     if (c % 2 !== 0){
//         console.log(c);
//     }
//     c += 1;
// }

// // 3. 10 хүртэлх натурал тооны тэгш тоонуудыг хэвлэх программ бич
// console.log(`3.`);

// let a = 0;
// while (a <= 10) {
//     if (a % 2 == 0){
//         console.log(a);
//     }
//     a += 1;
// }

// // 4. 100 хүртэлх натурал тооны нийлбэрийг олох программ бич
// console.log(`4.`);

// let d = 1, e = 0, f = 100 ;

// while (d <= f){
//     e += d;
//     d ++;
// }

// console.log(e);

// // 5. N хүртэлх натурал тооны хэвлэх болон тэдгээр тооны нийлбэрийг олох программ бич
// console.log(`5.`);

// let g = prompt(`natural too oruulna uu`);
// let h = 1;
// let i = 0;

// while (h <= Number(g)){
//     i += h;
//     h ++;
// }

// console.log(`Garaas oruulsan utga `+ g);
// console.log(`1s oruulsan utga hurtleh toonuudiin niilber ` + i);

// // 6. Өгөгдсөн тоог анхны мөн эсэхийг олох программ бич
// console.log(`6.`);

// let j = parseInt(prompt(`Та дурын тоо оруулна уу.`));
// let isPrime = true;

// if ( j === 2){
//     console.log(`${j} бол анхны тоо мөн.`);
// }else{
//     let k = 2;
//     while (k < j) {
//         if (j % k == 0){
//             isPrime = false;
//             break;
//         }
//         k++;
//     }
//     if(isPrime){
//         console.log(`${j} бол анхны тоо мөн.`);
//     }else{
//         console.log(`${j} бол анхны тоо биш.`);
//     }
// }

// // 7. Өгөгдсөн интервал дахь анхны тоог хэвлэх программ бич
// console.log(`7.`);

// let l = parseInt(prompt(`1dh toogoo oruulna u`));
// let n = parseInt(prompt(`2dh toogoo oruulna u`));
// // isPrime = true
// console.log(`prime nums between ${l} to ${n}:`);

// while (l < n){
//     let m = 2;
//     while (m < l - 1){
//         if (l % m == 0){
//             isPrime = false;
//             break;
//         }
//         m++;
//     }
//     if (isPrime){
//         console.log(l);
//     }
//     isPrime = true;
//     l++;
// }

// // 8. N тооны факториал олох программ бич
// console.log(`8.`);
// let o = parseInt(prompt(`Too oruulna uu.`)), fact = 1, p = 1 ;

// while (p <= o){
//     fact = fact * p;
//     p++
// }

// console.log(`${o}! =${fact}`);

// // 9. Өгөгдсөн тооны цифрүүдийн нийлбэрийг олох программ бич
// console.log(`9.`);

// let q = parseInt(prompt(`Too oruulna u`)), sum = 0;
// while(q > 0){
//     let res = q % 10;
//     sum = sum + res;
//     q = parseInt(q / 10);
// }
// console.log(sum);

// // 10. N хүртэлх тооны сондгой тоо хэвлэх болон түүний нийлбэрийг олох программ бич
// console.log(`10.`);

// let r = parseInt(prompt(`Too oruul`)), s = 1, t = 0;

// while(s <= r) {
//     if (s % 2 !==0){
//         console.log(s);
//         t += s;
//     }

//     s++;
// }
// console.log(t);

// // 11. N хүртэлх тооны тэгш тоо хэвлэх болон түүний нийлбэрийг олох программ бич
// console.log(`11.`);

// let u = parseInt(prompt(`Too oruuld`)), v = 1, w = 0;

// while(v <= u) {
//     if (v % 2 ==0){
//         console.log(v);
//         w += v;
//     }

//     v++;
// }
// console.log(w);

// // 12. Өгөгдсөн  эерэг тооны урвууг хэвлэх программ бич // 123 <=> 321
// console.log(`12.`);

// let num = parseInt(prompt(`input number`));
// let revNum = 0;
// let unit = 0;

// console.log(`ur num`,num);

// while(num !== 0) {
//     unit = num % 10;
//     revNum = revNum * 10 + unit;
//     num = Math.floor(num / 10);
// }

// console.log(`reverse`, revNum);

// // 13. Өгөдсөн тооны цифрүүдийг үгээр хэвлэх программ бич
// console.log(`13.`);

// Factorial
console.log(`factorial`);

let number = parseInt(prompt(`input sum number`))
let facto = 1;

for(let i = 1; i <= number; i++){
    facto = facto * i;
}

console.log(facto);


