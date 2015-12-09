/*global app, console, confirm, data*/

app.controller('dashboardController', ['$scope', 'content',  function ($scope, content) {
    "use strict";
    content.success(function (data) {
        $scope.content = data.collection;
    });
    
    $scope.cardsActive = [
        { name: 'Grafiek Line', classcard: 'result-', url: 'views/cards/cardResultLine.html' },
        { name: 'Grafiek Pie', classcard: 'result-', url: 'views/cards/cardResultPie.html' }
    ];
    
    // SELECTIE VAN CARDS
    $scope.cards =
        [
            { name: 'Grafiek Line', classcard: 'result-', url: 'views/cards/cardResultLine.html' },
            { name: 'Grafiek Klein', classcard: 'result-half-', url: 'views/cards/cardResult2.html' },
            { name: 'Grafiek Pie', classcard: 'result-', url: 'views/cards/cardResultPie.html' }
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
    
    $scope.lineLabels = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli"];
    $scope.lineSeries = ['Stress', 'Oefeningen'];
    $scope.lineDataChart = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    
    $scope.pieLabels = ["Kalm", "Walging", "Woede"];
    $scope.pieDataChart = [100, 400, 600];
    
}]);