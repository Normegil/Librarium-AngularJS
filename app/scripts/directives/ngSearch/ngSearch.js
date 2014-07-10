'use strict';

var module = angular.module('librarium');

module.directive('ngSearch', function () {

    return {
        restrict: 'AEC',
        replace: 'true',
        templateUrl: 'scripts/directives/ngSearch/ngSearch.html'
    };

});