'use strict';

var module = angular.module('librarium');

module.controller('MainCtrl', function ($scope) {

    $scope.breadcrumb = [
        {
            url:'home',
            name:'Books'
        },
        {
            url: 'games',
            name: 'Lorem Ipsum'
        }
    ];

});