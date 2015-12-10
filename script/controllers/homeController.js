/*global app, data, d3, console, confirm, $*/

app.controller('homeController', ['$scope', 'cards', 'testData',  function ($scope, cards, testData) {
    "use strict";
    cards.success(function (data) {
        $scope.cards = data.cards;
    });
    testData.success(function (data) {
        $scope.lineLabels = data.lineLabels;
        $scope.lineSeries = data.lineSeries;
        $scope.lineDataChart = data.lineData;
        
        $scope.pieDataChart = data.pieData;
        $scope.pieLabels = data.pieLabels;
        
        $scope.barDataChart = data.barData;
        $scope.barLabels = data.barLabels;
        $scope.barSeries = data.barSeries;
    });
    
    
    // ACTIEVE CARDS
    $scope.cardsActive = [
        { name: 'Test', classcard: 'test-', url: 'views/cards/cardTest.html', active: true },
        { name: 'Grafiek', classcard: 'result-', url: 'views/cards/cardResultLine.html', active: true },
        { name: 'Oefening', classcard: 'oefening-', url: 'views/cards/cardExercise.html', active: true }
    ];

    
    // VOEG CARD TOE AAN HOME
    $scope.addCard = function ($index) {
        $scope.cardsActive.push($scope.cards[$index]);
        console.log($scope.cardsActive);
    };
    
    
    // VERWIJDER CARD VAN HOME
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
