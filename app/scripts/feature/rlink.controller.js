(function() {
	'use strict';

	angular
		.module('barebone.rlink')
		.controller('rlinkController', rlinkController);

	rlinkController.$inject = ['$scope', 'rlinkController'];

	/* @ngInject */
	function rlinkController($scope, rlinkController) {
		var vm = angular.extend(this, {
			entries: rlinkController
			
		});

		
	}
})();