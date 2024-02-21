let form = document.querySelector('.form')
let input = document.querySelector('.form__input')
let ul = document.querySelector('.list__ul')
let button = document.querySelector('.form__button')
let modal = document.querySelector('.modal')
let modalInput = document.querySelector('.modal__input')

let li
let btnCreate
let btnDelete

button.onclick = submit

function submit(event) {
  event.preventDefault()
  if (input.value.length < 1) {
    return false
  }
  li = document.createElement('li')
  li.className = 'list__li'
  li.innerHTML = `<strong class="item">${input.value}</strong>`
  ul.appendChild(li)
  input.value = ''

  // Создаем 2 кнопки
  btnCreate = document.createElement('button')
  btnDelete = document.createElement('button')
  // Задаем id и название Кнопок
  btnCreate.className = 'button list__buttonCreate'
  btnCreate.type = 'submit'
  btnCreate.innerHTML = 'Редактировать'
  btnDelete.className = 'button list__buttonDelete'
  btnDelete.type = 'submit'
  btnDelete.innerHTML = 'Удалить'
  li.appendChild(btnCreate)
  li.appendChild(btnDelete)

  // Кнопка редактирования задачи
  let item = document.querySelector('.item')
  btnCreate.onclick = createBtn
  function createBtn() {
    modal.style.display = 'block'
    modalInput.value = item.textContent
  }

  // Кнопка Сохранить редактирование задачи
  let btnSave = document.querySelector('.modal__button')
  btnSave.onclick = saveModal
  function saveModal() {
    modal.style.display = 'none'
    item.textContent = modalInput.value
  }

  // Кнопка удаления задачи
  btnDelete.onclick = deleteBtn
  function deleteBtn() {
    li.remove()
  }

  // changeSaved()
}

// для сохранения Задач localStorage НЕ РАБОТАЕТ
// #######################################################

// function changeSaved(){
//   console.log(this.value);
//   localStorage.setItem('input', li.innerHTML)
//   return changeSaved
// }

// function cheskStorage() {
// let saved = localStorage.getItem('input')
// if(saved) {
// li.innerHTML = saved
// }
// }
// cheskStorage()

// для сохранения в строке РАБОТАЕТ
// #######################################################

// function changeHandler() {
//   if(this.type !== 'checkbox') {
//     localStorage.setItem(this.name, this.value)
//     console.log(this.name, this.value);
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
