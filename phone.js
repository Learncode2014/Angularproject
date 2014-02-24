 var phonecatApp = angular.module('phonecatApp', [
   ]);

 phonecatApp.config(['$routeProvider',
 function ($routeProvider) {
     $routeProvider.
     when('/phones', {
         templateUrl: '#',
         controller: 'PhoneListCtrl'
     }).
     when('phones/:phoneId', {
         templateUrl: '#',
         controller: 'PhoneDetailCtrl'
     }).
     otherwise({
         redirectTo: '/phones'

     });
 }]);

 phonecatApp.controller('PhoneListCtrl', function ($scope) {

     $scope.phones = [{
         'name': 'Nexus S',
             "imageUrl": "https://raw.github.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/nexus-s.0.jpg",
             'snippet': 'Fast just got faster with Nexus S.',
         'age': 1
     },

     {
         "age": 2,
             "id": "motorola-defy-with-motoblur",
             "imageUrl": "https://raw.github.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/motorola-defy-with-motoblur.0.jpg",
             "name": "Motorola DEFY\u2122 with MOTOBLUR\u2122",
             "snippet": " get more out of life"
     },

     {
         "age": 3,
             "id": "Dell Streak 7",
             "imageUrl": "https://raw.github.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/dell-streak-7.0.jpg",
             "name": "Dell Streak 7",
             "snippet": "Introducing Dell™ Streak 7. Share photos, videos and movies together. It’s small                     enough to carry around, big enough to gather around."
     },

     {
         "age": 4,
             "id": "Samsung Gem™",
             "imageUrl": "https://raw.github.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/samsung-gem.0.jpg",
             "name": "Samsung Gem™",
             "snippet": "The Samsung Gem™ brings you everything more from a touch display smart phone "
     }, {
         "age": 5,
             "id": "LG Axis",
             "imageUrl": "https://raw.github.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/lg-axis.0.jpg",
             "name": "LG Axis",
             "snippet": "Android Powered, Google Maps Navigation, 5 Customizable Home Screens."
     },

     {
         "age": 6,
             "id": "DROID™ Pro by Motorola",
             "imageUrl": "https://raw.github.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/droid-2-global-by-motorola.0.jpg",
             "name": "DROID™ Pro by Motorola",
             "snippet": "The next generation of DOES."
     },

     {
         "age": 7,
             "id": "SANYO ZIO",
             "imageUrl": "https://raw.github.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/sanyo-zio.0.jpg",
             "name": "SANYO ZIO",
             "snippet": "The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value."
     },

     {
         "age": 8,
             "id": "MOTOROLA ATRIX™ 4G",
             "imageUrl": "https://raw.github.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/motorola-atrix-4g.0.jpg",
             "name": "MOTOROLA ATRIX™ 4G",
             "snippet": "MOTOROLA ATRIX 4G the world's most powerful smartphone."
     },

     {
         "age": 9,
             "id": "Samsung Showcase™ a Galaxy S™ phone",
             "imageUrl": "https://raw.github.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg",
             "name": "Samsung Showcase™ a Galaxy S™ phone",
             "snippet": "The Samsung Showcase™ delivers a cinema quality experience like you’ve never seen before."
     },


     {
         "age": 10,
             "id": "T-Mobile G2",
             "imageUrl": "https://raw.github.com/IgorMinar/angular-phonecat-tutorial/master/app/img/phones/t-mobile-mytouch-4g.0.jpg",
             "name": "T-Mobile G2",
             "snippet": "The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile's new network."
     }

     ];

 });


phonecatControllers.controller('PhoneDetailCtrl',['$scope','$routeParams',
                                                  function($scope, $routeParams){
                  $scope.phoneId = $routeParams.phoneId;
                                                  }]);
                                                      
