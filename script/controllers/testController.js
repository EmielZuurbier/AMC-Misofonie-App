/*global app, data*/

app.controller('testController', ['$scope', 'content',  function ($scope, content) {
    "use strict";
    content.success(function (data) {
        $scope.content = data;
    });
    
}]);