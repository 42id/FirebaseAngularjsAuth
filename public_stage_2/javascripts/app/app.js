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
            templateUrl: 'partial-authenticated.html'
            
        });
    });


})();