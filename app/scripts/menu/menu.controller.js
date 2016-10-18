(function() {
	'use strict';

	angular
		.module('barebone.menu')
		.controller('MenuController', MenuController);

	MenuController.$inject = [];

	/* @ngInject */
	function MenuController() {
	return {
			phoneNumber: '+306973216110',
			email: 'skounis@gmail.com',
			officeLocation: '37.7736854,-122.421034',
			facebookPage: 'https://www.facebook.com/ionicframework'
		};
	}
})();