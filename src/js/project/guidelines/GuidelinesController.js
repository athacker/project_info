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
        gc.saveGuideline=saveGuideline();



        /**
         * Method implementation
         */
        function init(){
          console.log("Initialize Guidelines Controller as gc Service " + GuidelinesService);
          gc.title = 'Guidelines';
          setUpData();
         }

        function saveGuideline(){
            GuidelinesService.post({"title":"1","value":"2"},function(data){
                console.log("Save Guidelines Return Response:" + JSON.stringify(data ) );
            });
        }


        /**
         * Private Methods below
         */
        function setUpData(){
            GuidelinesService.query(function(data){
                 gc.guidelines=data;
            }) ;
        }



    });

})();
