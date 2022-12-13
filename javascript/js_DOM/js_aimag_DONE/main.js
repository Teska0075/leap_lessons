// Хамгийн эхний li элементийг аван утгыг console.log дээр хэвлэх

console.log(document.querySelector("ul").lastElementChild.textContent);

// Хамгийн сүүлийн li элементийг аван утгыг console.log дээр хэвлэх

console.log(document.querySelector("ul").firstElementChild.textContent);

// Сүхбаатар аймгийг элементийн id-аар аван console.log дээр хэвлэх

console.log(document.getElementById("aimag-315").textContent);

// Тухайн жагсаалтын элементүүдэд загвар оруулах (текстийн фонт, хэмжээ, текстийн өнгө, хүрээ, padding, margin)

const list = document.querySelectorAll("li");

for(let i=0; i < document.querySelectorAll("li").length; i++){
    list[i].style.margin = "15px"
    list[i].style.padding = "20px";
    list[i].style.listStyle = "none";
    list[i].style.fontSize = "1.2rem";
    list[i].style.fontFamily = "Arial, Helvetica, sans-serif";
    list[i].style.textTransform = "uppercase";
    list[i].style.letterSpacing = "2px";
    list[i].style.textAlign = "center";
    list[i].style.color = "#fff";
    list[i].style.border = "2px solid #000";
}

// Аймгуудыг бүс, бүсээр ялган өөр, өөр background color  өгөх  (1 - Хангайн бүс, 2 - Баруун бүс, 3 - Зүүн бүс, 4 - Төвийн бүс, 5 - Улаанбаатар ) Жишээ нь id = aimag-321 ийм байгаа 3 нь бүсийн дугаар, 21 нь аймгийн дугаар юм.

let id = document.getElementsByClassName("aimag")[0].id;
console.log(id[6]);

for(let i = 0; i < list.length; i++){
    if(list[i].id[6] == 1){
        list[i].style.backgroundColor = "#581845";
    }else if(list[i].id[6] == 2){
        list[i].style.backgroundColor = "#900C3f";
    }else if(list[i].id[6] == 3){
        list[i].style.backgroundColor = "#C70039";
    }else if(list[i].id[6] == 4){
        list[i].style.backgroundColor = "#FF5733";
    }else {
        list[i].style.backgroundColor = "#FFC300";
    }
}

