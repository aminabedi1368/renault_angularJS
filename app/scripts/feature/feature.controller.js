(function() {
	'use strict';

	angular
		.module('barebone.feature')
		.controller('featureController', featureController);

	featureController.$inject = ['$scope', 'featureController'];

	/* @ngInject */
	function featureController($scope, featureController) {
		var vm = angular.extend(this, {
			entries: featureController
			
		});

		
	}
})();