// date

let todayDate = new Date().toISOString().slice(0, 10);
console.log(todayDate);

document.getElementById("date_span").innerHTML = todayDate

// tasks left


// task input

const addBtn = document.getElementsByTagName("button")[0];
const inputText = document.getElementById("task_top");
const taskList = document.getElementById("bottom_sec");

const inputValue = document.getElementById("task_top").value;
const priority = document.getElementById("priority");

const allTask = [
    {name: "${input}", status: false, priority: "high"},
    {name:"HTML", status: false, priority: "medium"}    
]

let count = 0;
const cardItem = (text) => {
    const item = `
        <div id='todolist' class="d-flex form-control rounded-2 mt-2">
            
            <input class="task_bot form-control border-0 " type="text" name="task" id="task_bot" placeholder="test" value="${text}" readonly>
            <div class="actions d-flex">
                <button onclick="edit(this)" class="btn"><i class="fa-solid fa-pen"></i></button>

                <button onclick="checked(this)" class="btn"><i class="fa-solid fa-check"></i></button>

                <button onclick="ustgah(this)" class="btn"><i class="fa-solid fa-trash"></i></button>
            </div>

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

    // const done = allTask[i].status ? "done" : "";
    
    if(allTask[i].status === true){
        input.style.textDecoration = "line-through";
    }else{

    }

    task = document.getElementById("tasks_left");
    console.log(task);
    count ++;
    task.innerHTML = `${count} tasks left`;


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

    const parent = e.parentNode.parentNode.parentNode;
    const child = e.parentNode.parentNode;

    parent.removeChild(child);

    task = document.getElementById("tasks_left");
    console.log(task);
    count --;
    task.innerHTML = `${count} tasks left`;
}

let checked = (e) => {
    let input = e.parentNode.parentNode.children[0]; // selecting input

    input.style.textDecoration = "line-through";
}


let edit = (e) =>{
    let input = e.parentNode.parentNode.children[0]; // selecting input
    console.log(input.value);
    input.setAttribute("value", input.value)
    
    // let icon1 = e.parentNode.children[0]; // selecting button tag
    // console.log(icon1);

    let icon2 = e.children[0]; // selecting icon tag inside of button
    console.log(icon2);

    if(icon2.classList.contains("fa-pen")){
        icon2.classList.remove("fa-pen");
        icon2.classList.add("fa-floppy-disk");
        input.removeAttribute("readonly");
    }else{
        icon2.classList.remove("fa-floppy-disk");
        icon2.classList.add("fa-pen");
        input.getAttribute("readonly");
    }
}