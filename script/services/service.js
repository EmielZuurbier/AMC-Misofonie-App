/*global app*/

app.factory('content', ['$http', function ($http) {
    "use strict";
    return $http.get('/script/data/library.json')
            .success(function (data) {
            return data;
        })
            .error(function (err) {
            return err;
        });
}]);