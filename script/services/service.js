/*global app, angular*/

//app.factory('cards', ['$http', function ($http) {
//    "use strict";
//    return $http.get('/script/data/library.json')
//            .success(function (data) {
//            return data;
//        })
//            .error(function (err) {
//            return err;
//        });
//}]);


app.factory('testData', ['$http', function ($http) {
    "use strict";
    return $http.get('/script/data/testData.json')
            .success(function (data) {
            return data;
        })
            .error(function (err) {
            return err;
        });
}]);


app.factory('cards', ['$http', function ($http) {
    "use strict";
    
    return {
        cardsActive: [
            { name: "Stress test", classcard: "test-", id: "1", url: "views/cards/cardTest.html", category: "Test" },
            { name: "Lijn Diagram", classcard: "result-", id: "5", url: "views/cards/cardResultLine.html", category: "Graph" },
            { name: "Oefening", classcard: "oefening-", id: "4", url: "views/cards/cardExercise.html", category: "Oefening" }
        ],
        
        cardsAll: [
            { name: "Stress test", classcard: "test-", id: "1", url: "views/cards/cardTest.html", category: "Test" },
            { name: "Info", classcard: "info-", id: "2", url: "views/cards/cardInfo.html", category: "Info" },
            { name: "Info Klein", classcard: "info-half-", id: "3", url: "views/cards/cardInfo2.html", category: "Info" },
            { name: "Oefening", classcard: "oefening-", id: "4", url: "views/cards/cardExercise.html", category: "Oefening" },
            { name: "Lijn Diagram", classcard: "result-", id: "5", url: "views/cards/cardResultLine.html", category: "Graph" },
            { name: "Taart Diagram", classcard: "result-", id: "6", url: "views/cards/cardResultPie.html", category: "Graph" },
            { name: "Staaf Diagram", classcard: "result-", id: "7", url: "views/cards/cardResultBar.html", category: "Graph" }
        ],
        
        cardOefeningen: [
            { name: "Oefening 1", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2" },
            { name: "Oefening 2", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2" },
            { name: "Oefening 3", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2" },
            { name: "Oefening 4", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2" },
            { name: "Oefening 5", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2" },
            { name: "Oefening 6", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2" },
            { name: "Oefening 7", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2" }
        ],
        
        amiLabels:
            [ "Vraag 1", "Vraag 2",  "Vraag 3",  "Vraag 4",  "Vraag 5" ],
        
        amiSeries:
            [ "Amisos Nieuw", "Amisos Oud" ],
        
        amiData:
            [ [3, 3, 2, 4, 3], [5, 4, 5, 3, 2] ],
        
        stressData:
            [ 10,  40, 10, 60 ],
        
        stressLabels:
            [ "Kalm", "Walging", "Stress", "Woede" ]
        
        
    };
    
}]);