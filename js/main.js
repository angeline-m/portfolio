$(document).ready(function(){
    $(".menu-btn").click(function(e){
        $("nav").toggle();
        e.preventDefault();
    });
});