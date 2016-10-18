(function() {
	'use strict';

	angular
		.module('barebone.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'جزییات فنی',
			path: 'detail',
			icon: 'ion-android-clipboard',
			Pic_path: 'images/image/7.jpg',
			Pic_info: 'تالیسمان'
			
		}, {
			title: 'امکانات',
			path: 'feahome',
			icon: 'ion-information-circled',
			Pic_path: 'images/image/3.JPG',
			Pic_info: 'ایمن در سفر'
			
		},  {
			title: 'گالری',
			path: 'galleries',
			icon: 'ion-images',
			Pic_path: 'images/image/2.jpg',
			Pic_info: 'با قیمت خوب'
			
		},{
			title: 'نمایندگی',
			path: 'Branch',
			icon: 'ion-android-compass',
			Pic_path: 'images/image/6.jpg',
			Pic_info: 'گارانتی قطعات'
			
		}, {
			title: 'رنگ ها',
			path: 'color',
			icon: 'ion-ios-color-filter',
			Pic_path: 'images/image/5.jpg',
			Pic_info: 'گارانتی قطعات'
			
		},{
			title: 'نمای کلی',
			path: 'around',
			icon: 'ion-ios-list',
			Pic_path: 'images/image/4.jpg',
			Pic_info: 'گارانتی قطعات'
			
		}];

		return data;
	}
})();