(function() {
	'use strict';

	angular
		.module('barebone.around', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.around', {
				url: '/around',
				views: {
					'menuContent': {
						templateUrl: 'scripts/around/around.html',
						controller: 'aroundController as vm'
					}
				}
			});
		});
})();