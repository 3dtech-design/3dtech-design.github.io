

$(function() {
  
});

$(document).ready(function(){
	/* Mejorar el comportamiento de los enlaces internos, colapsar el men�*/
	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 400);
			/* Colapsar el men�*/
			$('.active,.dropdown,.open').removeClass('open');
			$('#navbar').removeClass('in');
			return false;
		  }  
		}
	});
	
	/* Animar los carruseles*/
		
      $('.carousel_featurette').slick({
        autoplay: true,
		autoplaySpeed: 1000,
		dots: true,
        infinite: true,
		fade: true,
		lazyLoad: 'ondemand',
		lazyLoadBuffer: 0
      });
	  
	 
	/****Animaciones de scroll****/
		
	/* Asignamos las clases correspondientes a las animaciones de lado derecho e izquierdo*/
	
	$("div.marketing div.featurette:nth-of-type(odd) > div:nth-child(1),div.marketing div.featurette:nth-of-type(even) > div:nth-child(2)").addClass('revealOnScroll fadeInRight');
	$('div.marketing div.featurette:nth-of-type(odd) > div:nth-child(2),div.marketing div.featurette:nth-of-type(even) > div:nth-child(1)').addClass('revealOnScroll fadeInLeft');
	
	var $animation_elements = $('.revealOnScroll');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = (window_top_position + window_height);
	 
	  $.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top;
		var element_bottom_position = (element_top_position + element_height);
	 
		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
			(element_top_position <= window_bottom_position)) {
		  $element.addClass('animated');
		} else {
		  $element.removeClass('animated');
		}
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	//$window.trigger('scroll');
	
});
