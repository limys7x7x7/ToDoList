import 
{
  getTasksLocalStorage,
  setTasksLocalStorage,
  generateId,
} 
from './utils.js'

const form = document.querySelector('.form')
const input = document.querySelector('.form__input')
const list = document.querySelector('.list')
const editForm = document.querySelector('.modal')
const modalInput = document.querySelector('.modal__input')
const btnSaveModal = document.querySelector('.modal__button')

const todos = getTasksLocalStorage()
todos.push({
  id: generateId(),
  // text
})
setTasksLocalStorage(todos)

let currentEditedTodo = null

function saveTodo(e) {}

function editTodo(e) {}

function deleteTodo(e) {}

function addTodo(e) {
  e.preventDefault()
  let tasks = input.value
  if (!tasks) return
  const li =
    `<li class='list__li'>` +
    `<strong>${tasks}
    </strong>` +
    `<button class='button list__buttonEdit'>Ред</button>` +
    `<button class='button list__buttonDelete'>Удалить</button>` +
    `</li>`
  list.innerHTML += li
  input.value = ''
  console.log(e.target);
}

form.addEventListener('submit', addTodo)

editForm.addEventListener('submit', saveTodo)
