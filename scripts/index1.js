const popup = document.querySelector('.popup');
const openEditPopup = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__job');
const closeButton = popup.querySelectorAll('.popup__close-btn');
const editProfileFormElement = popup.querySelector('#editProfileForm');
const addCardForm = popup.querySelector('#addCardForm');
const nameInput = popup.querySelector('.popup__input_type_name');
const jobInput = popup.querySelector('.popup__input_type_job');
const buttons = document.querySelectorAll('.button');
const popupContainer = popup.querySelectorAll('.popup__container');
const popupEditProfile = popup.querySelector('.popup__container_type_edit-profile');
const popupAddCard = popup.querySelector('.popup__container_type_add-card');
const addCardBtn = document.querySelector('.profile__add-btn');
const placeName = popup.querySelector('.popup__input_type_place-name');
const imgLink = popup.querySelector('.popup__input_type_img-link');
const gallery = document.querySelector('.gallery');
const photoCardTemplate = gallery.querySelector('#photo-card').content;
const likeBtn = photoCardTemplate.querySelector('.photo-card__like-btn');


//Кладём карточки при загрузке страницы


// initialCards.forEach((item) => {
//   const photoCard = photoCardTemplate.cloneNode(true);
//   photoCard.querySelector('.photo-card__title').textContent = item.name;
//   photoCard.querySelector('.photo-card__photo').src = item.link;
//   gallery.append(photoCard); //Положили карточку в галерею

// });


// //Функция добавления карточки на сайт
// // likeBtn.addEventListener('click', (evt) => {
// //   evt.target.classList.toggle('photo-card__like-btn_active');
// // });



// const addPhotoCard = (evt) => {
//   evt.preventDefault();
//   const photoCard = photoCardTemplate.cloneNode(true);
//   photoCard.querySelector('.photo-card__title').textContent = placeName.value;
//   photoCard.querySelector('.photo-card__photo').src = imgLink.value;
//   closeOverlay();
//   gallery.prepend(photoCard);
// };

// 

function createCard() {
  const photoCard = photoCardTemplate.cloneNode(true);

  photoCard.querySelector('.photo-card__title').textContent = placeName.value;
  photoCard.querySelector('.photo-card__photo').src = imgLink.value;
  photoCard.querySelector('.photo-card__photo').alt = `Изображение ${placeName.value}`;


  gallery.prepend(photoCard);

  console.log(photoCard)
}

addCardForm.addEventListener('submit', createCard());


//Форма добавления карточки
const addOverlay = () => popup.classList.add('popup_opened'); //открыли оверлей

const closeOverlay = () => {
  popupContainer.forEach((container) => {
    container.classList.remove('popup__container_opened');
  }); //очистили оверлей
  popup.classList.remove('popup_opened'); //скрыли оверлей
};

const showAddCardPopup = () => {
  addOverlay();
  popupAddCard.classList.add('popup__container_opened');
}; //Открыли форму добавления карточки

const showEditProfilePopup = () => {
  addOverlay();
  popupEditProfile.classList.add('popup__container_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}; //Открыли форму редактирования профиля

const openPopup = (event) => {
  const eventTarget = event.target;
  if (eventTarget === openEditPopup) {
    showEditProfilePopup();
  } else if (eventTarget === addCardBtn) {
    showAddCardPopup();
  }
};

const closePopup = () => {
  closeOverlay();
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeOverlay();
}

editProfileFormElement.addEventListener('submit', formSubmitHandler);


closeButton.forEach((button) => {
  button.addEventListener('click', closePopup);
});

buttons.forEach((button) => {
  button.addEventListener('click', openPopup);
});

