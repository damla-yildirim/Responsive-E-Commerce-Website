$(function(){
	$('.cart.dropdown').click(function(){
		$('.dropdown-menu').toggleClass('open');
	});

    $('.search-area>button').click(function(){
		$('.search').toggleClass('open');
	});
	$('.search').clone('true').appendTo('.mobile-search');
	$('.mobile-sticky-menu .search-toggle .mobilemenu-toggle').click(function(){
		$('.mobile-search').toggleClass('open');
		$('.mobile-menu').removeClass('open');
	});

	$('.top-nav').clone('true').appendTo('.mobile-menu');
	$('.mobile-sticky-menu .mobile-toggle .mobilemenu-toggle').click(function(){
		$('.mobile-menu').toggleClass('open');
		$('.mobile-search').removeClass('open');
	});
	$('.mobile-menu li span').click(function(){
		$(this).siblings('.sub-nav').slideToggle();
		$(this).closest('li').toggleClass('open');
	});

	$('.top .language').clone('true').appendTo('.mobile-menu');
	$('header .logo a').clone('true').prependTo('.footer-contact');

	$('.footer-nav span').click(function(){
		$(this).siblings('ul').slideToggle();
		$(this).closest('div').toggleClass('open');
	});

	$('.page-up').click(function(){
		$('html,body').stop().animate({
			scrollTop: '0'
		}, 1000);
	});
	$(window).scroll(function(){
		if($(this).scrollTop()>300){
			$('.page-up').fadeIn(500);
		}else{
			$('.page-up').fadeOut(500);
		}
		if($(this).scrollTop()>116){
			$('header .mainmenu').addClass('fixed');
		}else{
			$('header .mainmenu').removeClass('fixed');
		}
	});
});