(function() {
	'use strict';

	angular
		.module('barebone.other')
		.controller('otherController', otherController);

	otherController.$inject = ['$scope', 'otherController'];

	/* @ngInject */
	function otherController($scope, otherController) {
		var vm = angular.extend(this, {
			entries: otherController
			
		});

		
	}
})();