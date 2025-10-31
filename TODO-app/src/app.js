document.addEventListener("DOMContentLoaded", () => {

  const inputBox = document.querySelector(".inputBox");
  const addTaskBtn = document.querySelector(".addTask");
  let todosList = document.querySelector(".todosList")
  let inputValue = "";

  const todosArr = JSON.parse(localStorage.getItem('tasks')) || [];

  // AddBtn functionality starts here
  addTaskBtn.addEventListener("click", () => {
    inputValue = inputBox.value;
    if (inputValue === "") return alert("please enter Task...");

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }
    todosArr.push(newTask)
    saveItems()
    renderTasks(newTask)
    inputBox.value = ""
  })
  inputBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTaskBtn.click()
  });
  // AddBtn functionality ends here

  // rendering the tasks as lists below the inputbox and button 
  function renderTasks(task) {
    const individualTodo = document.createElement('li');
    individualTodo.setAttribute("dataId", task.id);
    individualTodo.innerHTML = `<div class="individualTodo flex justify-around items-center h-12 bg-[#F5F5F5] m-2 rounded-xl ">
      <i class="fa-regular fa-circle-check text-2xl text-[#EF9B0F] cursor-pointer ml-4 checkBtn"></i>
      <p class='todo mx-auto ${task.completed ? "completed" : ""}'>${task.text}</p>
      <i class="fa-solid fa-pencil mx-4 cursor-pointer editBtn"></i>
      <i class="fa-regular fa-trash-can text-2xl text-[#FE6F5E] cursor-pointer mr-4 deleteBtn"></i>
    </div>`
    todosList.appendChild(individualTodo)
    console.log(task);
  }

  todosList.addEventListener("click", (e) => {
    if (e.target.classList.contains("checkBtn")) {
      // get parent li element
      const parentTodo = e.target.closest("li");
      const clickedId = Number(parentTodo.getAttribute("dataId"));

      // finding the matching todo object in the array
      const matchingTodo = todosArr.find(todo => todo.id === clickedId)

      if (matchingTodo) {
        matchingTodo.completed = !matchingTodo.completed
      }

      const textData = parentTodo.querySelector(".todo")
      textData.classList.toggle("completed")
      console.log(clickedId)
      console.log(matchingTodo)
    }
    saveItems()
  })

  todosArr.forEach(task => renderTasks(task))

  function saveItems() {
    localStorage.setItem('tasks', JSON.stringify(todosArr))
  }

})