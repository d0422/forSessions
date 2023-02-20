import Div from './Div.mjs';
const input = document.querySelector('input');
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    new Div(input.value);
    input.value = '';
  }
});
