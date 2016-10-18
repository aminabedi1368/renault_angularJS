(function() {
	'use strict';

	angular
		.module('barebone.out', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.out', {
				url: '/out',
				views: {
					'menuContent': {
						templateUrl: 'scripts/galleries/out.html',
						controller: 'outController as vm'
					}
				}
			});
		});
})();