(function () {
    angular
        .module('eventApp')
        .controller('EditEventController', function ($scope) {
        $scope.addEvent = function (event, eventForm) {
            console.log(eventForm);
            console.log(event);
        }
    });
})();