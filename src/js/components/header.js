$(function () {
    const header = $('.js-header');
    const headerPlug = $('.js-header-plug');

    const stickyHeader = () => {
        const scroll = $(this).scrollTop();

        if (scroll > headerPlug.position().top) {
            header.addClass('sticky');
            headerPlug.addClass('active');
        } else {
            header.removeClass('sticky');
            headerPlug.removeClass('active');
        }
    };

    // on init
    stickyHeader();

    $(document).on('scroll', function () {
        stickyHeader();
    });
});
