import './index.css';
import Card from '../components/Сard.js';
import * as constants from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api';
import PopupWithConfirmation from '../components/PopupWithConfirmation';

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: '50abc53f-8d3e-448b-b494-88b8f2ced152',
    'Content-Type': 'application/json',
  },
});

const initialCards = new Section(
  {
    renderer: (cardInfo) => {
      initialCards.setItem(createCard(cardInfo));
    },
  },
  constants.gallery
);

const popupPhoto = new PopupWithImage(constants.popupPhoto);

const popupProfile = new PopupWithForm(constants.popupEditProfile, constants.formProfile, {
  submitForm: (inputValues) => {
    api
      .putProfileInfo(inputValues.nameProfile, inputValues.jobProfile)
      .then(() => {
        getNewUserInfo();
      })
      .catch((err) => {
        console.log(err);
      });
    popupProfile.close();
  },
});

const popupAppendCard = new PopupWithForm(constants.popupAddCard, constants.formCard, {
  submitForm: (inputValues) => {
    api
      .addNewCard(inputValues)
      .then((data) => {
        initialCards.setItem(createCard(data));
        popupAppendCard.close();
      })
      .catch((error) => {
        console.log(error);
      });
  },
});

const popupSetAvatar = new PopupWithForm(constants.popupAvatar, constants.formAvatar, {
  submitForm: (inputValues) => {
    api
      .setNewAvatar(inputValues)
      .then(() => {
        getNewUserInfo();
        popupSetAvatar.close();
      })
      .catch((error) => {
        console.log(error);
      });
  },
});

const confirmPopup = new PopupWithConfirmation(constants.popupConfirm, constants.formConfirm);

// Инициализация карточек при загрузке страницы
api
  .getInitialCards()
  .then((cards) => {
    initialCards.renderItems(cards);
  })
  .catch((error) => {
    console.log(error);
  });

// Получить и изменить информацию профиля

let user;

function getNewUserInfo() {
  api
    .getProfileInfo()
    .then((profileInfo) => {
      const userInfo = new UserInfo({
        profileName: '.profile__title',
        profileJob: '.profile__job',
        profileAvatar: '.profile__avatar',
      });
      user = userInfo.getUserInfo(profileInfo);
      userInfo.setUserInfo(user.name, user.about);
      userInfo.setAvatar(user.avatar);
    })
    .catch((error) => {
      console.log(error);
    });
}

getNewUserInfo();

constants.profileEditButton.addEventListener('click', () => {
  constants.nameInput.value = user.name;
  constants.jobInput.value = user.about;
  formValidators['profile'].resetValidation();
  popupProfile.open();
});

constants.buttonAddCard.addEventListener('click', () => {
  formValidators['card'].resetValidation();
  popupAppendCard.open();
});

constants.buttonSetAvatar.addEventListener('click', () => {
  formValidators['avatar'].resetValidation();
  popupSetAvatar.open();
});

popupProfile.setEventListeners();
popupPhoto.setEventListeners();
popupAppendCard.setEventListeners();
confirmPopup.setEventListeners();
popupSetAvatar.setEventListeners();

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

// Создаём карточку
function createCard(cardInfo) {
  const card = new Card(
    {
      cardInfo: cardInfo,
      user: user,
      handleCardClick: (name, link) => {
        popupPhoto.open(name, link);
      },
      handleLikeClick: (cardId) => {
        api
          .putLike(cardId)
          .then((cardInfo) => {
            card.handleLike(cardInfo);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      handleDeleteIconClick: (cardId) => {
        confirmPopup.open(),
          confirmPopup.setSubmit(() => {
            api
              .removeCard(cardId)
              .then((result) => {
                card.removeCard(result);
                confirmPopup.close();
              })
              .catch((error) => {
                console.log(error);
              });
          });
      },
      handleDeleteLike: (cardId) => {
        api
          .deleteLike(cardId)
          .then((cardInfo) => {
            card.handleLike(cardInfo);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    '#photo-card'
  );
  const cardItem = card.getCardElement();
  return cardItem;
}
