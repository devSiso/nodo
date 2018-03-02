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
$(document).ready(function () {
    $('.hamburger_button').on('click', function (a) {
        a.stopPropagation();
        if (!$('.navbar').hasClass('navbar-active')) {
            $(document).on('click touchstart', closeOnClickOutside);
        }
        $('.hamburger_button').toggleClass('line-active');
        $('.navbar').toggleClass('navbar-active');
    });
});

var closeOnClickOutside = function (e) {
    console.log("pfv me mata");
    if ($('.navbar').hasClass('navbar-active') && $(e.target).closest('.navbar').length || $('.navbar').hasClass('navbar-active') && $(e.target).closest('.hamburger_button').length != 0 || $('.navbar').hasClass('navbar-active') && $(e.target).closest('#navbar').length != 0) return;
    if ($('.navbar').hasClass('navbar-active') && $('.hamburger_button').hasClass('line-active')) {
        $(document).off('click touchstart', closeOnClickOutside);
        $('.navbar').removeClass('navbar-active');
        $('.hamburger_button').removeClass('line-active');
    }
};
jQuery(document).ready(function ($) {
    $('#carousel-indicator-one').on('click', function () {
        $('#carousel-indicator-one').addClass('red-background-active');
        $('#carousel-indicator-two').removeClass('red-background-active');
        $('#carousel-indicator-three').removeClass('red-background-active');
    });
    $('#carousel-indicator-two').on('click', function () {
        $('#carousel-indicator-two').addClass('red-background-active');
        $('#carousel-indicator-one').removeClass('red-background-active');
        $('#carousel-indicator-three').removeClass('red-background-active');
    });
    $('#carousel-indicator-three').on('click', function () {
        $('#carousel-indicator-three').addClass('red-background-active');
        $('#carousel-indicator-two').removeClass('red-background-active');
        $('#carousel-indicator-one').removeClass('red-background-active');
    });
    $('.circle').on('click', function () {
        var position = $(this).data('position');

        $('.slide-' + position).addClass('center');
        $('.slide-' + position).removeClass('right');
        $('.slide-' + position).removeClass('left');

        $('.circle').each(function (i, item) {

            var itemPosition = $(item).data('position');
            if (position < itemPosition) {
                $('.slide-' + itemPosition).addClass('right');
                $('.slide-' + itemPosition).removeClass('center');
                $('.slide-' + itemPosition).removeClass('left');
            } else if (position > itemPosition) {
                $('.slide-' + itemPosition).addClass('left');
                $('.slide-' + itemPosition).removeClass('center');
                $('.slide-' + itemPosition).removeClass('right');
            }
        });
    });
    $('.arrow-left').on('click touchstart', function () {
        if ($('.slide-1').hasClass('center')) {
            $('#carousel-indicator-three').addClass('red-background-active');
            $('#carousel-indicator-one').removeClass('red-background-active');
            $('#carousel-indicator-two').removeClass('red-background-active');

            $('.slide-1').removeClass('center');
            $('.slide-1').removeClass('left');
            $('.slide-1').addClass('right');
            $('.slide-2').removeClass('right');
            $('.slide-2').removeClass('left');
            $('.slide-2').addClass('center');
            $('.slide-3').removeClass('left');
            $('.slide-3').removeClass('center');
            $('.slide-3').addClass('right');
        } else if ($('.slide-2').hasClass('center')) {
            $('#carousel-indicator-one').addClass('red-background-active');
            $('#carousel-indicator-three').removeClass('red-background-active');
            $('#carousel-indicator-two').removeClass('red-background-active');

            $('.slide-2').removeClass('center');
            $('.slide-2').removeClass('left');
            $('.slide-2').addClass('right');
            $('.slide-3').removeClass('right');
            $('.slide-3').removeClass('left');
            $('.slide-3').addClass('center');
            $('.slide-1').removeClass('left');
            $('.slide-1').removeClass('center');
            $('.slide-1').addClass('right');
        } else if ($('.slide-3').hasClass('center')) {
            $('#carousel-indicator-two').addClass('red-background-active');
            $('#carousel-indicator-one').removeClass('red-background-active');
            $('#carousel-indicator-three').removeClass('red-background-active');

            $('.slide-3').removeClass('center');
            $('.slide-3').removeClass('left');
            $('.slide-3').addClass('right');
            $('.slide-1').removeClass('right');
            $('.slide-1').removeClass('left');
            $('.slide-1').addClass('center');
            $('.slide-2').removeClass('left');
            $('.slide-2').removeClass('center');
            $('.slide-2').addClass('right');
        }
    });
    $('.arrow-right').on('click', function () {
        if ($('.slide-1').hasClass('center')) {
            $('#carousel-indicator-two').addClass('red-background-active');
            $('#carousel-indicator-one').removeClass('red-background-active');
            $('#carousel-indicator-three').removeClass('red-background-active');

            $('.slide-1').removeClass('center');
            $('.slide-1').removeClass('right');
            $('.slide-1').addClass('left');
            $('.slide-2').removeClass('left');
            $('.slide-2').removeClass('right');
            $('.slide-2').addClass('center');
            $('.slide-3').removeClass('right');
            $('.slide-3').removeClass('center');
            $('.slide-3').addClass('left');
        } else if ($('.slide-2').hasClass('center')) {
            $('#carousel-indicator-three').addClass('red-background-active');
            $('#carousel-indicator-one').removeClass('red-background-active');
            $('#carousel-indicator-two').removeClass('red-background-active');

            $('.slide-2').removeClass('center');
            $('.slide-2').removeClass('right');
            $('.slide-2').addClass('left');
            $('.slide-3').removeClass('left');
            $('.slide-3').removeClass('right');
            $('.slide-3').addClass('center');
            $('.slide-1').removeClass('right');
            $('.slide-1').removeClass('center');
            $('.slide-1').addClass('left');
        } else if ($('.slide-3').hasClass('center')) {
            $('#carousel-indicator-one').addClass('red-background-active');
            $('#carousel-indicator-two').removeClass('red-background-active');
            $('#carousel-indicator-three').removeClass('red-background-active');

            $('.slide-3').removeClass('center');
            $('.slide-3').removeClass('right');
            $('.slide-3').addClass('left');
            $('.slide-1').removeClass('left');
            $('.slide-1').removeClass('right');
            $('.slide-1').addClass('center');
            $('.slide-2').removeClass('right');
            $('.slide-2').removeClass('center');
            $('.slide-2').addClass('left');
        }
    });
});