(function(){

  angular.module('app').controller('standardsController', function($scope){

   var sc = this;
   sc.title = 'Standards and Conventions';
   sc.standards=[];
   sc.init = init();

      function init(){
          console.log("Initialize Standards Controller as sc");
          setUpTestData();
      }

      function setUpTestData(){
          sc.standards.push({'title':'Form Validation','value':'Use Angular Form validation'});
          sc.standards.push({'title':'Naming Conventions','value':'Controllers, Services and html names should match.'});
          sc.standards.push({'title':'Variable Naming','value':'Variable and Method Names should be self documenting.'});
          sc.standards.push({'title':'Code Comments','value':'Comment your code! Grunt build target will remove these comments from production'});
          sc.standards.push({'title':'Controllers initialize method','value':'Have initialize code in all controllers. Do not leave loose code haning around in your controllers!'});
          sc.standards.push({'title':'Form Submits','value':'Disable submits until form validation has passed.'});
          sc.standards.push({'title':'Jquery','value':'Jquery lite is available in project. Try to limit use of jquery when possible.'});
          sc.standards.push({'title':'Clean Code','value':'Write clean code. Make it easier for code maintenance!!'});
          sc.standards.push({'title':'$scope','value':'Avoid having too many items on the $scope'});
          sc.standards.push({'title':'ng-repeat','value':'use $index to improve performance.'});
      }



   });



})();
