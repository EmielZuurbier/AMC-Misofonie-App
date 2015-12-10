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
            { name: "Video Oefening", classcard: "oefening-", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2", category: "Oefening", url: "views/cards/oefeningen/video.html" }
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
            { name: "Racket Oefening", classcard: "oefening-", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2", category: "Oefening", url: "views/cards/oefeningen/racket.html" },
            { name: "Relaxatie Geluiden", classcard: "oefening-", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2", category: "Oefening", url: "views/cards/oefeningen/relaxatie.html" },
            { name: "Ontspannings Oefening", classcard: "oefening-",  desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2", category: "Oefening", url: "views/cards/oefeningen/ontspanning.html" },
            { name: "Video Oefening", classcard: "oefening-", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2", category: "Oefening", url: "views/cards/oefeningen/video.html" },
            { name: "Beweging Oefening", classcard: "oefening-", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2", category: "Oefening", url: "views/cards/oefeningen/beweging.html" },
            { name: "Concentratie Oefening", classcard: "oefening-", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2", category: "Oefening", url: "views/cards/oefeningen/concentratie.html" },
            { name: "Laxatie Oefeningen", classcard: "oefening-", desc: "Lorum ipsum dolor amet bla bla bla sausage", likes: "2", category: "Oefening", url: "views/cards/oefeningen/laxatie.html" }
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