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
      }else if (slider.hasClass('experts')) {
        extraOptions = {
          slidesToShow: 3.5,
            slidesToScroll: 1,
            centerMode: false,
            arrows: true,
            dots: false,
            autoPlay: true,
            responsive: [
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 2.5,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 2,
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
      }else if (slider.hasClass('sertificates')) {
        extraOptions = {
          slidesToShow: 4.7,
            slidesToScroll: 1,
            centerMode: false,
            arrows: true,
            dots: false,
            autoPlay: true,
            responsive: [
              {
                breakpoint: 1400,
                settings: {
                  slidesToShow: 3.5,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2.5,
                  slidesToScroll: 2,
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
      }else if (slider.hasClass('get')) {
        extraOptions = {
          slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            arrows: true,
            dots: false,
            autoPlay: true,
            responsive: [
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 2.8,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 1.5,
                  slidesToScroll: 2,
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
      }
    slider.slick($.extend({}, extraOptions, options ));
  })
  const phoneInput = document.querySelector("#phone");
  if (phoneInput) { // Проверяем, есть ли элемент с ID "phone"
    const iti = window.intlTelInput(phoneInput, {
      initialCountry: "uz",
      separateDialCode: false,
      preferredCountries: ["uz", "ru", "us"],
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js",
    });
  }
  AOS.init({
    duration: 800,
  });
  // Функция для анимации счетчика
  function animateCounter(counter) {
    const target = $(counter).data('target');
    let current = 0;
    const increment = target / 100;  // Регулируем скорость анимации

    function updateCounter() {
      if (current < target) {
        current += increment;
        $(counter).text(Math.ceil(current));
        requestAnimationFrame(updateCounter);
      } else {
        $(counter).text(target);
      }
    }

    updateCounter();
  }

  // Обработчик прокрутки
  function checkScroll() {
    $('.counter').each(function() {
      const $this = $(this);
      const offset = $this.offset().top;
      const windowHeight = $(window).height();
      const scrollPosition = $(window).scrollTop();

      // Проверяем, находится ли элемент в пределах видимой части окна
      if (offset <= scrollPosition + windowHeight && offset + $this.outerHeight() >= scrollPosition) {
        if (!$this.hasClass('animated')) {
          $this.addClass('animated');
          animateCounter($this);
        }
      }
    });
  }

  // Инициализация проверки при прокрутке
  $(window).on('scroll', checkScroll);

  // Также можно проверить сразу при загрузке страницы, если элементы уже видны
  checkScroll();
  const accordionButtons = document.querySelectorAll(".arrow-custom");

    accordionButtons.forEach(button => {
      button.addEventListener("click", function () {
        const icon = this.querySelector("i");

        // Подождём завершения toggle (Bootstrap может менять классы с задержкой)
        setTimeout(() => {
          if (this.classList.contains("collapsed")) {
            icon.classList.remove("bi-dash-lg");
            icon.classList.add("bi-plus-lg");
          } else {
            icon.classList.remove("bi-plus-lg");
            icon.classList.add("bi-dash-lg");
          }
        }, 100); // небольшая задержка, чтобы изменения классов успели примениться
      });
    });
  })
  