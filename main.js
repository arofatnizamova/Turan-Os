$(document).ready(function () {

    $('.slick-slider').each(function () {
    let slider = $(this);
    let options = {
      prevArrow: slider.parent().find('.slider-prev'),
      nextArrow: slider.parent().find('.slider-next'),
      infinite: true,
      autoPlay: true,
    }
    let extraOptions = {}
    if (slider.hasClass('companies')) {
      extraOptions = {
        slidesToShow: 6,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          autoPlay: true,
        responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow:4.5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
            },
  ]
      }
    } else if (slider.hasClass('servises')) {
      extraOptions = {
        slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          dots: false,
          autoPlay: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3.5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
                    },
          ]
      }
    }else if (slider.hasClass('bus')) {
      extraOptions = {
        slidesToShow: 2.8,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          dots: false,
          autoPlay: true,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots: true
              }
                    },
          ]
      }
    }
    slider.slick($.extend({}, extraOptions, options ));
  })
  
  })
  