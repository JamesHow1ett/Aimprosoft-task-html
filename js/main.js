const menuBtn = document.getElementById('menu-btn');
const navBar = document.querySelector('.menu');
const modalWindowMenu = document.querySelector('.modal-window-menu');


const menuDivModal = document.createElement('div');
const modalMenu = `<div class="open-menu">
                    <div class="open-menu__title">
                      <div class="open-menu__title-text">Menu</div>
                      <button id="menu-close" class="open-menu__title-btn-close">
                        <i class="fas fa-times fa-2x"></i>
                      </button>
                    </div>
                    <div class="open-menu__search">
                      <div class="open-menu__search-input">
                        <input type="text" placeholder="Search">
                      </div>
                      <button class="open-menu__search-btn">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                    <div class="open-menu__menu-item sobre">Sobre
                      <ul class="open-menu__list">
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                      </ul>
                    </div>
                    <div class="open-menu__menu-item cols">Colecoes
                      <ul class="open-menu__list">
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                      </ul>
                    </div>
                    <div class="open-menu__menu-item catg">Category
                      <ul class="open-menu__list">
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                      </ul>
                    </div>
                    <div class="open-menu__menu-item looks">Looks
                      <ul class="open-menu__list">
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                      </ul>
                    </div>
                    <div class="open-menu__menu-item contato">Contato
                      <ul class="open-menu__list">
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                        <li class="open-menu__item">Item</li>
                      </ul>
                    </div>
                  </div>`

function ininMobileSliders () {
  $('.main-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: []
  });

  $('.promo-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    variableWidth: true,
    mobileFirst: true,
    responsive: []
  });

  $('.instagram-slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    variableWidth: true,
    mobileFirst: true,
    responsive: []
  });

  $('.quem-usa-slider').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20px',
    slidesToShow: 1,
    variableWidth: true,
    mobileFirst: true,
    responsive: []
  });
}

function destroyMobileSliders () {
  $('.main-slider').on('destroy', (event, slick) => {});
  $('.promo-slider').on('destroy', (event, slick) => {});
  $('.instagram-slider').on('destroy', (event, slick) => {});
  $('.quem-usa-slider').on('destroy', (event, slick) => {});
}

function initTabletSliders () {
  $('.main-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: []
  });
  $('.promo-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button type="button" class="slick-prev arrow arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next arrow arrow-next"></button>',
    responsive: []
  });
}

function initDesctopSliders () {
  $('.main-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    centerMode: true,
    centerPadding: '20px',
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: []
  });
  $('.promo-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 2,
    slidesToShow: 5,
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev arrow arrow-prev"></button>',
    nextArrow: '<button type="button" class="slick-next arrow arrow-next"></button>',
    responsive: []
  });
}

const openMenu = () => {
  modalWindowMenu.style.display = 'block';
  menuDivModal.innerHTML = modalMenu
  navBar.append(menuDivModal);

  const openMenuModal = document.querySelector('.open-menu');
  openMenuModal.addEventListener('click', (event) => {
    const target = event.target;

    if (target.id === 'menu-close' || target.parentNode.id === 'menu-close') {
      modalWindowMenu.style.display = 'none';
      openMenuModal.style.display = 'none';
    }

    if (target.classList[0] === 'open-menu__menu-item') {
      switch (target.classList[1]) {
        case 'sobre':
          if (target.firstElementChild.classList.contains('show')) {
            target.firstElementChild.classList.remove('show');
          } else {
            target.firstElementChild.classList.add('show');
            target.style.paddingBottom = '0';
          }
          break;
        case 'cols':
          if (target.firstElementChild.classList.contains('show')) {
            target.firstElementChild.classList.remove('show');
          } else {
            target.firstElementChild.classList.add('show');
            target.style.paddingBottom = '0';
          }
          break;
        case 'catg':
          if (target.firstElementChild.classList.contains('show')) {
            target.firstElementChild.classList.remove('show');
          } else {
            target.firstElementChild.classList.add('show');
            target.style.paddingBottom = '0';
          }
          break;
        case 'looks':
          if (target.firstElementChild.classList.contains('show')) {
            target.firstElementChild.classList.remove('show');
          } else {
            target.firstElementChild.classList.add('show');
            target.style.paddingBottom = '0';
          }
          break;
        case 'contato':
          if (target.firstElementChild.classList.contains('show')) {
            target.firstElementChild.classList.remove('show');
          } else {
            target.firstElementChild.classList.add('show');
            target.style.paddingBottom = '0';
          }
          break;
        default:
          return;
      }
    }
  })
}


document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768 || window.outerWidth < 768) {
    ininMobileSliders();
  } else if ((window.innerWidth >= 768 || window.outerWidth >= 768)
    && (window.innerWidth < 1200 || window.outerWidth < 1200)) {
      destroyMobileSliders();
      initTabletSliders();
  } else {
    initDesctopSliders();
  }


  menuBtn.addEventListener('click', openMenu);

});