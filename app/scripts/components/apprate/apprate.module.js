(function() {
	'use strict';

	angular
		.module('barebone.apprate', [
			'ionic',
			'ngCordova'
		])
		.run(function($ionicPlatform, $cordovaAppRate) {
			$ionicPlatform.ready(function() {
				if (window.AppRate) {
					$cordovaAppRate.promptForRating();
				}
			});
		})
		.config(function($cordovaAppRateProvider, ENV) {
			document.addEventListener("deviceready", function() {
				if (window.AppRate) {
					var prefs = {
						iosURL: ENV.iosUrl,
						androidURL: ENV.androidUrl,
						usesUntilPrompt: ENV.usesUntilRatePrompt,
						promptForNewVersion: true
					};

					$cordovaAppRateProvider.setPreferences(prefs);
				}
			}, false)
		});
})();
