'use strict';

var librarium = angular.module('librarium', [
    //'ngAnimate',
    //'ngSanitize',
    //'ngTouch',
    'ngResource',
    'ui.router',
    'ngGrid'
]);

librarium.config(function ($stateProvider, $urlRouterProvider) {

    var baseViewDirectory = 'views/';

    $urlRouterProvider.otherwise('/');
    $stateProvider

        .state('home', {
            url: '/',
            templateUrl: baseViewDirectory + 'main.html',
            controller:'MainCtrl'
        })

        .state('games', {
            url: '/games',
            templateUrl: baseViewDirectory + 'games.html',
            controller:'GamesList'
        });
});
