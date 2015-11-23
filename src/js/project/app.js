(function(){

'use strict';

   var app =  angular.module('app',['ngRoute','ui.bootstrap' ]);

   app.config(['$routeProvider',function($routeProvider){

       $routeProvider.when('/guidelines',{
           templateUrl: 'html/guidelines.html'
       }).when('/standards',{
           templateUrl: 'html/standards.html'
       }).when('/architecture',{
           templateUrl: 'html/architecture.html'
       }).otherwise({
            redirectTo:  'html/guidelines.html'
       });


   }]);













})();
