document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 768 || window.outerWidth < 768) {
    ininMobileSliders();
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
