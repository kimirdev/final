let button = document.querySelector(".header__btn-burger");
let menuBurger = document.querySelector(".menu-burger");
let menuClose = document.querySelector(".header__btn-close");
let page = document.querySelector(".page");
let blur = document.querySelector(".blur");

function toggleMenu() {
  menuBurger.classList.toggle("burger-hide");
  menuBurger.classList.toggle("burger-in-place");
  blur.classList.toggle("display-none");
}

button.addEventListener("click", toggleMenu);

menuClose.addEventListener("click", toggleMenu);

blur.addEventListener("click", toggleMenu);

let readMore = document.querySelector(".read-more");
let info = document.querySelector(".info-2");
let hide = document.querySelector(".hide");

function toggleReadmore() {
  info.classList.toggle("hide-p");
  readMore.classList.toggle("hide-button");
  hide.classList.toggle("hide-button");
}

readMore.addEventListener("click", toggleReadmore);

hide.addEventListener("click", toggleReadmore);
