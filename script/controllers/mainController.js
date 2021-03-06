/*global app, data, d3, console, confirm, $*/

app.controller('mainController', ['$scope', 'cards', 'testData', '$routeParams',  function ($scope, cards, testData, $routeParams) {
    "use strict";
    
    $scope.cardsActive = cards.cardsActive;
    $scope.cards = cards.cardsAll;
    $scope.cardsProfiel = cards.cardsProfiel;
    
    $scope.cardOefeningen = cards.cardOefeningen;
    $scope.cardOefeningenId = cards.cardOefeningen[$routeParams.id];

    
    $scope.amiLabels = cards.amiLabels;
    $scope.amiSeries = cards.amiSeries;
    $scope.amiData = cards.amiData;
    $scope.stressData = cards.stressData;
    $scope.stressLabels = cards.stressLabels;

    
    // VOEG CARD TOE AAN PAGE
    $scope.addCard = function (id) {
        $scope.cardsActive.push($scope.cards[id]);
        console.log($scope.cardsActive);
    };
    
    $scope.addOefening = function (id) {
        $scope.cardsActive.push($scope.cardOefeningenId);
        $scope.cardsProfiel.push($scope.cardOefeningenId);
        console.log($scope.cardsActive);
    };
    
    
    // VERWIJDER CARD VAN PAGE
    $scope.removeCard = function ($index) {
        var removeConfirm = confirm("Wil je deze kaart verwijderen?");
        if (removeConfirm === true) {
            $scope.cardsActive.splice($index, 1);
            console.log($scope.cardsActive);
        } else {
            return;
        }
    };
    
}]);
