(function(){

'use strict';

   var app =  angular.module('app',['ngRoute','ui.bootstrap' ]);

   app.config(['$routeProvider',function($routeProvider){

       $routeProvider.when('/operations',{
           templateUrl: 'html/operations.html'
       }).when('/guidelines',{
           templateUrl: 'html/guidelines.html'
       }).when('/architecture',{
           templateUrl: 'html/architecture.html'
       }).when('/standards',{
           templateUrl: 'html/standards.html'
       }).when('/setup',{
           templateUrl: 'html/setup.html'
       }).when('/help',{
           templateUrl: 'html/help.html'
       }).when('/team',{
           templateUrl: 'html/team.html'
       }).when('/schedule',{
           templateUrl: 'html/schedule.html'
       }).when('/codepen',{
           templateUrl: 'html/codepen.html'
       }).otherwise({
            redirectTo:  'html/operations.html'
       });


   }]);













})();
