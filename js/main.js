$(document).ready(function(){
    var paddingtop = 0; // отступ сверху при прокрутке
    var scrollspeed = 500; // время прокрутки
    
    jQuery('#scroll-bt').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#nav-bar').offset().top - paddingtop}, scrollspeed);
    });

    jQuery('#scroll-bt-1').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#scroll-bt-1').offset().top - jQuery('#scroll-bt-1').outerHeight() + 80 }, scrollspeed);
    });

    

    $('a.animated').hover( 
    function() {
        $(this).addClass('pulse'); // Добавляем класс анимации
    },
    function() {
        $(this).removeClass('pulse'); // Убираем класс
    });

});
