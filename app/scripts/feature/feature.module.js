(function() {
	'use strict';

	angular
		.module('barebone.feature', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.feature', {
				url: '/feature',
				views: {
					'menuContent': {
						templateUrl: 'scripts/feature/feature.html',
						controller: 'featureController as vm'
					}
				}
			});
		});
})();