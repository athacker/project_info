/**
 * Created by AndreaThacker on 11/20/2015.
 */
(function(){

    angular.module('app').controller('mainController', function($scope, $location){

        $scope.title='Project Information';
        $scope.devNavigation='guidelines';

        $scope.$watch('devNavigation',function(val){
              $location.url('/' + $scope.devNavigation +'/'   );
        });







    });



})();
