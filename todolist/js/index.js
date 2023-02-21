import Todo from './Todo.mjs';
const input = document.querySelector('input');

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    new Todo(input.value);
    input.value = '';
  }
});
