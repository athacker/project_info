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
        $scope.guidelines=[];

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
          setUpData();
         }

        /**
         * Private Methods below
         */
        function setUpData(){
            GuidelinesService.query(function(data){
                $scope.guidelines=data;
            }) ;
        }


        /**
         * set up APIS
         * needs to be on the scope for directive access.
         * @param guideline
         */
        $scope.saveGuideline = function(guideline){
            //GuidelinesService.post({"title":"1","value":"2"},function(data){
            //    console.log("Save Guidelines Return Response:" + JSON.stringify(data ) );
            //});
             $scope.guidelines.filter(function( item){
                if (item.id === guideline.id){
                    $scope.guidelines[item] = guideline;
                }
            });
        };

             
        $scope.deleteGuideline = function(guideline ){
             $scope.guidelines =  $scope.guidelines.filter(function( item){
                return item.id !== guideline.id;
            });
        };


    });

})();
