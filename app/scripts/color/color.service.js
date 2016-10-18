(function() {
	'use strict';

	angular
		.module('barebone.color')
		.factory('colorController', colorController);

	colorController.$inject = [];

	/* @ngInject */
	function colorController() {
		var data = [{
			title: 'talisman',
			path: 'images/image/001.jpg',
			thumb: 'images/image/111.jpg'
			
		}, {
			title: 'talisman1',
			thumb: 'images/image/222.jpg',
			path: 'images/image/002.jpg'
		}, {
			title: 'talisman2',
			thumb: 'images/image/333.jpg',
			path: 'images/image/003.jpg'
		}, {
			title: 'talisman1',
			thumb: 'images/image/444.jpg',
			path: 'images/image/004.jpg'
		}, {
			title: 'talisman1',
			thumb: 'images/image/555.jpg',
			path: 'images/image/005.jpg'
		}, {
			title: 'talisman1',
			thumb: 'images/image/666.jpg',
			path: 'images/image/006.jpg'
		}, {
			title: 'talisman1',
			thumb: 'images/image/777.jpg',
			path: 'images/image/007.jpg'
		}, {
			title: 'talisman1',
			thumb: 'images/image/888.jpg',
			path: 'images/image/008.jpg'
		}];

		return data;
	}
})();
