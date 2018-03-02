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