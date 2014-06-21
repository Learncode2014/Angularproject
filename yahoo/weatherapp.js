 angular.module('animateApp', ['ngSanitize']);

 function cntlr($scope, $http) {
   $scope.found = function(name) {
     $scope.namesel = name;

   };


   $http.get("http://query.yahooapis.com/v1/public/yql?q=select%20item%20from%20weather.forecast%20where%20location%3D%2248152%22&format=json").
   success(function(data, status, headers) {
     $scope.greeting = data.query.results.channel.item.link;
     var fore = data.query.results.channel.item.forecast;

     var js = JSON.stringify(fore);
     for (var i = 0; i < 1; i++) {

       $scope.low = fore[i].low;
       $scope.high = fore[i].high;
       $scope.day = fore[i].day;
       $scope.forecast = data.query.results.channel.item.forecast[i];
     }


     $scope.imagetext = [{
       "id": 1,
       "text": "Isolated Thunderstorms",
       "img1": "https://raw.githubusercontent.com/Learncode2014/Angularproject/master/images/thunderstorms.ico"
     }, {
       "id": 2,
       "text": "Sunny",
       "img2": "https://raw.githubusercontent.com/Learncode2014/Angularproject/master/images/sunny.ico"
     }, {
       "id": 3,
       "text": "Partly Cloudy",
       "img3": "https://raw.githubusercontent.com/Learncode2014/Angularproject/master/images/cloudy.ico"
     }, {
       "id": 4,
       "text": "Thundershowers",
       "img4": "https://raw.githubusercontent.com/Learncode2014/Angularproject/master/images/thunderstorms.ico"
     }, {
       "id": 5,
       "text": "Scattered Thunderstorms",
       "img5": "https://raw.githubusercontent.com/Learncode2014/Angularproject/master/images/thunderstorms.ico"

     },
     {
       "id": 6,
       "text": "Mostly Sunny",
       "img6": "https://raw.githubusercontent.com/Learncode2014/Angularproject/master/images/sunny.ico"
     },
     {
        "id": 7,
       "text": "Showers",
       "img7": "https://raw.githubusercontent.com/Learncode2014/Angularproject/master/images/showers.ico"
   
     }];
     $scope.fiveday = data.query.results.channel.item.forecast;
     $scope.title = data.query.results.channel.item.title;
     $scope.temp = data.query.results.channel.item.condition.temp;
     $scope.text = data.query.results.channel.item.condition.text;
     $scope.status = status;
   }).
   error(function(data, status) {});

 }
