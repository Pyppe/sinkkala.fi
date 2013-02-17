/*global jQuery:true, _:true, Backbone:true, Mustache:true, vilpas:true */

var sinkkala = sinkkala || {};

(function(exports) {
	"use strict";
	var $slider = $('#frontpageSlider');
	if ($slider.length === 0) {
		return;
	}
	var template = Handlebars.compile($('#frontpageSliderTemplate').html());

	/** ON DOM READY */
	$(function () {
		createSlider();
	});

	function createSlider() {
		var dir = '/images/photo/';
		var photos = [
			img('piha01.jpg'),
			img('isokammari01.jpg'),
			img('piha02.jpg'),
			img('pienikammari01.jpg'),
			img('piha03.jpg'),
			img('pienikammari02.jpg')
		];
		sinkkala.util.createElement(template(photos)).appendTo($slider);

		setTimeout(function() {
			$('#lemmon-slider').lemmonSlider({
				infinite: true,
				loop: false
			});
		}, 500);
		/*
		$('.lemmon-slider ul li').hover(function() {
			$('.lemmon-slider ul li').not($(this)).stop().animate({
				opacity: 0.6
			}, 200);
		}, function() {
			$('.lemmon-slider ul li').stop().animate({
				opacity: 1
			});
		}, 200);
*/

		function img(filename) {
			return {
				url: '/images/photo/' + filename,
				title: sinkkala.i18n['photo.' + filename]
			};
		}
	}

})(sinkkala.frontpage = {});
