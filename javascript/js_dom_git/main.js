// date

let todayDate = new Date().toISOString().slice(0, 10);
console.log(todayDate);

document.getElementById("date_span").innerHTML = todayDate

// task input
// let listsToDo = document.getElementById('todolist');

const addBtn = document.getElementsByTagName("button")[0];
const inputText = document.getElementById("task_top");
const taskList = document.getElementById("bottom_sec");

const cardItem = (text) => {
    const item = `
        <div id='todolist' class="d-flex form-control rounded-2 mt-2">
            
            <input class="task_bot form-control border-0 " type="text" name="task" id="task_bot" placeholder="test" value="${text}" readonly>

            <button onclick="edit(this)" class="btn"><i class="fa-solid fa-pen"></i></button>

            <button onclick="checked()" class="btn"><i class="fa-solid fa-check"></i></button>

            <button onclick="ustgah(this)" class="btn"><i class="fa-solid fa-trash"></i></button>

        </div>`;

    return item;
}

const addTask = () => {
    let text = inputText.value;
    if(text === ''){
        alert('Input must include something!');
    }else{
        taskList.innerHTML += cardItem(text);
    }
}

addBtn.addEventListener("click", addTask);

document.addEventListener('keyup', (e) => {
    if(e.key === 'Enter'){
        addTask();
    }
})

// configuration buttons

let editBtn = document.getElementsByTagName("button")[1];
const checkBtn = document.getElementsByTagName("button")[2];
const delBtn = document.getElementsByTagName("button")[3];

let ustgah = (e) => {
    console.log(e.parentNode.parentNode);

    const parent = e.parentNode.parentNode;
    const child = e.parentNode;

    parent.removeChild(child);
}

let checked = () => {
    document.querySelector("#task_bot").style.textDecoration = "line-through";
}


let edit = (e) =>{
    var editValue = prompt('edit the select item', e.parentNode.value);
    e.parentNode.value = editValue;
    console.log(editValue);
    console.log(e.parentNode);
    
    
    
    // let parent = e.parentNode.parentNode;
    // let edit = parent.querySelector("input");
    // console.log(edit);
    // edit.removeAttribute("readonly");



    // let input = document.querySelector(".task_bot");
    // const inputValue = input.value
    // console.log(inputValue);
    // input.removeAttribute("readonly");
    
    // let removeBtn = document.getElementsByTagName("button")[1];
    // console.log(removeBtn);
    // editBtn.remove();
    
    // document.getElementsByTagName("button")[1].remove();

    // let icon = document.getElementsByTagName("i")[0];
    // icon.classList.toggle("fa-floppy-disk");
}




    // input.setAttribute("readonly")

    // x.classList.toggle("fa-thumbs-down");

const saveBtn = `<button onclick="save()" class="btn"><i class="fa-solid fa-floppy-disk"></i></button>`;
// let save = (e) =>{
//     let input = document.querySelector("#task_bot");
//     input.append(saveBtn);
// }
















// function transfer(){
//     let toDoList = document.querySelector("#task_top").value;
//     let taskDiv = document.createElement("div");
    // let items = `<div id='todolist' class="d-flex form-control rounded-0 mt-2">
    // <input class="form-control border-0 " type="text" name="task" id="task_bot" placeholder="test" value="" readonly>
    // <button class="btn"><i class="fa-solid fa-pen"></i></button>
    // <button class="btn"><i class="fa-solid fa-check"></i></button>
    // <button class="btn"><i class="fa-solid fa-trash"></i></button>
    // </div>`;

//     taskDiv.innerHTML=items;
//     listsToDo.appendChild(taskDiv);
//     taskDiv.getElementsByTagName("input")[0].value = toDoList;
    
    
    
// }

// addBtn.addEventListener("click",transfer);


// let taskInput = document.getElementById("task_top").innerText;
// let taskBot = document.getElementById("task_bottom");
// taskBot.value = taskInput;