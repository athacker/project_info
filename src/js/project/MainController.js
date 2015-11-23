/**
 * Created by AndreaThacker on 11/20/2015.
 */
(function(){

    angular.module('app').controller('mainController', function($scope, $location){

        var mc = this;
        //class variables
        mc.title='';
        mc.devNavigation='';

        //method interface
        mc.init = init();


        //method implmentations
        function init(){
            console.log("Initialize Main Controller as mc.");
            mc.title='Project Information';
            mc.devNavigation='guidelines';
        }


        $scope.$watch('mc.devNavigation',function(val){
            console.log("Navigate to: " + val);
            $location.url('/' + val +'/'   );
        });







    });



})();
