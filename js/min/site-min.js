$(document).ready(function(){"use strict";$.vegas("slideshow",{backgrounds:[{src:"./img/eventdetails/Man-on-a--Ledge-1.jpg",fade:700},{src:"./img/eventdetails/Man-on-a-Ledge-4.jpg",fade:700},{src:"./img/eventdetails/Raw-4.jpg",fade:700},{src:"./img/eventdetails/XC1D0312.jpg",fade:700},{src:"./img//eventdetails/Man-on-a-Ledge-3.jpg",fade:700},{src:"./img/eventdetails/Man-on-a-Ledge-2.jpg",fade:700},{src:"./img/eventdetails/Raw-3.jpg",fade:700}],delay:7e3})("overlay",{src:"./vegas/src/overlays/07.png"}),$(".close").on("click",function(){$("#flyer-wrapper").is(":visible")?($("#flyer-wrapper").fadeOut(300),$(this).text("+"),$("header").css("border-bottom","1px solid #8b8b8b")):($("#flyer-wrapper").fadeIn(300),$(this).text("-"),$("header").css("border-bottom","none"))})});var myApp=angular.module("myApp",["ui.router"]);myApp.config(function(e,t){t.otherwise("/"),e.state("home",{url:"/",templateUrl:"../partials/home.html",controller:"homeController"}).state("details",{url:"/details",templateUrl:"../partials/event.html"}).state("directions",{url:"/directions",templateUrl:"../partials/directions.html"})}),myApp.controller("homeController",function(e,t,a){var r,l=new Date,o=new Date(l.getFullYear()+1,0,1),s=o.getTime()/1e3-l.getTime()/1e3;r=$(".clock").FlipClock(s,{clockFace:"DailyCounter",countdown:!0})});