/*global angular, $rootScope*/

var app = angular.module('misofonieApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'chart.js']);

app.config(function ($routeProvider) {
    "use strict";
    $routeProvider
        .when('/', {
            controller: 'mainController',
            templateUrl: 'views/page-home.html'
        })
        .when('/test', {
            controller: 'mainController',
            templateUrl: 'views/page-test.html'
        })
        .when('/dashboard', {
            controller: 'mainController',
            templateUrl: 'views/page-dashboard.html'
        })
        .when('/oefeningen', {
            controller: 'mainController',
            templateUrl: 'views/page-excercise.html'
        })
        .when('/bibliotheek', {
            controller: 'mainController',
            templateUrl: 'views/page-bibliotheek.html'
        })
        .when('/bibliotheek/:id', {
            controller: 'mainController',
            templateUrl: 'views/page-excercise.html'
        })
        .when('/instellingen', {
            controller: 'mainController',
            templateUrl: 'views/page-settings.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});




