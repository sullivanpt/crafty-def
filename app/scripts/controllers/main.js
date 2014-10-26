'use strict';

/**
 * @ngdoc function
 * @name craftyDefApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the craftyDefApp
 */
angular.module('craftyDefApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
