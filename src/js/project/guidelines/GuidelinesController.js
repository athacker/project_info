/**
 * Created by Andrea Thacker
 */
(function(){
    app.controller('guidelinesController', function($scope,GuidelinesService ) {

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
          console.log("Initialize Guidelines Controller as gc Service " + GuidelinesService);
          gc.title = 'Guidelines';
          setUpTestData();
         }


        /**
         * TODO: replace these with service data restful calls to back end database.
         */
        function setUpTestData(){
          gc.guidelines = GuidelinesService.query ;
          console.log("gc.guidelines " + JSON.stringify(GuidelinesService.query));

        }




    });

})();
