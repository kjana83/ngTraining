(function () {
    angular
        .module('eventApp')
        .factory('eventData', function ($q, $http) {
        return {
            getEvents: function (cb) {
                $http.get('/api/Events').success(function (data) {
                    cb(data);
                });
            },
            getEvent: function (id) {

                var referred = $q.defer();

                $http({
                    method: 'GET',
                    url: '/api/Events/' + id
                }).success(function (data, status, header, config) {
                    referred.resolve(data);
                })
                .error(function (data, status, header, config) {
                    referred.reject(data);
                })

                return referred.promise;
            }
        }
    });
})();