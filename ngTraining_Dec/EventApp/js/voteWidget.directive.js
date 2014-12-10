(function () {
    'use strict';

    angular
        .module('eventApp')
        .directive('voteWidget', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'template/voteWidget.html',
            scope: {
                upvote: '&',
                downvote: '&',
                votecount: '='
            }
        }
    });
}());