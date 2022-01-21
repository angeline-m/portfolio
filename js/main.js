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
    $('.slides-site-profile').slick({
        infinite: true,
        dots: true,
        adaptiveHeight: true,
        arrows: true,
    });
    $('.slideshow-art').slick({
        infinite: true,
        arrows: false,
        speed: 9000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
    });
});

function symbolToggle(item) {
    item.classList.toggle("fa-times")
}