/* src/app.js */

// Styles
import 'styles/_app.scss';
import 'bootstrap';
import Swiper, { Navigation, Pagination } from 'swiper';
import SmoothScroll from 'smooth-scroll';

function addZero(num){
  return (num > 9) ? num : '0' + num;
}

document.addEventListener("DOMContentLoaded", function() {
  new Swiper(".right-slider", {
    modules: [Navigation, Pagination],
    slidesPerView: "auto",
    spaceBetween: 40,
    pagination: {
      el: ".slider-pagination",
      type: "fraction",
      formatFractionCurrent: addZero,
      formatFractionTotal: addZero
    },
    navigation: {
      nextEl: ".slider-button-next",
      prevEl: ".slider-button-prev",
    },
  });

  window.addEventListener('scroll', function() {
    if (window.screen.width >= 768) {
      for (let item of document.querySelectorAll('.col-12[name]')) {
        let link = document.querySelector('a[href="#' + item.getAttribute('name') + '"]');

        if (item.offsetTop - 5 < document.scrollingElement.scrollTop - 200) {
          document.querySelector('.nav-pc').querySelectorAll('.nav-link').forEach(a => {a.classList.remove('active')});
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      }
    }

    if (window.screen.width >= 1200) {
      if (document.querySelector('.space').clientHeight / 2 < document.scrollingElement.scrollTop) {
        document.querySelector('.full').classList.add('hidden');
        document.querySelector('.half').classList.add('visible');
      } else {
        document.querySelector('.full').classList.remove('hidden');
        document.querySelector('.half').classList.remove('visible');
      }
    }
  });

  new SmoothScroll('a[href*="#"]', {
    speed: 200,
    easing: 'Linear',
    speedAsDuration: true
  });
});
