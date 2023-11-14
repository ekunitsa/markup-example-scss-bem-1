import utils from '../utils/utils';
import slickConfig from '../slickConfig';

$(function () {
    utils.createCarousel($('.js-carousel-latest'), slickConfig.latest, 'desktopOnly');

    const latestButtons = $('.js-latest-btns button');

    latestButtons.on('click', function () {
        const filterType = $(this).data('filter');

        latestButtons.removeClass('active');
        $(this).addClass('active');

        $('.js-carousel-latest').slick('slickUnfilter');

        if (filterType) {
            $('.js-carousel-latest').slick('slickFilter', function () {
                return $(this).find('.js-latest-item').attr('data-type') === filterType;
            });
        }
    });
});
