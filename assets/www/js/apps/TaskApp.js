(function () {
	var app = angular.module('HolmesModule');

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: '/assets/www/partials/task/list.html',
				controller: 'TaskListController'
			})
			.when('/detail', {
				templateUrl: '/assets/www/partials/task/detail.html',
				controller: 'TaskDetailController'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
})();