const box = document.getElementById('colorBox');

box.addEventListener('click', () => {
  // Змінюємо фон елемента на випадковий колір
  box.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
