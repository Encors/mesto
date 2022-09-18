const popup = document.querySelector('.popup');
//profile
const openEditPopup = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__job');
const addCardBtn = document.querySelector('.profile__add-btn');
//form
const editProfileFormElement = popup.querySelector('#editProfileForm');
const addCardForm = popup.querySelector('#addCardForm');
//photo-card
const gallery = document.querySelector('.gallery');
const photoCardTemplate = gallery.querySelector('#photo-card').content;
//popup
const closeButtonCollection = popup.querySelectorAll('.popup__close-btn');
const popupContainer = popup.querySelectorAll('.popup__container');
const nameInput = popup.querySelector('.popup__input_type_name');
const jobInput = popup.querySelector('.popup__input_type_job');
const popupEditProfile = popup.querySelector('.popup__container_type_edit-profile');
const popupAddCard = popup.querySelector('.popup__container_type_add-card');
const placeName = popup.querySelector('.popup__input_type_place-name');
const imgLink = popup.querySelector('.popup__input_type_img-link');
const popupPhotoContainer = popup.querySelector('.popup__container_type_photo-container');

//Открыть оверлей + попап
const addOverlay = () => popup.classList.add('popup_opened');

const showEditProfilePopup = () => {
  addOverlay();
  popupEditProfile.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
};

const showAddCardPopup = () => {
  addOverlay();
  popupAddCard.classList.add('popup_opened');
};

openEditPopup.addEventListener('click', showEditProfilePopup);
addCardBtn.addEventListener('click', showAddCardPopup);

//Закрыть оверлей + попап
const closeButton = Array.from(closeButtonCollection);

const closeOverlay = () => {
  popupContainer.forEach((container) => {
    container.classList.remove('popup_opened');
  }); //очистили оверлей
  popup.classList.remove('popup_opened'); //скрыли оверлей
  popup.style.background = 'rgba(0, 0, 0, 0.5)';
};

closeButton.forEach((button) => {
  button.addEventListener('click', closeOverlay);
});

//Изменить информацию профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeOverlay();
}

editProfileFormElement.addEventListener('submit', formSubmitHandler);

function createCard() {
  //Создаём карточку
  const photoCard = photoCardTemplate.cloneNode(true);
  photoCard.querySelector('.photo-card__title').textContent = placeName.value;
  photoCard.querySelector('.photo-card__photo').src = imgLink.value;
  photoCard.querySelector('.photo-card__photo').alt = `Изображение ${placeName.value}`;

  //Добавляем лайк
  const likeBtn = photoCard.querySelector('.photo-card__like-btn');
  const addLike = (evt) => {
    evt.target.classList.toggle('photo-card__like-btn_active');
  };
  likeBtn.addEventListener('click', addLike);

  //Удаляем карточку
  const removeBtn = photoCard.querySelector('.photo-card__remove-btn');
  const removeCard = () => {
    removeBtn.closest('.photo-card').remove();
  };
  removeBtn.addEventListener('click', removeCard);

  //Добавляем карточку в галерею
  gallery.prepend(photoCard);

  //Добавляем функцию открытия фото в большом размере
  const cardPhoto = gallery.querySelector('.photo-card__photo');
  const cardName = gallery.querySelector('.photo-card__title');

  const openPhotoPopup = () => {
    addOverlay();
    popupPhotoContainer.classList.add('popup_opened');
    popupPhotoContainer.querySelector('.popup__photo').src = cardPhoto.src;
    popupPhotoContainer.querySelector('.popup__caption').textContent = cardName.textContent;
    popup.style.background = 'rgba(0, 0, 0, 0.9)';
  };

  cardPhoto.addEventListener('click', openPhotoPopup);
}

//Добавляем карточку в галерею через форму
const addCard = (evt) => {
  evt.preventDefault();
  createCard();
  closeOverlay();
};
addCardForm.addEventListener('submit', addCard);

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
  createCard(item);
  gallery.querySelector('.photo-card__photo').src = item.link;
  gallery.querySelector('.photo-card__title').textContent = item.name;
  gallery.querySelector('.photo-card__photo').alt = `Изображение ${item.name}`;
});
