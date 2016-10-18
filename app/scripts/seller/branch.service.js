(function() {
	'use strict';

	angular
		.module('barebone.Branch')
		.factory('BranchController', BranchController);

	BranchController.$inject = [];

	/* @ngInject */
	function BranchController() {
		var data = [{
			title: 'talisman',
			path: 'images/image/1.JPG'
			
		}, {
			title: 'talisman1',
			path: 'images/image/2.JPG'
		}, {
			title: 'talisman2',
			path: 'images/image/3.JPG'
		}];

		return data;
	}
})();
