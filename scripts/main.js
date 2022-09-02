const overlay = document.querySelector(".overlay");
const openPopupButton = document.querySelector(".profile__edit-btn");

const clearOverlay = () => {
  overlay.innerHTML = "";
};

const toggleOverlay = () => {
  clearOverlay();
  overlay.classList.toggle("overlay_opened");
};

const getPopupElement = () => {
  const popupInnerHTML = `
    <button class="popup__close-btn button" type="button"></button>
    <h2 class="popup__title">Редактировать профиль</h2>
    <input type="text" class="popup__input-name"/>
    <input type="text" class="popup__input-subtitle"/>
    <button class="popup__submit-btn button" type="submit">Сохранить</button>
`;

  const element = document.createElement("form");

  element.classList.add("popup__container");

  element.insertAdjacentHTML("afterbegin", popupInnerHTML);

  const closePopupButton = element.querySelector(".popup__close-btn");

  closePopupButton.addEventListener("click", () => {
    toggleOverlay();
  });

  return element;

};

const openPopup = () => {
  toggleOverlay();
  overlay.appendChild(getPopupElement());
};

openPopupButton.addEventListener("click", () => {
  openPopup();
});

// const getValueInput = () => {

// }
