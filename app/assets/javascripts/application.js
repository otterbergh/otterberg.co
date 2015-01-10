// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

$(function () {

	$('#social').click(function(e) {
		e.preventDefault();
		var icon = $(this).find('i');

		if(icon.hasClass('active')) {
			icon.removeClass('icon-cancel-circled active').addClass('icon-info-circled');
			$('.social-menu').fadeOut(200);
		}
		else {
			icon.removeClass('icon-info-circled').addClass('icon-cancel-circled active');
			$('.social-menu').fadeIn(800);
		}
	});

	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 700);
				return false;
			}
		}
	});

	$(window).scroll(function() {
		var heroHeight = $('#hero').height();

		if($(this).scrollTop() >= heroHeight) {
			if(!$('.nav-container').hasClass('active')) {
				$('.nav-container').fadeIn().addClass('active');
			}
		}
		else {
			$('.nav-container').removeClass('active');
			$('.nav-container').fadeOut();
		}
	});

	$('.nav-item').hover(function() {
		if(!!('ontouchstart' in window)){
			// Do nothing
		}
		else{
			$(this).find('.nav-label').toggle();
		}
	});

	$('#nav').on("activate.bs.scrollspy", function() {
		var sectionName = $('#nav li.active a.nav-item').text();
		if(sectionName === "Kontakt") {
			$('#social i').removeClass('icon-info-circled').addClass('icon-cancel-circled active');
			$('.social-menu').fadeIn(800);
		}
		else {
			$('#social i').removeClass('icon-cancel-circled active').addClass('icon-info-circled');
			$('.social-menu').fadeOut(200);
		}
	});

	$('.contact-form button[type=submit]').click(function(e) {
		$(this).text('Skickar...');
	});

	$('.contact-form').bind('ajax:success', function(event, data, status, xhr) {
		$('.contact-form button[type=submit]').text(data.message);
		$('.contact-form button[type=submit]').prop('disabled', 'disabled');
	});
});