'use strict';

var module = angular.module('librarium');

module.controller('GamesList', function ($scope, $resource, GamesRESTService) {

    $scope.breadcrumb = [
        {
            url: 'games',
            name: 'Games'
        }
    ];


    $scope.myData = GamesRESTService.getAllGames().query();

    $scope.gridOptions = { data: 'myData' };
});