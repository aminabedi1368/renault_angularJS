(function() {
	'use strict';

	angular
		.module('barebone.events', [
			'ionic',
			'mwl.calendar'
		])
		.config(function($stateProvider, calendarConfigProvider) {
			window.moment.locale('en', {
				week : {
					dow : 1 // Monday is the first day of the week
				}
			});

			calendarConfigProvider.setDateFormats({
				weekDay: 'EEE'
			});

			$stateProvider
				.state('app.events', {
					url: '/events',
					views: {
						'menuContent': {
							templateUrl: 'scripts/events/events.html',
							controller: 'EventsController as vm'
						}
					}
				});
		});
})();