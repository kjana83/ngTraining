(function () {
    'use strict';

    angular
        .module('eventApp')
        .directive('numKeys', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs, controller) {
                console.log(scope);
                console.log(element);
                console.log(attrs);

                console.log(controller);

                element.on('keypress', function (event) {

                    console.log(event);
                    console.log(String.fromCharCode(event.keyCode));

                });
            }
        }
    });
})();