let swiper = undefined;
let swiper2 = undefined;
let swiper3 = undefined;

var mql = window.matchMedia("(min-width: 768px)");

function createSwiper(name) {
  return new Swiper(name, {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    slidesPerView: "auto",
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

function initSwipers() {
  if (mql.matches && swiper) {
    swiper.destroy(true, true);
    swiper2.destroy(true, true);
    swiper3.destroy(true, true);
    swiper = undefined;
    swiper2 = undefined;
    swiper3 = undefined;
  } else if (!swiper) {
    swiper = createSwiper(".swiper");
    swiper2 = createSwiper(".swiper-2");
    swiper3 = createSwiper(".swiper-3");
  }
}

initSwipers();

window.addEventListener("resize", () => {
  initSwipers();
});

let button = document.querySelector(".read-more-slider");
let menuOpen = document.querySelector(".swiper");
let menuClose = document.querySelector(".hide-slider");

button.addEventListener("click", function () {
  menuOpen.classList.add("swiper-more");
  button.classList.add("hide-button");
  menuClose.classList.remove("hide-button");
});

menuClose.addEventListener("click", function () {
  menuClose.classList.add("hide-button");
  menuOpen.classList.remove("swiper-more");
  button.classList.remove("hide-button");
});

let button2 = document.querySelector(".read-more-slider--2");
let menuOpen2 = document.querySelector(".swiper-2");
let menuClose2 = document.querySelector(".hide-slider--2");

button2.addEventListener("click", function () {
  menuOpen2.classList.add("swiper-more");
  button2.classList.add("hide-button");
  menuClose2.classList.remove("hide-button");
});

menuClose2.addEventListener("click", function () {
  menuClose2.classList.add("hide-button");
  menuOpen2.classList.remove("swiper-more");
  button2.classList.remove("hide-button");
});
