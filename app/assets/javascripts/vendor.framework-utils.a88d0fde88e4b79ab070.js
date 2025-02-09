"use strict";
(self["webpackChunkGwaphics"] = self["webpackChunkGwaphics"] || []).push([["vendor.framework-utils"],{

/***/ "./node_modules/framework-utils/dist/utils.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/framework-utils/dist/utils.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Properties: () => (/* binding */ Properties),
/* harmony export */   prefixCSS: () => (/* binding */ prefixCSS),
/* harmony export */   prefixNames: () => (/* binding */ prefixNames),
/* harmony export */   ref: () => (/* binding */ ref),
/* harmony export */   refs: () => (/* binding */ refs),
/* harmony export */   withMethods: () => (/* binding */ withMethods)
/* harmony export */ });
/*
Copyright (c) 2019 Daybrush
name: framework-utils
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/framework-utils.git
version: 0.3.4
*/
function prefixNames(prefix) {
  var classNames = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    classNames[_i - 1] = arguments[_i];
  }

  return classNames.map(function (className) {
    return className.split(" ").map(function (name) {
      return name ? "" + prefix + name : "";
    }).join(" ");
  }).join(" ");
}
function prefixCSS(prefix, css) {
  return css.replace(/([^}{]*){/mg, function (_, selector) {
    return selector.replace(/\.([^{,\s\d.]+)/g, "." + prefix + "$1") + "{";
  });
}
/* react */

function ref(target, name) {
  return function (e) {
    e && (target[name] = e);
  };
}
function refs(target, name, i) {
  return function (e) {
    e && (target[name][i] = e);
  };
}
/* Class Decorator */

function Properties(properties, action) {
  return function (component) {
    var prototype = component.prototype;
    properties.forEach(function (property) {
      action(prototype, property);
    });
  };
}
/* Property Decorator */

function withMethods(methods, duplicate) {
  if (duplicate === void 0) {
    duplicate = {};
  }

  return function (prototype, propertyName) {
    methods.forEach(function (name) {
      var methodName = duplicate[name] || name;

      if (prototype[methodName]) {
        return;
      }

      prototype[methodName] = function () {
        var _a;

        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        var result = (_a = this[propertyName])[name].apply(_a, args);

        if (result === this[propertyName]) {
          return this;
        } else {
          return result;
        }
      };
    });
  };
}


//# sourceMappingURL=utils.esm.js.map


/***/ })

}]);
//# sourceMappingURL=vendor.framework-utils.a88d0fde88e4b79ab070.js.map