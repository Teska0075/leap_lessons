// Comments can make code readable

// Javascript lesson begin

/* Comments can
 make code readable */

// Variable.js нэртэй файл үүсгэх, number, string, boolean, undefined, null зэрэг утгуудыг өгөх
let age = 22;
let ner = "Tushig";
let student = true;
let leap ;
let nest = null;

console.log(age);
console.log(ner);
console.log(student);
console.log(leap);
console.log(nest);

// Datatypes.js нэртэй файл үүсгэх, typeof ашиглан өөр, өөр, төрлийн утгуудыг шалгах, number, string, boolean, undefined,  null гэх мэт 
console.log(typeof(age));
console.log(typeof(ner));
console.log(typeof(student));
console.log(typeof(leap));
console.log(typeof(nest));

// Утга оноогоогүй хувьсагч зарлах
let emptyvar = "";
console.log(emptyvar);

// Утга оноосон хувьсагч зарлах 
let huvisagch = "abc123";
console.log(huvisagch);

// Олон мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах
let fname = "Tushig";
let lname = "Regzen";
let marital_status = "single";
let country = "MGL";
let nas = 22;

console.log(fname);
console.log(lname);
console.log(marital_status);
console.log(country);
console.log(nas);

// Нэг мөрөнд First name, last name, marital status, country, age гэсэн нэртэй хувьсагч зарлах 
console.log(fname + " " + lname + " " + marital_status + " " + country + " " + nas);

// MyAge, yourAge нэртэй хувьсагч зарлан эхний утгыг оноох
let my_age = 22;
let your_age = 33;
console.log(my_age);
console.log(your_age);

// Гурвалжингийн периметрийг олох 
let x = 4;
let y = 4;
let z = 4;
console.log("x =" + x);
console.log("y =" + y);
console.log("z =" + z);
console.log("p =", x + y + z);

// Тойргийн талбайг олох 
let r = 5;
let area = 3.14 * (r * r);

console.log(area);

// m = y2-y1/x2-x1 хариуг олох 

let x1 = 3;
let x2 = 5;
let y1 = 6;
let y2 = 8;

let m = (y2 - y1) / (x2 - x1);

console.log(m);

// 15 Gegabyte нь хэдэн биттэй тэнцүү вэ ?

let gb = 15;
let bit = gb * (1024 ** 3) * 8;

console.log(`15 GB = ` + bit + `bit`);

// 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.

let mb = 15;
let second = 3;
let byte = mb * (10 ** 6);
let bitRate = byte / second ;

console.log(bitRate);

//  side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.

let side1 = parseInt(prompt(`Гурвалжны 1дэх талыг өгнө үү`));
let side2 = parseInt(prompt(`Гурвалжны 2дох талыг өгнө үү`));
let side3 = parseInt(prompt(`Гурвалжны 3дах талыг өгнө үү`));

let s = (side1 + side2 + side3) / 2;
let area1 = Math.sqrt(s *((s - side1) * (s - side2) * (s - side3)));

console.log(`Гурвалжны талбай нь : `, area1);

// 16. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.

let c1 = parseInt(prompt(`Celsius to Fahrenheit conversion`));
let f1 = c1 * (9/5) + 32;

console.log(f1, `Fahrenheit`);

// 17. Өгсөн тоог фаренгейтээс цельс рүү хөрвүүл.

let c2 = parseInt(prompt(`Fahrenheit to Celsius conversion`));
let f2 = (c2 - 32) * 5/9;

console.log(f2, `Celsius`);

// 18. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул: 
// Өгөгдсөн 2 тооны нийлбэр нь 25 
// Өгөгдсөн 2 тооны ялгавар нь 5



// 19. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх

let cm1 = parseInt(prompt(`cm to inch conversion`));
let  inch1 = cm1 * 0.393701;

console.log(inch1, `inch`);

let inch2 = parseInt(prompt(`inch to cm conversion`));
let cm2 = inch2 * 2.54;

console.log(cm2, `cm`);

// 20. Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.

let r1 = parseInt(prompt('R urt ogno uu'));
let area2 = 3.14 * (r1 * r1);
console.log(`Circle area is: ${area2}`); 

let circum = 2 * 3.14 * r1;
console.log(`Circle circumference is: ${circum}`);

// 21. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич.

let num2 = parseInt(prompt(`3н оронтой тоо оруулна уу`))д
let left = num2 % 100;
let res = num2 - left;

console.log(res/100);
