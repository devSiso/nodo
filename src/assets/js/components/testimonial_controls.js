jQuery(document).ready(function ($) {
    $('.circle').on('click', function () {
        $('.circle').removeClass('red-background-active');
        $(this).addClass('red-background-active');
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