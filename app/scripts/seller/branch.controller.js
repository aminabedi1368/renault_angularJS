(function() {
	'use strict';

	angular
		.module('barebone.Branch')
		.controller('BranchController', BranchController);

	BranchController.$inject = ['$scope', 'BranchController'];

	/* @ngInject */
	function BranchController($scope, BranchController) {
		var vm = angular.extend(this, {
			entries: BranchController
			
		});

		
	}
})();