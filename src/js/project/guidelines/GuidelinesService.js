/**
 * Created by AndreaThacker on 11/25/2015.
 */
app.factory('GuidelinesService',['$resource',   function($resource  ){

    return $resource('/api/guidelines.json', {}, {
        query: { method: 'GET',isArray: true }
    });
}]);
