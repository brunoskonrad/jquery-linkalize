(function (global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports', 'jquery'], factory);
  } else if (typeof exports !== 'undefined') {
    factory(exports, require('jquery'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.$);
    global.jqueryLinkalize = mod.exports;
  }
})(this, function (exports, _jquery) {
  'use strict';

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _$ = _interopRequireDefault(_jquery);

  _$['default'].fn.linkalize = function () {};
});
