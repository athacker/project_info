/**
 * Created by AndreaThacker on 11/25/2015.
 */
app.factory('GuidelinesService',['$resource',   function($resource  ){

    return{
        query:$resource('/data/guidelines.json')
    };
}]);
