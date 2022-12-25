const display1 = document.querySelector('.display-1');
const display2 = document.querySelector('.display-2');
const tempResult = document.querySelector('.result');
const numbers = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const negative = document.querySelector('.negative');

let dis1 = '';
let dis2 = '';
let res = null;
let lastOperator = '';
let haveDot = false;

numbers.forEach((number) => {
    number.addEventListener('click', (e) => {
        
        if(e.target.innerText === '.' && !haveDot){
            haveDot = true;
        }else if(e.target.innerText === '.' && haveDot){    
            return; 
        }

        dis2 += e.target.innerText;
        display2.innerText = dis2;

    });
});

operator.forEach((op) => {
    op.addEventListener('click', (e) => {
        if(!dis2) return;
        haveDot = false;

        const opName = e.target.innerText;

        if(dis1 && dis2 && lastOperator){
            mathOperator();
        }else{
            res = parseFloat(dis2);
        }

        clearVar(opName);
        lastOperator = opName;
        console.log(res);
    });
});

function clearVar(symbol = ""){
    dis1 += dis2 + " " + symbol + " ";
    
    display1.innerText = dis1;
    display2.innerText = "";
    dis2 = "";
    tempResult.innerText = res;
}

function mathOperator(){
    if(lastOperator === "x"){
        res = parseFloat(res) * parseFloat(dis2);
    }else if(lastOperator === "+"){
        res = parseFloat(res) + parseFloat(dis2);
    }else if(lastOperator === "-"){
        res = parseFloat(res) - parseFloat(dis2);
    }else if(lastOperator === "/"){
        res = parseFloat(res) / parseFloat(dis2);
    }else if(lastOperator === "%"){
        res = parseFloat(res) % parseFloat(dis2);
    }
};

equal.addEventListener('click', () => {
    if(!dis1 || !dis2) return;
    haveDot = false;
    mathOperator();
    clearVar();
    display2.innerText = res;
    tempResult.innerText = "";
    dis2 = res;
    dis1 = "";
});

clear.addEventListener("click", () => {
    dis1 = '';
    dis2 = '';
    display1.innerText = '0';
    display2.innerText = '0';
    tempResult.innerText = '';
    res = '';
});

del.addEventListener('click', () => {
    display2.innerText = display2.innerText.toString().slice(0, -1);
});

// negative.addEventListener('click', () => {
//     tempResult.innerHTML = '';
//     if(display2 != ''){
//         display2.innerText = "-" + display2;
//     }
// });

window.addEventListener('keydown', (e) => {
    if(
        e.key === '0' ||
        e.key === '1' ||
        e.key === '2' ||
        e.key === '3' ||
        e.key === '4' ||
        e.key === '5' ||
        e.key === '6' ||
        e.key === '7' ||
        e.key === '8' ||
        e.key === '9' ||
        e.key === '.'
    ){
        clickBtn(e.key);
    }else if(
        e.key === '+' ||
        e.key === '-' ||
        e.key === '/' ||
        e.key === '%'
    ){
        clickOperator(e.key);
    }else if(e.key === '*'){
        clickOperator('x')
    }else if(e.key === 'Enter' || e.key === '='){
        clickEqual();
    }else if(e.key === 'Escape'){
        clickClear();
    }else if(e.key === 'Backspace' || e.key === 'Delete'){
        clickDelete();
    }
});

let clickBtn = (key) => {
    numbers.forEach(btn => {
        if(btn.innerText === key){
            btn.click();
        }
    });
};

let clickOperator = (key) => {
    operator.forEach(op => {
        if(op.innerText === key){
            op.click();
        }
    });
};

let clickEqual = () =>{
    equal.click();
}

let clickClear = () =>{
    clear.click();
}

let clickDelete = () =>{
    del.click();
}