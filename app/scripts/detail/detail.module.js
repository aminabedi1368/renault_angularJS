(function() {
	'use strict';

	angular
		.module('barebone.detail', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.detail', {
				url: '/detail',
				views: {
					'menuContent': {
						templateUrl: 'scripts/detail/detail.html',
						controller: 'BranchController as vm'
					}
				}
			});
		});
})();