(function () {
    'use strict';

    angular
        .module('eventApp', ['ngRoute'])
        .config(function ($routeProvider) {
        $routeProvider
            .when('/events', {
                templateUrl: 'template/events.html',
                controller: 'EventListController'
            })
            .when('/newEvent', {
                templateUrl: 'template/newEvent.html',
                controller: 'EditEventController'
            })
            .when('/event/:eventId', {
                foo: 'bar',
                templateUrl: 'template/event.html',
                controller: 'EventDetailsController',
                resolve: {
                    event: function () {
                    }
                }
            });
        $routeProvider.otherwise({ redirectTo: '/events' });
    });
})();