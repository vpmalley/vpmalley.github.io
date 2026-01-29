$(function() {
    $('.progressive-load').each(function() {
        var $img = $(this);
        var highRes = $img.data('src');
        if (highRes) {
            var tempImg = new Image();
            tempImg.onload = function() {
                $img.attr('src', highRes);
                $img.addClass('loaded');
            };
            tempImg.src = highRes;
        }
    });
});
