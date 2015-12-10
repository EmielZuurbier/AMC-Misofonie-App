/*global app, data*/

app.controller('bibliotheekController', ['$scope', 'cards', 'testData',  function ($scope, cards, testData) {
    "use strict";
    cards.success(function (data) {
        $scope.cards = data.cards;
    });
    
}]);