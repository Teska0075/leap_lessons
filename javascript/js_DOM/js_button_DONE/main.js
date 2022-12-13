const colors = ['red', 'green', 'blue'];
let colorIndex = 0;

const body = document.getElementsByTagName("body")[0];

const myBtn = document.getElementsByClassName("myBtn");

const box = document.getElementsByClassName("box");


const change = () => {
    for(let i=0; i < box.length; i++){
        let color = colorPicker();
        box[i].style.backgroundColor = color;
    }
}

const colorPicker = () => {
    let r = Math.floor(Math.random() * (255-0)).toString(16);
    let g = Math.floor(Math.random() * (255-0)).toString(16);
    let b = Math.floor(Math.random() * (255-0)).toString(16);
    
    return `#${r}${g}${b}`
}

// const btnClone = () => {
//     for(let i=0; i < 3; i++){
//         myBtn[i].addEventListener("click", change);        
//     }
// }


for(let i=0; i < 3; i++){
    myBtn[i].addEventListener("click", change);        
}



// const cloneBtn = ()

// const node = document.getElementById("myBtn");
// const clone = node.cloneNode(true);
// document.getElementsByClassName("btns")[0].appendChild(clone);


// myBtn[0].addEventListener("click", change);
// myBtn[1].addEventListener("click", change);
// myBtn[2].addEventListener("click", change);

// myBtn.addEventListener("click", changeBtn);








// const change = () => {
//     // if(colorIndex >= 3){
//     //     colorIndex = 0;
//     // }
//     let r = Math.floor(Math.random() * (255-0)).toString(16);
//     let g = Math.floor(Math.random() * (255-0)).toString(16);
//     let b = Math.floor(Math.random() * (255-0)).toString(16);

//     // console.log(r);
//     // console.log(g);
//     // console.log(b);

//     body.style.backgroundColor = `#${r}${g}${b}`;
    
//     // body.style.backgroundColor = colors[colorIndex];
//     // colorIndex++;
// }



// const changeBtn = () => {
//     // if(colorIndex >= 3){
//     //     colorIndex = 0;
//     // }
//     let r = Math.floor(Math.random() * (255-0)).toString(16);
//     let g = Math.floor(Math.random() * (255-0)).toString(16);
//     let b = Math.floor(Math.random() * (255-0)).toString(16);

//     // console.log(r);
//     // console.log(g);
//     // console.log(b);

//     const myBtn = document.getElementById("myBtn");


//     myBtn.style.backgroundColor = `#${r}${g}${b}`;
//     // body.style.backgroundColor = colors[colorIndex];
//     // colorIndex++;
// }