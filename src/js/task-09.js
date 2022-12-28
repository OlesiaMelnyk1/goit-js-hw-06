function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');

btn.addEventListener('click', onButton);

function onButton() {
  body.style.background = getRandomHexColor();
  span.innerHTML = getRandomHexColor();
}