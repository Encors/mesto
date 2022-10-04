const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  inputErrorClass: 'popup__input_type_error',
};

function isValid(form, input, settings) {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, settings);
  } else {
    hideInputError(form, input, settings);
  }
}

function showInputError(form, input, errorMessage, settings) {
  const errorElement = form.querySelector(`#${input.id}-error`);

  input.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
}

function hideInputError(form, input, settings) {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(settings.inputErrorClass);
  errorElement.textContent = '';
}

function hasInvalidInput(inputList) {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
}

function toggleButton(inputList, button, settings) {
  if (hasInvalidInput(inputList)) {
    disableButton(button, settings);
  } else {
    enableButton(button, settings);
  }
}

function setEventListeners(form, settings) {
  const inputList = Array.from(form.querySelectorAll(settings.inputSelector));
  const submitButton = form.querySelector(settings.submitButtonSelector);

  toggleButton(inputList, submitButton, settings);

  inputList.forEach((input) => {
    input.addEventListener('input', function () {
      isValid(form, input, settings);
      toggleButton(inputList, submitButton, settings);
    });
  });
}

function disableButton(button, settings) {
  button.classList.add(settings.inactiveButtonClass);
  button.setAttribute('disabled', true);
}

function enableButton(button, settings) {
  button.classList.remove(settings.inactiveButtonClass);
  button.removeAttribute('disabled');
}

function enableValidation(settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((form) => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(form, settings);
  });
}

enableValidation(settings);