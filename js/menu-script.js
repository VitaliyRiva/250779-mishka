var navExtra = document.querySelector('.nav-features')
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
  if (navExtra.classList.contains('main-nav--closed')) {
      navExtra.classList.remove('main-nav--closed');
      navExtra.classList.add('main-nav--opened');
  } else {
      navExtra.classList.add('main-nav--closed');
      navExtra.classList.remove('main-nav--opened');
  }
});
