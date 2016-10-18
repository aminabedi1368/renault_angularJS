(function() {
	'use strict';

	angular
		.module('barebone.galleries', [
			'ionic',
			'ngCordova',
			'barebone.common'
		])
		.config(function($stateProvider) {
			$stateProvider

			.state('app.galleries', {
				url: '/galleries',
				views: {
					'menuContent': {
						templateUrl: 'scripts/galleries/galleries.html',
						controller: 'galleriesController as vm'
					}
				}
			});
		});
})();