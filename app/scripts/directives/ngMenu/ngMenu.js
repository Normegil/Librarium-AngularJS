'use strict';

var module = angular.module('librarium');

module.directive('ngMenu', function () {

    return {
        restrict: 'AEC',
        replace: 'true',
        templateUrl: 'scripts/directives/ngMenu/ngMenu.html',
        scope: {
            active: '=active'
        }
    };

});