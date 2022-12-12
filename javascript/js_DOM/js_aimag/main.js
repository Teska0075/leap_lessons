// Хамгийн эхний li элементийг аван утгыг console.log дээр хэвлэх

let first = document.getElementById("aimag-101");
console.log(first.innerHTML);

// Хамгийн сүүлийн li элементийг аван утгыг console.log дээр хэвлэх

let last = document.getElementById("aimag-522");
console.log(last.innerHTML);

// Сүхбаатар аймгийг элементийн id-аар аван console.log дээр хэвлэх

let sukhee = document.getElementById("aimag-315").innerHTML;
console.log(sukhee);

// Тухайн жагсаалтын элементүүдэд загвар оруулах (текстийн фонт, хэмжээ, текстийн өнгө, хүрээ, padding, margin)

document.getElementById("aimagNames").style.fontFamily = "Arial, Helvetica, sans-serif";

document.getElementById("aimagNames").style.listStyle = "none";

document.getElementById("aimagNames").style.fontSize = "1.5rem";

document.getElementById("aimagNames").style.border = "1px black solid";

document.getElementById("aimagNames").style.padding = "20px";

// Аймгуудыг бүс, бүсээр ялган өөр, өөр background color  өгөх  (1 - Хангайн бүс, 2 - Баруун бүс, 3 - Зүүн бүс, 4 - Төвийн бүс, 5 - Улаанбаатар ) Жишээ нь id = aimag-321 ийм байгаа 3 нь бүсийн дугаар, 21 нь аймгийн дугаар юм.

