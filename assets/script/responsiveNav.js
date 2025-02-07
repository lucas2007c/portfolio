const menuIcon = document.querySelector('#menu-icon');
const nav = document.querySelector('nav');
const toogleNav = () => {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    menuIcon.classList.toggle(menuIcon.classList[1] === 'fa-bars' ? 'fa-x' : 'fa-bars');
}

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', toogleNav);

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 600) toogleNav();
    });
});