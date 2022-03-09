// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const mobileMenu = document.querySelector('#mobile-hamburger-menu');
const hamburgerBtn = document.querySelector('#hamburger-btn');

let menuToggle = true

hamburgerBtn.addEventListener('click', () => {
    menuToggle ? mobileMenu.style='width: 193px' : mobileMenu.style='width: 0px'
    menuToggle = !menuToggle
})

const closeMenu = () => {
    mobileMenu.style='width: 0px'
}
