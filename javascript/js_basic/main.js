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


