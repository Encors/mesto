import { Card } from '../components/Сard.js';
import * as constants from '../utils/constants.js';
import { FormValidator } from '../components/FormValidator.js';

//Открыть попап
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOnEscape);
};

constants.profilePopup.addEventListener('click', () => {
  formValidators['profile'].resetValidation();
  constants.nameInput.value = constants.profileName.textContent;
  constants.jobInput.value = constants.profileJob.textContent;
  openPopup(constants.popupEditProfile);
});

constants.cardPopup.addEventListener('click', () => {
  formValidators['card'].resetValidation();
  openPopup(constants.popupAddCard);
});

//Закрыть попап
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEscape);
};

constants.closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//закрываем по esc
function closeOnEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

//закрываем по клику на оверлей
constants.popups.forEach((overlay) => {
  overlay.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(overlay);
    }
  });
});

//Изменить информацию профиля
function submitEditProfileForm(evt) {
  evt.preventDefault();
  constants.profileName.textContent = constants.nameInput.value;
  constants.profileJob.textContent = constants.jobInput.value;
  closePopup(constants.popupEditProfile);
}

constants.formProfile.addEventListener('submit', submitEditProfileForm);

//Добавляем карточку в галерею через форму
function sendCardForm(evt) {
  evt.preventDefault();
  const formValue = {
    name: constants.placeName.value,
    link: constants.imgLink.value,
  };
  constants.gallery.prepend(createCard(formValue));
  closePopup(constants.popupAddCard);
}

// //Добавляем слушатели на форму
constants.formCard.addEventListener('submit', sendCardForm);

//Добавляем карточки при загрузке страницы
constants.initialCards.forEach((item) => {
  constants.gallery.prepend(createCard(item));
});

// Создаём карточку
function createCard(item) {
  const card = new Card(item, '#photo-card', openPhotoPopup);
  const cardElement = card.getCardElement();
  return cardElement;
}

// Открываем попам с зум-фото
function openPhotoPopup(name, link) {
  constants.photo.src = link;
  constants.captionPhoto.textContent = name;
  constants.photo.alt = `Изображение ${name}`;
  openPopup(constants.popupPhoto);
}

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
