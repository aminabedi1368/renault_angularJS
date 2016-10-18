(function() {
	'use strict';

	angular
		.module('barebone.detail')
		.controller('detailController', detailController);

	detailController.$inject = ['$scope', 'detailController'];

	/* @ngInject */
	function detailController($scope, detailController) {
		var vm = angular.extend(this, {
			entries: detailController
			
		});

		
	}
})();