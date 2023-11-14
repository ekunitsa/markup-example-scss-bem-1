import utils from '../utils/utils';
import slickConfig from '../slickConfig';

$(window).on('load', function () {
    utils.createCarousel($('.js-carousel-hero'), slickConfig.hero, 'all');

    $('.js-select2').select2({
        minimumResultsForSearch: -1
    });
});
