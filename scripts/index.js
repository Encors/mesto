import { Card } from './Сard.js';
import * as allConstants from './variables.js';
import { FormValidator } from './FormValidator.js';

//Открыть попап
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOnEscape);
};

allConstants.profilePopup.addEventListener('click', () => {
  formValidators['profile'].resetValidation();
  allConstants.nameInput.value = allConstants.profileName.textContent;
  allConstants.jobInput.value = allConstants.profileJob.textContent;
  openPopup(allConstants.popupEditProfile);
});

allConstants.cardPopup.addEventListener('click', () => {
  formValidators['card'].resetValidation();
  openPopup(allConstants.popupAddCard);
});

//Закрыть попап
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEscape);
};

allConstants.closeButtons.forEach((button) => {
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
allConstants.popups.forEach((overlay) => {
  overlay.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(overlay);
    }
  });
});

//Изменить информацию профиля
function submitEditProfileForm(evt) {
  evt.preventDefault();
  allConstants.profileName.textContent = allConstants.nameInput.value;
  allConstants.profileJob.textContent = allConstants.jobInput.value;
  closePopup(allConstants.popupEditProfile);
}

allConstants.formProfile.addEventListener('submit', submitEditProfileForm);

//Добавляем карточку в галерею через форму
function sendCardForm(evt) {
  evt.preventDefault();
  const formValue = {
    name: allConstants.placeName.value,
    link: allConstants.imgLink.value,
  };
  allConstants.gallery.prepend(createCard(formValue));
  closePopup(allConstants.popupAddCard);
}

// //Добавляем слушатели на форму
allConstants.formCard.addEventListener('submit', sendCardForm);

//Добавляем карточки при загрузке страницы
allConstants.initialCards.forEach((item) => {
  allConstants.gallery.prepend(createCard(item));
});

// Создаём карточку
function createCard(item) {
  const card = new Card(item, '#photo-card', openPhotoPopup);
  const cardElement = card.getCardElement();
  return cardElement;
}

// Открываем попам с зум-фото
function openPhotoPopup(name, link) {
  allConstants.photo.src = link;
  allConstants.captionPhoto.textContent = name;
  allConstants.photo.alt = `Изображение ${name}`;
  openPopup(allConstants.popupPhoto);
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

enableValidation(allConstants.settings);
