import tabs from "./modules/tabs";
import timer from "./modules/timer";
import calc from "./modules/calc";
import cards from "./modules/cards";
import forms from "./modules/forms";
import modal from "./modules/modal";
import slides from "./modules/slides";
import menu from "./modules/menu";
import {
    openModal
} from "./modules/modal";

document.addEventListener("DOMContentLoaded", () => {
    const modalTimerId = setTimeout(() => {
        openModal('.modal', modalTimerId);
    }, 5000000000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', "tabheader__item_active");
    timer(".timer", "2020-10-22T00:00:00+03:00");
    calc();
    menu();
    cards();
    forms('form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    slides({
        container: '.offer__slider',
        slide: '.offer__slide',
        prevArrow: '.offer__slider-prev',
        nextArrow: '.offer__slider-next',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});