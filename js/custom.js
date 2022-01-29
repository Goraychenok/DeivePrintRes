$('.popup-btn').on('click',  function(event) {
    event.preventDefault();
    $('.popup').fadeIn();
    $('body').addClass('stop');
});

$(document).mouseup(function (e){ // событие клика по веб-документу
    var popup = $("#popup-dialog"); // тут указываем ID элемента
    var close = $(".popup-close");
    $('body').addClass('stop');
    if (!popup.is(e.target)// если клик был не по нашему блоку
        && popup.has(e.target).length === 0 // и не по его дочерним элементам
        || close.is(e.target)) {
        $('body').addClass('stop');
        event.preventDefault();
        $('.popup').fadeOut();
        $('body').removeClass('stop');
    }
});