export default class Section {
  constructor({ renderer }, selectorContainer) {
    this._renderer = renderer;
    this._container = selectorContainer;
  }

  setItem(element) {
    this._container.prepend(element);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }
}
