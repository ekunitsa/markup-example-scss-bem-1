$(function () {
    const tabLinks = $('.js-tab-link');
    const tabTargets = $('.js-tab-target');

    tabLinks.on('click', function (e) {
        e.preventDefault();
        const tabId = $(this).data('tab');

        tabLinks.removeClass('active');
        $(this).addClass('active');

        tabTargets.removeClass('active');
        $(`.js-tab-target[data-tab-target="${tabId}"]`).addClass('active');
    });
});
