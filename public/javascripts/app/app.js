(function () {

    var app = angular.module('app', ['firebase', 'ui.router'])
                     .constant('firebaseUrl', "https://popping-torch-4767.firebaseio.com/");
   
    app.config(function ($stateProvider, $urlRouterProvider, firebaseUrl) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partial-home.html'
            })

        .state('authenticated', {
            url: '/authenticated',
            templateUrl: 'partial-authenticated.html',
            resolve: {
                // controller will not be loaded until $waitForAuth resolves
                // Auth refers to our $firebaseAuth wrapper in the example above
                "currentAuth": ["$firebaseAuth", function ($firebaseAuth) {
                    // $waitForAuth returns a promise so the resolve waits for it to complete
                    var ref = new Firebase(firebaseUrl);
                    var authObj = $firebaseAuth(ref);

                    return authObj.$requireAuth();
                }]
            }
        });
    });


})();