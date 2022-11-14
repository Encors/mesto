import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._photo = this._popup.querySelector('.popup__photo');
    this._captionPhoto = this._popup.querySelector('.popup__caption');
  }

  open(name, link) {
    this._photo.src = link;
    this._captionPhoto.textContent = name;
    this._photo.alt = `Изображение ${name}`;
    super.open();
  }
}
