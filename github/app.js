var module = angular.module('timestamp-marker-example', []);


module.factory('timestampmaker', [function () {
    var timestampmaker = {
        request: function (config) {
            config.requestTimestamp = new Date().getTime();
            return config;
        },
        response: function (response) {
            response.config.responseTimestamp = new Date().getTime();
            return response;
        }
    };
    return timestampmaker;
}]);

module.controller('ExampleController', ['$scope', '$http', function ($scope, $http) {
    $scope.requestTime = '[waiting]';
    $http.get('https://api.github.com/users/autodidactic/repos').then(function (response, data) {
        var time = response.config.responseTimestamp - response.config.requestTimestamp;
        $scope.requestTime = (time / 1000);

    });

    $http.get('https://api.github.com/users/autodidactic/repos').success(function (data) {
        
            $scope.repository = data[0].url;
         $scope.desc = data[0].description;
    });
}]);


module.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.interceptors.push('timestampmaker');

}]);
