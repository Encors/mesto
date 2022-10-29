import { Card } from './Сard.js';
import * as all from './variables.js';
import { FormValidator } from './FormValidator.js';

//Открыть попап
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeOnEscape);
};

all.profilePopup.addEventListener('click', () => {
  all.nameInput.value = all.profileName.textContent;
  all.jobInput.value = all.profileJob.textContent;
  openPopup(all.popupEditProfile);
});

all.cardPopup.addEventListener('click', () => openPopup(all.popupAddCard));

//Закрыть попап
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeOnEscape);
};

all.closeButtons.forEach((button) => {
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

all.popups.forEach((overlay) => {
  overlay.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(overlay);
    }
  });
});

//Изменить информацию профиля
function submitEditProfileForm(evt) {
  evt.preventDefault();
  all.profileName.textContent = all.nameInput.value;
  all.profileJob.textContent = all.jobInput.value;
  closePopup(all.popupEditProfile);
}

all.formProfile.addEventListener('submit', submitEditProfileForm);

// Создаём карточку

function createCard(item) {
  const card = new Card(item, '#photo-card', openPopup);
  const cardElement = card.getCardElement();

  return cardElement;
}

//Добавляем карточку в галерею через форму

function sendCardForm(evt) {
  evt.preventDefault();
  const formValue = {
    name: all.placeName.value,
    link: all.imgLink.value,
  };
  all.gallery.prepend(createCard(formValue));
  all.formCard.reset();
  formValidators['card'].disableButton();
  closePopup(all.popupAddCard);
}

// //Добавляем слушатели на форму
all.formCard.addEventListener('submit', sendCardForm);

//Добавляем карточки при загрузке страницы
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

initialCards.forEach((item) => {
  const card = new Card(item, '#photo-card', openPopup);
  const cardElement = card.getCardElement();

  all.gallery.prepend(cardElement);
});

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

enableValidation(all.settings);
