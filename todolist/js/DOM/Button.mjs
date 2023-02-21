import DOM from './DOM.mjs';

export default class Button extends DOM {
  constructor(inputText) {
    super('button', inputText);
  }
  addEvent(eventType, callbackFunction) {
    this.node.addEventListener(eventType, callbackFunction);
  }
}
