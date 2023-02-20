export default class DOM {
  constructor(tagType, inputText) {
    this.node = document.createElement(tagType);
    this.node.innerText = inputText;
  }
}
