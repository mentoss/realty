// initialize noUiSlider.
$(".priseFilter, .areaFilter").noUiSlider({
    connect: true,
    start: [30, 60],
    range: {
        'min': 0,
        'max': 100
    }
});
$(".floorFilter").noUiSlider({
    connect: true,
    start: [3, 15],
    step: 1,
    margin: 1,
    range: {
        'min': 1,
        'max': 24

    }
});
$(".priseFilter, .floorFilter, .areaFilter").Link('lower').to('-inline-');
$(".priseFilter, .floorFilter, .areaFilter").Link('upper').to('-inline-');

 // открыть/закрыть фильтр
function facechange(objName) {
    if ($(objName).css('display') == 'none') {
        $(objName).animate({
            height: 'show'
        }, 400);
    } else {
        $(objName).animate({
            height: 'hide'
        }, 200);
    }
};

 // стилизация элементов фильтра
(function ($) {
    $(function () {
        $('input, select, checkbox').styler();
    });
})(jQuery);

// fancybox init
$(document).ready(function() {
    $(".fancybox").fancybox();
});

// phone mask
jQuery(function($){
   $(".phone-number").mask("+7 (999) 999-99-99");
});
