let numbers = document.querySelector(".number");
let symbol = document.querySelector(".symbol");

let firstValue = "";
let isFirst = false;
let secondValue = "";
let isSecond = false;
let sign = "";
let resValue = 0;

for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if(isFirst === false){
            getFisrtValue(atr);
        }
    })
}