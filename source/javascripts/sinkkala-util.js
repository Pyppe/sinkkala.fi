
var sinkkala = sinkkala || {};

(function(exports, undefined) {
  "use strict";

  function parseHTML(str) {
    return $.parseHTML(str.replace(/(^ *)|( *$)/g, ""));
  }

  function createElement(str) {
    var elements = $(parseHTML(str));
    return $(_.filter(elements, function(el) {
      return el.nodeType !== 3;
    }));
  }

  function combineAll() {
    var $combination = undefined;
    _.each(arguments, function(el) {
      if ($combination) {
        $combination = $combination.add(el);
      } else {
        $combination = el;
      }
    });
    return $combination;
  }

  function parseQueryParams() {
    var qs = window.location.search;
    var params = {};
    if (qs) {
      for (var ps = qs.substring(1).split("&"); ps[0]; ps.shift()) {
        var p = ps[0].replace(/\+/g, " ").split("=");
        params[decodeURIComponent(p[0])] = p.length > 1 ? decodeURIComponent(p[1]) : true;
      }
    }
    return params;
  }

  exports.parseHTML = parseHTML;
  exports.createElement = createElement;
  exports.combineAll = combineAll;
  exports.parseQueryParams = parseQueryParams;

})(sinkkala.util = {});
