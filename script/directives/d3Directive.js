/*global app, console*/

app.directive('d3Directive', function () {
    
    "use strict";
    
    var dataArray = [],
        i = 0,
        width = 368,
        height = 184,
        color = '#00baff',
        barOffset = 5;

    for (i; i < 20; i += 1) {
        dataArray.push(Math.floor(Math.random) * 10);
    }

    console.log(dataArray);
    
    return {
		restrict: 'E',
		scope: {
			info: '='
		},
        link: function (scope, element, attrs) {
            
            
            
        }
    };
});