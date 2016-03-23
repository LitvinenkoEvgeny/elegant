import headerHtml from './header.jade';
import {stringToNodes} from '../../utilites/utilites';
import velocity from 'velocity';


// render html
stringToNodes(headerHtml());


let hiddenMenu = document.getElementsByClassName(`hidden__menu`)[0];
let hamburgerMenu = document.getElementsByClassName(`hamburger__menu`)[0];
let menuBar = hamburgerMenu.getElementsByClassName(`bar`)[0];


function showMenu() {
  hiddenMenu.classList.toggle(`open`);
  menuBar.classList.toggle(`animate`);
  hamburgerMenu.classList.toggle(`open`);
}
hamburgerMenu.addEventListener(`click`, showMenu);
