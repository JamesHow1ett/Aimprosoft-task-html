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
});

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
