(function () {
	var app = angular.module('HolmesModule');
	app.controller('TaskListController', ['$scope', '$location', function ($scope, $location) {
		var localStorageTasks = 'holmes.tasks';
		var localStorageSelectedTaskId = 'holmes.selectedTaskId';

		$scope.tasks = [];
		init();

		function init() {
			var tasks = [
				{
					id: 1,
					applicantName: "Ramon Chito Bendijo",
					address: "Address 01",
					taskStatus: 0
				},
				{
					id: 2,
					applicantName: "Franz Manalang",
					address: "Address 02",
					taskStatus: 0
				},
				{
					id: 3,
					applicantName: "Andrei Dela Cruz",
					address: "Address 03",
					taskStatus: 1
				},
				{
					id: 4,
					applicantName: "Bernadeth Arcigal",
					address: "Address 04",
					taskStatus: 3
				},
				{
					id: 5,
					applicantName: "Chris Quintana",
					address: "Address 05",
					taskStatus: 1
				},
				{
					id: 6,
					applicantName: "Jayson Valeroso",
					address: "Address 06",
					taskStatus: 3
				},
				{
					id: 7,
					applicantName: "Renz Sui",
					address: "Address 07",
					taskStatus: 0
				},
				{
					id: 8,
					applicantName: "Henry Gudez",
					address: "Address 08",
					taskStatus: 3
				},
				{
					id: 9,
					applicantName: "Carlos Tee",
					address: "Address 09",
					taskStatus: 3
				},
				{
					id: 10,
					applicantName: "Paule Cyruss See",
					address: "Address 10",
					taskStatus: 1
				}
			];

			angular.forEach(tasks, function (task) {
				if (task.taskStatus == 0) {
					task['color'] = "badge badge-success";
				}
				if (task.taskStatus == 1) {
					task['color'] = "badge badge-info";
				}
				if (task.taskStatus == 3) {
					task['color'] = "badge badge-warning";
				}
				$scope.tasks.push(task);
			});
			window.localStorage.setItem(localStorageTasks, angular.toJson($scope.tasks));
		};

		$scope.click = function () {
			window.alert('Holmes!');
		};

		$scope.selectTask = function (id) {
			window.localStorage.setItem(localStorageSelectedTaskId, id);
			$location.path('/detail');
		};



	}]);
})();