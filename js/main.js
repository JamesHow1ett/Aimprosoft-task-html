const menuBtn = document.getElementById('menu-btn');
const navBar = document.querySelector('.menu');
const modalWindowBg = document.querySelector('.modal-window');
const cartBtn = document.getElementById('cart-btn');
const headerCart = document.querySelector('.header__cart');
const saleSlider = document.querySelector('.sale-slider');
const saleValueElem = document.querySelector('.sale-slider__price');
const saleDots = document.querySelectorAll('.sale-slider__dot');
const saleValueDefault = saleValueElem.textContent;
const saleValues = [saleValueDefault, '350,00', '250,00'];


const modalWrapper = document.createElement('div');
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
                  </div>`;
const cartItems = `<div class="open-cart__item">
                  <div class="open-cart__item-img">
                    <img src="./images/cart-item.png" alt="item image">
                  </div>
                  <div class="open-cart__item-detail">
                    <div class="open-cart__detail-top">
                      <div class="open-cart__detail-name"><span>Nome do Producto</span></div>
                      <div class="open-cart__detailt-delete">
                        <button class="open-cart__delete-btn">
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                    <div class="open-cart__detail-bottom">
                      <div class="open-cart__item-quntity">
                        <button class="open-cart__quntity-minus">
                          <i class="fas fa-minus"></i>
                        </button>
                        <span>88</span>
                        <button class="open-cart__quntity-plus">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                      <div class="open-cart__item-price">R$<span>88,88</span></div>
                    </div>
                  </div>
                  </div>
                  <div class="open-cart__item">
                  <div class="open-cart__item-img">
                    <img src="./images/cart-item.png" alt="item image">
                  </div>
                  <div class="open-cart__item-detail">
                    <div class="open-cart__detail-top">
                      <div class="open-cart__detail-name"><span>Nome do Producto</span></div>
                      <div class="open-cart__detailt-delete">
                        <button class="open-cart__delete-btn">
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                    <div class="open-cart__detail-bottom">
                      <div class="open-cart__item-quntity">
                        <button class="open-cart__quntity-minus">
                          <i class="fas fa-minus"></i>
                        </button>
                        <span>88</span>
                        <button class="open-cart__quntity-plus">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                      <div class="open-cart__item-price">R$<span>88,88</span></div>
                    </div>
                  </div>
                  </div>`;
const modalCart = `<div class="open-cart">
                    <div class="open-cart__title">
                      <div class="open-cart__title-text">Meu Carrinho</div>
                      <button id="cart-close" class="header__cart-btn cart-modal-btn" data-in-cart="88">
                        <img src="./images/cart-icon.png" alt="cart icon"   class="header__cart-img">
                      </button>
                    </div>
                    <div class="open-cart__body">
                      ${cartItems}
                    </div>
                    <div class="open-cart__total">
                      <div class="open-cart__total-text">Total</div>
                      <div class="open-cart__number">R$<span>88,88</span></div>
                    </div>
                    <div class="open-cart__button-group">
                      <button class="open-cart__continue">
                        <span>Continuar</span>
                        <span>Comprando</span>
                      </button>
                      <button class="open-cart__checkout">
                        <span>Checkout</span>
                      </button>
                    </div>
                  </div>`;

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
  modalWindowBg.style.display = 'block';
  modalWrapper.innerHTML = modalMenu;
  navBar.append(modalWrapper);

  const openMenuModal = document.querySelector('.open-menu');
  openMenuModal.addEventListener('click', (event) => {
    const target = event.target;

    if (target.id === 'menu-close' || target.parentNode.id === 'menu-close') {
      modalWindowBg.style.display = 'none';
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
  });
}

const openCart = () => {
  modalWindowBg.style.display = 'block';
  modalWrapper.innerHTML = modalCart;
  headerCart.append(modalWrapper);

  const openCartModal = document.querySelector('.open-cart');
  openCartModal.addEventListener('click', (event) => {
    const target = event.target;

    if (target.id === 'cart-close' || target.parentNode.id === 'cart-close'
      || target.classList.contains('open-cart__continue')
      || target.parentNode.classList.contains('open-cart__continue')) {
      modalWindowBg.style.display = 'none';
      openCartModal.style.display = 'none';
    }
  });
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
  cartBtn.addEventListener('click', openCart);
});