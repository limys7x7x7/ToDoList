import {
  getTasksLocalStorage,
  setTasksLocalStorage,
  generateId,
  updateListTasks,
} from './utils.js'

const form = document.querySelector('.form')
const input = document.querySelector('.form__input')
const list = document.querySelector('.list')
const editForm = document.querySelector('.modal')
const modalInput = document.querySelector('.modal__input')
const btnSaveModal = document.querySelector('.modal__button')
// Переменная с id редактируемой задачи.
let currentEditedTodo = null
let currentTask = null

// Отображение задачь при первой загрузку страницы
updateListTasks()

// Событие Добавление в Список ToDo
form.addEventListener('submit', addTodo)
// Событие на кнопки Редактировать и Удалить
list.addEventListener('click', (e) => {
  const taskElements = e.target.closest('.list__btns')
  if (!taskElements) return
  if (e.target.closest('.list__buttonDelete')) {
    deleteTodo(e)
  } else if (e.target.closest('.list__buttonEdit')) {
    editTodo(e)
  }
})
// Событие вызова модального окна для редактирования!
// editForm.addEventListener('submit', saveTodo)
// Событие нажатия на кнопку Сохранить в Модальном окне
btnSaveModal.addEventListener('click', saveTodo)

// Добавление Задачи в список ToDo
function addTodo(e) {
  e.preventDefault()
  const text = input.value
  if (!text) return
  const todosArray = getTasksLocalStorage()
  todosArray.push({
    id: generateId(),
    text,
  })
  setTasksLocalStorage(todosArray)
  updateListTasks()
  form.reset()
}

// Редактирование в Модальном окне!
function editTodo(e) {
  editForm.style.display = 'block'
  currentTask = e.target.closest('.task') // Задача которую редактируем в переменную помещаем
  const textElem = currentTask.querySelector('.task__text') // Элемент strong
  currentEditedTodo = Number(currentTask.dataset.taskId) // id этой задачи
  modalInput.value = textElem.textContent // Текст из strong в input
  return modalInput.value
}
function saveTodo(e) {
  const task = currentTask // Задача которую редактируем в переменную помещаем
  const id = currentEditedTodo // id этой задачи
  const taskArray = getTasksLocalStorage()
  const textElem = currentTask.querySelector('.task__text') // Элемент strong
  // Сверяем задачу по id с редактируемой и присваиваем переменной
  const index = taskArray.findIndex((task) => task.id === id)
  // Если true  то меняем текст на текст из input
  if (taskArray[index]) {
    taskArray[index].text = modalInput.value
  }
  editForm.style.display = 'none'
  currentEditedTodo = null
  currentTask = null
  setTasksLocalStorage(taskArray)
  updateListTasks()
}
// Удаление из списка ToDo
function deleteTodo(e) {
  const task = e.target.closest('.task')
  const id = Number(task.dataset.taskId)
  const todosArray = getTasksLocalStorage()
  const newTodosArray = todosArray.filter((task) => task.id !== id)
  setTasksLocalStorage(newTodosArray)
  updateListTasks()
}

