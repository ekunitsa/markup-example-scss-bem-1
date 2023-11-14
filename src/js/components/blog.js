import utils from '../utils/utils';
import slickConfig from '../slickConfig';

$(function () {
    utils.createCarousel($('.js-carousel-blog'), slickConfig.blog, 'desktopOnly');
});
