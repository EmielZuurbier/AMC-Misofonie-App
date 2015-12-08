/*global app*/
app.directive("cards", function () {
    "use strict";
    
    return {
		restrict: 'E',
		scope: {},
        templateUrl: "script/directives/card.html",
        link: function (scope, element, attrs) {
            scope.addCards = function () {
                console.log("hello");
            };
        }
    };
    
    
});