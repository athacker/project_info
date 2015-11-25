/**
 * Created by AndreaThacker on 11/24/2015.
 */
angular.module('app').directive('navigation', function(){

    return{

        restrict: 'E',
        trasclude: true,
        scope:{},
        templateUrl: '/html/partials/navigation.html',
        controller:  'mainController',
        controllerAs: 'mc'






    };//return


});
