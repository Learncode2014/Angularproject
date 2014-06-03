 angular.module('animateApp', ['ngSanitize']);

 function cntlr($scope, $http) {
     $scope.found = function (name) {
         $scope.namesel = name;

     };


     $http.get("http://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D%2248152%22&format=json").
     success(function (data, status, headers) {
         $scope.greeting = data.query.results.channel.item.link;
         var fore = data.query.results.channel.item.forecast;
         var js = JSON.stringify(fore);
         for (var i = 0; i < 5; i++) {
              //$scope.forecast =  fore[0].text;

         }
        $scope.forecast = js;
         $scope.low =  fore[0].low;
         $scope.high =  fore[0].high;
         $scope.title = data.query.results.channel.item.title;
         $scope.temp = data.query.results.channel.item.condition.temp;
         $scope.text = data.query.results.channel.item.condition.text;
         $scope.status = status;
     }).
     error(function (data, status) {});

 }
