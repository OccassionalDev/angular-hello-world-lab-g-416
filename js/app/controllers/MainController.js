function MainController($scope) {
  $scope.name = 'asdf';
}

angular
	.module('app')
	.controller('MainController', MainController);