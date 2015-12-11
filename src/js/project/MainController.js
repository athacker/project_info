/**
 * Created by AndreaThacker on 11/20/2015.
 */
(function(){

    app.controller('mainController', function($scope, $location, $uibModal ){

        var mc = this;
        //class variables
        mc.title='';
        mc.devNavigation='';

        //method interface
        mc.init = init();





        //method implmentations
        function init(){
            mc.title='Project Information';
            mc.devNavigation='operations';
            $location.url('/operations/'   );
        }


        $scope.$watch('mc.devNavigation',function(val){
            $location.url('/' + val +'/'   );
        });





         $scope.openModal = function() {
           var windowSize='lg';

            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                templateUrl: '/html/partials/navigationModal.html',
                controller: 'ModalInstanceCtrl',
                size:  windowSize
            });


        };

    });

    angular.module('app').controller('ModalInstanceCtrl', function ($scope, $uibModalInstance,$location ) {
        $scope.closeModal = function () {
            $uibModalInstance.close();
        };
        $scope.cancel = function () {
            $location.url('/operations/'   );
            $uibModalInstance.close();
        };
        $scope.$watch('devNavigation',function(val){
            $location.url('/' + val +'/'   );
        });
    });












})();
