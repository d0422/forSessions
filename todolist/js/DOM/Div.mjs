import DOM from './DOM.mjs';

export default class Div extends DOM {
  constructor(inputText, className) {
    super('div', inputText);

    if (className) this.node.classList.add(className);
  }
}
