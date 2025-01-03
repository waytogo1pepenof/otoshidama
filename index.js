$('.otoshidama').click(function () {
    if ($(this).hasClass('start')) {
        $(this).removeClass('start').addClass('prepare');
        $('.haikei').addClass('pre-back');

    } else if ($(this).hasClass('prepare')) {
        $(this).removeClass('prepare').addClass('complete');
        $('.haikei').addClass('comp-back');
        $('.bill').addClass('entry-bill');
        $('.manu').removeClass('none')
        $('#se').get(0).play();
    }
});