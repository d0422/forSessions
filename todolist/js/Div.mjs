import DOM from './DOM.mjs';

export default class Div extends DOM {
  constructor(inputText) {
    super('div', inputText);
    document.body.appendChild(this.node);
  }
}
