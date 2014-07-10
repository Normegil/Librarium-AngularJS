var module = angular.module('librarium');

module.service('GamesRESTService', function ($resource) {

    var baseUrl = 'http://localhost\:8080/librarium/rest/games';

    this.getAllGames = function () {
        return $resource(
            baseUrl + '/all',
            {},
            {},
            {
                query: {
                    method: 'GET',
                    isArray: true
                }
            });
    };

});