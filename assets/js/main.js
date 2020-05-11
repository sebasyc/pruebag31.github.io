$(document).ready( function () {

    $(window).scroll(function() {
		if($(this).scrollTop() > 100) {
			$('header').addClass('head-change')
		} else if ($(this).scrollTop() < 10) {
			$('header').removeClass('head-change')
		}
    })

    $('.navbar-toggler').click( function () {
        $('header').toggleClass('menu-active')
    })

    $('.smooth').click(function(){
        var target = $(this.hash)
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500)
    })
    
})