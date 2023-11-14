$(function () {
    const arrow = $('.js-go-to-top');

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            arrow.fadeIn();
        } else {
            arrow.fadeOut();
        }
    });

    arrow.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);

        return false;
    });
});
