(function() {
	'use strict';

	angular
		.module('barebone.home')
		.factory('sliderData', sliderData);

	sliderData.$inject = [];

	/* @ngInject */
	function sliderData() {
		var data = [{
			title: 'talisman',
			path: 'images/image/1.JPG'
			
		}, {
			title: 'talisman1',
			path: 'images/image/2.PNG'
		}, {
			title: 'talisman2',
			path: 'images/image/3.JPG'
		}];

		return data;
	}
})();