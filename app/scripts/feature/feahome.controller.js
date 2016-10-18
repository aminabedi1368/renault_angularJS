(function() {
	'use strict';

	angular
		.module('barebone.feahome')
		.controller('feahomeController', feahomeController);

	feahomeController.$inject = ['$scope', 'feahomeController'];

	/* @ngInject */
	function feahomeController($scope, feahomeController) {
		var vm = angular.extend(this, {
			entries: feahomeController
			
		});

		
	}
})();