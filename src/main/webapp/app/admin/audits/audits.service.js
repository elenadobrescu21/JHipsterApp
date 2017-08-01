(function() {
    'use strict';

    angular
        .module('elenaApp')
        .factory('AuditsService', AuditsService);

    AuditsService.$inject = ['$resource'];

    function AuditsService ($resource) {
        var service = $resource('management/audits/:id', {}, {
            'get': {
                method: 'GET',
                isArray: true
            },
            'query': {
                method: 'GET',
                isArray: true,
                params: {fromDate: null, toDate: null}
            }
        });

        return service;
    }
})();
