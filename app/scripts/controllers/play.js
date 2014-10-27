'use strict';

/**
 * @ngdoc function
 * @name craftyDefApp.controller:PlayCtrl
 * @description
 * # PlayCtrl
 * Controller of the craftyDefApp
 */
angular.module('craftyDefApp')
  .controller('PlayCtrl', function ($scope, $crafty) {
    $scope.dummy = true; // TODO: what goes here?

    $crafty.init(600,300);
    $scope.$on('$destroy', function() {
      $crafty.stop(/*true*/);
    });

    $crafty.background('rgb(127,127,127)');
//Paddles
    $crafty.e('Paddle, 2D, DOM, Color, Multiway')
      .color('rgb(255,0,0)')
      .attr({ x: 20, y: 100, w: 10, h: 100 })
      .multiway(4, { W: -90, S: 90 });
    $crafty.e('Paddle, 2D, DOM, Color, Multiway')
      .color('rgb(0,255,0)')
      .attr({ x: 580, y: 100, w: 10, h: 100 })
      .multiway(4, { UP_ARROW: -90, DOWN_ARROW: 90 });
//Ball
    $crafty.e('2D, DOM, Color, Collision')
      .color('rgb(0,0,255)')
      .attr({ x: 300, y: 150, w: 10, h: 10,
        dX: $crafty.math.randomInt(2, 5),
        dY: $crafty.math.randomInt(2, 5) })
      .bind('EnterFrame', function () {
        //hit floor or roof
        if (this.y <= 0 || this.y >= 290) {
          this.dY *= -1;
        }

        if (this.x > 600) {
          this.x = 300;
          $crafty('LeftPoints').each(function () {
            this.text(++this.points + ' Points');
          });
        }
        if (this.x < 10) {
          this.x = 300;
          $crafty('RightPoints').each(function () {
            this.text(++this.points + ' Points');
          });
        }

        this.x += this.dX;
        this.y += this.dY;
      })
      .onHit('Paddle', function () {
        this.dX *= -1;
      });

//Score boards
    $crafty.e('LeftPoints, DOM, 2D, Text')
      .attr({ x: 20, y: 20, w: 100, h: 20, points: 0 })
      .text('0 Points');
    $crafty.e('RightPoints, DOM, 2D, Text')
      .attr({ x: 515, y: 20, w: 100, h: 20, points: 0 })
      .text('0 Points');

  });
