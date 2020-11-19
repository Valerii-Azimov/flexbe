const refs = {
  burgerButton: document.querySelector('button[data-action="burger-button"]'),
  modal: document.querySelector("#main-modal"),
  mainPage: document.querySelector("#main-page"),
};

refs.burgerButton.addEventListener("click", eventModal);

function eventModal() {
  if (refs.modal.classList.contains("modal--hide")) {
    refs.modal.classList.remove("modal--hide");
    refs.mainPage.classList.add("modal--hide");
  } else {
    refs.modal.classList.add("modal--hide");
    refs.mainPage.classList.remove("modal--hide");
  }
}
