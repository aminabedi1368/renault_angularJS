(function() {
	'use strict';

	angular
		.module('barebone.events')
		.controller('EventsController', EventsController);

	EventsController.$inject = ['eventsService'];

	/* @ngInject */
	function EventsController(eventsService) {
		var vm = angular.extend(this, {
			calendarView: 'month',
			calendarDay: new Date(),
			calendarTitle: 'Events',
			onDrillDownClick: onDrillDownClick,
			events: eventsService.getEvents()
		});

		// ********************************************************************

		function onDrillDownClick() {
			return false;
		}
	}
})();