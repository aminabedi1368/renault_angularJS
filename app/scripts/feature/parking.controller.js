(function() {
	'use strict';

	angular
		.module('barebone.parking')
		.controller('parkingController', parkingController);

	parkingController.$inject = ['$scope', 'parkingController'];

	/* @ngInject */
	function parkingController($scope, parkingController) {
		var vm = angular.extend(this, {
			entries: parkingController
			
		});

		
	}
})();