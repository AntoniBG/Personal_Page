$(document).ready(function(){
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 220 ){
			$('header').addClass('header2');
		} else {
			$('header').removeClass('header2');
		}
    });
    $(window).scroll(function(){
		if( $(this).scrollTop() > 220 ){
			$('section').addClass('section2');
		} else {
			$('section').removeClass('section2');
		}
    });
    $(window).scroll(function(){
		if( $(this).scrollTop() > 220 ){
			$('img').addClass('imgnone');
		} else {
			$('img').removeClass('imgnone');
		}
		});
		
		$(window).scroll(function(){
		if( $(this).scrollTop() > 850 ){
			$('.rdah').addClass('rdah2');
		} else {
			$('.rdah').removeClass('rdah2');
		}
		});
		$(window).scroll(function(){
		if( $(this).scrollTop() > 900 ){
			$('.rdaah').addClass('rdaah2');
		} else {
			$('.rdaah').removeClass('rdaah2');
		}
		});
		$(window).scroll(function(){
		if( $(this).scrollTop() > 950 ){
			$('.brdah').addClass('brdah2');
		} else {
			$('.brdah').removeClass('brdah2');
		}
		});
		$(window).scroll(function(){
		if( $(this).scrollTop() > 960 ){
			$('.jrdah').addClass('jrdah2');
			} else {
			$('.jrdah').removeClass('jrdah2');
		}
		});
});