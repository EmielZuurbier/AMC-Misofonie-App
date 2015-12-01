/*global app, data*/

app.controller('instellingenController', ['$scope', 'content',  function ($scope, content) {
    "use strict";
    content.success(function (data) {
        $scope.content = data.collection;
    });
    
}]);