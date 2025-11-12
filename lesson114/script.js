let openButton = document.querySelector('.btn__box button');
let closeButton = document.querySelector('.modal__inner button');
let modalWindow = document.querySelector('.modal__wrapper');
let paragraph = document.querySelector('.modal__inner p');
const firstText = paragraph.textContent;

// ==================================

openButton.addEventListener('click', () => {
  modalWindow.classList.add('modal__wrapper--active');
})

closeButton.addEventListener('click', () => {
  modalWindow.classList.remove('modal__wrapper--active');
})

document.addEventListener('keydown', event => {
  if (event.code === 'Escape') {
  modalWindow.classList.remove('modal__wrapper--active');
  }
})

// ==================================

paragraph.addEventListener('mouseover', function () {
  this.textContent = 'Тот, кто это читает, ты крутой!';
});

paragraph.addEventListener('mouseout', function () {
  this.textContent = firstText;
});