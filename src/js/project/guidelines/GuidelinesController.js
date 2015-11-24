/**
 * Created by Andrea Thacker
 */
(function(){
    angular.module('app').controller('guidelinesController', function($scope ) {

        /**
         * Class Variables
         */
        var gc = this;
        gc.title = '';



        /**
         * Method Interface
         */
        gc.init = init();



        /**
         * Method implementation
         */
        function init(){
          console.log("Initialize Guidelines Controller as gc");
          gc.title = 'Project Guidelines';
        }



    });

})();
