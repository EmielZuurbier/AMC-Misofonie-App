/*global app, data*/

app.controller('oefeningenController', ['$scope', 'cards', 'testData',  function ($scope, cards, testData) {
    "use strict";
    cards.success(function (data) {
        $scope.cards = data.cards;
    });
    
}]);