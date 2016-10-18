(function() {
	'use strict';

	angular
		.module('barebone.color')
		.controller('colorController', colorController);

	colorController.$inject = ['$scope', 'colorController','$ionicSlideBoxDelegate'];

	/* @ngInject */
	function colorController($scope, colorController,$ionicSlideBoxDelegate) {
		var vm = angular.extend(this, {
			entries: colorController
			
		});	
		
		$scope.slide = function(to) {
        $scope.current = to;
        $ionicSlideBoxDelegate.slide(to);
			}
    
	}
	
	
    
	
})();



  