const burgerMenu = document.querySelector('.burger-icon');
const headerInner = document.querySelector('.header__inner');


  burgerMenu.addEventListener('click', function () {
    if (document.documentElement.clientWidth < 900) {
      headerInner.classList.toggle('header__inner--opened');
    }
  })
