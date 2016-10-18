(function() {
	'use strict';

	angular
		.module('barebone.feature')
		.factory('featureController', featureController);

	featureController.$inject = [];

	/* @ngInject */
	function featureController() {
		var data = [{
			title: 'Renault Features comfort',
			Pic_path: 'images/image/a1.jpg',
			Pic_path_1: 'images/image/a11.jpg'
		},{
			title: 'Renault Features Eco',
			Pic_path: 'images/image/a2.jpg',
			Pic_path_1: 'images/image/a22.jpg'
		},{
			title: 'Renault Features Neutral',
			Pic_path: 'images/image/Neutral_a.jpg',
			Pic_path_1: 'images/image/Neutral_b.jpg'
		},{
			title: 'Renault Features Perso',
			Pic_path: 'images/image/Renault_Features_Perso_a.jpg',
			Pic_path_1: 'images/image/Renault_Features_Perso_b.jpg'
		},{
			title: 'Renault Features Sport',
			Pic_path: 'images/image/Renault_Features_Sport_a.jpg',
			Pic_path_1: 'images/image/Renault_Features_Sport_b.jpg'
		}];

		return data;
	}
})();
