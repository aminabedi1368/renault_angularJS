(function() {
	'use strict';

	angular
		.module('barebone.events')
		.factory('eventsService', eventsService);

	eventsService.$inject = [];

	/* @ngInject */
	function eventsService() {
		var service = {
			getEvents: getEvents
		};
		return service;

		// *********************************************************

		function getEvents() {
			return [{
				title: ' Tomorrowland',
				type: 'info',
				startsAt: new Date(2015, 6, 25, 1),
				endsAt: new Date(2015, 6, 26, 15),
				editable: false,
				deletable: false,
				incrementsBadgeTotal: false
			}, {
				title: 'Sensation',
				type: 'important',
				startsAt: new Date(2015, 7, 6, 12),
				endsAt: new Date(2015, 7, 9, 15),
				editable: false,
				deletable: false,
				incrementsBadgeTotal: false
			}, {
				title: 'Global Gathering',
				type: 'success',
				startsAt: new Date(2015, 8, 10, 9),
				endsAt: new Date(2015, 8, 12, 21),
				editable: false,
				deletable: false,
				incrementsBadgeTotal: false
			}, {
				title: 'Electric Zoo',
				type: 'special',
				startsAt: new Date(2015, 7, 14, 12),
				endsAt: new Date(2015, 7, 15, 15),
				editable: false,
				deletable: false,
				incrementsBadgeTotal: false
			}];
		}
	}
})();
