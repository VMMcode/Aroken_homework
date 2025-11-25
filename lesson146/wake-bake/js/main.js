const burgerMenu = document.querySelector('.burger-icon');
const headerInner = document.querySelector('.header__inner');

  burgerMenu.addEventListener('click', function () {
    if (document.documentElement.clientWidth < 900) {
      headerInner.classList.toggle('header__inner--opened');
    }
  })

// ===================================================================

  const body = document.body;
  const modalButton = body.querySelector('.about__play-button');
  const modal = body.querySelector('.modal');

  function openModal(e) {
    body.classList.add ('body-modal--active');
    body.classList.add ('body--no-scroll');
  }
  function closeModal(e) {
    const target = e.target
    if (target.closest('.modal__close') || target.classList.contains('modal')) {
      body.classList.remove ('body-modal--active');
      body.classList.remove ('body--no-scroll');      
    }
  }

  modalButton.addEventListener('click', openModal);
  modal.addEventListener('click', closeModal);

// ======================================================================


const tabsList = document.querySelector('.tabs-controls__list');
const tabsContent = document.querySelectorAll('.tabs-content');


tabsList.addEventListener('click', function (event) {
  event.preventDefault();

  const tabLink = event.target.closest('.tabs-controls__link');
  if (!tabLink) return

  const tabItem = tabLink.closest('li');

  tabsList.querySelectorAll('.tabs-controls__item').forEach(item => {
    item.classList.remove('tabs-controls__item--active');
  });

  tabItem.classList.add('tabs-controls__item--active');

  const tabId = tabLink.dataset.tab;

  tabsContent.forEach(content => content.classList.remove('tabs-content--active'));

  const activeContent = document.querySelector(`.tabs-content[data-tab="${tabId}"]`);


  if (activeContent) {
    activeContent.classList.add('tabs-content--active');
  }
})

// ===================================================================

const accordionButtons = document.querySelectorAll('.accordion__button');

accordionButtons.forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    const accordionContent = this.nextElementSibling;
    const icon = this.querySelector('.accordion__button-icon');


    if (accordionContent.style.maxHeight) {
      accordionContent.style.maxHeight = null;
      accordionContent.classList.remove('accordion__content--active');
      icon.classList.remove('accordion__button-icon--active');
    } else {

      const parent = this.closest('.tabs-content');
      const allContents = parent.querySelectorAll('.accordion__content');
      const allIcons = parent.querySelectorAll('.accordion__button-icon');

      allContents.forEach(c => {
        c.style.maxHeight = null;
        c.classList.remove('accordion__content--active');
      });
      allIcons.forEach(i => i.classList.remove('accordion__button-icon--active'));


      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      accordionContent.classList.add('accordion__content--active');
      icon.classList.add('accordion__button-icon--active');
    }
  });
});

// nextElementSibling
// element.scrollHeight + 'px'

// ===================================================================



// слайдер-галерея
const swiper = new Swiper('.gallery__slider', {
  // Optional parameters

  // If we need pagination
  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.gallery__next',
    prevEl: '.gallery__prev',
  },

  // Default parameters
  slidesPerView: 1.5,
  spaceBetween: 15,
  // Responsive breakpoints
  breakpoints: {
    401: {
      slidesPerView: 2,
    },

    601: {
      slidesPerView: 2.5,
    },

    801: {
      slidesPerView: 3,
      spaceBetween: 32
    },

    1101: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
});
