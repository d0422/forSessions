import Button from './DOM/Button.mjs';
import Div from './DOM/Div.mjs';

export default class Todo {
  constructor(inputTodo) {
    this.line = new Div('', 'flex').node;
    const button = new Button('x');
    button.addEvent('click', () => {
      document.body.removeChild(this.line);
    });

    const innerDiv = new Div(inputTodo);
    this.line.appendChild(innerDiv.node);
    this.line.appendChild(button.node);
    document.body.appendChild(this.line);
  }
}
