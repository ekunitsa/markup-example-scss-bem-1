import { debounce } from 'lodash';

export default {
    createCarousel: function ($carousel, slickConfig, type) {
        if (type === 'all') {
            $carousel.not('.slick-initialized').slick(slickConfig);
        } else if (type === 'desktopOnly') {
            const mediaQuery = window.matchMedia('all and (min-width: 768px)');

            if (mediaQuery.matches && $carousel.length) {
                $carousel.not('.slick-initialized').slick(slickConfig);
            }

            if ($carousel.length) {
                $(window).on('resize', debounce(function () {
                    if (mediaQuery.matches) {
                        $carousel.not('.slick-initialized').slick(slickConfig);
                    } else if (!mediaQuery.matches && $carousel.hasClass('slick-initialized')) {
                        if ($carousel.hasClass('js-carousel-latest')) {
                            // custom logic for "js-carousel-latest" carousel on resize event (filters)
                            $carousel.slick('slickUnfilter');
                            $('.js-latest-btns button').removeClass('active');
                            $('.js-latest-btns button:first-child').addClass('active');
                        }

                        $carousel.slick('unslick');
                    }
                }, 100));
            }
        }
    }
};
