(function() {
	'use strict';

	angular
		.module('barebone.galleries')
		.controller('galleriesController', galleriesController);

	galleriesController.$inject = ['$scope', 'galleriesController'];

	/* @ngInject */
	function galleriesController($scope, galleriesController) {
		var vm = angular.extend(this, {
			entries: galleriesController
			
		});

		
	}
})();