import './index.css';
import Card from '../components/Сard.js';
import * as constants from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api';

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: '50abc53f-8d3e-448b-b494-88b8f2ced152',
    'Content-Type': 'application/json',
  },
});

// Инициализация карточек при загрузке страницы
api
  .getInitialCards()
  .then((result) => {
    console.log(result);
    defaultCards.renderItems(result);
  })
  .catch((error) => {
    console.log(error);
  });

const defaultCards = new Section(
  {
    renderer: (item) => {
      const card = new Card(item, '#photo-card', handleCardClick);
      const cardElement = card.getCardElement();
      defaultCards.setItem(cardElement);
    },
  },
  constants.gallery
);

// Получить и изменить информацию профиля
api
  .getProfileInfo()
  .then((result) => {
    const userInfo = new UserInfo(constants.userInfo);
    userInfo.setUserInfo(result.name, result.about);
    constants.nameInput.value = result.name;
    constants.jobInput.value = result.about;
  })
  .catch((error) => {
    console.log(error);
  });

function submitEditProfileForm(inputValues) {
  api.setProfileInfo(inputValues.nameProfile, inputValues.jobProfile);
  popupProfile.close();
}

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

//Экземпляр попапа редактирования профиля
const popupProfile = new PopupWithForm(constants.popupEditProfile, constants.formProfile, submitEditProfileForm);

constants.profileEditButton.addEventListener('click', () => {
  formValidators['profile'].resetValidation();
  popupProfile.open();
});
popupProfile.setEventListeners();

//Экземпляр попапа с открытой картинкой
const popupPhoto = new PopupWithImage(constants.popupPhoto);
popupPhoto.setEventListeners();

//Экземпляр попапа добавления карточки
const popupAppendCard = new PopupWithForm(constants.popupAddCard, constants.formCard, sendCardForm);

constants.buttonAddCard.addEventListener('click', () => {
  formValidators['card'].resetValidation();
  popupAppendCard.open();
});

popupAppendCard.setEventListeners();

// Создаём карточку
function createCard(item) {
  const card = new Card(
    {
      data: {},
      handleCardClick: (name, link) => {
        popupPhoto.open(name, link);
      },
      handleLikeClick: (card) => {
        constants.likesCount.textContent = card.likes.length;
      },
      handleDeleteIconClick: (card) => {
        card.removeCard()
      },
    },
    '#photo-card',
    handleCardClick
  );
  const cardElement = card.getCardElement();
  return cardElement;
}

//Добавляем карточку в галерею через форму
function sendCardForm(inputValues) {
  api
    .addNewCard(inputValues)
    .then((data) => {
      defaultCards.setItem(createCard(data));
      popupAppendCard.close();
    })
    .catch((error) => {
      console.log(error);
    });
}
