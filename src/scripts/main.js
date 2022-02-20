// Animate menu modal in mobile
const menuButton = document.querySelector('#button__menu');
const menuNav = document.querySelector('#nav__menu');
const logoButton = document.querySelector('#logo');
let menuModalOpen = false;

const menuModalClose = () => {
  menuNav.classList.toggle('nav__menu-modal');
  menuNav.removeEventListener('animationend', menuModalClose);
  menuNav.style = '';
  menuModalOpen = false;
};

const menuToogle = () => {
  if (!menuModalOpen) {
    menuNav.style.animation = 'modalFadeIn 500ms forwards';
    menuNav.classList.toggle('nav__menu-modal');
    menuButton.classList.toggle('button__menu-modal');
    logoButton.classList.toggle('button__logo-modal');
    menuModalOpen = true;
  } else {
    menuNav.style.animation = 'modalFadeOut 500ms forwards';
    menuButton.classList.toggle('button__menu-modal');
    logoButton.classList.toggle('button__logo-modal');
    menuNav.addEventListener('animationend', menuModalClose);
  }
};

menuButton.addEventListener('click', menuToogle);
