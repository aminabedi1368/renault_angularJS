(function() {
	'use strict';

	angular
		.module('barebone.parking')
		.factory('parkingController', parkingController);

	parkingController.$inject = [];

	/* @ngInject */
	function parkingController() {

		var data = [{
			title: 'نمای داخلی',
			path: 'پارک دوبل، حالا کاملا ساده شده! تالیسمان مجهز به سیستم پارک اتوماتیک می باشد، فقط کافیست تالیسمان خود را کنار اتومبیل دیگر قرار دهید و تالیسمان با بهره گیری از رادار پیشرفته، خودش را بصورت اتوماتیک پارک می کند. این سیستم فضا را اندازه گیری نموده و مسیر پارک را تعیین می نماید. اجازه بدهید که سیستم عملیات فرمان دادن و پارک را خود بر عهده بگیرد.',
			path_1: 'images/Parking/1.jpg'
			
		}];

		return data;
	}
		
		
	
	
})();