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

const userInfo = new UserInfo({
  profileName: '.profile__title',
  profileJob: '.profile__job',
  profileAvatar: '.profile__avatar',
});

const cardsContainer = new Section(
  {
    renderer: (cardInfo) => {
      cardsContainer.setItem(createCard(cardInfo));
    },
  },
  constants.gallery
);

let userId;
api
  .getAllNeededInfo()
  .then((res) => {
    const [profileInfo, cards] = res;
    userId = profileInfo._id;
    userInfo.setUserInfo(profileInfo.name, profileInfo.about);
    userInfo.setAvatar(profileInfo.avatar);
    const reversedCards = cards.reverse();
    cardsContainer.renderItems(reversedCards);
  })
  .catch((error) => {
    console.log(error);
  });

const popupPhoto = new PopupWithImage(constants.popupPhoto);

const popupProfile = new PopupWithForm(constants.popupEditProfile, constants.formProfile, constants.buttonSubmit, {
  submitForm: (inputValues) => {
    popupProfile.renderLoading(true);
    api
      .putProfileInfo(inputValues.nameProfile, inputValues.jobProfile)
      .then((newUserInfo) => {
        userInfo.setUserInfo(newUserInfo.name, newUserInfo.about);
        popupProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupProfile.renderLoading(false);
      });
  },
});

const popupAppendCard = new PopupWithForm(constants.popupAddCard, constants.formCard, constants.buttonSubmit, {
  submitForm: (inputValues) => {
    popupAppendCard.renderLoading(true);
    api
      .addNewCard(inputValues)
      .then((data) => {
        cardsContainer.setItem(createCard(data));
        popupAppendCard.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupAppendCard.renderLoading(false);
      });
  },
});

const popupSetAvatar = new PopupWithForm(constants.popupAvatar, constants.formAvatar, constants.buttonSubmit, {
  submitForm: (inputValues) => {
    popupSetAvatar.renderLoading(true);
    api
      .setNewAvatar(inputValues)
      .then((newUserInfo) => {
        userInfo.setAvatar(newUserInfo.avatar);
        popupSetAvatar.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupSetAvatar.renderLoading(false);
      });
  },
});

const confirmPopup = new PopupWithConfirmation(constants.popupConfirm, constants.formConfirm);

constants.profileEditButton.addEventListener('click', () => {
  const user = userInfo.getUserInfo();
  console.log(user);
  constants.nameInput.value = user.profileName;
  constants.jobInput.value = user.profileAbout;
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
      userId: userId,
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
