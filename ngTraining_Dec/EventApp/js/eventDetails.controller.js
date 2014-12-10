(function () {
    angular
        .module('eventApp')
        .controller('EventDetailsController',  eventDetailsController);
        
    eventDetailsController.$inject = ['$scope', 'eventData', '$routeParams', '$route', '$location']

    function eventDetailsController($scope, eventData, $routeParams, $route, $location) {
        $scope.sortOrder = 'name';

        $scope.reLoad = function () {
            $route.reload();
        }

        var id = $routeParams.eventId;
        eventData.getEvent(id).then(function (data) {
            $scope.event = data;
        },
        function (data) {
            console.log(data);
        });


        $scope.upVoteSession = function (session) {
            session.voteCount++;
        }

        $scope.downVoteSession = function (session) {
            session.voteCount--;
        }
    };

})();
