function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
  createButton.addEventListener('click', () => {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      input.value = '';
    } 
  });  
 destroyButton.addEventListener('click', () => {
    destroyBoxes();
  });
    function createBoxes(amount) {
    let boxesHTML = '';
    for (let index = 0; index < amount; index++) {
      const boxColor = getRandomHexColor();
      const boxStyle = `width: ${30 + index * 10}px; height: ${30 + index * 10}px; background-color: ${boxColor};`;
      boxesHTML += `<div class="box" style="${boxStyle}"></div>`;
    }
    boxesContainer.innerHTML = boxesHTML;
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }