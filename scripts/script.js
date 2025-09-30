// 1. Inyección de tarjetas
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

// 1.1 Capturar
const elementTemplate = document.querySelector("#element").content;
const wrapper = document.querySelector(".elements__wrapper");

// 1.2 Clonar
function addElement(i) {
  const element = elementTemplate.querySelector(".element").cloneNode(true);

  const image = element.querySelector(".element__image");
  const text = element.querySelector(".element__text");

  image.src = i.link;
  text.textContent = i.name;

  return element;
}

// 1.3 Bucle
initialCards.forEach((i) => {
  const element = addElement(i);
  wrapper.append(element);
});

// Edit Button

const edit = document.querySelector(".profile__edit");
const popupEdit = document.querySelector(".popupEdit");
const crossEdit = document.querySelector(".popup__crossEdit");
// const nameInput = document.getElementById("name");

function openEdit() {
  popupEdit.classList.toggle("popup_openedEdit");
  editButton.classList.add("form__button-disabled");
  // nameInput.value = "";
  formEdit.reset();
}

function closeEdit() {
  popupEdit.classList.remove("popup_openedEdit");
}

edit.addEventListener("click", openEdit);
crossEdit.addEventListener("click", closeEdit);

// Add Button

const add = document.querySelector(".profile__add");
const popupAdd = document.querySelector(".popupAdd");
const crossAdd = document.querySelector(".popup__crossAdd");

function openAdd() {
  popupAdd.classList.toggle("popup_openedAdd");
  addButon.classList.add("form__button-disabled");
  formAdd.reset();
}

function closeAdd() {
  popupAdd.classList.remove("popup_openedAdd");
}

add.addEventListener("click", openAdd);
crossAdd.addEventListener("click", closeAdd);

// Click & Esc

const outsideEdit = popupEdit.querySelector(".popup__overlay");
outsideEdit.addEventListener("click", closeEdit);

const outsideAdd = popupAdd.querySelector(".popup__overlay");
outsideAdd.addEventListener("click", closeAdd);

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    closeEdit();
    closeAdd();
  }
});

// Edit Button Save

const formEdit = document.querySelector(".formEdit");

function handleProfileFormSubmitEdit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#organization");

  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  const name = document.querySelector(".profile__name");
  const about = document.querySelector(".profile__about");

  name.textContent = nameValue;
  about.textContent = jobValue;

  closeEdit();
}

formEdit.addEventListener("submit", handleProfileFormSubmitEdit);

// Add Button Save

const formAdd = document.querySelector(".formAdd");

function handleProfileFormSubmitAdd(evt) {
  evt.preventDefault();

  const addressInput = document.querySelector("#address-level2");
  const urlInput = document.querySelector("#url");

  const addressValue = addressInput.value;
  const urlValue = urlInput.value;

  const newElementValue = { name: addressValue, link: urlValue };

  const newElement = addElement(newElementValue);

  wrapper.prepend(newElement);

  closeAdd();

  const newLikeConstant = newElement.querySelector(".element__heart");

  newLikeConstant.addEventListener("click", () =>
    newLikeConstant.classList.toggle("element__heart-active")
  );

  const newTrashConstant = newElement.querySelector(".element__trash");

  newTrashConstant.addEventListener("click", () => {
    newTrashConstant.closest(".element").remove();
  });

  const newImgConstant = newElement.querySelector(".element__image");

  newImgConstant.addEventListener("click", () => {
    imgImg.src = newImgConstant.src;
    imgTitle.textContent = newImgConstant
      .closest(".element")
      .querySelector(".element__text").textContent;
    popupImg.classList.add("popup_openedImg");
  });
}

formAdd.addEventListener("submit", handleProfileFormSubmitAdd);

// Like

const likeConstant = document.querySelectorAll(".element__heart");

likeConstant.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("element__heart-active");
  });
});

// Trash

const trashConstant = document.querySelectorAll(".element__trash");

trashConstant.forEach((i) => {
  i.addEventListener("click", () => {
    i.closest(".element").remove();
  });
});

// Open Img

const img = document.querySelectorAll(".element__image");
const popupImg = document.querySelector(".popupImg");
const crossImg = document.querySelector(".popupImg__cross");

const imgImg = popupImg.querySelector(".popupImg__img");
const imgTitle = popupImg.querySelector(".popupImg__title");

img.forEach((i) => {
  i.addEventListener("click", () => {
    imgImg.src = i.src;
    imgTitle.textContent = i
      .closest(".element")
      .querySelector(".element__text").textContent;
    popupImg.classList.add("popup_openedImg");
  });
});

function closeImg() {
  popupImg.classList.remove("popup_openedImg");
}

// img.addEventListener("click", openImg);
crossImg.addEventListener("click", closeImg);
