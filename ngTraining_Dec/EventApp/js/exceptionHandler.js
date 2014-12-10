(function () {
    angular
        .module('eventApp')
        .factory('myExceptionHandler', function ($exceptionHandler) {
        return function (exception) {
            console.log(exception);
        }
    });
})();