(function () {
    'use strict';

    angular
        .module('eventApp')
        .filter('duration', function () {
        return function (duration) {
            switch (duration) {
                case 1:
                    return '1 Hr';
                case 2:
                    return '2 Hrs';
                case 3:
                    return 'Half day';
                case 4:
                    return 'Full day';
            }
        }
    });
})();