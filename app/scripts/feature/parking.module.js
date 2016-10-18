(function() {
	'use strict';

	angular
		.module('barebone.parking', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.parking', {
				url: '/parking',
				views: {
					'menuContent': {
						templateUrl: 'scripts/feature/parking.html',
						controller: 'parkingController as vm'
					}
				}
			});
		});
})();