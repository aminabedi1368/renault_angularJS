(function() {
	'use strict';

	angular
		.module('barebone.detail')
		.factory('detailController', detailController);

	detailController.$inject = [];

	/* @ngInject */
	function detailController() {
		var data = [{
			title: 'talisman',
			path: 'images/image/1.JPG'
			
		}, {
			title: 'talisman1',
			path: 'images/image/2.JPG'
		}, {
			title: 'talisman2',
			path: 'images/image/3.JPG'
		}];

		return data;
	}
})();
