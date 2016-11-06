var app = angular.module('mainCtrl', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http) {

	$scope.blogs = [];

	$http.get('/blogs').success(function(data, status, headers, config) {

		console.log(data);
		$scope.blogs = data;
	});

}]);