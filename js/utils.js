export function getTasksLocalStorage() {
  const taskJSON = localStorage.getItem('tasks')
  return taskJSON ? JSON.parse(taskJSON) : []
}

export function setTasksLocalStorage(tasks) {
localStorage.setItem('tasks', JSON.stringify(tasks))
}

export function generateId() {
  const times = Date.now()
  const randomPart = Math.floor(Math.random() * 10_000)
  return times + randomPart
}

export function updateListTasks() {
  document.querySelector('.list').textContent = ''
  const todos = getTasksLocalStorage()
  renderTasks(todos)

}













// для сохранения в строке РАБОТАЕТ
// #######################################################

// function changeHandler() {
//   if(this.type !== 'checkbox') {
//     localStorage.setItem(this.name, this.value)
//     // console.log(this.name, this.value);
//   }
// }
// function checkStorage() {
// if(input.type !== 'submit') {
//   if(input.type === 'checked') {
// input.checked = localStorage.getItem(input.name)
//   }
//   else {input.value = localStorage.getItem(input.name)
//   }
// }
// attachEvents()
// }
// function attachEvents() {
//   input.addEventListener('change', changeHandler)
// }
// checkStorage()