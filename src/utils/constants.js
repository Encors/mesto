export const popupPhoto = document.querySelector('.popup_type_photo');
export const popupEditProfile = document.querySelector('.popup_type_edit-profile');
export const popupAddCard = document.querySelector('.popup_type_add-card');
export const profileEditButton = document.querySelector('.profile__edit-btn');
export const buttonAddCard = document.querySelector('.profile__add-btn');
export const gallery = document.querySelector('.gallery');
export const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
export const jobInput = popupEditProfile.querySelector('.popup__input_type_job');
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
export const confirmPopup = document.querySelector('.popup_type_confirm');
export const confirmForm = document.forms.confirm;
