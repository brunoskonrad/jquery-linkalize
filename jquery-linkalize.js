(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(function ($) {

  var urlRegex = /((https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w|{_~:#\[\]@!$&'\(\)*+,;=} \.-]*)*\/?)/g
    , defaultOptions = {open: 'self'};

  function linkOptions(options) {
    var linkOptions = '';

    if (options.class) {
      linkOptions += 'class="' + options.class + '" ';
    }
    if (options.open == 'blank') {
      linkOptions += 'target="_blank" ';
    }

    return linkOptions;
  }

  function linkalize(element, options) {
    var html = element.html();
    element.html(
      html.replace(urlRegex, '<a href="$1" ' + linkOptions(options) + '>$1</a>')
    );
  }

  $.fn.linkalize = function(options) {
    options = $.extend({}, defaultOptions, options);
    this.each(function() {
      linkalize($(this), options);
    });
    return this;
  };
}));
