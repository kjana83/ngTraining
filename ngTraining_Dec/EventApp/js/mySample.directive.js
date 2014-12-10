(function () {
    angular
       .module('eventApp')
       .directive('mySample', function () {
        return {
            template: "<div><input type='text' ng-model='myName' /> {{myName}} </div>",
            scope: {
            }
        }
    });
})();