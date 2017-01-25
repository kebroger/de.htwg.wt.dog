/**
 * Main module of the application.
 */

angular.module('dogApp', ['ui.router', 'ui.bootstrap'])
    .config(function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'assets/htmls/home.html',
                controller: 'AuthCtrl'
            })
            .state('redirect', {
                url: '/redirect',
                templateUrl: 'assets/htmls/redirect.html',
                controller: 'RedirectCtrl'
            })
    });