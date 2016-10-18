(function() {
	'use strict';

	angular
		.module('barebone.feahome', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.feahome', {
				url: '/feahome',
				views: {
					'menuContent': {
						templateUrl: 'scripts/feature/feahome.html',
						controller: 'feahomeController as vm'
					}
				}
			});
		});
})();