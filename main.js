let openButton = document.getElementById('header-button');
let closeButton = document.getElementById('close-button')
let nav = document.getElementById('nav');

let openMenu = () => {
    nav.classList.add('header-links__bar_open');
    nav.classList.remove('header-links__bar_close');
}
let closeMenu = () => {
    nav.classList.remove('header-links__bar_open');
    nav.classList.add('header-links__bar_close');
}

openButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu)
