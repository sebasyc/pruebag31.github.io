$(document).ready( function () {

    $(window).scroll(function() {
		if($(this).scrollTop() > 100) {
			$('header').addClass('gradient')
		} else if ($(this).scrollTop() < 10) {
			$('header').removeClass('gradient')
		}
    })
    $('.navbar-toggler').click( function () {
        $('header').toggleClass('menu-active')
    })
    
})