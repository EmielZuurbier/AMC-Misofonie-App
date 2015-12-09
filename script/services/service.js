/*global app*/

app.factory('settings', ['$http', function($http) {
    "use strict";
    return $http.get('/script/data/settings.json')
            .success(function (data) {
            return data;
        })
            .error(function (err) {
            return err;
        });
}]);