(function() {
	'use strict';

	angular
		.module('barebone.inter')
		.controller('interController', interController);

	interController.$inject = ['$scope', 'interController'];

	/* @ngInject */
	function interController($scope, interController) {
		var vm = angular.extend(this, {
			entries: interController
			
		});

		
	}
})();