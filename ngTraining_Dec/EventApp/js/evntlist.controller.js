(function () {
    angular
        .module('eventApp')
        .controller('EventListController',eventListController);
        
    function eventListController($scope, eventData) {
        eventData.getEvents(function (data) {
            $scope.events = data;
        });
    }
})();