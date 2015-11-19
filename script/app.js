/*global angular*/

var app = angular.module('misofonieApp', ['ngRoute', 'ngAnimate', 'ngTouch']);

app.config(function ($routeProvider) {
    "use strict";
    $routeProvider
        .when('/', {
            controller: 'homeController',
            templateUrl: 'views/home.html'
        })
        .when('/test', {
            controller: 'testController',
            templateUrl: 'views/test.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});