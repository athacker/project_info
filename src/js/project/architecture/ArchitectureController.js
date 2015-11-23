/**
 * Created by Andrea Thacker
 */
(function(){

    angular.module('app').controller('architectureController', function($scope ) {

        var ac = this;
        ac.title='';

        ac.init=init();

        function init(){
            console.log('Initialize the Architcture Controller as ac');
            ac.title = 'Project Architecture';

        }
    });







})();
