const buttons = document.querySelectorAll('button');
const slides = document.getElementById('slides').children;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const slideIndex = button.dataset.slide;
        Array.from(slides).forEach(slide => {
            slide.classList.add('hidden');
        });
        const selectedSlide = document.querySelector(`.slide[data-slide="${slideIndex}"]`);
        selectedSlide.classList.remove('hidden');
    });
});

//slide main 4
var swiper = new Swiper(".main4Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".main4Next",
        prevEl: ".main4Prev",
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      640: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      1024: {
          slidesPerView: 1,
          spaceBetween: 30,
      }
  }
  });

  //SlideMain6
  var swiper = new Swiper(".main6Swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".main6Next",
        prevEl: ".main6Prev",
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      640: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30,
      }
  }
  });

  //slideMain9
  var swiper = new Swiper(".docterSwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination_main9",
      clickable: true,
    },
    navigation: {
        nextEl: ".main9Next",
        prevEl: ".main9Prev",
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      640: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      1024: {
          slidesPerView: 4,
          spaceBetween: 30,
      }
  }
  });
  //slideMain10
  var swiper = new Swiper(".Slidemain10Swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".main10Next",
        prevEl: ".main10Prev",
    },
    breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      640: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 30,
      }
  }
  });