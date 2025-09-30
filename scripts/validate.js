// Validación

const editButton = document.getElementById("submitEdit");
const addButon = document.getElementById("submitAdd");

const formElement = document.querySelector(".form");
// const formInput = formElement.querySelector('.form__input');
// const formError = formElement.querySelector(".form__input-error");
// const formError = formElement.querySelector(`.${formInput.id}-error`);

const showError = (formElement, inputElement, errorMessage) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input-error");
  formError.textContent = errorMessage;
};

const hideError = (formElement, inputElement) => {
  const formError = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input-error");
  formError.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(formElement, inputElement);
    // editButton.classList.remove("form__button-disabled");
    // addButon.classList.remove("form__button-disabled");
  }
};

// Validar botón

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("form__button-disabled");
  } else {
    buttonElement.classList.remove("form__button-disabled");
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".form__input"));
  const buttonElement = formElement.querySelector(".form__button");
  // let buttonElement = document.getElementById("submitEdit");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".formEdit, .formAdd"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    const fieldsetList = Array.from(
      formElement.querySelectorAll(".form__fieldset")
    );

    // fieldsetList.forEach(() => {
    //   setEventListeners(formElement);
    // });

    setEventListeners(formElement);
  });
};

enableValidation();
