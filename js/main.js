$(document).ready(function(){
  $('.main-slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {

        }
      },
      {
        breakpoint: 600,
        settings: {

        }
      },
      {
        breakpoint: 480,
        settings: {

        }
      }
    ]
  })
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {

        }
      },
      {
        breakpoint: 600,
        settings: {

        }
      },
      {
        breakpoint: 480,
        settings: {

        }
      }
    ]
  })
})
