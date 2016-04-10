var myApp = angular.module('myApp',[]);
myApp.controller('AppCtrl',['$scope','$http',function($scope,$http){
	console.log("Hello from controller");
	
	$http.get('/patientList').success(function(response) {
		console.log("got request");
		$scope.patientList = response;
	});

	
}]);