(function() {
	'use strict';

	angular
		.module('barebone.other', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.other', {
				url: '/other',
				views: {
					'menuContent': {
						templateUrl: 'scripts/feature/other.html',
						controller: 'otherController as vm'
					}
				}
			});
		});
})();