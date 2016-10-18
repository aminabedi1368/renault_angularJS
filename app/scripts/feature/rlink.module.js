(function() {
	'use strict';

	angular
		.module('barebone.rlink', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.rlink', {
				url: '/rlink',
				views: {
					'menuContent': {
						templateUrl: 'scripts/feature/rlink.html',
						controller: 'rlinkController as vm'
					}
				}
			});
		});
})();