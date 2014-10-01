var app = angular.module('seedApp.controllers', []);

app.controller('NavCtrl', function($scope, $ionicSideMenuDelegate) {
  $scope.showMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  $scope.showRightMenu = function () {
    $ionicSideMenuDelegate.toggleRight();
  };
})
.controller('HomeTabCtrl', function($scope) {
});

app.directive("ex-directive", function () {
  return {
    restrict: "E",
    templateUrl: ''
  };
});
