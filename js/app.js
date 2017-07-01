var app = angular.module('website', ['ngRoute', 'ngAnimate']);


app.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/',{
  	controller: 'home-controller',
    templateUrl: 'views/home.html'
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
});

/**background video**/

