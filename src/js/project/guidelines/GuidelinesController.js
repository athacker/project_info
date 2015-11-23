/**
 * Created by Andrea Thacker
 */
(function(){
    angular.module('app').controller('guidelinesController', function($scope ) {

        var gc = this;
        gc.title = '';
        gc.init = init();


        function init(){
          console.log("Initialize Guidelines Controller as gc");
          gc.title = 'Guidelines Controller';
        };



    });

})();
