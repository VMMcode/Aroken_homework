const burgerMenu = document.querySelector('.burger-icon');
const headerNav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__list .nav__link');

burgerMenu.addEventListener('click', function () {
  if (document.documentElement.clientWidth < 901) {
    headerNav.classList.toggle('nav--opened');
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    if (document.documentElement.clientWidth < 901) {
      headerNav.classList.remove('nav--opened');
    }
  });
});

// Поиск
document.querySelector('.header__search-btn').addEventListener('click', function () {
  const searchLabel = document.querySelector('.header__search-label');
  searchLabel.classList.toggle('active');
  document.querySelector('.header__search-input').focus();
});









// hero-slider

const swiperHero = new Swiper('.hero__slider', {

  // If we need pagination
  pagination: {
    el: '.hero__pagination',
  },

  slidesPerView: 1,
  spaceBetween: 0,

  centeredSlides: true,



});

const swiperTopSellers = new Swiper('.top-sellers__slider', {
  slidesPerView: 1.1,
  spaceBetween: 10,

  navigation: {
  nextEl: '.top-sellers__button-next',
  prevEl: '.top-sellers__button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 15
    },

    501: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    701: {
      slidesPerView: 2.5,
      spaceBetween: 25
    },

    901: {
      slidesPerView: 3,
      spaceBetween: 30
    },

    1201: {
      slidesPerView: 4,
      spaceBetween: 45
    }
  }
});

// --------------------

// для открытия фильтра
// универсальное управление dropdown-контролами
document.addEventListener('click', (e) => {
  const toggleBtn = e.target.closest('[data-toggle]');
  const dropdowns = document.querySelectorAll('.controls');

  if (toggleBtn) {
    const type = toggleBtn.dataset.toggle;
    const parent = toggleBtn.closest('.controls');
    const panelId = toggleBtn.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);

    const isOpen = parent.classList.contains('open');

    dropdowns.forEach((d) => {
      if (d !== parent) {
        d.classList.remove('open');
        const btn = d.querySelector('[data-toggle]');
        const pnl = document.getElementById(btn?.getAttribute('aria-controls'));
        if (btn && pnl) {
          btn.setAttribute('aria-expanded', 'false');
          pnl.setAttribute('aria-hidden', 'true');
        }
      }
    });

    parent.classList.toggle('open', !isOpen);
    toggleBtn.setAttribute('aria-expanded', String(!isOpen));
    panel.setAttribute('aria-hidden', String(isOpen));

    return;
  }

  if (!e.target.closest('.controls')) {
    dropdowns.forEach((d) => {
      d.classList.remove('open');
      const btn = d.querySelector('[data-toggle]');
      const pnl = document.getElementById(btn?.getAttribute('aria-controls'));
      if (btn && pnl) {
        btn.setAttribute('aria-expanded', 'false');
        pnl.setAttribute('aria-hidden', 'true');
      }
    });
  }
});

// для фильтрации
const grid = document.querySelector('.goods__grid');

const iso = new Isotope(grid, {
  itemSelector: '.goods__grid-item',
  layoutMode: 'fitRows',
  getSortData: {
    popular: el => parseFloat(el.dataset.popular || 0), // сортировка по data-price
    price: el => parseFloat(el.dataset.price || 0), // сортировка по data-price
  },
  sortAscending: true
});


// фильтры
document.querySelectorAll('[data-panel="filter"] button[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    iso.arrange({ filter });

    btn.closest('fieldset').querySelectorAll('button').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
  });
});


// сортировка
document.querySelectorAll('[data-panel="sort"] button[data-sort-by]').forEach(btn => {
  btn.addEventListener('click', () => {
    const sortBy = btn.dataset.sortBy;
    iso.arrange({ sortBy });

    btn.closest('fieldset').querySelectorAll('button').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
  });
});

// направление сортировки
document.querySelectorAll('[data-panel="sort"] button[data-sort-direction]').forEach(btn => {
  btn.addEventListener('click', () => {
    const isDesc = btn.dataset.sortDirection === "true";
    iso.arrange({ sortAscending: !isDesc });

    btn.closest('fieldset').querySelectorAll('button').forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
  });
});




const layoutButtons = document.querySelectorAll('[data-layout]');
const goodsGrid = document.querySelector('.goods__grid');

layoutButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const layout = btn.dataset.layout;

    // убираем предыдущие состояния
    goodsGrid.classList.remove('grid-view', 'list-view');
    goodsGrid.classList.add(layout + '-view');

    // обновляем aria-pressed на кнопках
    layoutButtons.forEach(b => b.setAttribute('aria-pressed', b === btn));
  });
});


layoutButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const layout = btn.dataset.layout; // 'grid' или 'list'

    goodsGrid.classList.remove('grid-view', 'list-view');
    goodsGrid.classList.add(layout + '-view');

    // уведомляем Isotope о изменении размеров элементов
    iso.layout(); // пересчёт позиций элементов

    layoutButtons.forEach(b => b.setAttribute('aria-pressed', b === btn));
  });
});

// пересчёт Isotope при изменении ширины окна
window.addEventListener("resize", () => {
  iso.layout();
});


const gridWrapper = document.querySelector('.goods__grid-wrapper');
const showMoreBtn = document.querySelector('.goods__btn');

function setInitialHeight() {
    if (gridWrapper.classList.contains('expanded')) return;

    const items = Array.from(grid.querySelectorAll('.goods__grid-item'));
    if (items.length === 0) return;

    const firstTop = items[0].offsetTop;
    let thirdRowTop = null;

    for (let i = 0; i < items.length; i++) {
        if (items[i].offsetTop > firstTop) {
            const secondRowTop = items[i].offsetTop;

            for (let j = i; j < items.length; j++) {
                if (items[j].offsetTop > secondRowTop) {
                    thirdRowTop = items[j].offsetTop;
                    break;
                }
            }
            break;
        }
    }

    if (!thirdRowTop) return;

    gridWrapper.style.maxHeight = thirdRowTop + 'px';
}

window.addEventListener('load', () => {
    iso.on('arrangeComplete', setInitialHeight);
    setInitialHeight();
});

iso.on('arrangeComplete', setInitialHeight);

showMoreBtn.addEventListener('click', () => {
    gridWrapper.classList.add('expanded');
    gridWrapper.style.maxHeight = 'none';
    iso.layout();
});
