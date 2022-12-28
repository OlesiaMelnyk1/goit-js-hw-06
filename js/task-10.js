function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnCreate = document.querySelector('button[data-create');
const btnDestroy = document.querySelector('button[data-destroy');
const boxes = document.querySelector('#boxes');


btnCreate.addEventListener('click', getBoxesAmount);
btnDestroy.addEventListener('click', destroyBoxes);

function getBoxesAmount() {
  const amount = document.querySelector("#controls input").value;
  createBoxes(amount);
  console.log(amount);
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    const divSize = 30 + i * 10;
    div.style = `width: ${divSize}px; height: ${divSize}px; background-color: ${getRandomHexColor()}`;
    boxes.appendChild(div);
  }
}


function destroyBoxes() {
  boxes.innerHTML = "";
}

