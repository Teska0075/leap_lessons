// Escape sequences

console.log(`Hello I am "Name Here".\nI am 'Age here' years old.\n\tThis is the new line with tab and some \\backlashes\\.`);

// Simple assignment

//1. Өөрийн нэрийн урт, овог нэрийнхээ уртыг харьцуулж үз.
// console.log(`1. Өөрийн нэрийн урт, овог нэрийнхээ уртыг харьцуулж үз.`);

let fname = prompt(`Ta neree bichne uu`);
let lname = prompt(`Ta ovogoo bichne uu`);

if (fname.length == lname.length){
    alert(`Tanii nernii urt ovognii urt ADIL bna`);
} else if(fname.length < lname.length){
    alert(`Tanii ovognii urt nernii urtnaas chn IH bna`);
}else{
    alert(`Tanii ovognii urt nernii urtnaas chn BAGA bna`);
}

// 2. Бүх тэмдэгтүүдийг жижиг үсгээр бичнэ үү.
console.log(`2.`);

const word = `Pinecone Leap`;

console.log(word.toUpperCase());

// 3. Бүх тэмдэгтүүдийг том үсгээр бичнэ үү.
console.log(word.toLowerCase());

// 4. 'Pinecone academy- н' болон ' leap хөтөлбөрт тавтай морилго уу? ' - г нэг мөр болгон нэгтгэнэ үү. “concat()”

console.log(`4.`);

let first = `Pinecone academy- н`;
let second = ` leap хөтөлбөрт тавтай морилго уу?`;
let result = first.concat(second);

console.log(result);

// 5. firstName, LastName, country, city, age, job хувьсагч зарлан эдгээр хувьсагч орсон өгүүлбэр зохионо уу. Жишээ нь:  Намайг Болд гэдэг. Би Сүхбаатар дүүрэгт амьдардаг.  гэх мэт

console.log(`5.`);

let firstName = `Tushig`;
let lastName = `Regzen`;
let country = `Mongolia`;
let city = `UB`;
let age = `22`;
let job = `freelancer`;

console.log(`Hi my name is ${firstName} ${lastName}. I live in ${city} ${country}. I am ${age}. I am ${job}`);

/* 6. Дараах загварыг хэвлэхийн тулд console.log() болон escape тэмдэгтүүдийг ашиглана уу.
          1 2 3 4 5 
          2 3 4 5 1 
          3 4 5 1 2 
          4 5 1 2 3 
          5 1 2 3 4 */
console.log(`6.`);

console.log(`1 2 3 4 5\n2 3 4 5 1\n3 4 5 1 2\n4 5 1 2 3\n5 1 2 3 4`);


// 1. Огноо хэвлэн гаргах 2.Operator-г олох

// 1.

let year = prompt(`Jilee oruulna uu`);
let month = prompt(`Saraa oruulna uu`);
let day = prompt(`Odoroo oruulna uu`);

let formattedNumber1 = ("0" + month).slice(-2);
let formattedNumber2 = ("0" + day).slice(-2);

console.log(year + `-` + formattedNumber1 + `-` + formattedNumber2);

// 2.

let phoneNumber = prompt(`Enter ur phone number`);
let two = phoneNumber.substring(0, 2);

if (two == `98`){
    console.log(`G-Mobile`);
}else if(two == `99`){
    console.log(`Mobicom`);
}else if(two == `88`){
    console.log(`Unitel`);
}else if(two == `91`){
    console.log(`Skytel`);
}else{
    console.log(`Can't find ur operator`);
}