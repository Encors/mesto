const popup = document.querySelector('.popup');
const openPopup = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__job');
const closeButton = popup.querySelector('.popup__close-btn');
const formElement = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__input_type_name');
const jobInput = popup.querySelector('.popup__input_type_job');

function showClick() {
	popup.classList.add('popup_opened');
	nameInput.value = profileName.textContent;
	jobInput.value = profileJob.textContent;
}

function closeClick() {
	popup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
	evt.preventDefault();
  profileName.textContent = nameInput.value;
	profileJob.textContent = jobInput.value;
	closeClick();
}

openPopup.addEventListener('click', showClick);
closeButton.addEventListener('click', closeClick);
formElement.addEventListener('submit', formSubmitHandler);
