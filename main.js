import { Navigation, Pagination } from "swiper";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import './style.css'

let swiper = Swiper;
let init = false;
function swiperMode() {
    let mobile = window.matchMedia("(min-width: 0px) and (max-width: 768px)");

    if (mobile.matches) {
        if (!init) {
            init = true;
            const swiper = new Swiper(".swiper", {
                slidesPerView: 'auto',
                spaceBetween: 16,
                loop: false,
                // Navigation arrows
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                modules: [Navigation, Pagination],
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                scrollbar: {
                    el: '.swiper-scrollbar'
                },
            });
        } else {
        swiper.destroy();
        init = false;
    }
}}

window.addEventListener("load", function () {
    swiperMode();
});

window.addEventListener("resize", function () {
    swiperMode();
});

const expand = document.getElementById('expand')
const img = document.getElementsByClassName('expand__img')
const flex = document.getElementsByClassName('main')[0]

let hidden = false
function roll() {
    hidden = !hidden
    if (hidden) {
        flex.style.height = 'auto'
        img[0].classList.add('rotate')
        document.getElementsByClassName('expand__txt')[0]
            .innerHTML = 'Скрыть'
    } else {
        flex.style.height = '160px'
        img[0].classList.remove('rotate')
        document.getElementsByClassName('expand__txt')[0]
            .innerHTML = 'Показать все'
    }
}

expand.addEventListener('click', roll)