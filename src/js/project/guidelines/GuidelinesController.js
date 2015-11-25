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

        gc.guidelines=[];

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
          setUpTestData();
         }


        /**
         * TODO: replace these with service data restful calls to back end database.
         */
        function setUpTestData(){
          gc.guidelines=[{'title':'Agile', 'value':'Daily Scrums. Sprints will be in 3 week intervals, deploying into production monthly.'}];
          gc.guidelines.push( {'title':'Tests', 'value':'Protractor, Selenium, Web Driver is used for front end testing. Chai is used for javascript testing. Junit is used for DAO testing. Mokito is used for back end testing.'} );
          gc.guidelines.push( {'title':'JsHint', 'value':'Run JSHint in Grunt build scripts before all checkins.'}  );
          gc.guidelines.push( {'title':'Peer Reviews', 'value':'Peer reviews are done every iteration, before code is migrated into test. This will keep developers in the loop and up to speed.'}  );
        }




    });

})();
