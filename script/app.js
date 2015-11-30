/*global angular*/

var app = angular.module('misofonieApp', ['ngRoute', 'ngAnimate', 'ngTouch']);

app.config(function ($routeProvider) {
    "use strict";
    $routeProvider
        .when('/', {
            controller: 'homeController',
            templateUrl: 'views/page-home.html'
        })
        .when('/test', {
            controller: 'testController',
            templateUrl: 'views/page-test.html'
        })
        .when('/info', {
            controller: 'infoController',
            templateUrl: 'views/page-info.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});