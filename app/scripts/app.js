'use strict';

/**
 * @ngdoc overview
 * @name craftyDefApp
 * @description
 * # craftyDefApp
 *
 * Main module of the application.
 */
angular
  .module('craftyDefApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch',
    'ui.route'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/play', {
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($window, $rootScope) {
    $rootScope.appVersion = $window.APP_VERSION;
  });

// stubs these namespace so we can use DI for mocking
angular.module('craftyDefApp')
  .factory('$crafty', function ($window) {
    return $window.Crafty;
  });