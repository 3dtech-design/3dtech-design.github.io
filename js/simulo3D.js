
$(document).ready(function(){
	
	/* Mejorar el comportamiento de los enlaces internos, colapsar el menú*/
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
	
	/* Animar los carruseles*/
		
      $('.carousel_featurette').slick({
        autoplay: true,
		autoplaySpeed: 4500,
		dots: true,
        infinite: true,
		fade: true,
		lazyLoad: 'ondemand',
		lazyLoadBuffer: 0,
		mobileFirst: true
      });
	
	 /* Carrusel a pantalla completa*/
	 
	 // Botón agrandar
	 $('.carousel_featurette figure ').append("<button type='button' class='agrandar'><span class='glyphicon glyphicon-fullscreen'></span></button>");
	 botones = $('button.agrandar');
	 botones.click(function(){
		 //alert('Hola!' + ' Indice: ' + $(this).parent().attr('data-slick-index'));
		 $(document.body).append("<div class='pantalla_completa row'></div>");
		 
		indice = $(this).parent().attr('data-slick-index');		
		var carrusel = $(this).parent().parent();
		var figures = carrusel.children();
		var captions = figures.find('figcaption');
		var imagenesSrc =  Array(figures.length);
		var imagenes = figures.find('img').each(function(index){imagenesSrc [index] = $(this).attr('src') || $(this).attr('data-lazy');});	
		var newFigures =  Array(figures.length);	
		for (var i=0; i<figures.length;i++){
			newFigure  = document.createElement('figure');		
			img = document.createElement('img');
			$(img).attr('data-lazy', imagenesSrc[i]);
			$(newFigure).append(img);
			$(newFigure).append(captions[i]);
			newFigures[i] = newFigure;
		}
		$('.pantalla_completa').append(newFigures);			
		$('.pantalla_completa').slick({
			initialSlide: indice,
			autoplay: true,
			autoplaySpeed: 4500,
			dots: true,
			infinite: true,
			fade: true,
			lazyLoad: 'progressive',
			lazyLoadBuffer: 2,
			mobileFirst: true
		});
		
		$('.pantalla_completa').append("<button type='button' class='cerrar'><span class='glyphicon glyphicon-remove-circle'></span></button>");
		
		$('button.cerrar').click(function(){
				$('.pantalla_completa').slick('unslick');
				$('.pantalla_completa').remove();
		});
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
