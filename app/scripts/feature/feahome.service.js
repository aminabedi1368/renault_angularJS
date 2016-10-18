(function() {
	'use strict';

	angular
		.module('barebone.feahome')
		.factory('feahomeController', feahomeController);

	feahomeController.$inject = [];

	/* @ngInject */
	function feahomeController() {

		var data = [{
			title: 'سیستم R-Link',
			path: 'rlink',
			path_1: 'images/R-Link/1.JPG'
			
		}, {
			title: 'سیستم کمکی پارک',
			path: 'parking',
			path_1: 'images/Parking/1.jpg'
		}, {
			title: 'سیستم Multi-Sense',
			path: 'feature',
			path_1: 'images/image/Renault_Features_Perso_a.jpg'
		}, {
			title: 'امکانات دیگر',
			path: 'other',
			path_1: 'images/other/1.jpg'
		}];

		return data;
	}
		
		
	
	
})();