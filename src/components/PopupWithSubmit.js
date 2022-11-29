import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
  constructor(popup, form) {
    super(popup);
    this._form = form;
  }
  
  setSubmit(confirm) {
    this.submitForm = confirm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.submitForm();
    });
  }
}
