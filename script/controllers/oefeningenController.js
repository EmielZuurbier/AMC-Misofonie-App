/*global app, data*/

app.controller('oefeningenController', ['$scope', 'content',  function ($scope, content) {
    "use strict";
    content.success(function (data) {
        $scope.content = data.collection;
    });
    
}]);