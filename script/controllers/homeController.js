/*global app, data*/

app.controller('homeController', ['$scope', 'content',  function ($scope, content) {
    "use strict";
    content.success(function (data) {
        $scope.content = data.collection;
    });
    
    $scope.title = "Home";
    
}]);