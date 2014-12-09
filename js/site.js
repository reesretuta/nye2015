$(document).ready(function() {
		    "use strict";
		    $.vegas('slideshow', {
		        backgrounds: [
                // { src: "./img/istock/legs.jpg", fade: 700},
                { src: './img/eventdetails/Man-on-a--Ledge-1.jpg', fade: 700 },
                { src: "./img/istock/man.jpg", fade: 700},
                { src: './img/eventdetails/Man-on-a-Ledge-4.jpg', fade: 700 },
                { src: "./img/istock/legs.jpg", fade: 700},
                { src: "./img/istock/dragon.jpg", fade: 700},
                { src: "./img/eventdetails/1264967_563644967022433_1511256583_o.jpg", fade: 700},
                { src: './img//eventdetails/Man-on-a-Ledge-3.jpg', fade: 700 },
                { src: "./img/istock/iStock_000032264892Medium.jpg", fade: 700},
                { src: "./img/istock/iStock_000008415355Medium.jpg", fade: 700}
            // { src: './img/eventdetails/Raw-4.jpg', fade: 700 },
            // { src: './img/eventdetails/XC1D0312.jpg', fade: 700 },
            // { src: './img/eventdetails/Man-on-a-Ledge-2.jpg', fade: 700 },
            // { src: './img/eventdetails/Raw-3.jpg', fade: 700 }
        
            
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

myApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
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
    
    $locationProvider.html5Mode(true);
    
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


myApp.run(function($rootScope, $state, $stateParams, $window, $location){
        $rootScope.$on('$stateChangeSuccess', function(event){
            if (!$window.ga) {
                return;
            }
            $window.ga('send', 'pageview', { page: $location.path(), title: $state.current.name});
            // $window.ga('send', 'pageview', { page: $location.path(), title: $state.current.title });
        });

});

// (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
// ga('create', 'UA-2834106-3', 'auto');
// ga('send', 'pageview');