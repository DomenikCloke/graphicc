"use strict";
(self["webpackChunkGwaphics"] = self["webpackChunkGwaphics"] || []).push([["vendor.daybrush"],{

/***/ "./node_modules/@daybrush/drag/dist/drag.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@daybrush/drag/dist/drag.esm.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   drag: () => (/* binding */ setDrag)
/* harmony export */ });
/* harmony import */ var _daybrush_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @daybrush/utils */ "./node_modules/@daybrush/utils/dist/utils.esm.js");
/*
Copyright (c) 2019 Daybrush
name: @daybrush/drag
license: MIT
author: Daybrush
repository: git+https://github.com/daybrush/drag.git
version: 0.16.1
*/


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function getPinchDragPosition(clients, prevClients, startClients, startPinchClients) {
  var nowCenter = getAverageClient(clients);
  var prevCenter = getAverageClient(prevClients);
  var startCenter = getAverageClient(startPinchClients);
  var pinchClient = plueClient(startPinchClients[0], minusClient(nowCenter, startCenter));
  var pinchPrevClient = plueClient(startPinchClients[0], minusClient(prevCenter, startCenter));
  return getPosition(pinchClient, pinchPrevClient, startClients[0]);
}
function isMultiTouch(e) {
  return e.touches && e.touches.length >= 2;
}
function getPositionEvent(e) {
  if (e.touches) {
    return getClients(e.touches);
  } else {
    return [getClient(e)];
  }
}
function getPosition(client, prevClient, startClient) {
  var clientX = client.clientX,
      clientY = client.clientY;
  var prevX = prevClient.clientX,
      prevY = prevClient.clientY;
  var startX = startClient.clientX,
      startY = startClient.clientY;
  var deltaX = clientX - prevX;
  var deltaY = clientY - prevY;
  var distX = clientX - startX;
  var distY = clientY - startY;
  return {
    clientX: clientX,
    clientY: clientY,
    deltaX: deltaX,
    deltaY: deltaY,
    distX: distX,
    distY: distY
  };
}
function getDist(clients) {
  return Math.sqrt(Math.pow(clients[0].clientX - clients[1].clientX, 2) + Math.pow(clients[0].clientY - clients[1].clientY, 2));
}
function getPositions(clients, prevClients, startClients) {
  return clients.map(function (client, i) {
    return getPosition(client, prevClients[i], startClients[i]);
  });
}
function getClients(touches) {
  var length = Math.min(touches.length, 2);
  var clients = [];

  for (var i = 0; i < length; ++i) {
    clients.push(getClient(touches[i]));
  }

  return clients;
}
function getClient(e) {
  return {
    clientX: e.clientX,
    clientY: e.clientY
  };
}
function getAverageClient(clients) {
  if (clients.length === 1) {
    return clients[0];
  }

  return {
    clientX: (clients[0].clientX + clients[1].clientX) / 2,
    clientY: (clients[0].clientY + clients[1].clientY) / 2
  };
}
function plueClient(client1, client2) {
  return {
    clientX: client1.clientX + client2.clientX,
    clientY: client1.clientY + client2.clientY
  };
}
function minusClient(client1, client2) {
  return {
    clientX: client1.clientX - client2.clientX,
    clientY: client1.clientY - client2.clientY
  };
}

/**
 * You can set up drag events in any browser.
 */

var Dragger =
/*#__PURE__*/
function () {
  /**
   *
   */
  function Dragger(targets, options) {
    var _this = this;

    if (options === void 0) {
      options = {};
    }

    this.options = {};
    this.flag = false;
    this.pinchFlag = false;
    this.datas = {};
    this.isDrag = false;
    this.isPinch = false;
    this.isMouse = false;
    this.isTouch = false;
    this.prevClients = [];
    this.startClients = [];
    this.movement = 0;
    this.startPinchClients = [];
    this.startDistance = 0;
    this.customDist = [0, 0];
    this.targets = [];
    this.prevTime = 0;
    this.isDouble = false;
    /**
     * @method
     */

    this.onDragStart = function (e) {
      if (!_this.flag && e.cancelable === false) {
        return;
      }

      var _a = _this.options,
          container = _a.container,
          pinchOutside = _a.pinchOutside,
          dragstart = _a.dragstart,
          preventRightClick = _a.preventRightClick,
          preventDefault = _a.preventDefault;
      var isTouch = _this.isTouch;

      if (!_this.flag && isTouch && pinchOutside) {
        setTimeout(function () {
          (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.addEvent)(container, "touchstart", _this.onDragStart);
        });
      }

      if (_this.flag && isTouch && pinchOutside) {
        (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(container, "touchstart", _this.onDragStart);
      }

      if (isMultiTouch(e)) {
        if (!_this.flag && e.touches.length !== e.changedTouches.length) {
          return;
        }

        if (!_this.pinchFlag) {
          _this.onPinchStart(e);
        }
      }

      if (_this.flag) {
        return;
      }

      var clients = _this.startClients[0] ? _this.startClients : getPositionEvent(e);
      _this.customDist = [0, 0];
      _this.flag = true;
      _this.isDrag = false;
      _this.startClients = clients;
      _this.prevClients = clients;
      _this.datas = {};
      _this.movement = 0;
      var position = getPosition(clients[0], _this.prevClients[0], _this.startClients[0]);

      if (preventRightClick && (e.which === 3 || e.button === 2) || (dragstart && dragstart(__assign({
        type: "dragstart",
        datas: _this.datas,
        inputEvent: e
      }, position))) === false) {
        _this.startClients = [];
        _this.prevClients = [];
        _this.flag = false;
      }

      _this.isDouble = (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.now)() - _this.prevTime < 200;
      _this.flag && preventDefault && e.preventDefault();
    };

    this.onDrag = function (e, isScroll) {
      if (!_this.flag) {
        return;
      }

      var clients = getPositionEvent(e);

      if (_this.pinchFlag) {
        _this.onPinch(e, clients);
      }

      var result = _this.move([0, 0], e, clients);

      if (!result || !result.deltaX && !result.deltaY) {
        return;
      }

      var drag = _this.options.drag;
      drag && drag(__assign({}, result, {
        isScroll: !!isScroll,
        inputEvent: e
      }));
    };

    this.onDragEnd = function (e) {
      if (!_this.flag) {
        return;
      }

      var _a = _this.options,
          dragend = _a.dragend,
          pinchOutside = _a.pinchOutside,
          container = _a.container;

      if (_this.isTouch && pinchOutside) {
        (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(container, "touchstart", _this.onDragStart);
      }

      if (_this.pinchFlag) {
        _this.onPinchEnd(e);
      }

      _this.flag = false;
      var prevClients = _this.prevClients;
      var startClients = _this.startClients;
      var position = _this.pinchFlag ? getPinchDragPosition(prevClients, prevClients, startClients, _this.startPinchClients) : getPosition(prevClients[0], prevClients[0], startClients[0]);
      var currentTime = (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.now)();
      var isDouble = !_this.isDrag && _this.isDouble;
      _this.prevTime = _this.isDrag || isDouble ? 0 : currentTime;
      _this.startClients = [];
      _this.prevClients = [];
      dragend && dragend(__assign({
        type: "dragend",
        datas: _this.datas,
        isDouble: isDouble,
        isDrag: _this.isDrag,
        inputEvent: e
      }, position));
    };

    var elements = [].concat(targets);
    this.options = __assign({
      container: elements.length > 1 ? window : elements[0],
      preventRightClick: true,
      preventDefault: true,
      pinchThreshold: 0,
      events: ["touch", "mouse"]
    }, options);
    var _a = this.options,
        container = _a.container,
        events = _a.events;
    this.isTouch = events.indexOf("touch") > -1;
    this.isMouse = events.indexOf("mouse") > -1;
    this.customDist = [0, 0];
    this.targets = elements;

    if (this.isMouse) {
      elements.forEach(function (el) {
        (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, "mousedown", _this.onDragStart);
      });
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.addEvent)(container, "mousemove", this.onDrag);
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.addEvent)(container, "mouseup", this.onDragEnd);
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.addEvent)(container, "contextmenu", this.onDragEnd);
    }

    if (this.isTouch) {
      var passive_1 = {
        passive: false
      };
      elements.forEach(function (el) {
        (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.addEvent)(el, "touchstart", _this.onDragStart, passive_1);
      });
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.addEvent)(container, "touchmove", this.onDrag, passive_1);
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.addEvent)(container, "touchend", this.onDragEnd, passive_1);
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.addEvent)(container, "touchcancel", this.onDragEnd, passive_1);
    }
  }
  /**
   *
   */


  var __proto = Dragger.prototype;

  __proto.isDragging = function () {
    return this.isDrag;
  };
  /**
   *
   */


  __proto.isFlag = function () {
    return this.flag;
  };
  /**
   *
   */


  __proto.isPinchFlag = function () {
    return this.pinchFlag;
  };
  /**
   *
   */


  __proto.isPinching = function () {
    return this.isPinch;
  };
  /**
   *
   */


  __proto.scrollBy = function (deltaX, deltaY, e, isCallDrag) {
    if (isCallDrag === void 0) {
      isCallDrag = true;
    }

    if (!this.flag) {
      return;
    }

    this.startClients.forEach(function (client) {
      client.clientX -= deltaX;
      client.clientY -= deltaY;
    });
    this.prevClients.forEach(function (client) {
      client.clientX -= deltaX;
      client.clientY -= deltaY;
    });
    isCallDrag && this.onDrag(e, true);
  };

  __proto.move = function (_a, inputEvent, clients) {
    var deltaX = _a[0],
        deltaY = _a[1];

    if (clients === void 0) {
      clients = this.prevClients;
    }

    var customDist = this.customDist;
    var prevClients = this.prevClients;
    var startClients = this.startClients;
    var position = this.pinchFlag ? getPinchDragPosition(clients, prevClients, startClients, this.startPinchClients) : getPosition(clients[0], prevClients[0], startClients[0]);
    customDist[0] += deltaX;
    customDist[1] += deltaY;
    position.deltaX += deltaX;
    position.deltaY += deltaY;
    var positionDeltaX = position.deltaX,
        positionDeltaY = position.deltaY;
    position.distX += customDist[0];
    position.distY += customDist[1];
    this.movement += Math.sqrt(positionDeltaX * positionDeltaX + positionDeltaY * positionDeltaY);
    this.prevClients = clients;
    this.isDrag = true;
    return __assign({
      type: "drag",
      datas: this.datas
    }, position, {
      movement: this.movement,
      isDrag: this.isDrag,
      isPinch: this.isPinch,
      isScroll: false,
      inputEvent: inputEvent
    });
  };

  __proto.onPinchStart = function (e) {
    var _a, _b;

    var _c = this.options,
        pinchstart = _c.pinchstart,
        pinchThreshold = _c.pinchThreshold;

    if (this.isDrag && this.movement > pinchThreshold) {
      return;
    }

    var pinchClients = getClients(e.changedTouches);
    this.pinchFlag = true;

    (_a = this.startClients).push.apply(_a, pinchClients);

    (_b = this.prevClients).push.apply(_b, pinchClients);

    this.startDistance = getDist(this.prevClients);
    this.startPinchClients = this.prevClients.slice();

    if (!pinchstart) {
      return;
    }

    var startClients = this.prevClients;
    var startAverageClient = getAverageClient(startClients);
    var centerPosition = getPosition(startAverageClient, startAverageClient, startAverageClient);
    pinchstart(__assign({
      type: "pinchstart",
      datas: this.datas,
      touches: getPositions(startClients, startClients, startClients)
    }, centerPosition, {
      inputEvent: e
    }));
  };

  __proto.onPinch = function (e, clients) {
    if (!this.flag || !this.pinchFlag || clients.length < 2) {
      return;
    }

    this.isPinch = true;
    var pinch = this.options.pinch;

    if (!pinch) {
      return;
    }

    var prevClients = this.prevClients;
    var startClients = this.startClients;
    var centerPosition = getPosition(getAverageClient(clients), getAverageClient(prevClients), getAverageClient(startClients));
    var distance = getDist(clients);
    pinch(__assign({
      type: "pinch",
      datas: this.datas,
      movement: this.movement,
      touches: getPositions(clients, prevClients, startClients),
      scale: distance / this.startDistance,
      distance: distance
    }, centerPosition, {
      inputEvent: e
    }));
  };

  __proto.onPinchEnd = function (e) {
    if (!this.flag || !this.pinchFlag) {
      return;
    }

    var isPinch = this.isPinch;
    this.isPinch = false;
    this.pinchFlag = false;
    var pinchend = this.options.pinchend;

    if (!pinchend) {
      return;
    }

    var prevClients = this.prevClients;
    var startClients = this.startClients;
    var centerPosition = getPosition(getAverageClient(prevClients), getAverageClient(prevClients), getAverageClient(startClients));
    pinchend(__assign({
      type: "pinchend",
      datas: this.datas,
      isPinch: isPinch,
      touches: getPositions(prevClients, prevClients, startClients)
    }, centerPosition, {
      inputEvent: e
    }));
    this.isPinch = false;
    this.pinchFlag = false;
  };
  /**
   *
   */


  __proto.unset = function () {
    var _this = this;

    var targets = this.targets;
    var container = this.options.container;

    if (this.isMouse) {
      targets.forEach(function (target) {
        (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(target, "mousedown", _this.onDragStart);
      });
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(container, "mousemove", this.onDrag);
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(container, "mouseup", this.onDragEnd);
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(container, "contextmenu", this.onDragEnd);
    }

    if (this.isTouch) {
      targets.forEach(function (target) {
        (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(target, "touchstart", _this.onDragStart);
      });
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(container, "touchstart", this.onDragStart);
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(container, "touchmove", this.onDrag);
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(container, "touchend", this.onDragEnd);
      (0,_daybrush_utils__WEBPACK_IMPORTED_MODULE_0__.removeEvent)(container, "touchcancel", this.onDragEnd);
    }
  };

  return Dragger;
}();

function setDrag(el, options) {
  return new Dragger(el, options);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dragger);

//# sourceMappingURL=drag.esm.js.map


/***/ }),

/***/ "./node_modules/@daybrush/utils/dist/utils.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/@daybrush/utils/dist/utils.esm.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $),
/* harmony export */   ANIMATION: () => (/* binding */ ANIMATION),
/* harmony export */   ARRAY: () => (/* binding */ ARRAY),
/* harmony export */   COLOR_MODELS: () => (/* binding */ COLOR_MODELS),
/* harmony export */   FILTER: () => (/* binding */ FILTER),
/* harmony export */   FUNCTION: () => (/* binding */ FUNCTION),
/* harmony export */   HSL: () => (/* binding */ HSL),
/* harmony export */   HSLA: () => (/* binding */ HSLA),
/* harmony export */   IS_WINDOW: () => (/* binding */ IS_WINDOW),
/* harmony export */   KEYFRAMES: () => (/* binding */ KEYFRAMES),
/* harmony export */   NUMBER: () => (/* binding */ NUMBER),
/* harmony export */   OBJECT: () => (/* binding */ OBJECT),
/* harmony export */   OPEN_CLOSED_CHARACTER: () => (/* binding */ OPEN_CLOSED_CHARACTER),
/* harmony export */   PROPERTY: () => (/* binding */ PROPERTY),
/* harmony export */   RGB: () => (/* binding */ RGB),
/* harmony export */   RGBA: () => (/* binding */ RGBA),
/* harmony export */   STRING: () => (/* binding */ STRING),
/* harmony export */   TRANSFORM: () => (/* binding */ TRANSFORM),
/* harmony export */   UNDEFINED: () => (/* binding */ UNDEFINED),
/* harmony export */   addClass: () => (/* binding */ addClass),
/* harmony export */   addEvent: () => (/* binding */ addEvent),
/* harmony export */   camelize: () => (/* binding */ camelize),
/* harmony export */   cancelAnimationFrame: () => (/* binding */ cancelAnimationFrame),
/* harmony export */   cutHex: () => (/* binding */ cutHex),
/* harmony export */   decamelize: () => (/* binding */ decamelize),
/* harmony export */   document: () => (/* binding */ doc),
/* harmony export */   dot: () => (/* binding */ dot),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   findIndex: () => (/* binding */ findIndex),
/* harmony export */   fromCSS: () => (/* binding */ fromCSS),
/* harmony export */   getCrossBrowserProperty: () => (/* binding */ getCrossBrowserProperty),
/* harmony export */   hasClass: () => (/* binding */ hasClass),
/* harmony export */   hexToRGBA: () => (/* binding */ hexToRGBA),
/* harmony export */   hslToRGBA: () => (/* binding */ hslToRGBA),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   removeClass: () => (/* binding */ removeClass),
/* harmony export */   removeEvent: () => (/* binding */ removeEvent),
/* harmony export */   requestAnimationFrame: () => (/* binding */ requestAnimationFrame),
/* harmony export */   splitBracket: () => (/* binding */ splitBracket),
/* harmony export */   splitComma: () => (/* binding */ splitComma),
/* harmony export */   splitSpace: () => (/* binding */ splitSpace),
/* harmony export */   splitText: () => (/* binding */ splitText),
/* harmony export */   splitUnit: () => (/* binding */ splitUnit),
/* harmony export */   stringToRGBA: () => (/* binding */ stringToRGBA),
/* harmony export */   toArray: () => (/* binding */ toArray),
/* harmony export */   toFullHex: () => (/* binding */ toFullHex)
/* harmony export */ });
/*
Copyright (c) 2018 Daybrush
@name: @daybrush/utils
license: MIT
author: Daybrush
repository: https://github.com/daybrush/utils
@version 0.10.5
*/
/**
* @namespace
* @name Consts
*/

/**
* get string "rgb"
* @memberof Color
* @example
import {RGB} from "@daybrush/utils";

console.log(RGB); // "rgb"
*/
var RGB = "rgb";
/**
* get string "rgba"
* @memberof Color
* @example
import {RGBA} from "@daybrush/utils";

console.log(RGBA); // "rgba"
*/

var RGBA = "rgba";
/**
* get string "hsl"
* @memberof Color
* @example
import {HSL} from "@daybrush/utils";

console.log(HSL); // "hsl"
*/

var HSL = "hsl";
/**
* get string "hsla"
* @memberof Color
* @example
import {HSLA} from "@daybrush/utils";

console.log(HSLA); // "hsla"
*/

var HSLA = "hsla";
/**
* gets an array of color models.
* @memberof Color
* @example
import {COLOR_MODELS} from "@daybrush/utils";

console.log(COLOR_MODELS); // ["rgb", "rgba", "hsl", "hsla"];
*/

var COLOR_MODELS = [RGB, RGBA, HSL, HSLA];
/**
* get string "function"
* @memberof Consts
* @example
import {FUNCTION} from "@daybrush/utils";

console.log(FUNCTION); // "function"
*/

var FUNCTION = "function";
/**
* get string "property"
* @memberof Consts
* @example
import {PROPERTY} from "@daybrush/utils";

console.log(PROPERTY); // "property"
*/

var PROPERTY = "property";
/**
* get string "array"
* @memberof Consts
* @example
import {ARRAY} from "@daybrush/utils";

console.log(ARRAY); // "array"
*/

var ARRAY = "array";
/**
* get string "object"
* @memberof Consts
* @example
import {OBJECT} from "@daybrush/utils";

console.log(OBJECT); // "object"
*/

var OBJECT = "object";
/**
* get string "string"
* @memberof Consts
* @example
import {STRING} from "@daybrush/utils";

console.log(STRING); // "string"
*/

var STRING = "string";
/**
* get string "number"
* @memberof Consts
* @example
import {NUMBER} from "@daybrush/utils";

console.log(NUMBER); // "number"
*/

var NUMBER = "number";
/**
* get string "undefined"
* @memberof Consts
* @example
import {UNDEFINED} from "@daybrush/utils";

console.log(UNDEFINED); // "undefined"
*/

var UNDEFINED = "undefined";
/**
* Check whether the environment is window or node.js.
* @memberof Consts
* @example
import {IS_WINDOW} from "@daybrush/utils";

console.log(IS_WINDOW); // false in node.js
console.log(IS_WINDOW); // true in browser
*/

var IS_WINDOW = typeof window !== UNDEFINED;
/**
* Check whether the environment is window or node.js.
* @memberof Consts
* @name document
* @example
import {IS_WINDOW} from "@daybrush/utils";

console.log(IS_WINDOW); // false in node.js
console.log(IS_WINDOW); // true in browser
*/

var doc = typeof document !== UNDEFINED && document;
var prefixes = ["webkit", "ms", "moz", "o"];
/**
 * @namespace CrossBrowser
 */

/**
* Get a CSS property with a vendor prefix that supports cross browser.
* @function
* @param {string} property - A CSS property
* @return {string} CSS property with cross-browser vendor prefix
* @memberof CrossBrowser
* @example
import {getCrossBrowserProperty} from "@daybrush/utils";

console.log(getCrossBrowserProperty("transform")); // "transform", "-ms-transform", "-webkit-transform"
console.log(getCrossBrowserProperty("filter")); // "filter", "-webkit-filter"
*/

var getCrossBrowserProperty =
/*#__PURE__*/
function (property) {
  if (!doc) {
    return "";
  }

  var styles = (doc.body || doc.documentElement).style;
  var length = prefixes.length;

  if (typeof styles[property] !== UNDEFINED) {
    return property;
  }

  for (var i = 0; i < length; ++i) {
    var name = "-" + prefixes[i] + "-" + property;

    if (typeof styles[name] !== UNDEFINED) {
      return name;
    }
  }

  return "";
};
/**
* get string "transfrom" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {TRANSFORM} from "@daybrush/utils";

console.log(TRANSFORM); // "transform", "-ms-transform", "-webkit-transform"
*/

var TRANSFORM =
/*#__PURE__*/
getCrossBrowserProperty("transform");
/**
* get string "filter" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {FILTER} from "@daybrush/utils";

console.log(FILTER); // "filter", "-ms-filter", "-webkit-filter"
*/

var FILTER =
/*#__PURE__*/
getCrossBrowserProperty("filter");
/**
* get string "animation" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {ANIMATION} from "@daybrush/utils";

console.log(ANIMATION); // "animation", "-ms-animation", "-webkit-animation"
*/

var ANIMATION =
/*#__PURE__*/
getCrossBrowserProperty("animation");
/**
* get string "keyframes" with the vendor prefix.
* @memberof CrossBrowser
* @example
import {KEYFRAMES} from "@daybrush/utils";

console.log(KEYFRAMES); // "keyframes", "-ms-keyframes", "-webkit-keyframes"
*/

var KEYFRAMES =
/*#__PURE__*/
ANIMATION.replace("animation", "keyframes");
var OPEN_CLOSED_CHARACTER = ["\"", "'", "\\\"", "\\'"];

/**
* @namespace
* @name Utils
*/

/**
 * Returns the inner product of two numbers(`a1`, `a2`) by two criteria(`b1`, `b2`).
 * @memberof Utils
 * @param - The first number
 * @param - The second number
 * @param - The first number to base on the inner product
 * @param - The second number to base on the inner product
 * @return - Returns the inner product
import { dot } from "@daybrush/utils";

console.log(dot(0, 15, 2, 3)); // 6
console.log(dot(5, 15, 2, 3)); // 9
console.log(dot(5, 15, 1, 1)); // 10
 */

function dot(a1, a2, b1, b2) {
  return (a1 * b2 + a2 * b1) / (b1 + b2);
}
/**
* Check the type that the value is undefined.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {boolean} true if the type is correct, false otherwise
* @example
import {isUndefined} from "@daybrush/utils";

console.log(isUndefined(undefined)); // true
console.log(isUndefined("")); // false
console.log(isUndefined(1)); // false
console.log(isUndefined(null)); // false
*/

function isUndefined(value) {
  return typeof value === UNDEFINED;
}
/**
* Check the type that the value is object.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isObject} from "@daybrush/utils";

console.log(isObject({})); // true
console.log(isObject(undefined)); // false
console.log(isObject("")); // false
console.log(isObject(null)); // false
*/

function isObject(value) {
  return value && typeof value === OBJECT;
}
/**
* Check the type that the value is isArray.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isArray} from "@daybrush/utils";

console.log(isArray([])); // true
console.log(isArray({})); // false
console.log(isArray(undefined)); // false
console.log(isArray(null)); // false
*/

function isArray(value) {
  return Array.isArray(value);
}
/**
* Check the type that the value is string.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isString} from "@daybrush/utils";

console.log(isString("1234")); // true
console.log(isString(undefined)); // false
console.log(isString(1)); // false
console.log(isString(null)); // false
*/

function isString(value) {
  return typeof value === STRING;
}
/**
* Check the type that the value is function.
* @memberof Utils
* @param {string} value - Value to check the type
* @return {} true if the type is correct, false otherwise
* @example
import {isFunction} from "@daybrush/utils";

console.log(isFunction(function a() {})); // true
console.log(isFunction(() => {})); // true
console.log(isFunction("1234")); // false
console.log(isFunction(1)); // false
console.log(isFunction(null)); // false
*/

function isFunction(value) {
  return typeof value === FUNCTION;
}

function findClosed(closedCharacter, texts, index, length) {
  for (var i = index; i < length; ++i) {
    var character = texts[i].trim();

    if (character === closedCharacter) {
      return i;
    }

    var nextIndex = i;

    if (character === "(") {
      nextIndex = findClosed(")", texts, i + 1, length);
    } else if (OPEN_CLOSED_CHARACTER.indexOf(character) > -1) {
      nextIndex = findClosed(character, texts, i + 1, length);
    }

    if (nextIndex === -1) {
      break;
    }

    i = nextIndex;
  }

  return -1;
}

function splitText(text, separator) {
  var regexText = "(\\s*" + (separator || ",") + "\\s*|\\(|\\)|\"|'|\\\\\"|\\\\'|\\s+)";
  var regex = new RegExp(regexText, "g");
  var texts = text.split(regex).filter(Boolean);
  var length = texts.length;
  var values = [];
  var tempValues = [];

  for (var i = 0; i < length; ++i) {
    var character = texts[i].trim();
    var nextIndex = i;

    if (character === "(") {
      nextIndex = findClosed(")", texts, i + 1, length);
    } else if (character === ")") {
      throw new Error("invalid format");
    } else if (OPEN_CLOSED_CHARACTER.indexOf(character) > -1) {
      nextIndex = findClosed(character, texts, i + 1, length);
    } else if (character === separator) {
      if (tempValues.length) {
        values.push(tempValues.join(""));
        tempValues = [];
      }

      continue;
    }

    if (nextIndex === -1) {
      nextIndex = length - 1;
    }

    tempValues.push(texts.slice(i, nextIndex + 1).join(""));
    i = nextIndex;
  }

  if (tempValues.length) {
    values.push(tempValues.join(""));
  }

  return values;
}
/**
* divide text by space.
* @memberof Utils
* @param {string} text - text to divide
* @return {Array} divided texts
* @example
import {spliceSpace} from "@daybrush/utils";

console.log(splitSpace("a b c d e f g"));
// ["a", "b", "c", "d", "e", "f", "g"]
console.log(splitSpace("'a,b' c 'd,e' f g"));
// ["'a,b'", "c", "'d,e'", "f", "g"]
*/

function splitSpace(text) {
  // divide comma(,)
  return splitText(text, "");
}
/**
* divide text by comma.
* @memberof Utils
* @param {string} text - text to divide
* @return {Array} divided texts
* @example
import {splitComma} from "@daybrush/utils";

console.log(splitComma("a,b,c,d,e,f,g"));
// ["a", "b", "c", "d", "e", "f", "g"]
console.log(splitComma("'a,b',c,'d,e',f,g"));
// ["'a,b'", "c", "'d,e'", "f", "g"]
*/

function splitComma(text) {
  // divide comma(,)
  // "[^"]*"|'[^']*'
  return splitText(text, ",");
}
/**
* divide text by bracket "(", ")".
* @memberof Utils
* @param {string} text - text to divide
* @return {object} divided texts
* @example
import {splitBracket} from "@daybrush/utils";

console.log(splitBracket("a(1, 2)"));
// {prefix: "a", value: "1, 2", suffix: ""}
console.log(splitBracket("a(1, 2)b"));
// {prefix: "a", value: "1, 2", suffix: "b"}
*/

function splitBracket(text) {
  var matches = /([^(]*)\(([\s\S]*)\)([\s\S]*)/g.exec(text);

  if (!matches || matches.length < 4) {
    return {};
  } else {
    return {
      prefix: matches[1],
      value: matches[2],
      suffix: matches[3]
    };
  }
}
/**
* divide text by number and unit.
* @memberof Utils
* @param {string} text - text to divide
* @return {} divided texts
* @example
import {splitUnit} from "@daybrush/utils";

console.log(splitUnit("10px"));
// {prefix: "", value: 10, unit: "px"}
console.log(splitUnit("-10px"));
// {prefix: "", value: -10, unit: "px"}
console.log(splitUnit("a10%"));
// {prefix: "a", value: 10, unit: "%"}
*/

function splitUnit(text) {
  var matches = /^([^\d|e|\-|\+]*)((?:\d|\.|-|e-|e\+)+)(\S*)$/g.exec(text);

  if (!matches) {
    return {
      prefix: "",
      unit: "",
      value: NaN
    };
  }

  var prefix = matches[1];
  var value = matches[2];
  var unit = matches[3];
  return {
    prefix: prefix,
    unit: unit,
    value: parseFloat(value)
  };
}
/**
* transform strings to camel-case
* @memberof Utils
* @param {String} text - string
* @return {String} camel-case string
* @example
import {camelize} from "@daybrush/utils";

console.log(camelize("transform-origin")); // transformOrigin
console.log(camelize("abcd_efg")); // abcdEfg
console.log(camelize("abcd efg")); // abcdEfg
*/

function camelize(str) {
  return str.replace(/[\s-_]([a-z])/g, function (all, letter) {
    return letter.toUpperCase();
  });
}
/**
* transform a camelized string into a lowercased string.
* @memberof Utils
* @param {string} text - a camel-cased string
* @param {string} [separator="-"] - a separator
* @return {string}  a lowercased string
* @example
import {decamelize} from "@daybrush/utils";

console.log(decamelize("transformOrigin")); // transform-origin
console.log(decamelize("abcdEfg", "_")); // abcd_efg
*/

function decamelize(str, separator) {
  if (separator === void 0) {
    separator = "-";
  }

  return str.replace(/([a-z])([A-Z])/g, function (all, letter, letter2) {
    return "" + letter + separator + letter2.toLowerCase();
  });
}
/**
* transforms something in an array into an array.
* @memberof Utils
* @param - Array form
* @return an array
* @example
import {toArray} from "@daybrush/utils";

const arr1 = toArray(document.querySelectorAll(".a")); // Element[]
const arr2 = toArray(document.querySelectorAll<HTMLElement>(".a")); // HTMLElement[]
*/

function toArray(value) {
  return [].slice.call(value);
}
/**
* Date.now() method
* @memberof CrossBrowser
* @return {number} milliseconds
* @example
import {now} from "@daybrush/utils";

console.log(now()); // 12121324241(milliseconds)
*/

function now() {
  return Date.now ? Date.now() : new Date().getTime();
}
/**
* Returns the index of the first element in the array that satisfies the provided testing function.
* @function
* @memberof CrossBrowser
* @param - The array `findIndex` was called upon.
* @param - A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
* @param - Returns defaultIndex if not found by the function.
* @example
import { findIndex } from "@daybrush/utils";

findIndex([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // 1
*/

function findIndex(arr, callback, defaultIndex) {
  if (defaultIndex === void 0) {
    defaultIndex = -1;
  }

  var length = arr.length;

  for (var i = 0; i < length; ++i) {
    if (callback(arr[i], i, arr)) {
      return i;
    }
  }

  return defaultIndex;
}
/**
* Returns the value of the first element in the array that satisfies the provided testing function.
* @function
* @memberof CrossBrowser
* @param - The array `find` was called upon.
* @param - A function to execute on each value in the array,
* @param - Returns defalutValue if not found by the function.
* @example
import { find } from "@daybrush/utils";

find([{a: 1}, {a: 2}, {a: 3}, {a: 4}], ({ a }) => a === 2); // {a: 2}
*/

function find(arr, callback, defalutValue) {
  var index = findIndex(arr, callback);
  return index > -1 ? arr[index] : defalutValue;
}
/**
* window.requestAnimationFrame() method with cross browser.
* @function
* @memberof CrossBrowser
* @param {FrameRequestCallback} callback - The function to call when it's time to update your animation for the next repaint.
* @return {number} id
* @example
import {requestAnimationFrame} from "@daybrush/utils";

requestAnimationFrame((timestamp) => {
  console.log(timestamp);
});
*/

var requestAnimationFrame =
/*#__PURE__*/
function () {
  var firstTime = now();
  var raf = IS_WINDOW && (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame);
  return raf ? raf.bind(window) : function (callback) {
    var currTime = now();
    var id = window.setTimeout(function () {
      callback(currTime - firstTime);
    }, 1000 / 60);
    return id;
  };
}();
/**
* window.cancelAnimationFrame() method with cross browser.
* @function
* @memberof CrossBrowser
* @param {number} handle - the id obtained through requestAnimationFrame method
* @return {void}
* @example
import { requestAnimationFrame, cancelAnimationFrame } from "@daybrush/utils";

const id = requestAnimationFrame((timestamp) => {
  console.log(timestamp);
});

cancelAnimationFrame(id);
*/

var cancelAnimationFrame =
/*#__PURE__*/
function () {
  var caf = IS_WINDOW && (window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame);
  return caf ? caf.bind(window) : function (handle) {
    clearTimeout(handle);
  };
}();

/**
* @namespace
* @name Color
*/

/**
* Remove the # from the hex color.
* @memberof Color
* @param {} hex - hex color
* @return {} hex color
* @example
import {cutHex} from "@daybrush/utils";

console.log(cutHex("#000000")) // "000000"
*/

function cutHex(hex) {
  return hex.replace("#", "");
}
/**
* convert hex color to rgb color.
* @memberof Color
* @param {} hex - hex color
* @return {} rgb color
* @example
import {hexToRGBA} from "@daybrush/utils";

console.log(hexToRGBA("#00000005"));
// [0, 0, 0, 1]
console.log(hexToRGBA("#201045"));
// [32, 16, 69, 1]
*/

function hexToRGBA(hex) {
  var h = cutHex(hex);
  var r = parseInt(h.substring(0, 2), 16);
  var g = parseInt(h.substring(2, 4), 16);
  var b = parseInt(h.substring(4, 6), 16);
  var a = parseInt(h.substring(6, 8), 16) / 255;

  if (isNaN(a)) {
    a = 1;
  }

  return [r, g, b, a];
}
/**
* convert 3(or 4)-digit hex color to 6(or 8)-digit hex color.
* @memberof Color
* @param {} hex - 3(or 4)-digit hex color
* @return {} 6(or 8)-digit hex color
* @example
import {toFullHex} from "@daybrush/utils";

console.log(toFullHex("#123")); // "#112233"
console.log(toFullHex("#123a")); // "#112233aa"
*/

function toFullHex(h) {
  var r = h.charAt(1);
  var g = h.charAt(2);
  var b = h.charAt(3);
  var a = h.charAt(4);
  var arr = ["#", r, r, g, g, b, b, a, a];
  return arr.join("");
}
/**
* convert hsl color to rgba color.
* @memberof Color
* @param {} hsl - hsl color(hue: 0 ~ 360, saturation: 0 ~ 1, lightness: 0 ~ 1, alpha: 0 ~ 1)
* @return {} rgba color
* @example
import {hslToRGBA} from "@daybrush/utils";

console.log(hslToRGBA([150, 0.5, 0.4]));
// [51, 153, 102, 1]
*/

function hslToRGBA(hsl) {
  var h = hsl[0];
  var s = hsl[1];
  var l = hsl[2];

  if (h < 0) {
    h += Math.floor((Math.abs(h) + 360) / 360) * 360;
  }

  h %= 360;
  var c = (1 - Math.abs(2 * l - 1)) * s;
  var x = c * (1 - Math.abs(h / 60 % 2 - 1));
  var m = l - c / 2;
  var rgb;

  if (h < 60) {
    rgb = [c, x, 0];
  } else if (h < 120) {
    rgb = [x, c, 0];
  } else if (h < 180) {
    rgb = [0, c, x];
  } else if (h < 240) {
    rgb = [0, x, c];
  } else if (h < 300) {
    rgb = [x, 0, c];
  } else if (h < 360) {
    rgb = [c, 0, x];
  }

  var result = [Math.round((rgb[0] + m) * 255), Math.round((rgb[1] + m) * 255), Math.round((rgb[2] + m) * 255), hsl.length > 3 ? hsl[3] : 1];
  return result;
}
/**
* convert string to rgba color.
* @memberof Color
* @param {} - 3-hex(#000), 4-hex(#0000) 6-hex(#000000), 8-hex(#00000000) or RGB(A), or HSL(A)
* @return {} rgba color
* @example
import {stringToRGBA} from "@daybrush/utils";

console.log(stringToRGBA("#000000")); // [0, 0, 0, 1]
console.log(stringToRGBA("rgb(100, 100, 100)")); // [100, 100, 100, 1]
console.log(stringToRGBA("hsl(150, 0.5, 0.4)")); // [51, 153, 102, 1]
*/

function stringToRGBA(color) {
  if (color.charAt(0) === "#") {
    if (color.length === 4 || color.length === 5) {
      return hexToRGBA(toFullHex(color));
    } else {
      return hexToRGBA(color);
    }
  } else if (color.indexOf("(") !== -1) {
    // in bracket.
    var _a = splitBracket(color),
        prefix = _a.prefix,
        value = _a.value;

    if (!prefix || !value) {
      return;
    }

    var arr = splitComma(value);
    var colorArr = [];
    var length = arr.length;

    switch (prefix) {
      case RGB:
      case RGBA:
        for (var i = 0; i < length; ++i) {
          colorArr[i] = parseFloat(arr[i]);
        }

        return colorArr;

      case HSL:
      case HSLA:
        for (var i = 0; i < length; ++i) {
          if (arr[i].indexOf("%") !== -1) {
            colorArr[i] = parseFloat(arr[i]) / 100;
          } else {
            colorArr[i] = parseFloat(arr[i]);
          }
        } // hsl, hsla to rgba


        return hslToRGBA(colorArr);
    }
  }

  return;
}

/**
 * Returns all element descendants of node that
 * match selectors.
 */

/**
 * Checks if the specified class value exists in the element's class attribute.
 * @memberof DOM
 * @param - A DOMString containing one or more selectors to match
 * @param - If multi is true, a DOMString containing one or more selectors to match against.
 * @example
import {$} from "@daybrush/utils";

console.log($("div")); // div element
console.log($("div", true)); // [div, div] elements
*/

function $(selectors, multi) {
  return multi ? doc.querySelectorAll(selectors) : doc.querySelector(selectors);
}
/**
* Checks if the specified class value exists in the element's class attribute.
* @memberof DOM
* @param element - target
* @param className - the class name to search
* @return {boolean} return false if the class is not found.
* @example
import {hasClass} from "@daybrush/utils";

console.log(hasClass(element, "start")); // true or false
*/

function hasClass(element, className) {
  if (element.classList) {
    return element.classList.contains(className);
  }

  return !!element.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}
/**
* Add the specified class value. If these classe already exist in the element's class attribute they are ignored.
* @memberof DOM
* @param element - target
* @param className - the class name to add
* @example
import {addClass} from "@daybrush/utils";

addClass(element, "start");
*/

function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className);
  } else {
    element.className += " " + className;
  }
}
/**
* Removes the specified class value.
* @memberof DOM
* @param element - target
* @param className - the class name to remove
* @example
import {removeClass} from "@daybrush/utils";

removeClass(element, "start");
*/

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else {
    var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
    element.className = element.className.replace(reg, " ");
  }
}
/**
* Gets the CSS properties from the element.
* @memberof DOM
* @param elements - elements
* @param properites - the CSS properties
* @return returns CSS properties and values.
* @example
import {fromCSS} from "@daybrush/utils";

console.log(fromCSS(element, ["left", "opacity", "top"])); // {"left": "10px", "opacity": 1, "top": "10px"}
*/

function fromCSS(elements, properties) {
  if (!elements || !properties || !properties.length) {
    return {};
  }

  var element;

  if (elements instanceof Element) {
    element = elements;
  } else if (elements.length) {
    element = elements[0];
  } else {
    return {};
  }

  var cssObject = {};
  var styles = window.getComputedStyle(element);
  var length = properties.length;

  for (var i = 0; i < length; ++i) {
    cssObject[properties[i]] = styles[properties[i]];
  }

  return cssObject;
}
/**
* Sets up a function that will be called whenever the specified event is delivered to the target
* @memberof DOM
* @param - event target
* @param - A case-sensitive string representing the event type to listen for.
* @param - The object which receives a notification (an object that implements the Event interface) when an event of the specified type occurs
* @param - An options object that specifies characteristics about the event listener. The available options are:
* @example
import {addEvent} from "@daybrush/utils";

addEvent(el, "click", e => {
  console.log(e);
});
*/

function addEvent(el, type, listener, options) {
  el.addEventListener(type, listener, options);
}
/**
* removes from the EventTarget an event listener previously registered with EventTarget.addEventListener()
* @memberof DOM
* @param - event target
* @param - A case-sensitive string representing the event type to listen for.
* @param - The EventListener function of the event handler to remove from the event target.
* @example
import {addEvent, removeEvent} from "@daybrush/utils";
const listener = e => {
  console.log(e);
};
addEvent(el, "click", listener);
removeEvent(el, "click", listener);
*/

function removeEvent(el, type, listener) {
  el.removeEventListener(type, listener);
}


//# sourceMappingURL=utils.esm.js.map


/***/ })

}]);
//# sourceMappingURL=vendor.daybrush.19f8b72f4b250ac70f28.js.map