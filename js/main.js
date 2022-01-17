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
});