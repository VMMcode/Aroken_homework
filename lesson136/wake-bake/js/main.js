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