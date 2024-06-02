document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navbar = document.querySelector('.navbar');
    const navList = document.querySelector('.nav-list');
    const rightNav = document.querySelector('.rightNav');

    burger.addEventListener('click', () => {
        navbar.classList.toggle('h-nav-resp');
        navList.classList.toggle('v-class-resp');
        rightNav.classList.toggle('v-class-resp');
    });
});
