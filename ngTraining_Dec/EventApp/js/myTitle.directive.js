
var eventApp = angular.module('eventApp');

eventApp.directive('sessionTitle', function () {
    return {
        restrict: 'E',
        replace: true,
        template: '<div><h4 class="well-title" ng-click="toggle()">{{name}}</h4><div ng-show="showContent"  ng-transclude></div> </div>',
        transclude: true,
        scope: {
            name: '@'
        },
        controller: function ($scope) {
            $scope.showContent = true;
            $scope.toggle = function () {
                $scope.showContent = !$scope.showContent;
            }
        }

    }
});