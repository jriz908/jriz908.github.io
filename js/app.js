var app = angular.module('website', ['ngRoute', 'ngAnimate']);

app.config(function($routeProvider, $locationProvider){
  $routeProvider.when('/',{
  	controller: 'home-controller',
    templateUrl: 'views/home.html'
  })
  .when('/about',{
  	controller: 'about-controller',
  	templateUrl: 'views/about.html'
  })
  .when('/projects',{
  	controller: 'projects-controller',
  	templateUrl: 'views/projects.html'
  })
  .when('/contact',{
  	controller: 'contact-controller',
  	templateUrl: 'views/contact.html'
  })
  .otherwise({
    redirectTo: '/'
  });
  $locationProvider.html5Mode(true);
});

app.animation('.animation', function() {
  	return {
    	enter : function(element, done) {
    		stopAnimations();
    		jQuery(element).hide();
    		$("#footer").hide();
    		jQuery(element).show();
    		$("html, body").animate({ scrollTop: 0 }, 400, function(){
        		jQuery(element).children('.jumbotron').animate({'opacity': 'show', 'marginTop': -10}, 500); 
        		setTimeout(function(){ jQuery(element).children('.jumbotron').children('#me').animate({'opacity': '1', 'marginLeft': '2vw', 'marginRight': '2vw'}, 750); }, 300);
            jQuery(element).children('#welcome-video').animate({'opacity': 'show', 'marginTop': 0}, 500); 
        		$("#footer").fadeIn(500);
    		});
    	},

    	leave : function(element, done) {
    		jQuery(element).fadeOut(200);
    	}
	};
}); 