/*global app, angular*/


app.factory('cards', ['$http', function ($http) {
    "use strict";
    
    return {
        
        // KAARTEN AANWEZIG OP HET HOMESCHERM.
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
            { name: "Staaf Diagram", classcard: "result-", id: "7", url: "views/cards/cardResultBar.html", category: "Graph" },
            { name: "Taart Diagram", classcard: "result-", id: "6", url: "views/cards/cardResultPie.html", category: "Graph" }
        ],
        
        cardsGraph: [
            { name: "Tekst Diagram", classcard: "result-", id: "8", url: "views/cards/cardResultText.html", category: "Graph" },
            { name: "Lijn Diagram", classcard: "result-", id: "5", url: "views/cards/cardResultLine.html", category: "Graph" },
            { name: "Staaf Diagram", classcard: "result-", id: "7", url: "views/cards/cardResultBar.html", category: "Graph" },
            { name: "Taart Diagram", classcard: "result-", id: "6", url: "views/cards/cardResultPie.html", category: "Graph" }
        ],
        
        
        // OEFENINGEN DIE ZIJN TOEGEVOEGD KOMEN OP DE PROFILEPAGINA 
        cardsProfiel: [
            
        ],
        
        
        // OEFENINGEN TOTAALOVERZICHT EN KEUZES
        cardOefeningen: [
            {
                name: "Racket Oefening",
                classcard: "oefening-",
                likes: 122,
                category: "text",
                url: "views/cards/oefeningen/racket.html",
                desc: "Probeer met de racket de bal of shuttle hoog te houden. Ondertussen maakt de toeschouwer smak / kuch / snuif geluiden."
            },
            {
                name: "Achteruit tellen",
                classcard: "oefening-",
                likes: 89,
                category: "text",
                url: "views/cards/oefeningen/achteruit.html",
                desc: "Vindt een comfortabele plek waar niemand u kan storen. Tel in je hoofd van 100 tot 1. Voel je vrij om dat aantal te verhogen naar 500 of 1000, afhankelijk van de staat."
            },
            {
                name: "Brief uit de toekomst",
                classcard: "oefening-",
                likes: 33,
                category: "text",
                url: "views/cards/oefeningen/brief.html",
                desc: "Kies een moment in de toekomst (twee, vijf, tien jaar later dan nu of een ander tijdstip dat voor jou zinvol is). Schrijf de datum die je hebt gekozen boven aan je brief. Stel je voor dat de tussenliggende jaren voorbij zijn en dat je een brief aan je vroegere zelf schrijft."
            },
            {
                name: "Loslaten negatieve emotie of gedachte",
                classcard: "oefening-",
                likes: 189,
                category: "video",
                url: "views/cards/oefeningen/video.html",
                desc: "Met deze intuïtieve oefening laat je negatieve energie los"
            },
            {
                name: "Urgente Zaken",
                classcard: "oefening-",
                likes: 90,
                category: "text",
                url: "views/cards/oefeningen/urgent.html",
                desc: "Urgente zaken zijn zelden belangrijk en belangrijke zaken zelden urgent"
            },
            {
                name: "Loslaten van gedachten",
                classcard: "oefening-",
                likes: 56,
                category: "text",
                url: "views/cards/oefeningen/loslaten.html",
                desc: "Wanneer je hoofd vol zit omdat er iets vervelends is gebeurd of je je druk maakt om iets dat komen gaat kan onderstaande oefening je helpen om rustig te worden door je problemen als het ware weg te blazen."
            },
            {
                name: "Het Lichaamsanker",
                classcard: "oefening-",
                likes: 42,
                category: "text",
                url: "views/cards/oefeningen/lichaamsanker.html",
                desc: "Dit is persoonlijk één van mijn favoriete oefeningen die ik regelmatig gebruik om te ontstressen of rustig te worden. Als ik alleen ben, maar ook voor lastige gesprekken zoals een sollicitatiegesprek waarbij de spanning flink kan oplopen."
            },
            {
                name: "Geluidsoefening",
                classcard: "oefening-",
                likes: 52,
                category: "geluid",
                url: "views/cards/oefeningen/geluid.html",
                desc: "Geluidsfragment voor spierontspanning"
            }
        ],
        
        
        // DATA VOOR GRAFIEKEN
        
        // DATA STAAF DIAGRAM
        amiLabels:
            [ "Vraag 1", "Vraag 2",  "Vraag 3",  "Vraag 4",  "Vraag 5" ],
        
        amiSeries:
            [ "Amisos Recent", "Amisos Vorig" ],
        
        amiData:
            [ [3, 3, 2, 4, 3], [5, 4, 5, 3, 2] ],
        
        amiColours:
            [
                {
                    fillColor: "rgba(0, 186, 255, 0.5)",
                    strokeColor: "rgba(0, 186, 255, 0.8)",
                    pointColor: "rgba(220,220,220,0.5)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,0.8)"
                },
                {
                    fillColor: "rgba(3, 152, 208, 0.5)",
                    strokeColor: "rgba(3, 152, 208, 0.8)",
                    pointColor: "rgba(220,220,220,0.5)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,0.8)"
                },
                {
                    fillColor: "rgba(3, 114, 155, 0.5)",
                    strokeColor: "rgba(3, 114, 155, 0.8)",
                    pointColor: "rgba(220,220,220,0.5)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,0.8)"
                },
                {
                    fillColor: "rgba(2, 80, 109, 0.5)",
                    strokeColor: "rgba(2, 80, 109, 0.8)",
                    pointColor: "rgba(220,220,220,0.5)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(151,187,205,0.8)"
                }
            ],
        
        
        // DATA VOOR LIJN DIAGRAM
        amiDates:
            [ "15/3", "3/3", "12/6", "29/7", "31/9" ],
        
        amiTotal:
            [ [19, 8, 25, 21, 13] ],
        
        
        amiTotalLabel:
            [ "Totaal per sessie" ],
        
        
        // DATA CICRCEL (STRESS) DIAGRAM
        stressData:
            [ 10, 40, 10, 60 ],
        
        stressLabels:
            [ "Kalm", "Walging", "Stress", "Woede" ]
        
        
    };
    
}]);