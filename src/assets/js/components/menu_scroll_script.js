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
    $('#testimonials_button').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.testimonials-lines-area').offset().top - 150
        }, 1000);
        $('.hamburger_button').removeClass('line-active');
        $('.navbar').removeClass('navbar-active');
    });
    $('#about_button').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.about-area').offset().top - 100
        }, 1000);
        $('.hamburger_button').removeClass('line-active');
        $('.navbar').removeClass('navbar-active');
    });
    $('#services_button').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.services-area').offset().top - 100
        }, 1000);
        $('.hamburger_button').removeClass('line-active');
        $('.navbar').removeClass('navbar-active');
    });
    $('#our_work_button').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.our_work_area').offset().top - 130
        }, 1000);
        $('.hamburger_button').removeClass('line-active');
        $('.navbar').removeClass('navbar-active');
    });
    $('#contact_button').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.contacts-area').offset().top - 100
        }, 1000);
        $('.hamburger_button').removeClass('line-active');
        $('.navbar').removeClass('navbar-active');
    });
});