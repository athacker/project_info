/**
 * Created by AndreaThacker on 11/24/2015.
 */
angular.module('app').directive('navigation', function(){

    return{

        restrict: 'E',
        trasclude: true,
        scope:{},
        //templateUrl: '/html/partials/navigation.html',
        templateUrl: '/html/partials/responsive_navigation.html',
        controller:  'mainController',
        controllerAs: 'mc'






    };//return


});
