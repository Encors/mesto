import { captionPhoto, photo, popupPhoto } from './variables.js';

export class Card {
  constructor(data, templateSelector, openPhotoPopup) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPhotoPopup = openPhotoPopup;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.cloneNode(true);
    return cardElement;
  }

  getCardElement() {
    //получили шаблон
    this._cardElement = this._getTemplate();
    //объявили переменные
    this._cardPhoto = this._cardElement.querySelector('.photo-card__photo');
    this._likeBtn = this._cardElement.querySelector('.photo-card__like-btn');
    this._removeBtn = this._cardElement.querySelector('.photo-card__remove-btn');
    //присвоили данные
    this._cardElement.querySelector('.photo-card__title').textContent = this._name;
    this._cardPhoto.src = this._link;
    this._cardPhoto.alt = `Изображение ${this._name}`;
    //навесили слушатели
    this._setEventListeners();
    //возвращаем карточку
    return this._cardElement;
  }

  _handleLike() {
    this._likeBtn.classList.toggle('photo-card__like-btn_active');
  }

  _removeCard() {
    this._removeBtn.closest('.photo-card').remove();
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => {
      this._handleLike();
    });
    this._removeBtn.addEventListener('click', () => {
      this._removeCard();
    });
    this._cardPhoto.addEventListener('click', () => {
      this._openPhotoPopup(this._name, this._link);
    });
  }
}
