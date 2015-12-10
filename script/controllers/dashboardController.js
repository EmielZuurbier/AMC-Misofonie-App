/*global app, console, confirm, data*/

app.controller('dashboardController', ['$scope', 'cards', 'testData',  function ($scope, cards, testData) {
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
    
    $scope.cardsActive = [
        { name: 'Grafiek Line', classcard: 'result-', url: 'views/cards/cardResultLine.html' },
        { name: 'Grafiek Pie', classcard: 'result-', url: 'views/cards/cardResultPie.html' },
        { name: 'Grafiek Bar', classcard: 'result-', url: 'views/cards/cardResultBar.html' }
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