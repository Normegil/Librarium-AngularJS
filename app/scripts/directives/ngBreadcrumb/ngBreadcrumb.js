'use strict';

var module = angular.module('librarium');

module.directive('ngBreadcrumb', function () {

    return {
        restrict: 'AEC',
        replace: 'true',
        templateUrl: 'scripts/directives/ngBreadcrumb/ngBreadcrumb.html',
        scope: {
            Items: '=feed'
        }
    };

});