const popupPhoto = document.querySelector('.popup_type_photo');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-card');
//profile
const openEditPopup = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__job');
const addCardBtn = document.querySelector('.profile__add-btn');
//photo-card
const gallery = document.querySelector('.gallery');
const photoCardTemplate = gallery.querySelector('#photo-card').content;
//popup-elements
const closeButtons = document.querySelectorAll('.popup__close-btn');
const popupContainer = document.querySelectorAll('.popup__container');
const nameInput = popupEditProfile.querySelector('.popup__input_type_name');
const jobInput = popupEditProfile.querySelector('.popup__input_type_job');
const placeName = popupAddCard.querySelector('.popup__input_type_place-name');
const imgLink = popupAddCard.querySelector('.popup__input_type_img-link');
const zoomPhoto = popupPhoto.querySelector('.popup__photo');
const captionPhoto = popupPhoto.querySelector('.popup__caption');

//Открыть попап
const openPopup = (popup) => popup.classList.add('popup_opened');

openEditPopup.addEventListener('click', () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});

addCardBtn.addEventListener('click', () => openPopup(popupAddCard));

//Закрыть попап
const closePopup = (popup) => popup.classList.remove('popup_opened');

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

//Изменить информацию профиля
function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
popupEditProfile.addEventListener('submit', submitEditProfileForm);


  //Создаём карточку
function createCard(item) {
  const photoCardElement = photoCardTemplate.cloneNode(true);
  photoCardElement.querySelector('.photo-card__title').textContent = item.name;
  photoCardElement.querySelector('.photo-card__photo').src = item.link;
  photoCardElement.querySelector('.photo-card__photo').alt = `Изображение ${item.name}`;

  //Добавляем лайк
  const likeBtn = photoCardElement.querySelector('.photo-card__like-btn');
  const addLike = (evt) => {
    evt.target.classList.toggle('photo-card__like-btn_active');
  };
  likeBtn.addEventListener('click', addLike);

  //Удаляем карточку
  const removeBtn = photoCardElement.querySelector('.photo-card__remove-btn');
  const removeCard = () => {
    removeBtn.closest('.photo-card').remove();
  };
  removeBtn.addEventListener('click', removeCard);

  //Добавляем функцию открытия фото в большом размере
  const cardPhoto = photoCardElement.querySelector('.photo-card__photo');
  const cardName = photoCardElement.querySelector('.photo-card__title');

  const openPhotoPopup = () => {
    openPopup(popupPhoto);
    zoomPhoto.src = cardPhoto.src;
    captionPhoto.textContent = cardName.textContent;
    zoomPhoto.alt = cardPhoto.alt;
  };

  cardPhoto.addEventListener('click', openPhotoPopup);

  return photoCardElement;
}

//Добавляем карточку в галерею через форму
addCardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formValue = {
    name: placeName.value,
    link: imgLink.value,
  };
  gallery.prepend(createCard(formValue));
  evt.target.reset();
  closePopup(popupAddCard);
});

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

initialCards.forEach((item) => gallery.prepend(createCard(item)));