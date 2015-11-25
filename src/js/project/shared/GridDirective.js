 /**
 * Created by AndreaThacker on 11/24/2015.
 */
angular.module('app').directive('grid', function(){
    return{
        restrict: 'E',
        scope:{
            data: '=', title: '='
        },
        templateUrl: '/html/partials/grid.html'
    };//return


});
