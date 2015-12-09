/*global angular*/

var app = angular.module('misofonieApp', ['ngRoute', 'ngAnimate', 'ngTouch', 'chart.js']);

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
        .when('/dashboard', {
            controller: 'dashboardController',
            templateUrl: 'views/page-dashboard.html'
        })
        .when('/oefeningen', {
            controller: 'oefeningenController',
            templateUrl: 'views/page-excercise.html'
        })
        .when('/info', {
            controller: 'infoController',
            templateUrl: 'views/page-info.html'
        })
        .when('/community', {
            controller: 'communityController',
            templateUrl: 'views/page-community.html'
        })
        .when('/instellingen', {
            controller: 'instellingenController',
            templateUrl: 'views/page-settings.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});