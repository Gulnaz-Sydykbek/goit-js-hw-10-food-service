import menu from './menu.json';
import readyMenu from '../templates/menu.hbs';

const menuItemsEl = document.querySelector('.js-menu');

const menuMarkup = readyMenu(menu);
menuItemsEl.insertAdjacentHTML('beforeend', menuMarkup);