 /**
 * Created by AndreaThacker on 11/24/2015.
 */
app.directive('grid', function(){
    return{
        restrict: 'E',

        scope:{
            accept: '&', data: '=', title: '='
        },
        templateUrl: '/html/partials/grid.html',
        controller: function($scope  ){
            $scope.isEdit=false;

            $scope.save= function(){
                 $scope.accept();
            }

        }

    };//return


});
