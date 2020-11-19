const refs = {
  burgerButton: document.querySelector('button[data-action="burger-button"]'),
  modal: document.querySelector("#main-modal"),
};

refs.burgerButton.addEventListener("click", eventModal);

function eventModal() {
  if (refs.modal.classList.contains("modal--hide")) {
    refs.modal.classList.remove("modal--hide");
  } else {
    refs.modal.classList.add("modal--hide");
  }
}
