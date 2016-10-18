(function() {
	'use strict';

	angular
		.module('barebone.products')
		.controller('ProductController', ProductController);

	ProductController.$inject = ['$scope', '$stateParams', 'productsService'];

	/* @ngInject */
	function ProductController($scope, $stateParams, productsService) {
		var vm = angular.extend(this, {
			product: null
		});

		// **********************************************

		var productId = parseInt($stateParams.productId);

		productsService.get(productId)
			.then(function(product) {
				vm.product = product;
			});
		}
})();