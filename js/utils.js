// Функция извлекает из localStorage Данные
export function getTasksLocalStorage() {
  const taskJSON = localStorage.getItem('tasks')
  return taskJSON ? JSON.parse(taskJSON) : []
}
// Функция записывает в localStorage данные
export function setTasksLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
Функция генерирует ID для созданных элементов списка ToDo
export function generateId() {
  const times = Date.now()
  const randomPart = Math.floor(Math.random() * 10_000)
  return times
}
// Функция обновляет содержимое списка удаляет и перерендерит из localStorage
export function updateListTasks() {
  document.querySelector('.list').textContent = ''
  const todosArray = getTasksLocalStorage()
  renderTasks(todosArray)
}
function renderTasks(tasksArray) {
  // Если массива нет или длинна массива 0 то не рендерим. Потому что нечего!!
  if (!tasksArray || !tasksArray.length) return
// Пробегаемся циклом по обьектам массива и вставляем их в список.
  tasksArray.forEach((value) => {
    const { id, text } = value   // Деструкторизация 
    const item = `<div class="task" data-task-id="${id}">
    <li class="list__li">
    <p class="task__text">${text}</p>
    <div class="list__btns">
    <button class="button list__buttonEdit">Ред</button>
    <button class="button list__buttonDelete">Удалить</button></div>
    </li>
    </div>`
    document.querySelector('.list').insertAdjacentHTML('beforeEnd', item)
  })
}
