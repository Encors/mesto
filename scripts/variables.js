export const popups = document.querySelectorAll('.popup');
export const popupPhoto = document.querySelector('.popup_type_photo');
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const popupAddCard = document.querySelector('.popup_type_add-card');
//profile
export const profilePopup = document.querySelector('.profile__edit-btn');
export const profileName = document.querySelector('.profile__title');
export const profileJob = document.querySelector('.profile__job');
export const cardPopup = document.querySelector('.profile__add-btn');
//photo-card
export const gallery = document.querySelector('.gallery');
//popup-elements
export const closeButtons = document.querySelectorAll('.popup__close-btn');
export const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
export const jobInput = popupEditProfile.querySelector('.popup__input_type_job');
export const placeName = popupAddCard.querySelector('.popup__input_type_place-name');
export const imgLink = popupAddCard.querySelector('.popup__input_type_img-link');
export const photo = popupPhoto.querySelector('.popup__photo');
export const captionPhoto = popupPhoto.querySelector('.popup__caption');
//form
export const formProfile = document.forms.profile;
export const formCard = document.forms.card;
export const newCardSubmitButton = formCard.querySelector('.popup__submit-btn');
export const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
};