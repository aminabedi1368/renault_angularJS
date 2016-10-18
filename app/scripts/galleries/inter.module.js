(function() {
	'use strict';

	angular
		.module('barebone.inter', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.inter', {
				url: '/inter',
				views: {
					'menuContent': {
						templateUrl: 'scripts/galleries/inter.html',
						controller: 'interController as vm'
					}
				}
			});
		});
})();