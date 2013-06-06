(function () {
	var app = angular.module('HolmesModule');
	app.controller('TaskDetailController', ['$scope', function ($scope) {
		var localStorageTasks = 'holmes.tasks';
		var localStorageSelectedTaskId = 'holmes.selectedTaskId';

		function init() {
			var tasksFromLocalStorage = window.localStorage.getItem(localStorageTasks);
			var selectedTaskIdFromLocalStorage = window.localStorage.getItem(localStorageSelectedTaskId);

			var tasks = angular.fromJson(tasksFromLocalStorage);

			for (var index = 0; index < tasks.length; index++) {
				if (tasks[index].id == selectedTaskIdFromLocalStorage) {
					$scope.taskDetail = {
						id: tasks[index].id,
						applicantName: tasks[index].applicantName,
						address: tasks[index].address,
						taskStatus: tasks[index].taskStatus
					};
				}
			}
		};

		$scope.back = function () {
			window.history.back();
		};

		init();
	}]);
})();