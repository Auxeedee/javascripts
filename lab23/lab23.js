const list = document.getElementById('myList');

list.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    event.target.remove();
  }
});
