import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popup, form, submitForm) {
    super(popup);
    this._submitForm = submitForm;
    this._form = form;
    this._inputs = Array.from(this._form.querySelectorAll('.popup__input'));
  }

  _getInputValues() {
    const dataInputs = {};
    this._inputs.forEach((input) => {
      const inputName = input.getAttribute('name');
      dataInputs[inputName] = input.value;
    });
    return dataInputs;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
