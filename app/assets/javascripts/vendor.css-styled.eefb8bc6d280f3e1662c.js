"use strict";
(self["webpackChunkGwaphics"] = self["webpackChunkGwaphics"] || []).push([["vendor.css-styled"],{

/***/ "./node_modules/css-styled/dist/styled.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/css-styled/dist/styled.esm.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _daybrush_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @daybrush/utils */ "./node_modules/@daybrush/utils/dist/utils.esm.js");
/*
Copyright (c) 2019 Daybrush
name: css-styled
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/css-styled.git
version: 0.1.7
*/


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

var stringHash = hash;

function getHash(str) {
  return stringHash(str).toString(36);
}
function getShadowRoot(parentElement) {
  if (parentElement.getRootNode) {
    var rootNode = parentElement.getRootNode();

    if (rootNode.nodeType === 11) {
      return rootNode;
    }
  }

  return;
}
function injectStyle(className, css, shadowRoot) {
  var style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.innerHTML = css.replace(/([^}{]*){/mg, function (all, selector) {
    return (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.splitComma)(selector).map(function (subSelector) {
      if (subSelector.indexOf(":global") > -1) {
        return subSelector.replace(/\:global/g, "");
      } else if (subSelector.indexOf(":host") > -1) {
        return "" + subSelector.replace(/\:host/g, "." + className);
      }

      return "." + className + " " + subSelector;
    }).join(", ") + "{";
  });
  (shadowRoot || document.head || document.body).appendChild(style);
  return style;
}

function styled(css) {
  var injectClassName = "rCS" + getHash(css);
  var injectCount = 0;
  var injectElement;
  return {
    className: injectClassName,
    inject: function (el) {
      var shadowRoot = getShadowRoot(el);
      var firstMount = injectCount === 0;
      var styleElement;

      if (shadowRoot || firstMount) {
        styleElement = injectStyle(injectClassName, css, shadowRoot);
      }

      if (firstMount) {
        injectElement = styleElement;
      }

      if (!shadowRoot) {
        ++injectCount;
      }

      return {
        destroy: function () {
          if (shadowRoot) {
            el.removeChild(styleElement);
            styleElement = null;
          } else {
            if (injectCount > 0) {
              --injectCount;
            }

            if (injectCount === 0 && injectElement) {
              injectElement.parentNode.removeChild(injectElement);
              injectElement = null;
            }
          }
        }
      };
    }
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);
//# sourceMappingURL=styled.esm.js.map


/***/ })

}]);
//# sourceMappingURL=vendor.css-styled.eefb8bc6d280f3e1662c.js.map