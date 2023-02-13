let chatBtn = document.querySelector(".header__btn-chat");
let chatModal = document.querySelector(".modal-1");
let closeChat = document.querySelector(".close");
let callBtn = document.querySelector(".header__btn-call");
let callModal = document.querySelector(".modal-2");
let closeCall = document.querySelector(".close-2");
let page = document.querySelector(".page");
let blur = document.querySelector(".blur");
let chatBtn2 = document.querySelector(".footer-menu__btn-chat");
let callBtn2 = document.querySelector(".footer-menu__btn-call");

function showModal(modal) {
  modal.classList.remove("modal-hide");
  blur.classList.remove("display-none");
}

function closeModals() {
  chatModal.classList.add("modal-hide");
  callModal.classList.add("modal-hide");
  blur.classList.add("display-none");
}

chatBtn.addEventListener("click", () => showModal(chatModal));
chatBtn2.addEventListener("click", () => showModal(chatModal));
callBtn.addEventListener("click", () => showModal(callModal));
callBtn2.addEventListener("click", () => showModal(callModal));

closeChat.addEventListener("click", closeModals);
closeCall.addEventListener("click", closeModals);

blur.addEventListener("click", closeModals);
