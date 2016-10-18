(function() {
	'use strict';

	angular
		.module('barebone.around')
		.factory('aroundController', aroundController);

	aroundController.$inject = [];

	/* @ngInject */
	function aroundController() {
		var data = [{
			type: 'video',
			src: 'video/a.mp4'
		}];

		return data;
	}
})();
