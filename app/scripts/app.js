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
    var crafty = $window.Crafty || {};

    // patch broken Crafty.stop(true)
    crafty.shutdown = function () {
      crafty.stop();

      // manual stop(true);
      crafty.audio.remove();

      // Throw out any old objects
      crafty.viewport.reset();
      crafty('2D').each(function () {
        if (!this.has('Persist')) {
          this.destroy();
        }
      });

      angular.element(crafty.stage.elem).addClass('hide');
    };

    // patch reasonable initialization function
    crafty.startup = function (w,h) {
      crafty.init(w,h);
      angular.element(crafty.stage.elem).removeClass('hide');
    };

    return crafty;
  });
