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
    
})

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});