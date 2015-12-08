 /**
 * Created by AndreaThacker on 11/24/2015.
 */
app.directive('grid', function(){
    return{
        restrict: 'E',

        scope:{
            remove: '&', accept: '&',  data: '=', title: '='
        },
        templateUrl: '/html/partials/grid.html',
        controller: function($scope  ){
            $scope.isEdit=false;
            $scope.newItem={};

            $scope.saveNewItem=function(){
                $scope.$broadcast('show-errors-check-validity');
                if(itemform.$valid){
                    $scope.save($scope.newItem);
                }
            };

            $scope.save= function(saveItem){
              $scope.accept({item: saveItem});
            },

            $scope.delete = function(removeItem ){
                $scope.remove( {item: removeItem});
            }

            $scope.reset=function(){
                $scope.newItem={};
                $scope.$broadcast('show-errors-reset');
            };
        }

    };//return


});
