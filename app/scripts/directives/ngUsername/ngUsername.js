'use strict';

var module = angular.module('librarium');

module.directive('ngUsername', function () {

    return {
        restrict: 'AEC',
        replace: 'true',
        templateUrl: 'scripts/directives/ngUsername/ngUsername.html'
    };

});