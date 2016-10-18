(function() {
	'use strict';

	angular
		.module('barebone.galleries')
		.factory('galleriesController', galleriesController);

	galleriesController.$inject = [];

	/* @ngInject */
	function galleriesController() {

		var data = [{
			title: 'نمای داخلی',
			path: 'inter',
			path_1: 'images/GalleryInteriors/3.JPG'
			
		}, {
			title: 'نمای بیرونی',
			path: 'out',
			path_1: 'images/GallerExterior/2.JPG'
		}];

		return data;
	}
		
		
	
	
})();