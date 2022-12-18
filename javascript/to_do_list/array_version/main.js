const allTask = [];

const addTodo = () => {
  // allTask array ruu ruu text iig nemne.
  let text = inputText.value;
  allTask.push(text);
  renderTodoApp();
};

addBtn.addEventListener("click", addTodo);

const deleteTodo = (index) => {
  console.log("II", index);
  allTask.splice(index, 1);
  renderTodoApp();
};

const renderTodoApp = () => {
  //AllTask array aar delgetsend list haruulna
  tasks.innerHTML = "";
  for (let i = 0; i < allTask.length; i++) {
    const item = `   
                <div class="task">
                    <input type="text" class="text" readonly value="${allTask[i]}" />
                    <div class="actions">
                        <button class="edit"><i class="fas fa-pen"></i></button>
                        <button class="done"><i class="fas fa-check"></i></button>
                        <button class="delete" onclick="deleteTodo(${i})"><i class="fas fa-trash"></i></button>
                    </div>
                </div>`;
    taskList.innerHTML += item;
  }
};