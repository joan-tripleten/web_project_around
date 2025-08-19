// popup

const edit = document.querySelector(".profile__edit");
const popup = document.querySelector(".popup");
const cross = document.querySelector(".popup__cross");

function open() {
  // popup.classList.toggle('popup_opened')
  popup.classList.add("popup_opened");
}

function close() {
  popup.classList.remove("popup_opened");
}

edit.addEventListener("click", open);
cross.addEventListener("click", close);

// save

let formElement = document.querySelector(".form");

// Lo siguiente es el manipulador (handler) de entrega de formularios, aunque
// no se enviará en ningún sitio todavía

// Observa que el nombre de la función comienza con un verbo
// y describe exactamente lo que hace la función
function handleProfileFormSubmit(evt) {
  // Esta línea impide que el navegador
  // entregue el formulario en su forma predeterminada.
  evt.preventDefault();
  // Una vez hecho esto, podemos definir nuestra propia forma de entregar el formulario.
  // Lo explicaremos todo con más detalle después.

  // Busquemos los campos del formulario en el DOM
  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#organisation-title");

  // Obtén los valores de cada campo desde la propiedad de valor correspondiente
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;

  // Selecciona los elementos donde se introducirán los valores de los campos
  const name = document.querySelector(".profile__name");
  const about = document.querySelector(".profile__about");

  // Inserta nuevos valores utilizando el textContent
  // propiedad del método querySelector()
  name.textContent = nameValue;
  about.textContent = jobValue;

  close();
}

// Conecta el manipulador (handler) al formulario:
// se observará el evento de entrega
formElement.addEventListener("submit", handleProfileFormSubmit);
