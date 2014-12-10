(function () {
    'use strict';

    angular
        .module('eventApp')
        .directive('integer', function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, atts, element, controller) {
                controller.$parsers.unshift(function (value) {
                    if (value) {
                        var result = /[0-9]/i.test(value);
                        console.log(value);
                        console.log(result);
                        controller.$setValidity('integer', result);
                    }
                });
            }
        }
    });
})();