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
            $scope.databackup=[];


            //this isn't rednering fast enough!!'
            angular.copy($scope.data, $scope.databackup);

            $scope.saveNewItem=function(){
                $scope.$broadcast('show-errors-check-validity');
                if($scope.itemform.$valid){
                    $scope.save($scope.newItem);
                    $scope.addNew=false;
                }
            };

            $scope.save= function(saveItem){
              $scope.isEdit=false;
              $scope.accept({item: saveItem});
            },

            $scope.delete = function(removeItem ){
                $scope.remove( {item: removeItem});
            }
            $scope.cancel=function(){
                $scope.newItem={};
                $scope.addNew=false;
            };
            $scope.cancelEdit=function( $index ){
                $scope.data[$index].value = $scope.databackup[$index].value;
            };

            $scope.reset=function(){
                $scope.newItem={};
                $scope.$broadcast('show-errors-reset');
            };

            $scope.resetEdit=function( $index ){
               $scope.data[$index].value = $scope.databackup[$index].value;
            };
        }

    };//return


});
