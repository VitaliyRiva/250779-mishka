var navExtra = document.querySelector(".nav-features")
var navMain = document.querySelector(".main-nav__nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav__nav--nojs");

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-nav__nav--closed")) {
    navMain.classList.remove("main-nav__nav--closed");
    navMain.classList.add("main-nav__nav--opened");
  } else {
    navMain.classList.add("main-nav__nav--closed");
    navMain.classList.remove("main-nav__nav--opened");
  }
  if (navExtra.classList.contains("main-nav__nav--closed")) {
      navExtra.classList.remove("main-nav__nav--closed");
      navExtra.classList.add("main-nav__nav--opened");
  } else {
      navExtra.classList.add("main-nav__nav--closed");
      navExtra.classList.remove("main-nav__nav--opened");
  }
});
