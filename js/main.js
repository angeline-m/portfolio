$(document).ready(function(){
    $(".menu-btn").click(function(e){
        $("nav").toggle();
        e.preventDefault();
    });
    $('.slides-register').slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        arrows: true,
      });
    $('.slides-mockup').slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        arrows: true,
    });
    $('.slides-reg').slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        arrows: true,
    });
    $('.slides-dashboard').slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        arrows: true,
    });
    $('.slides-dash-one').slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        arrows: true,
    });
    $('.slides-dash-two').slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        arrows: true,
    });
    $('.slides-site-public').slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        arrows: true,
    });
});