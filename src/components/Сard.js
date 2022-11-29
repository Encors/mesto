export default class Card {
  constructor({ cardInfo, user, handleCardClick, handleLikeClick, handleDeleteIconClick, handleDeleteLike }, templateSelector) {
    this._cardInfo = cardInfo;
    this._cardId = cardInfo._id;
    this._userId = user._id;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleLikeClick = handleLikeClick;
    this._handleDeleteIconClick = handleDeleteIconClick;
    this._handleDeleteLike = handleDeleteLike;
  }

  _getTemplate() {
    const cardElement = document.querySelector(this._templateSelector).content.querySelector('.photo-card').cloneNode(true);
    return cardElement;
  }

  getCardElement() {
    //получили шаблон
    this._cardElement = this._getTemplate();
    //объявили переменные
    this._cardPhoto = this._cardElement.querySelector('.photo-card__photo');
    this._likeBtn = this._cardElement.querySelector('.photo-card__like-btn');
    this._removeBtn = this._cardElement.querySelector('.photo-card__remove-btn');
    this._likesCount = this._cardElement.querySelector('.photo-card__like-count');
    //присвоили данные
    this._cardElement.querySelector('.photo-card__title').textContent = this._cardInfo.name;
    this._cardPhoto.src = this._cardInfo.link;
    this._cardPhoto.alt = `Изображение ${this._cardInfo.name}`;

    this.setLikesCounter();
    this.isOwner();
    this._setEventListeners();

    this._cardInfo.likes.forEach((like) => {
      if (like._id == this._userId) {
        this._likeBtn.classList.add('photo-card__like-btn_active');
      }
    });

    //возвращаем карточку
    return this._cardElement;
  }

  handleLike(newCardInfo) {
    this._likeBtn.classList.toggle('photo-card__like-btn_active');
    this._cardInfo.likes = newCardInfo.likes;
    this.setLikesCounter();
  }

  setLikesCounter() {
    this._likesCount.textContent = this._cardInfo.likes.length;
  }

  isOwner() {
    if (this._cardInfo.owner._id !== this._userId) {
      this._removeBtn.remove();
    }
  }

  removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _setEventListeners() {
    this._likeBtn.addEventListener('click', () => {
      if (this._likeBtn.classList.contains('photo-card__like-btn_active')) {
        this._handleDeleteLike(this._cardId);
      } else {
        this._handleLikeClick(this._cardId);
      }
    });
    this._removeBtn.addEventListener('click', () => {
      this._handleDeleteIconClick(this._cardId);
    });
    this._cardPhoto.addEventListener('click', () => {
      this._handleCardClick(this._cardInfo.name, this._cardInfo.link);
    });
  }
}
