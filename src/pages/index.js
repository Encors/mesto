import './index.css'
import { Card } from '../components/Сard.js';
import * as constants from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';

//включаем валидацию
const formValidators = {};
const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((form) => {
    const validator = new FormValidator(form, settings);
    const formName = form.getAttribute('name');
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
enableValidation(constants.settings);

// Инициализация карточек при загрузке страницы
const defaultCards = new Section(
  {
    items: constants.initialCards,
    renderer: (item) => {
      const card = new Card(item, '#photo-card', handleCardClick);
      const cardElement = card.getCardElement();
      defaultCards.setItem(cardElement);
    },
  },
  constants.gallery
);

defaultCards.renderItems();

//Экземпляр попапа редактирования профиля
const popupProfile = new PopupWithForm(constants.popupEditProfile, constants.formProfile, submitEditProfileForm);
const userInfo = new UserInfo(constants.userInfo);

constants.profileEditButton.addEventListener('click', () => {
  const userData = userInfo.getUserInfo();
  constants.nameInput.value = userData.profileName;
  constants.jobInput.value = userData.profileJob;
  formValidators['profile'].resetValidation();
  popupProfile.open();
});
popupProfile.setEventListeners();

// Изменить информацию профиля
function submitEditProfileForm(inputValues) {
  userInfo.setUserInfo(inputValues.nameProfile, inputValues.jobProfile);
  popupProfile.close();
}

//Экземпляр попапа с открытой картинкой
const popupPhoto = new PopupWithImage(constants.popupPhoto);
popupPhoto.setEventListeners();

// Открываем попап с зум-фото
function handleCardClick(name, link) {
  popupPhoto.open(name, link);
}

//Экземпляр попапа добавления карточки
const popupAppendCard = new PopupWithForm(constants.popupAddCard, constants.formCard, sendCardForm);

constants.buttonAddCard.addEventListener('click', () => {
  formValidators['card'].resetValidation();
  popupAppendCard.open();
});

popupAppendCard.setEventListeners();

// Создаём карточку
function createCard(item) {
  const card = new Card(item, '#photo-card', handleCardClick);
  const cardElement = card.getCardElement();
  return cardElement;
}
//Добавляем карточку в галерею через форму
function sendCardForm(inputValues) {
  const formValue = {
    name: inputValues.nameCard,
    link: inputValues.linkCard,
  };
  defaultCards.setItem(createCard(formValue));
  popupAppendCard.close();
}
