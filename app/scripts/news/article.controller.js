(function() {
	'use strict';

	angular
		.module('barebone.news')
		.controller('ArticleController', ArticleController);

	ArticleController.$inject = ['$stateParams', 'newsService'];

	/* @ngInject */
	function ArticleController($stateParams, newsService) {
		var vm = angular.extend(this, {
			article: null
		});

		// ********************************************************************

		var articleId = parseInt($stateParams.articleId);
		newsService.get(articleId)
			.then(function(article) {
				vm.article = article;
			});
	}
})();