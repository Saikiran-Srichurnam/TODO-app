document.addEventListener("DOMContentLoaded", () => {

  const inputBox = document.querySelector(".inputBox");
  const addTaskBtn = document.querySelector(".addTask");
  const todosList = document.querySelector(".todosList")
  let inputValue = "";

  const todosArr = JSON.parse(localStorage.getItem('tasks')) || [];


  addTaskBtn.addEventListener("click", () => {
    inputValue = inputBox.value;
    if (inputValue === "") return alert("please enter Task...");

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }

    todosArr.push(newTask)

    // let taskHTML = `<div class="individualTodo flex justify-around items-center h-12 bg-[#F5F5F5] m-2 rounded-xl ">
    //   <i class="fa-regular fa-circle-check text-2xl text-[#EF9B0F] cursor-pointer ml-4"></i>
    //   <p class="todo mx-auto">${inputValue}</p>
    //   <i class="fa-solid fa-pencil mx-4 cursor-pointer"></i>
    //   <i class="fa-regular fa-trash-can text-2xl text-[#FE6F5E] cursor-pointer mr-4"></i>
    // </div>`
    // todosList.insertAdjacentHTML("afterbegin", taskHTML)

    saveItems()
    inputBox.value = ""
  })

  todosArr.forEach(task =>
    console.log(todosArr)
  )

  const saveItems = () => {
    localStorage.setItem('tasks', JSON.stringify(todosArr))
  }

})