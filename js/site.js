$(document).ready(function() {
		    "use strict";
		    $.vegas('slideshow', {
		        backgrounds: [
			// { src: template_url+'/img/bg/color/1.jpg', fade: 700 },
			{ src: './img/bg/color/4.jpg', fade: 700 },
			{ src: './img/bg/color/crowd1.jpg', fade: 700 },
			{ src: './img/bg/color/crowd4.jpg', fade: 700 },
			{ src: './img/bg/color/crowd6.jpg', fade: 700 },
			{ src: './img/bg/color/crowd2.jpg', fade: 700 },
			{ src: './img/bg/color/crowd3.jpg', fade: 700 },
			{ src: './img/bg/color/5.jpg', fade: 700 },
			{ src: './img/bg/color/2.jpg', fade: 700 },
			{ src: './img/bg/color/3.jpg', fade: 700 }
		],
		delay: 7000 //7000 
		    })('overlay', {src: './vegas/src/overlays/07.png'});



            
});


var myApp = angular.module('myApp', ['ui.router']);
// For Component users, it should look like this:
// var myApp = angular.module('myApp', [require('angular-ui-router')]);

myApp.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "../partials/home.html",
        controller: 'homeController'
    })
    .state('details',{
        url:'/details',
        templateUrl: "../partials/event.html"
    })
    .state('directions',{
        url:'/directions',
        templateUrl: "../partials/directions.html"
    });
    
    // $locationProvider.html5Mode(true);
    
});

myApp.controller('homeController',function($rootScope, $scope, $stateParams){
    // $("#flyer-wrapper").slideDown(3000);
    // 
			var clock;
			// Grab the current date
			var currentDate = new Date();

			// Set some date in the future. In this case, it's always Jan 1
			var futureDate  = new Date(currentDate.getFullYear() + 1, 0, 1);

			// Calculate the difference in seconds between the future and current date
			var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

			// Instantiate a coutdown FlipClock
			clock = $('.clock').FlipClock(diff, {
				clockFace: 'DailyCounter',
				countdown: true
			});
});