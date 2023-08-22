const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('open-menu');
    overlay.classList.toggle('show-overlay');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('open-menu');
    overlay.classList.remove('show-overlay');
});