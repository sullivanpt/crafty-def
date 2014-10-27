'use strict';

angular.module('craftyDefApp')
  .service('$craftyMock', function () {
    function noop() {
      /*jshint validthis:true */
      return this;
    }
    this.isMock = true;
    this.math = {
      randomInt: noop
    };
    this.init = noop;
    this.stop = noop;
    this.background = noop;
    this.e = noop;
    this.color = noop;
    this.attr = noop;
    this.multiway = noop;
    this.bind = noop;
    this.onHit = noop;
    this.text = noop;
  });