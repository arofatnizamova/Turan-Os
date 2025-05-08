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
          autoplay: true,
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
    }else if (slider.hasClass('reviews')) {
      extraOptions = {
        slidesToShow: 3.8,
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
              }
                    },
          ]
      }
    }else if (slider.hasClass('clients')) {
        extraOptions = {
          slidesToShow: 7.5,
            slidesToScroll: 1,
            centerMode: false,
            arrows: true,
            dots: false,
            autoPlay: true,
            responsive: [
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 6.2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 4.5,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 576,
                settings: {
                  slidesToShow: 2.5,
                  slidesToScroll: 1,
                }
                      },
            ]
        }
      }
    slider.slick($.extend({}, extraOptions, options ));
  })
  
  })
  