
/* Mejorar el comportamiento de los enlaces internos, colarpsar el menú*/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 400);
		/* Colapsar el menú*/
		$('.active,.dropdown,.open').removeClass('open');
		$('#navbar').removeClass('in');
        return false;
      }  
    }
  });
});
$(document).ready(function(){
      $('.carousel').slick({
        //autoplay: true,
		//autoplaySpeed: 1000,
		dots: true,
        infinite: true,
		fade: true
      });
});