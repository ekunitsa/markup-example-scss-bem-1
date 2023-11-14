module.exports = {
    blog: {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3
    },
    testimonials: {
        dots: true,
        infinite: true,
        arrows: true,
        adaptiveHeight: true,
        prevArrow: $('.js-testimonials-prev'),
        nextArrow: $('.js-testimonials-next'),
        fade: true,
        speed: 300,
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1
    },
    hero: {
        dots: true,
        infinite: true,
        arrows: true,
        fade: true,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        lazyLoad: 'ondemand',
        prevArrow: `<button type="button" class="slick-arrow slick-prev btn btn-round-invert" aria-label="Previous">
                        <svg width="10" height="15" focusable="false"><use href="./img/sprite.svg#arrow-slider-left"></use></svg>
                    </button>`,
        nextArrow: `<button type="button" class="slick-arrow slick-next btn btn-round-invert" aria-label="Next">
                        <svg width="10" height="15" focusable="false"><use href="./img/sprite.svg#arrow-slider-right"></use></svg>
                    </button>`,
        slidesToShow: 1,
        slidesToScroll: 1
    },
    latest: {
        dots: true,
        infinite: false,
        arrows: false,
        speed: 300,
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3
    }
};
