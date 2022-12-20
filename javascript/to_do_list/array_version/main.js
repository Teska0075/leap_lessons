const addBtn = document.getElementById("add");
const taskList = document.getElementById("tasks");
const inputText = document.getElementById("to-do-input");

const selectItem = document.getElementById("priority");

const edit = (e)=>{
    let a = e.parentNode.parentNode.children[0];
    let b = e.firstChild.classList;
    let i = Number(e.parentNode.children[2].attributes[1].value[11])
    allTask[i] = a.value

    if(a.hasAttribute("readonly")){
        b.remove("fa-pen");
        b.add("fa-plus");
        a.removeAttribute("readonly")
    } else {
        b.remove("fa-plus");
        b.add("fa-pen")
        a.setAttribute("readonly", true)
    }
    
}

document.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    taskAdd();
  }
});

// Array - Todo list version
const allTask = [
  { name: "JS", status: true, priority: "high" },
  { name: "HTML", status: false, priority: "low" },
  { name: "CSS", status: false, priority: "medium" },
];

const renderTodoApp = () => {
  //AllTask array aar delgetsend list haruulna
  tasks.innerHTML = "";
  for (let i = 0; i < allTask.length; i++) {
    console.log();
    const done = allTask[i].status ? "strikethrough" : "";
    const item = `   
                <div class="task ${allTask[i].priority}">
                    <input type="text" class="text ${done}" readonly value="${allTask[i].name}" />
                    <div class="actions">
                        <button class="edit" onclick="edit(this)"><i class="fas fa-pen"></i></button>
                        <button class="done" onclick="done(${i})"><i class="fas fa-check"></i></button>
                        <button class="delete" onclick="deleteTodo(${i})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
    taskList.innerHTML += item;
  }
};

const addTodo = () => {
  // allTask array ruu ruu text iig nemne.
  let text = inputText.value;
  let pr = selectItem.value;
  const newTask = {
    name: text,
    status: false,
    priority: pr,
  };
  allTask.push(newTask);
  renderTodoApp();
};

const deleteTodo = (index) => {
  console.log("II", index);
  allTask.splice(index, 1);
  renderTodoApp();
};

const done = (index) => {
  allTask[index].status = !allTask[index].status;
  renderTodoApp();
};

function changed() {
  console.log(priority.value);
}

addBtn.addEventListener("click", addTodo);
priority.addEventListener("change", changed);

renderTodoApp();