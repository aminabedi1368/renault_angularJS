(function() {
	'use strict';

	angular
		.module('barebone.color', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.color', {
				url: '/color',
				views: {
					'menuContent': {
						templateUrl: 'scripts/color/color.html',
						controller: 'colorController as vm'
					}
				}
			});
		});
})();