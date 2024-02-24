// Функция извлекает из localStorage Данные
export function getTasksLocalStorage() {
  const taskJSON = localStorage.getItem('tasks')
  return taskJSON ? JSON.parse(taskJSON) : []
}
// Функция записывает в localStorage данные
export function setTasksLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
// Функция генерирует ID для созданных элементов списка ToDo
export function generateId() {
  const times = Date.now()
  const randomPart = Math.floor(Math.random() * 10_000)
  return times + randomPart
}
export function updateListTasks() {
  document.querySelector('.list').textContent = ''
  const todosArray = getTasksLocalStorage()
  renderTasks(todosArray)
}
function renderTasks(tasksArray) {
  if (!tasksArray || !tasksArray.length) return

  tasksArray.forEach((value) => {
    const { id, text } = value   // Деструкторизация 
    const item = `<div class="task" data-task-id="${id}">
    <li class="list__li">
    <strong class="task__text">${text}</strong>
    <div class="list__btns">
    <button class="button list__buttonEdit">Ред</button>
    <button class="button list__buttonDelete">Удалить</button></div>
    </li>
    </div>`
    document.querySelector('.list').insertAdjacentHTML('beforeEnd', item)
  })
}
