$(document).ready(function(){
    var paddingtop = 0; // отступ сверху при прокрутке
    var scrollspeed = 650; // время прокрутки
    
    jQuery('#scroll-bt').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#nav-bar').offset().top - paddingtop}, scrollspeed);
    });

    jQuery('#scroll-bt-1').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-1').outerHeight() + jQuery('#block-1').offset().top - 50 }, scrollspeed);
    });

    jQuery('#scroll-bt-2').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-2').outerHeight() + jQuery('#block-2').offset().top - 50 }, scrollspeed);
    });

    jQuery('#scroll-bt-3').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-3').outerHeight() + jQuery('#block-3').offset().top - 50 }, scrollspeed);
    });

    jQuery('#scroll-bt-4').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-4').outerHeight() + jQuery('#block-4').offset().top - 50 }, scrollspeed);
    });

    jQuery('#scroll-bt-5').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-5').outerHeight() + jQuery('#block-5').offset().top - 50 }, scrollspeed);
    });

    jQuery('#scroll-bt-6').click(function() {
        jQuery('html').animate({
        scrollTop: jQuery('#block-6').outerHeight() + jQuery('#block-6').offset().top - 50 }, scrollspeed);
    });

    
    $('#block-5').magnificPopup({
        delegate: '.pop-up-img', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
        }
        // other options
      });


    $('a.animated').hover( 
    function() {
        $(this).addClass('pulse'); // Добавляем класс анимации
    },
    function() {
        $(this).removeClass('pulse'); // Убираем класс
    });

});
