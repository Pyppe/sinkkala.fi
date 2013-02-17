
var sinkkala = sinkkala || {};

(function(exports, undefined) {
	"use strict";

	$(function () {
		highlightCurrentLanguage();
	});

	function highlightCurrentLanguage() {
		$('#language .'+sinkkala.lang).closest('a').addClass('selected');
	}

})(sinkkala.global = {});
