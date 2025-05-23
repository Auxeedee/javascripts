const box = document.getElementById('hoverBox');

box.addEventListener('mouseenter', () => {
  box.style.backgroundColor = 'lightblue';
});

box.addEventListener('mouseleave', () => {
  box.style.backgroundColor = 'lightgray';
});
