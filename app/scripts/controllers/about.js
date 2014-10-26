'use strict';

/**
 * @ngdoc function
 * @name craftyDefApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the craftyDefApp
 */
angular.module('craftyDefApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
