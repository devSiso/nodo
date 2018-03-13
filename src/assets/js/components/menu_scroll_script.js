$(document).ready(function () {

    var menu = document.getElementById('navbar');
    var menunav = document.getElementById('menu-nav');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            menu.classList.add('navbarScrolled');
        } else {
            menu.classList.remove('navbarScrolled');
        }
    });

    $('#home_button').on('click', function () {
        if ($(window).scrollTop() > 0) {
            $('html, body').animate({
                scrollTop: 0
            }, 1000);
            $('.hamburger_button').removeClass('line-active');
            $('.navbar').removeClass('navbar-active');
        } else {
            return;
        }
    });
    $('.nav-item').on('click', function () {
        var scrolling = $(this).data('nav');
        $('html, body').animate({
            scrollTop: $(scrolling).offset().top - 135
        }, 1000);
        return false;
        $('.hamburger_button').removeClass('line-active');
        $('.navbar').removeClass('navbar-active');
    });
});