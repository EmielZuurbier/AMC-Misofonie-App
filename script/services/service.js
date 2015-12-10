/*global app*/

app.factory('cards', ['$http', function ($http) {
    "use strict";
    return $http.get('/script/data/library.json')
            .success(function (data) {
            return data;
        })
            .error(function (err) {
            return err;
        });
}]);


app.factory('testData', ['$http', function ($http) {
    "use strict";
    return $http.get('/script/data/testData.json')
            .success(function (data) {
            return data;
        })
            .error(function (err) {
            return err;
        });
}]);