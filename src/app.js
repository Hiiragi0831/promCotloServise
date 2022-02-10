/* src/app.js */

// Styles
import 'styles/_app.scss';
import 'bootstrap';
import Swiper, { Navigation, Pagination } from 'swiper';
import WOW from "wow.js/dist/wow";

require('scripts/demo');

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

function addZero(num){
  return (num > 9) ? num : '0' + num;
}

new WOW().init();
