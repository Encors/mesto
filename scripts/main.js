const overlay = document.querySelector('.overlay');
const openPopupButton = document.querySelector('.profile__edit-btn');

const clearOverlay = () => {
  overlay.innerHTML = '';
};

const toggleOverlay = () => {
  clearOverlay();
  overlay.classList.toggle('overlay_opened');
};

const getPopupElement = () => {
  const popupInnerHTML = `
    <button class="popup__close-btn button" type="button"></button>
    <h2 class="popup__title">Редактировать профиль</h2>
    <input type="text" class="popup__input-name" placeholder="Имя"/>
    <input type="text" class="popup__input-job" placeholder="О себе"/>
    <button class="popup__submit-btn button" type="submit">Сохранить</button>
`;

  const formElement = document.createElement('form');

  formElement.classList.add('popup__container');

  formElement.insertAdjacentHTML('afterbegin', popupInnerHTML);

  const nameTextContent = document.querySelector('.profile__title');
  const jobTextContent = document.querySelector('.profile__job');

  const nameInput = formElement.querySelector('.popup__input-name');
  const jobInput = formElement.querySelector('.popup__input-job');

  nameInput.value = nameTextContent.textContent;
  jobInput.value = jobTextContent.textContent;

  function formSubmitHandler(evt) {
    evt.preventDefault();

    jobTextContent.textContent = jobInput.value;
    nameTextContent.textContent = nameInput.value;
    toggleOverlay();
  }

  formElement.addEventListener('submit', formSubmitHandler);

  const closePopupButton = formElement.querySelector('.popup__close-btn');

  closePopupButton.addEventListener('click', () => {
    toggleOverlay();
  });

  return formElement;
};

const openPopup = () => {
  toggleOverlay();
  overlay.appendChild(getPopupElement());
};

openPopupButton.addEventListener('click', () => {
  openPopup();
});
