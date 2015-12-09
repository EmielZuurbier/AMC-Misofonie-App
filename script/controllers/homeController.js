/*global app, data, d3, console, confirm, $*/

app.controller('homeController', ['$scope', 'content',  function ($scope, content) {
    "use strict";
    content.success(function (data) {
        $scope.content = data;
    });
    
    // ACTIEVE CARDS
    $scope.cardsActive = [
        { name: 'Test', classcard: 'test-', url: 'views/cards/cardTest.html' },
        { name: 'Grafiek', classcard: 'result-', url: 'views/cards/cardResultLine.html' },
        { name: 'Oefening', classcard: 'oefening-', url: 'views/cards/cardExercise.html' }
    ];
    
    // SELECTIE VAN CARDS
    $scope.cards =
        [
            { name: 'Test', classcard: 'test-', url: 'views/cards/cardTest.html' },
            { name: 'Info', classcard: 'info-', url: 'views/cards/cardInfo.html' },
            { name: 'Info Klein', classcard: 'info-half-', url: 'views/cards/cardInfo2.html' },
            { name: 'Oefening', classcard: 'oefening-', url: 'views/cards/cardExercise.html' },
            { name: 'Grafiek', classcard: 'result-', url: 'views/cards/cardResult.html' },
            { name: 'Grafiek Klein', classcard: 'result-half-', url: 'views/cards/cardResult2.html' }
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
    $scope.colours = [{
        fillColor: '#00baff'
    }];
}]);
