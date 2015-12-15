/*global angular, app, data, d3, console, confirm, $*/

app.controller('mainController', ['$scope', 'cards', '$routeParams', '$location', '$mdToast', '$mdDialog',  function ($scope, cards, $routeParams, $location, $mdToast, $mdDialog) {
    "use strict";
   
    $scope.go = function (path) {
        $location.path(path);
    };
    
    $scope.cards = {
        all: cards.cardsAll,
        active: cards.cardsActive,
        graph: cards.cardsGraph,
        profile: cards.cardsProfiel,
        oefeningen: cards.cardOefeningen,
        oefeningenId: cards.cardOefeningenId
    };
    
    $scope.bar = {
        labels: cards.amiLabels,
        series: cards.amiSeries,
        data: cards.amiData,
        colours: cards.amiColours
    };
    
    $scope.line = {
        dates: cards.amiDates,
        data: cards.amiTotal,
        labels: cards.amiTotalLabel,
        colours: cards.amiColours
    };
    
    $scope.circle = {
        data: cards.stressData,
        labels: cards.stressLabels
    };
    
    $scope.cardsActive = cards.cardsActive;
    $scope.cards = cards.cardsAll;
    $scope.cardsGraph = cards.cardsGraph;
    $scope.cardsProfiel = cards.cardsProfiel;
    
    // OEFENINGEN
    $scope.cardOefeningen = cards.cardOefeningen;
    $scope.cardOefeningenId = cards.cardOefeningen[$routeParams.id];

    // STAAF DIAGRAM
    $scope.amiLabels = cards.amiLabels;
    $scope.amiSeries = cards.amiSeries;
    $scope.amiData = cards.amiData;
    $scope.amiColours = cards.amiColours;
    
    // LIJN DIAGRAM
    $scope.amiDates = cards.amiDates;
    $scope.amiTotal = cards.amiTotal;
    $scope.amiTotalLabel = cards.amiTotalLabel;
    
    // CIRCEL DIAGRAM
    $scope.stressData = cards.stressData;
    $scope.stressLabels = cards.stressLabels;
    
    // UPDATE AMISOS DATA
    $scope.newAmiData = [];
    $scope.updateNewAmiData = function (dataN) {
        $scope.newAmiData = $.map(dataN, function (value, index) {
            return [parseInt(value, 10)];
        });
        console.log($scope.newAmiData);
        cards.amiData[1] = cards.amiData[0];
        cards.amiData[0] = $scope.newAmiData;
        console.log(cards.amiData);
        
        $scope.newamiTotal = $scope.newAmiData.reduce(function (a, b) {
            return a + b;
        });
        cards.amiTotal[0].push($scope.newamiTotal);
        cards.amiTotal[0].shift();
        var d = new Date();
        cards.amiDates.push(d.getDate() + "/" + (d.getMonth() + 1));
        cards.amiDates.shift();
        
        console.log("newamiTotal= " + $scope.newamiTotal);
        console.log("cards.amiData= " + cards.amiData);
        console.log("cards.amiTotal= " + cards.amiTotal);
        
        $location.path('/dashboard');
    };
    
    // BEREKEN UITSLAG VAN AMISOS
    if (cards.amiTotal[0][4] <= 4) {
        $scope.result = {
            header: "0 - 4 punten: Geen misofonie.",
            body: "U vertoont geen tot enige kenmerken van misofonie. De kenmerken zijn niet zo zwaar dat het raadzaam is om hulp te zoeken."
        };
    } else if (cards.amiTotal[0][4] <= 9) {
        $scope.result = {
            header: "5 - 9 punten: Milde symptomen van misofonie.",
            body: "U vertoont lichte symptomen van misofonie. Als misofonie zich eenmaal heeft ontwikkeld is het chronisch, hoewel u er in bepaalde perioden meer last van kunt hebben dan in andere (bijvoorbeeld onder invloed van stress). Wel zouden de symptomen in de loop van de tijd kunnen verergeren; zo kan uw afkeer zich uitbreiden naar andere geluiden. Als u merkt dat dit het geval is, kan het raadzaam zijn om hulp te zoeken."
        };
    } else if (cards.amiTotal[0][4] <= 14) {
        $scope.result = {
            header: "10 - 14 punten: Middelmatige symptomen van misofonie.",
            body: "U vertoont middelmatige symptomen van misofonie. Als misofonie zich eenmaal heeft ontwikkeld is het chronisch, hoewel u er in bepaalde perioden meer last van kunt hebben dan in andere (bijvoorbeeld onder invloed van stress). Wel zouden de symptomen in de loop van de tijd kunnen verergeren; zo kan uw afkeer zich uitbreiden naar andere geluiden. Als de symptomen van misofonie u belemmeren in uw functioneren (bijvoorbeeld in uw werk en/of thuis), is het raadzaam om hulp te zoeken."
        };
    } else if (cards.amiTotal[0][4] <= 19) {
        $scope.result = {
            header: "15 - 19 punten: Ernstige symptomen van misofonie.",
            body: "U vertoont ernstige symptomen van misofonie. Waarschijnlijk belemmeren deze symptomen u in uw functioneren (bijvoorbeeld in uw werk en/of thuis). Dan is het raadzaam om hulp te zoeken."
        };
    } else if (cards.amiTotal[0][4] <= 25) {
        $scope.result = {
            header: "20 - 25 punten: Zeer ernstige symtomen van misofonie.",
            body: "U vertoont zeer ernstige symptomen van misofonie. Zeer waarschijnlijk belemmeren deze symptomen u in uw functioneren (bijvoorbeeld in uw werk en/of thuis). Dan is het raadzaam om hulp te zoeken."
        };
    }
    
    console.log(cards.amiTotal[0][4]);

    // TOASTBERICHT
    var toastShow = function (content) {
        $mdToast.show({
            template: '<md-toast><span flex>' + content + '</span></md-toast>',
            hideDelay: 1800,
            position: "top right"
        });
    };
    
    // VOEG CARD TOE AAN PAGE
    $scope.addCard = function (id) {
        $scope.cardsActive.push($scope.cards[id]);
        console.log($scope.cardsActive);
    };
    
    $scope.addOefening = function (id) {
        $scope.cardsActive.push($scope.cardOefeningenId);
        $scope.cardsProfiel.push($scope.cardOefeningenId);
        toastShow("Oefening toegevoegd aan Home");
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
    
    // LIKE TOEVOEGEN
    $scope.addLike = function ($index) {
        $scope.cardOefeningenId.likes = $scope.cardOefeningenId.likes + 1;
    };
    
}]);