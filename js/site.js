$(document).ready(function() {
		    "use strict";
		    $.vegas('slideshow', {
		        backgrounds: [
            // { src: './img/bg/nye/01312014_LURE_0097.jpg', fade: 700 },
            // { src: './img/bg/nye/01312014_LURE_0192.jpg', fade: 700 },
            // { src: './img/bg/nye/02142014_LURE_0052.jpg', fade: 700 },
            // { src: './img/bg/nye/02142014_LURE_0091.jpg', fade: 700 },
            // { src: './img/bg/nye/02212014_LURE_0089.jpg', fade: 700 },
            // { src: './img/bg/nye/12062013_LURE_0187.jpg', fade: 700 },
            // { src: './img/bg/nye/12132013_LURE_0088.jpg', fade: 700 },
            // { src: './img/bg/nye/12132013_LURE_0090.jpg', fade: 700 },
            // { src: './img/bg/nye/122192013_LURE_0153.jpg', fade: 700 }
            
            { src: './img/eventdetails/Man-on-a--Ledge-1.jpg', fade: 700 },
            { src: './img/eventdetails/Man-on-a-Ledge-4.jpg', fade: 700 },
            { src: './img/eventdetails/Raw-4.jpg', fade: 700 },
            { src: './img/eventdetails/XC1D0312.jpg', fade: 700 },
            { src: './img//eventdetails/Man-on-a-Ledge-3.jpg', fade: 700 },
            { src: './img/eventdetails/Man-on-a-Ledge-2.jpg', fade: 700 },
            { src: './img/eventdetails/Raw-3.jpg', fade: 700 }
        
            
		],
		delay: 7000 //7000 
		    })('overlay', {src: './vegas/src/overlays/07.png'});


            $('.close').on('click',function(){
                if ($("#flyer-wrapper").is(':visible')) {
                    $("#flyer-wrapper").fadeOut(300);
                    $(this).text('+');
                    $("header").css('border-bottom','1px solid #8b8b8b');
                }else{
                    $("#flyer-wrapper").fadeIn(300);
                    $(this).html('&mdash;');
                    $("header").css('border-bottom','none');
                }
                
                
            });
            
            
            
            $("ul#nav a").on('click',function(){
                $("ul#nav a").removeClass('glow');
                $(this).addClass('glow');
                
            });
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