import Popup from './Popup.js';

export default class PopupWithConfirmation extends Popup {
  constructor(popup, form) {
    super(popup);
    this._form = form;
  }
  
  setSubmit(confirmation) {
    this.submitForm = confirmation;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.submitForm();
    });
  }
}
