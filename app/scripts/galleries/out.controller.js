(function() {
	'use strict';

	angular
		.module('barebone.out')
		.controller('outController', outController);

	outController.$inject = ['$scope', 'outController'];

	/* @ngInject */
	function outController($scope, outController) {
		var vm = angular.extend(this, {
			entries: outController
			
		});

		
	}
})();