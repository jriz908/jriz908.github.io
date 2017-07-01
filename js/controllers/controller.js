app.controller('home-controller', ['$scope', function($scope){
  $scope.$on("$routeChangeSuccess", function() {
    setUpHome();
  });
}]);