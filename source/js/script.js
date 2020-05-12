var navMain = document.querySelector('.header__container');
var navToggle = document.querySelector('.header__toggle-btn');

navMain.classList.remove('header__container--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('header__container--closed')) {
    navMain.classList.remove('header__container--closed');
    navMain.classList.add('header__container--opened');
  } else {
    navMain.classList.add('header__container--closed');
    navMain.classList.remove('header__container--opened');
  }
});
