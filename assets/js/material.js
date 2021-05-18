$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        //indicators: true,
        duration:150,
        padding:200,
    }, setTimeout(autoplay,4000));
});

function autoplay(){
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4000);
}