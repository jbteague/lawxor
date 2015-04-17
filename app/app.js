(function(angular) {
	
	var app = angular.module('lawxor', []);
	
	app.controller('personCtrl', ['', function($scope){
		$scope.firstName = "Brad";
		$scope.lastName = "Teague";	
	}]);


})(angular);