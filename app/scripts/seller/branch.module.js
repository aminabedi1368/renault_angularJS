(function() {
	'use strict';

	angular
		.module('barebone.Branch', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.Branch', {
				url: '/Branch',
				views: {
					'menuContent': {
						templateUrl: 'scripts/seller/branch.html',
						controller: 'BranchController as vm'
					}
				}
			});
		});
})();