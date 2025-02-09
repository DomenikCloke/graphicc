/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/actions/design_actions.js":
/*!********************************************!*\
  !*** ./frontend/actions/design_actions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECEIVE_DESIGN: () => (/* binding */ RECEIVE_DESIGN),
/* harmony export */   RECEIVE_DESIGNS: () => (/* binding */ RECEIVE_DESIGNS),
/* harmony export */   REMOVE_DESIGN: () => (/* binding */ REMOVE_DESIGN),
/* harmony export */   createDesign: () => (/* binding */ createDesign),
/* harmony export */   deleteDesign: () => (/* binding */ deleteDesign),
/* harmony export */   requestDesign: () => (/* binding */ requestDesign),
/* harmony export */   requestOwnedDesigns: () => (/* binding */ requestOwnedDesigns),
/* harmony export */   requestTemplates: () => (/* binding */ requestTemplates),
/* harmony export */   updateDesign: () => (/* binding */ updateDesign)
/* harmony export */ });
/* harmony import */ var _util_design_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/design_api_util */ "./frontend/util/design_api_util.js");
/* harmony import */ var _session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_actions */ "./frontend/actions/session_actions.js");


var RECEIVE_DESIGNS = 'RECEIVE_DESIGNS';
var RECEIVE_DESIGN = 'RECEIVE_DESIGN';
var REMOVE_DESIGN = 'REMOVE_DESIGN';
var receiveDesign = function receiveDesign(payload) {
  return {
    type: RECEIVE_DESIGN,
    payload: payload
  };
};
var receiveDesigns = function receiveDesigns(designs) {
  return {
    type: RECEIVE_DESIGNS,
    designs: designs
  };
};
var removeDesign = function removeDesign(payload) {
  return {
    type: REMOVE_DESIGN,
    payload: payload
  };
};
var requestDesign = function requestDesign(designId) {
  return function (dispatch) {
    return _util_design_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchDesign(designId).then(function (payload) {
      return dispatch(receiveDesign(payload));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};
var requestOwnedDesigns = function requestOwnedDesigns() {
  return function (dispatch) {
    return _util_design_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchOwnedDesigns().then(function (designs) {
      return dispatch(receiveDesigns(designs));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};
var requestTemplates = function requestTemplates() {
  return function (dispatch) {
    return _util_design_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchTemplates().then(function (designs) {
      return dispatch(receiveDesigns(designs));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};
var createDesign = function createDesign(formDesign) {
  return function (dispatch) {
    return _util_design_api_util__WEBPACK_IMPORTED_MODULE_0__.createDesign(formDesign).then(function (payload) {
      return dispatch(receiveDesign(payload));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};
var updateDesign = function updateDesign(formDesign) {
  return function (dispatch) {
    return _util_design_api_util__WEBPACK_IMPORTED_MODULE_0__.updateDesign(formDesign).then(function (payload) {
      return dispatch(receiveDesign(payload));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};
var deleteDesign = function deleteDesign(designId) {
  return function (dispatch) {
    return _util_design_api_util__WEBPACK_IMPORTED_MODULE_0__.deleteDesign(designId).then(function (payload) {
      return dispatch(removeDesign(payload));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};

/***/ }),

/***/ "./frontend/actions/element_actions.js":
/*!*********************************************!*\
  !*** ./frontend/actions/element_actions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CREATE_ELEMENT: () => (/* binding */ CREATE_ELEMENT),
/* harmony export */   RECEIVE_ELEMENT: () => (/* binding */ RECEIVE_ELEMENT),
/* harmony export */   RECEIVE_ELEMENTS: () => (/* binding */ RECEIVE_ELEMENTS),
/* harmony export */   REMOVE_ELEMENT: () => (/* binding */ REMOVE_ELEMENT),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   receiveElement: () => (/* binding */ receiveElement),
/* harmony export */   receiveElements: () => (/* binding */ receiveElements),
/* harmony export */   removeElement: () => (/* binding */ removeElement)
/* harmony export */ });
var RECEIVE_ELEMENTS = 'RECEIVE_ELEMENTS';
var RECEIVE_ELEMENT = 'RECEIVE_ELEMENT';
var REMOVE_ELEMENT = 'REMOVE_ELEMENT';
var CREATE_ELEMENT = 'CREATE_ELEMENT';
var receiveElement = function receiveElement(element) {
  return {
    type: RECEIVE_ELEMENT,
    element: element
  };
};
var createElement = function createElement(designId, element) {
  return {
    type: CREATE_ELEMENT,
    designId: designId,
    element: element
  };
};
var receiveElements = function receiveElements(elements) {
  return {
    type: RECEIVE_ELEMENTS,
    elements: elements
  };
};
var removeElement = function removeElement(element) {
  return {
    type: REMOVE_ELEMENT,
    element: element
  };
};

/***/ }),

/***/ "./frontend/actions/folder_actions.js":
/*!********************************************!*\
  !*** ./frontend/actions/folder_actions.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECEIVE_FOLDER: () => (/* binding */ RECEIVE_FOLDER),
/* harmony export */   RECEIVE_FOLDERS: () => (/* binding */ RECEIVE_FOLDERS),
/* harmony export */   REMOVE_FOLDER: () => (/* binding */ REMOVE_FOLDER),
/* harmony export */   createFolder: () => (/* binding */ createFolder),
/* harmony export */   deleteFolder: () => (/* binding */ deleteFolder),
/* harmony export */   requestFolder: () => (/* binding */ requestFolder),
/* harmony export */   requestFolders: () => (/* binding */ requestFolders),
/* harmony export */   updateFolder: () => (/* binding */ updateFolder)
/* harmony export */ });
/* harmony import */ var _util_folder_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/folder_api_util */ "./frontend/util/folder_api_util.js");
/* harmony import */ var _session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_actions */ "./frontend/actions/session_actions.js");


var RECEIVE_FOLDER = 'RECEIVE_FOLDER';
var RECEIVE_FOLDERS = 'RECEIVE_FOLDERS';
var REMOVE_FOLDER = 'REMOVE_FOLDER';
var receiveFolder = function receiveFolder(payload) {
  return {
    type: RECEIVE_FOLDER,
    payload: payload
  };
};
var receiveFolders = function receiveFolders(folders) {
  return {
    type: RECEIVE_FOLDERS,
    folders: folders
  };
};
var removeFolder = function removeFolder(payload) {
  return {
    type: REMOVE_FOLDER,
    payload: payload
  };
};
var requestFolder = function requestFolder(folderId) {
  return function (dispatch) {
    return _util_folder_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchFolder(folderId).then(function (payload) {
      return dispatch(receiveFolder(payload));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};
var requestFolders = function requestFolders() {
  return function (dispatch) {
    return _util_folder_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchFolders().then(function (folders) {
      return dispatch(receiveFolders(folders));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};
var createFolder = function createFolder(folderParams) {
  return function (dispatch) {
    return _util_folder_api_util__WEBPACK_IMPORTED_MODULE_0__.createFolder(folderParams).then(function (payload) {
      return dispatch(receiveFolder(payload));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};
var updateFolder = function updateFolder(folderParams) {
  return function (dispatch) {
    return _util_folder_api_util__WEBPACK_IMPORTED_MODULE_0__.updateFolder(folderParams).then(function (payload) {
      return dispatch(receiveFolder(payload));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};
var deleteFolder = function deleteFolder(folderId) {
  return function (dispatch) {
    return _util_folder_api_util__WEBPACK_IMPORTED_MODULE_0__.deleteFolder(folderId).then(function (payload) {
      return dispatch(removeFolder(payload));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};

/***/ }),

/***/ "./frontend/actions/modal_actions.js":
/*!*******************************************!*\
  !*** ./frontend/actions/modal_actions.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TOGGLE_MODAL: () => (/* binding */ TOGGLE_MODAL),
/* harmony export */   toggleModal: () => (/* binding */ toggleModal)
/* harmony export */ });
var TOGGLE_MODAL = 'TOGGLE_MODAL';
var toggleModal = function toggleModal(modal, id) {
  return {
    type: TOGGLE_MODAL,
    modal: modal,
    id: id
  };
};

/***/ }),

/***/ "./frontend/actions/mode_actions.js":
/*!******************************************!*\
  !*** ./frontend/actions/mode_actions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UPDATE_MODE: () => (/* binding */ UPDATE_MODE),
/* harmony export */   updateMode: () => (/* binding */ updateMode)
/* harmony export */ });
var UPDATE_MODE = 'UPDATE_MODE';
var updateMode = function updateMode(mode) {
  return {
    type: UPDATE_MODE,
    mode: mode
  };
};

/***/ }),

/***/ "./frontend/actions/session_actions.js":
/*!*********************************************!*\
  !*** ./frontend/actions/session_actions.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLEAR_ERRORS: () => (/* binding */ CLEAR_ERRORS),
/* harmony export */   LOGOUT_CURRENT_USER: () => (/* binding */ LOGOUT_CURRENT_USER),
/* harmony export */   RECEIVE_CURRENT_USER: () => (/* binding */ RECEIVE_CURRENT_USER),
/* harmony export */   RECEIVE_SESSION_ERRORS: () => (/* binding */ RECEIVE_SESSION_ERRORS),
/* harmony export */   clearErrors: () => (/* binding */ clearErrors),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   receiveErrors: () => (/* binding */ receiveErrors),
/* harmony export */   signup: () => (/* binding */ signup)
/* harmony export */ });
/* harmony import */ var _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/session_api_util */ "./frontend/util/session_api_util.js");
/* harmony import */ var _mode_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mode_actions */ "./frontend/actions/mode_actions.js");


var RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
var LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
var RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
var CLEAR_ERRORS = 'CLEAR_ERRORS';
var receiveCurrentUser = function receiveCurrentUser(currentUser) {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser
  };
};
var logoutCurrentUser = function logoutCurrentUser() {
  return {
    type: LOGOUT_CURRENT_USER
  };
};
var receiveErrors = function receiveErrors(errors) {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};
var clearErrors = function clearErrors() {
  return {
    type: CLEAR_ERRORS
  };
};
var signup = function signup(user) {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__.signup(user).then(function (responseUser) {
      return dispatch(receiveCurrentUser(responseUser));
    }, function (res) {
      return dispatch(receiveErrors(res.responseJSON));
    });
  };
};
var login = function login(user) {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__.login(user).then(function (responseUser) {
      dispatch(receiveCurrentUser(responseUser));
      // dispatch(updateMode('browse'));
    }, function (res) {
      return dispatch(receiveErrors(res.responseJSON));
    });
  };
};
var logout = function logout() {
  return function (dispatch) {
    return _util_session_api_util__WEBPACK_IMPORTED_MODULE_0__.logout().then(function () {
      dispatch(logoutCurrentUser());
      // dispatch(updateMode('splash'));
    });
  };
};

/***/ }),

/***/ "./frontend/actions/unsplash_actions.js":
/*!**********************************************!*\
  !*** ./frontend/actions/unsplash_actions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECEIVE_UNSPLASH_ERRORS: () => (/* binding */ RECEIVE_UNSPLASH_ERRORS),
/* harmony export */   RECEIVE_UNSPLASH_POPULAR_IMAGES: () => (/* binding */ RECEIVE_UNSPLASH_POPULAR_IMAGES),
/* harmony export */   RECEIVE_UNSPLASH_SEARCH_IMAGES: () => (/* binding */ RECEIVE_UNSPLASH_SEARCH_IMAGES),
/* harmony export */   fetchUnsplashPopular: () => (/* binding */ fetchUnsplashPopular),
/* harmony export */   fetchUnsplashQuery: () => (/* binding */ fetchUnsplashQuery)
/* harmony export */ });
/* harmony import */ var _util_unsplash_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/unsplash_api_util */ "./frontend/util/unsplash_api_util.js");
/* harmony import */ var _session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_actions */ "./frontend/actions/session_actions.js");


var RECEIVE_UNSPLASH_SEARCH_IMAGES = 'RECEIVE_UNSPLASH_SEARCH_IMAGES';
var RECEIVE_UNSPLASH_POPULAR_IMAGES = 'RECEIVE_UNSPLASH_POPULAR_IMAGES';
var RECEIVE_UNSPLASH_ERRORS = 'RECEIVE_UNSPLASH_ERRORS';
var receiveUnsplashSearchImages = function receiveUnsplashSearchImages(images) {
  return {
    type: RECEIVE_UNSPLASH_SEARCH_IMAGES,
    images: images
  };
};
var receiveUnsplashPopularImages = function receiveUnsplashPopularImages(images) {
  return {
    type: RECEIVE_UNSPLASH_POPULAR_IMAGES,
    images: images
  };
};
var receiveUnsplashErrors = function receiveUnsplashErrors(errors) {
  return {
    type: _session_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_SESSION_ERRORS,
    errors: errors
  };
};
var fetchUnsplashQuery = function fetchUnsplashQuery(page, query) {
  return function (dispatch) {
    return _util_unsplash_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchUnsplashQuery(page, query).then(function (res) {
      return dispatch(receiveUnsplashSearchImages(res.results));
    }, function (res) {
      return dispatch(receiveUnsplashErrors(res));
    });
  };
};
var fetchUnsplashPopular = function fetchUnsplashPopular(page) {
  return function (dispatch) {
    return _util_unsplash_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchUnsplashPopular(page).then(function (res) {
      return dispatch(receiveUnsplashPopularImages(res));
    }, function (res) {
      return dispatch(receiveUnsplashErrors(res));
    });
  };
};

/***/ }),

/***/ "./frontend/actions/uploaded_image_actions.js":
/*!****************************************************!*\
  !*** ./frontend/actions/uploaded_image_actions.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RECEIVE_UPLOAD: () => (/* binding */ RECEIVE_UPLOAD),
/* harmony export */   RECEIVE_USER_UPLOADS: () => (/* binding */ RECEIVE_USER_UPLOADS),
/* harmony export */   REMOVE_UPLOAD: () => (/* binding */ REMOVE_UPLOAD),
/* harmony export */   deleteUpload: () => (/* binding */ deleteUpload),
/* harmony export */   fetchUserUploads: () => (/* binding */ fetchUserUploads),
/* harmony export */   receiveUpload: () => (/* binding */ receiveUpload),
/* harmony export */   receiveUserUploads: () => (/* binding */ receiveUserUploads),
/* harmony export */   updateUpload: () => (/* binding */ updateUpload)
/* harmony export */ });
/* harmony import */ var _util_uploaded_image_api_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/uploaded_image_api_util */ "./frontend/util/uploaded_image_api_util.js");
/* harmony import */ var _session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session_actions */ "./frontend/actions/session_actions.js");


var RECEIVE_USER_UPLOADS = 'RECEIVE_USER_UPLOADS';
var RECEIVE_UPLOAD = 'RECEIVE_UPLOAD';
var REMOVE_UPLOAD = 'REMOVE_UPLOAD';
var receiveUpload = function receiveUpload(payload) {
  return {
    type: RECEIVE_UPLOAD,
    payload: payload
  };
};
var removeUpload = function removeUpload(payload) {
  return {
    type: REMOVE_UPLOAD,
    payload: payload
  };
};
var receiveUserUploads = function receiveUserUploads(payload) {
  return {
    type: RECEIVE_USER_UPLOADS,
    payload: payload
  };
};
var fetchUserUploads = function fetchUserUploads() {
  return function (dispatch) {
    return _util_uploaded_image_api_util__WEBPACK_IMPORTED_MODULE_0__.fetchUserUploads().then(function (payload) {
      return dispatch(receiveUserUploads(payload));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};
var updateUpload = function updateUpload(formUploadedImage) {
  return function (dispatch) {
    return _util_uploaded_image_api_util__WEBPACK_IMPORTED_MODULE_0__.updateUpload(formUploadedImage).then(function (payload) {
      return dispatch(receiveUpload(payload));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};
var deleteUpload = function deleteUpload(uploadedImageId) {
  return function (dispatch) {
    return _util_uploaded_image_api_util__WEBPACK_IMPORTED_MODULE_0__.deleteUpload(uploadedImageId).then(function (payload) {
      return dispatch(removeUpload(payload));
    }, function (res) {
      return dispatch((0,_session_actions__WEBPACK_IMPORTED_MODULE_1__.receiveErrors)(res.responseJSON));
    });
  };
};

/***/ }),

/***/ "./frontend/components/Browse.jsx":
/*!****************************************!*\
  !*** ./frontend/components/Browse.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/route_util */ "./frontend/util/route_util.jsx");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar */ "./frontend/components/NavBar.jsx");
/* harmony import */ var _auth_SignupAuthFormContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/SignupAuthFormContainer */ "./frontend/components/auth/SignupAuthFormContainer.js");
/* harmony import */ var _auth_LoginAuthFormContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/LoginAuthFormContainer */ "./frontend/components/auth/LoginAuthFormContainer.js");
/* harmony import */ var _auth_MainAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/MainAuth */ "./frontend/components/auth/MainAuth.jsx");
/* harmony import */ var _browse_browse_index_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./browse/browse_index_container */ "./frontend/components/browse/browse_index_container.js");
/* harmony import */ var _Browse_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Browse.module.css */ "./frontend/components/Browse.module.css");
/* harmony import */ var _Browse_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Browse_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modal_ImageShow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/ImageShow */ "./frontend/components/modal/ImageShow.jsx");
/* harmony import */ var _modal_uploaded_image_modal_container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal/uploaded_image_modal_container */ "./frontend/components/modal/uploaded_image_modal_container.js");











var Browse = function Browse(_ref) {
  var mode = _ref.mode,
    sessionId = _ref.sessionId,
    _toggleModal = _ref.toggleModal,
    uploadedModal = _ref.uploadedModal;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: uploadedModal ? "".concat((_Browse_module_css__WEBPACK_IMPORTED_MODULE_7___default().container), " ").concat((_Browse_module_css__WEBPACK_IMPORTED_MODULE_7___default().blurred)) : (_Browse_module_css__WEBPACK_IMPORTED_MODULE_7___default().container)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_NavBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    mode: mode
  }), !sessionId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: mode === 'splash' ? 'container' : 'container-wide'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__.AuthRoute, {
    path: "/",
    component: _auth_MainAuth__WEBPACK_IMPORTED_MODULE_5__["default"]
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__.ProtectedRoute, {
    path: "/",
    component: _browse_browse_index_container__WEBPACK_IMPORTED_MODULE_6__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modal_uploaded_image_modal_container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    active: uploadedModal,
    toggleModal: function toggleModal(id) {
      return _toggleModal('uploadedModal', id);
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Browse);

/***/ }),

/***/ "./frontend/components/NavBar.jsx":
/*!****************************************!*\
  !*** ./frontend/components/NavBar.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _auth_user_nav_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/user_nav_container */ "./frontend/components/auth/user_nav_container.js");
/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavBar.module.css */ "./frontend/components/NavBar.module.css");
/* harmony import */ var _NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2__);


// import UserNav from './auth/UserNav';


var NavBar = function NavBar(_ref) {
  var mode = _ref.mode;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: mode === 'splash' ? 'container' : 'container-wide border-bottom'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().navBar)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: window.logo,
    alt: "logo"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: (_NavBar_module_css__WEBPACK_IMPORTED_MODULE_2___default().nav)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_auth_user_nav_container__WEBPACK_IMPORTED_MODULE_1__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

/***/ }),

/***/ "./frontend/components/Root.jsx":
/*!**************************************!*\
  !*** ./frontend/components/Root.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _app_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app_container */ "./frontend/components/app_container.js");




var Root = function Root(_ref) {
  var store = _ref.store;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
    store: store
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.HashRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app_container__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Root);

/***/ }),

/***/ "./frontend/components/app.jsx":
/*!*************************************!*\
  !*** ./frontend/components/app.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _browse_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./browse_container */ "./frontend/components/browse_container.js");
/* harmony import */ var _editor_editor_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/editor_container */ "./frontend/components/editor/editor_container.js");
/* harmony import */ var _editor_viewer_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor/viewer_container */ "./frontend/components/editor/viewer_container.js");
/* harmony import */ var _modal_external_image_modal_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/external_image_modal_container */ "./frontend/components/modal/external_image_modal_container.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







// eslint-disable-next-line react/prefer-stateless-function
var App = /*#__PURE__*/function (_React$Component) {
  function App() {
    _classCallCheck(this, App);
    return _callSuper(this, App, arguments);
  }
  _inherits(App, _React$Component);
  return _createClass(App, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        externalModal = _this$props.externalModal,
        _toggleModal = _this$props.toggleModal;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "main"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
        path: "/design/:id",
        component: _editor_editor_container__WEBPACK_IMPORTED_MODULE_2__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
        path: "/view/:id",
        component: _editor_viewer_container__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Route, {
        path: "/",
        component: _browse_container__WEBPACK_IMPORTED_MODULE_1__["default"]
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modal_external_image_modal_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
        active: externalModal,
        toggleModal: function toggleModal(id) {
          return _toggleModal('externalModal', id);
        },
        external: true
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./frontend/components/app_container.js":
/*!**********************************************!*\
  !*** ./frontend/components/app_container.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./frontend/components/app.jsx");



var mapStateToProps = function mapStateToProps(state) {
  return {
    mode: state.ui.mode,
    externalModal: state.ui.modal.externalModal
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleModal: function toggleModal(modal, id) {
      return dispatch((0,_actions_modal_actions__WEBPACK_IMPORTED_MODULE_1__.toggleModal)(modal, id));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_app__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/auth/AuthIcons.jsx":
/*!************************************************!*\
  !*** ./frontend/components/auth/AuthIcons.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   facebookIcon: () => (/* binding */ facebookIcon),
/* harmony export */   googleIcon: () => (/* binding */ googleIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var googleIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: "24",
  height: "24",
  xmlns: "http://www.w3.org/2000/svg"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20.64 12.2c0-.63-.06-1.25-.16-1.84H12v3.49h4.84a4.14 4.14 0 0 1-1.8 2.71v2.26h2.92a8.78 8.78 0 0 0 2.68-6.62z",
  fill: "#4285F4"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M12 21a8.6 8.6 0 0 0 5.96-2.18l-2.91-2.26a5.4 5.4 0 0 1-8.09-2.85h-3v2.33A9 9 0 0 0 12 21z",
  fill: "#34A853"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M6.96 13.71a5.41 5.41 0 0 1 0-3.42V7.96h-3a9 9 0 0 0 0 8.08l3-2.33z",
  fill: "#FBBC05"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M12 6.58c1.32 0 2.5.45 3.44 1.35l2.58-2.59A9 9 0 0 0 3.96 7.95l3 2.34A5.36 5.36 0 0 1 12 6.58z",
  fill: "#EA4335"
})));
var facebookIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
  width: "24",
  height: "24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h8.61v-6.97h-2.34V11.3h2.34v-2c0-2.33 1.42-3.6 3.5-3.6 1 0 1.84.08 2.1.12v2.43h-1.44c-1.13 0-1.35.53-1.35 1.32v1.73h2.69l-.35 2.72h-2.34V21h4.59a1 1 0 0 0 .99-1V4a1 1 0 0 0-1-1z",
  fill: "currentColor"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M12.61 14.03V21h2.81v-6.98h2.34l.35-2.72h-2.69V9.57c0-.79.22-1.32 1.35-1.32h1.44V5.82c-.26-.04-1.1-.12-2.1-.12-2.08 0-3.5 1.27-3.5 3.6v2h-2.34v2.73h2.34z",
  fill: "#fff"
}));

/***/ }),

/***/ "./frontend/components/auth/CreateDropDown.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/auth/CreateDropDown.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDropDown.module.css */ "./frontend/components/auth/UserDropDown.module.css");
/* harmony import */ var _UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateDropDown.module.css */ "./frontend/components/auth/CreateDropDown.module.css");
/* harmony import */ var _CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var mockupResponse = [{
  id: 1,
  name: 'Poster',
  description: '18 x 24 in',
  width: 1728,
  height: 2304,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiImage, null)
}, {
  id: 2,
  name: 'Facebook Post',
  description: '940 x 788 px',
  width: 940,
  height: 788,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiFacebook, null)
}, {
  id: 3,
  name: 'Facebook Cover',
  description: '820 x 312 px',
  width: 820,
  height: 312,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiFacebook, null)
}, {
  id: 4,
  name: 'Presentation',
  description: '1920 x 1080 px',
  width: 1920,
  height: 1080,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiAirplay, null)
}, {
  id: 5,
  name: 'Instagram Post',
  description: '1080 x 1080 px',
  width: 1080,
  height: 1080,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiInstagram, null)
}, {
  id: 6,
  name: 'Business Card',
  description: '3.5 x 2 in',
  width: 336,
  height: 192,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiCreditCard, null)
}, {
  id: 7,
  name: 'Logo',
  description: '500 x 500 px',
  width: 500,
  height: 500,
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiSmile, null)
}];
var CreateDropDown = /*#__PURE__*/function (_React$Component) {
  function CreateDropDown(props) {
    var _this;
    _classCallCheck(this, CreateDropDown);
    _this = _callSuper(this, CreateDropDown, [props]);
    _this.state = {
      animate: false,
      custom: false,
      width: '',
      height: ''
    };
    _this.toggleCustom = _this.toggleCustom.bind(_this);
    _this.submitCustom = _this.submitCustom.bind(_this);
    return _this;
  }
  _inherits(CreateDropDown, _React$Component);
  return _createClass(CreateDropDown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          _this2.setState({
            animate: true
          });
        });
      });
    }
  }, {
    key: "createDesign",
    value: function createDesign(item) {
      var _this$props = this.props,
        createDesign = _this$props.createDesign,
        currentUser = _this$props.currentUser,
        history = _this$props.history;
      var design = {
        creatorId: currentUser.id,
        title: "Untitled Design - ".concat(item.name),
        description: '',
        "public": false,
        width: item.width,
        height: item.height
      };
      createDesign(design).then(function (res) {
        history.push("/design/".concat(res.payload.design.id));
      });
    }
  }, {
    key: "submitCustom",
    value: function submitCustom() {
      var _this$state = this.state,
        width = _this$state.width,
        height = _this$state.height;
      this.createDesign({
        width: width,
        height: height,
        name: 'Custom Design'
      });
    }
  }, {
    key: "toggleCustom",
    value: function toggleCustom() {
      var custom = this.state.custom;
      this.setState({
        custom: !custom
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(form) {
      var _this3 = this;
      return function (e) {
        _this3.setState(_defineProperty({}, form, e.currentTarget.value));
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$state2 = this.state,
        animate = _this$state2.animate,
        custom = _this$state2.custom,
        width = _this$state2.width,
        height = _this$state2.height;
      var error = width < 40 || width > 8000 || height < 40 || height > 8000;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat((_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropdownCard), " ").concat(animate ? (_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().animate) : '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: (_CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().createDropDown)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().listItem),
        onClick: this.toggleCustom
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiPlus, {
        className: custom ? "".concat((_CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().rotate), " ").concat((_CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon)) : (_CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-8"
      }, "Custom Dimensions")), custom ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().customForm)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().custom)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "number",
        style: width !== '' && (width < 40 || width > 8000) ? {
          border: '1px solid red'
        } : {},
        inputMode: "numeric",
        pattern: "\\d*",
        name: "width",
        placeholder: "Width",
        onChange: this.handleChange('width')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "number",
        style: height !== '' && (height < 40 || height > 8000) ? {
          border: '1px solid red'
        } : {},
        inputMode: "numeric",
        pattern: "\\d*",
        name: "height",
        placeholder: "Height",
        onChange: this.handleChange('height')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "px")), (width !== '' || height !== '') && error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().error)
      }, "Dimensions must be at least 40px and no more than 8000px.") : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().submit)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "submit",
        className: "btn-blue",
        onClick: this.submitCustom,
        disabled: error
      }, "Create Design"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, mockupResponse.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          key: item.id,
          className: (_CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().listItem),
          onClick: function onClick() {
            return _this4.createDesign(item);
          }
        }, item.icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "ml-8"
        }, item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
          className: (_CreateDropDown_module_css__WEBPACK_IMPORTED_MODULE_2___default().hidden)
        }, item.description));
      }))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateDropDown);

/***/ }),

/***/ "./frontend/components/auth/EmailSignup.jsx":
/*!**************************************************!*\
  !*** ./frontend/components/auth/EmailSignup.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");



var EmailSignup = function EmailSignup(_ref) {
  var handleChange = _ref.handleChange,
    handleSubmit = _ref.handleSubmit,
    errors = _ref.errors,
    changeView = _ref.changeView,
    animate = _ref.animate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
    className: animate ? 'animated auth-form' : 'auth-form',
    onSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "return-login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn-none flex-center",
    onClick: changeView
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_1__.FiChevronsLeft, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Create your account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "We'll have you designing in no time."), errors.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "error"
  }, errors.join('. ')) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    name: "username",
    placeholder: "Name",
    onChange: handleChange('username')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "text",
    name: "email",
    placeholder: "Email",
    onChange: handleChange('email')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
    type: "password",
    name: "password",
    placeholder: "Password",
    onChange: handleChange('password')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, "Use 6 or more characters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    className: "btn-blue"
  }, "Get started, it's free!"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, "By signing up, you agree to Gwaphics'\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", null, "Terms of Use"), "\xA0and\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", null, "Privacy Policy"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, "Already signed up?\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/login"
  }, "Log in")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailSignup);

/***/ }),

/***/ "./frontend/components/auth/ExternalSignup.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/auth/ExternalSignup.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _AuthIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthIcons */ "./frontend/components/auth/AuthIcons.jsx");




var ExternalSignup = function ExternalSignup(_ref) {
  var changeView = _ref.changeView,
    demoLogin = _ref.demoLogin,
    animate = _ref.animate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: animate ? 'animated auth-form' : 'auth-form'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Design anything.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("br", null), "Publish anywhere."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Create a account, it's free. Gwaphics is loved by beginners and experts, teams and individuals."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "google btn-outline",
    disabled: true
  }, _AuthIcons__WEBPACK_IMPORTED_MODULE_1__.googleIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Sign up with Google")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    onClick: demoLogin,
    className: "demo btn-outline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiUserCheck, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Log in as Demo User")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn-blue",
    onClick: changeView
  }, "Sign up with E-mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, "Already signed up?\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/login"
  }, "Log in")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExternalSignup);

/***/ }),

/***/ "./frontend/components/auth/HaveUserNav.jsx":
/*!**************************************************!*\
  !*** ./frontend/components/auth/HaveUserNav.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _UserDropDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDropDown */ "./frontend/components/auth/UserDropDown.jsx");
/* harmony import */ var _HaveUserNav_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HaveUserNav.module.css */ "./frontend/components/auth/HaveUserNav.module.css");
/* harmony import */ var _HaveUserNav_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_HaveUserNav_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _create_drop_down_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create_drop_down_container */ "./frontend/components/auth/create_drop_down_container.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var HaveUserNav = /*#__PURE__*/function (_React$Component) {
  function HaveUserNav(props) {
    var _this;
    _classCallCheck(this, HaveUserNav);
    _this = _callSuper(this, HaveUserNav, [props]);
    _this.state = {
      dropDown: null
    };
    _this.setUserWrapperRef = _this.setUserWrapperRef.bind(_this);
    _this.setCreateWrapperRef = _this.setCreateWrapperRef.bind(_this);
    _this.toggleDropdown = _this.toggleDropdown.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }
  _inherits(HaveUserNav, _React$Component);
  return _createClass(HaveUserNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "setUserWrapperRef",
    value: function setUserWrapperRef(node) {
      this.wrapperRef = node;
    }
  }, {
    key: "setCreateWrapperRef",
    value: function setCreateWrapperRef(node) {
      this.createWrapperRef = node;
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target) && !this.createWrapperRef.contains(event.target)) {
        this.setState({
          dropDown: null
        });
      }
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown(card) {
      var dropDown = this.state.dropDown;
      if (dropDown === card) {
        this.setState({
          dropDown: null
        });
      } else {
        this.setState({
          dropDown: card
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        currentUser = _this$props.currentUser,
        logout = _this$props.logout;
      var dropDown = this.state.dropDown;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: "https://github.com/breakfasting",
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiGithub, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: "https://www.linkedin.com/in/waynesu-an/",
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-icon"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__.FiLinkedin, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_HaveUserNav_module_css__WEBPACK_IMPORTED_MODULE_2___default().containerRef),
        ref: this.setCreateWrapperRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return _this2.toggleDropdown('design');
        },
        className: "btn-blue ml-8"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: (_HaveUserNav_module_css__WEBPACK_IMPORTED_MODULE_2___default().btnSpan)
      }, "Create a design")), dropDown === 'design' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_create_drop_down_container__WEBPACK_IMPORTED_MODULE_3__["default"], null) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat((_HaveUserNav_module_css__WEBPACK_IMPORTED_MODULE_2___default().containerRef), " ml-16"),
        ref: this.setUserWrapperRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-none",
        onClick: function onClick() {
          return _this2.toggleDropdown('user');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        className: (_HaveUserNav_module_css__WEBPACK_IMPORTED_MODULE_2___default().profileImg),
        src: "https://via.placeholder.com/40x40",
        alt: "profile img"
      })), dropDown === 'user' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_UserDropDown__WEBPACK_IMPORTED_MODULE_1__["default"], {
        currentUser: currentUser,
        logout: logout
      }) : ''));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HaveUserNav);

/***/ }),

/***/ "./frontend/components/auth/LoginAuthFormContainer.js":
/*!************************************************************!*\
  !*** ./frontend/components/auth/LoginAuthFormContainer.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _LoginForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoginForm */ "./frontend/components/auth/LoginForm.jsx");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");



var demoUser = {
  email: 'demo@aa.io',
  password: '123456'
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    formType: 'login',
    errors: state.errors.session
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    action: function action(user) {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__.login)(user));
    },
    demoLogin: function demoLogin() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__.login)(demoUser));
    },
    clearErrors: function clearErrors() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__.clearErrors)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_LoginForm__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/auth/LoginForm.jsx":
/*!************************************************!*\
  !*** ./frontend/components/auth/LoginForm.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _AuthIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthIcons */ "./frontend/components/auth/AuthIcons.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var LoginForm = /*#__PURE__*/function (_React$Component) {
  function LoginForm(props) {
    var _this;
    _classCallCheck(this, LoginForm);
    _this = _callSuper(this, LoginForm, [props]);
    _this.state = {
      email: '',
      password: '',
      animate: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.demoLogin = _this.demoLogin.bind(_this);
    return _this;
  }
  _inherits(LoginForm, _React$Component);
  return _createClass(LoginForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          _this2.setState({
            animate: true
          });
        });
      });
      var clearErrors = this.props.clearErrors;
      clearErrors();
    }
  }, {
    key: "handleChange",
    value: function handleChange(form) {
      var _this3 = this;
      return function (e) {
        _this3.setState(_defineProperty({}, form, e.currentTarget.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var _this$props = this.props,
        action = _this$props.action,
        history = _this$props.history;
      var _this$state = this.state,
        email = _this$state.email,
        password = _this$state.password;
      action({
        email: email,
        password: password
      });
      history.push('/');
    }
  }, {
    key: "demoLogin",
    value: function demoLogin() {
      var _this$props2 = this.props,
        demoLogin = _this$props2.demoLogin,
        history = _this$props2.history;
      demoLogin();
      history.push('/');
    }
  }, {
    key: "render",
    value: function render() {
      var errors = this.props.errors;
      var animate = this.state.animate;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        className: animate ? 'animated auth-form' : 'auth-form',
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "return-login"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/signup"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiChevronsLeft, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "Log in to your account")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "google btn-outline",
        disabled: true
      }, _AuthIcons__WEBPACK_IMPORTED_MODULE_1__.googleIcon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Log in with Google")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        onClick: this.demoLogin,
        className: "demo btn-outline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiUserCheck, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Log in as Demo User")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "divider"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "OR"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", null)), errors.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "error"
      }, errors.join('. ')) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        name: "email",
        placeholder: "Email",
        onChange: this.handleChange('email')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "password",
        name: "password",
        placeholder: "Password",
        onChange: this.handleChange('password')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "submit",
        className: "btn-blue"
      }, "Log in"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, "New to Gwaphics?\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
        to: "/signup"
      }, "Sign up")));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginForm);

/***/ }),

/***/ "./frontend/components/auth/MainAuth.jsx":
/*!***********************************************!*\
  !*** ./frontend/components/auth/MainAuth.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _util_route_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/route_util */ "./frontend/util/route_util.jsx");
/* harmony import */ var _SignupAuthFormContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SignupAuthFormContainer */ "./frontend/components/auth/SignupAuthFormContainer.js");
/* harmony import */ var _LoginAuthFormContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginAuthFormContainer */ "./frontend/components/auth/LoginAuthFormContainer.js");
/* harmony import */ var _MainAuth_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainAuth.module.css */ "./frontend/components/auth/MainAuth.module.css");
/* harmony import */ var _MainAuth_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MainAuth_module_css__WEBPACK_IMPORTED_MODULE_4__);






var MainAuth = function MainAuth() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_MainAuth_module_css__WEBPACK_IMPORTED_MODULE_4___default().main)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__.AuthRoute, {
    path: "/login",
    component: _LoginAuthFormContainer__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_util_route_util__WEBPACK_IMPORTED_MODULE_1__.AuthRoute, {
    path: "/",
    component: _SignupAuthFormContainer__WEBPACK_IMPORTED_MODULE_2__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_MainAuth_module_css__WEBPACK_IMPORTED_MODULE_4___default().splash)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: window.splash,
    alt: ""
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainAuth);

/***/ }),

/***/ "./frontend/components/auth/SignupAuthFormContainer.js":
/*!*************************************************************!*\
  !*** ./frontend/components/auth/SignupAuthFormContainer.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _SignupForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SignupForm */ "./frontend/components/auth/SignupForm.jsx");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");



var demoUser = {
  email: 'demo@aa.io',
  password: '123456'
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    formType: 'signup',
    errors: state.errors.session
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    action: function action(user) {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__.signup)(user));
    },
    clearErrors: function clearErrors() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__.clearErrors)());
    },
    demoLogin: function demoLogin() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_2__.login)(demoUser));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_SignupForm__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/auth/SignupForm.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/auth/SignupForm.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ExternalSignup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExternalSignup */ "./frontend/components/auth/ExternalSignup.jsx");
/* harmony import */ var _EmailSignup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmailSignup */ "./frontend/components/auth/EmailSignup.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var SignupForm = /*#__PURE__*/function (_React$Component) {
  function SignupForm(props) {
    var _this;
    _classCallCheck(this, SignupForm);
    _this = _callSuper(this, SignupForm, [props]);
    _this.state = {
      showExternal: true,
      username: '',
      email: '',
      password: '',
      animate: false
    };
    _this.changeView = _this.changeView.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }
  _inherits(SignupForm, _React$Component);
  return _createClass(SignupForm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          _this2.setState({
            animate: true
          });
        });
      });
      var clearErrors = this.props.clearErrors;
      clearErrors();
    }
  }, {
    key: "changeView",
    value: function changeView() {
      var showExternal = this.state.showExternal;
      this.setState({
        showExternal: !showExternal
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(form) {
      var _this3 = this;
      return function (e) {
        _this3.setState(_defineProperty({}, form, e.currentTarget.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var _this$props = this.props,
        action = _this$props.action,
        history = _this$props.history;
      var _this$state = this.state,
        username = _this$state.username,
        email = _this$state.email,
        password = _this$state.password;
      action({
        username: username,
        email: email,
        password: password
      });
      history.push('/');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
        showExternal = _this$state2.showExternal,
        animate = _this$state2.animate;
      var _this$props2 = this.props,
        errors = _this$props2.errors,
        demoLogin = _this$props2.demoLogin;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, showExternal ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ExternalSignup__WEBPACK_IMPORTED_MODULE_1__["default"], {
        changeView: this.changeView,
        demoLogin: demoLogin,
        animate: animate
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EmailSignup__WEBPACK_IMPORTED_MODULE_2__["default"], {
        errors: errors,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        changeView: this.changeView,
        animate: animate
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignupForm);

/***/ }),

/***/ "./frontend/components/auth/UserDropDown.jsx":
/*!***************************************************!*\
  !*** ./frontend/components/auth/UserDropDown.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDropDown.module.css */ "./frontend/components/auth/UserDropDown.module.css");
/* harmony import */ var _UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */


var UserDropDown = function UserDropDown(_ref) {
  var currentUser = _ref.currentUser,
    logout = _ref.logout;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    animate = _useState2[0],
    setAnimate = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setAnimate(true);
  }, []);
  var handleLogout = function handleLogout() {
    setAnimate(false);
    // setTimeout(logout, 2000);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "".concat((_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropdownCard), " ").concat(animate ? (_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().animate) : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: (_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().profile)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().profileImg)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: "https://via.placeholder.com/64x64",
    alt: "profile img"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().profileText)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, currentUser.username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", null, currentUser.email))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    className: (_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().hr)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "".concat((_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem), " ").concat((_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().disabled))
  }, "Account Settings"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "".concat((_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem), " ").concat((_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().disabled))
  }, "Refer friends"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "".concat((_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem), " ").concat((_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().disabled))
  }, "Get Help"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: (_UserDropDown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem),
    onClick: logout
  }, "Sign out")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserDropDown);

/***/ }),

/***/ "./frontend/components/auth/UserNav.jsx":
/*!**********************************************!*\
  !*** ./frontend/components/auth/UserNav.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _UserNav_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserNav.module.css */ "./frontend/components/auth/UserNav.module.css");
/* harmony import */ var _UserNav_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_UserNav_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HaveUserNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HaveUserNav */ "./frontend/components/auth/HaveUserNav.jsx");




var UserNav = function UserNav(_ref) {
  var currentUser = _ref.currentUser,
    logout = _ref.logout;
  var noUser = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn-width btn-outline"
  }, "Log in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: "/signup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn-width btn-blue ml-16"
  }, "Sign up")));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_UserNav_module_css__WEBPACK_IMPORTED_MODULE_1___default().userNav)
  }, currentUser ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_HaveUserNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    currentUser: currentUser,
    logout: logout
  }) : noUser);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserNav);

/***/ }),

/***/ "./frontend/components/auth/create_drop_down_container.js":
/*!****************************************************************!*\
  !*** ./frontend/components/auth/create_drop_down_container.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _CreateDropDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateDropDown */ "./frontend/components/auth/CreateDropDown.jsx");
/* harmony import */ var _actions_design_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/design_actions */ "./frontend/actions/design_actions.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    createDesign: function createDesign(design) {
      return dispatch((0,_actions_design_actions__WEBPACK_IMPORTED_MODULE_2__.createDesign)(design));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)(_CreateDropDown__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/auth/user_nav_container.js":
/*!********************************************************!*\
  !*** ./frontend/components/auth/user_nav_container.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _UserNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserNav */ "./frontend/components/auth/UserNav.jsx");
/* harmony import */ var _actions_design_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/design_actions */ "./frontend/actions/design_actions.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    logout: function logout() {
      return dispatch((0,_actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.logout)());
    },
    createDesign: function createDesign(design) {
      return dispatch((0,_actions_design_actions__WEBPACK_IMPORTED_MODULE_3__.createDesign)(design));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_UserNav__WEBPACK_IMPORTED_MODULE_2__["default"]));

/***/ }),

/***/ "./frontend/components/browse/AllDesigns.jsx":
/*!***************************************************!*\
  !*** ./frontend/components/browse/AllDesigns.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DesignIndexItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesignIndexItem */ "./frontend/components/browse/DesignIndexItem.jsx");
/* harmony import */ var _AllDesigns_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AllDesigns.module.css */ "./frontend/components/browse/AllDesigns.module.css");
/* harmony import */ var _AllDesigns_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AllDesigns_module_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var AllDesigns = /*#__PURE__*/function (_React$Component) {
  function AllDesigns() {
    _classCallCheck(this, AllDesigns);
    return _callSuper(this, AllDesigns, arguments);
  }
  _inherits(AllDesigns, _React$Component);
  return _createClass(AllDesigns, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var requestDesigns = this.props.requestDesigns;
      requestDesigns();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        designs = _this$props.designs,
        folder = _this$props.folder;
      if (!folder) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_AllDesigns_module_css__WEBPACK_IMPORTED_MODULE_2___default().indexArea)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: (_AllDesigns_module_css__WEBPACK_IMPORTED_MODULE_2___default().indexTitle)
      }, folder.name), designs.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "grey"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "This folder is empty.")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_AllDesigns_module_css__WEBPACK_IMPORTED_MODULE_2___default().masonry)
      }, designs.map(function (design) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          key: design.id,
          className: (_AllDesigns_module_css__WEBPACK_IMPORTED_MODULE_2___default().masonItem),
          style: {
            flexGrow: design.width * 100 / design.height,
            flexBasis: design.width * 240 / design.height
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          style: {
            paddingBottom: "".concat(design.height / design.width * 100.0, "%")
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DesignIndexItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
          design: design
        }));
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllDesigns);

/***/ }),

/***/ "./frontend/components/browse/BrowseIndex.jsx":
/*!****************************************************!*\
  !*** ./frontend/components/browse/BrowseIndex.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _all_designs_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all_designs_container */ "./frontend/components/browse/all_designs_container.js");
/* harmony import */ var _folder_all_folders_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./folder/all_folders_container */ "./frontend/components/browse/folder/all_folders_container.js");
/* harmony import */ var _deleted_designs_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deleted_designs_container */ "./frontend/components/browse/deleted_designs_container.js");
/* harmony import */ var _folder_designs_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./folder_designs_container */ "./frontend/components/browse/folder_designs_container.js");
/* harmony import */ var _liked_designs_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./liked_designs_container */ "./frontend/components/browse/liked_designs_container.js");
/* harmony import */ var _image_uploads_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image/uploads_container */ "./frontend/components/browse/image/uploads_container.js");
/* harmony import */ var _public_designs_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public_designs_container */ "./frontend/components/browse/public_designs_container.js");
/* harmony import */ var _BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BrowseIndex.module.css */ "./frontend/components/browse/BrowseIndex.module.css");
/* harmony import */ var _BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }











var BrowseIndex = /*#__PURE__*/function (_React$Component) {
  function BrowseIndex() {
    _classCallCheck(this, BrowseIndex);
    return _callSuper(this, BrowseIndex, arguments);
  }
  _inherits(BrowseIndex, _React$Component);
  return _createClass(BrowseIndex, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var requestFolders = this.props.requestFolders;
      requestFolders();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        location = _this$props.location,
        folders = _this$props.folders;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8___default().container)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8___default().sideBar)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: (_BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8___default().list)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "".concat(location.pathname === '/' ? 'active-route' : '', " btn-index")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.FiHome, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-16"
      }, "Recommended for you")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
        to: "/folder/all-designs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "".concat(location.pathname === '/folder/all-designs' ? 'active-route' : '', " btn-index")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.FiGrid, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-16"
      }, "All your designs")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
        to: "/folder"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "".concat(location.pathname === '/folder' ? 'active-route' : '', " btn-index")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.FiFolder, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-16"
      }, "All your folders")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
        to: "/folder/likes"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "".concat(location.pathname === '/folder/likes' ? 'active-route' : '', " btn-index")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.FiHeart, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-16"
      }, "Likes")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
        to: "/folder/uploads"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "".concat(location.pathname === '/folder/uploads' ? 'active-route' : '', " btn-index")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.FiUploadCloud, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-16"
      }, "Uploads")))), folders.map(function (folder) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: (_BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem),
          key: folder.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
          to: "/folder/".concat(folder.id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          type: "button",
          className: "".concat(location.pathname === "/folder/".concat(folder.id) ? 'active-route' : '', " btn-index")
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.FiStar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "ml-16"
        }, folder.name))));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {
        to: "/folder/trash"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "".concat(location.pathname === '/folder/trash' ? 'active-route' : '', " btn-index")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_10__.FiTrash2, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-16"
      }, "Trash")))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_BrowseIndex_module_css__WEBPACK_IMPORTED_MODULE_8___default().main)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        exact: true,
        path: "/",
        component: _public_designs_container__WEBPACK_IMPORTED_MODULE_7__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "/folder/all-designs",
        component: _all_designs_container__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "/folder/trash",
        component: _deleted_designs_container__WEBPACK_IMPORTED_MODULE_3__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "/folder/likes",
        component: _liked_designs_container__WEBPACK_IMPORTED_MODULE_5__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "/folder/uploads",
        component: _image_uploads_container__WEBPACK_IMPORTED_MODULE_6__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "/folder/:folderId",
        component: _folder_designs_container__WEBPACK_IMPORTED_MODULE_4__["default"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Route, {
        path: "/folder",
        component: _folder_all_folders_container__WEBPACK_IMPORTED_MODULE_2__["default"]
      }))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrowseIndex);

/***/ }),

/***/ "./frontend/components/browse/DesignIndexItem.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/browse/DesignIndexItem.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesignIndexItem.module.css */ "./frontend/components/browse/DesignIndexItem.module.css");
/* harmony import */ var _DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_item_dropdown_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index_item_dropdown_container */ "./frontend/components/browse/index_item_dropdown_container.js");
/* harmony import */ var _image_upload_dropdown_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image/upload_dropdown_container */ "./frontend/components/browse/image/upload_dropdown_container.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







// eslint-disable-next-line react/prefer-stateless-function
var DesignIndexItem = /*#__PURE__*/function (_React$Component) {
  function DesignIndexItem(props) {
    var _this;
    _classCallCheck(this, DesignIndexItem);
    _this = _callSuper(this, DesignIndexItem, [props]);
    _this.state = {
      dropdown: false,
      direction: true
    };
    _this.setWrapperRef = _this.setWrapperRef.bind(_this);
    _this.toggleDropdown = _this.toggleDropdown.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }
  _inherits(DesignIndexItem, _React$Component);
  return _createClass(DesignIndexItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(node) {
      this.wrapperRef = node;
    }
  }, {
    key: "toggleDropdown",
    value: function toggleDropdown(event) {
      // console.log(event.clientX, event.clientY)
      var dropdown = this.state.dropdown;
      this.setState({
        dropdown: !dropdown,
        direction: event.clientX < 574
      });
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.setState({
          dropdown: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        design = _this$props.design,
        image = _this$props.image,
        temp = _this$props.temp,
        toggleModal = _this$props.toggleModal;
      var _this$state = this.state,
        dropdown = _this$state.dropdown,
        direction = _this$state.direction;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        ref: this.setWrapperRef
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().thumb)
      }, design ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: "/design/".concat(design.id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().imageBorder)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: design.thumbnail,
        alt: ""
      }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().imageBorder),
        onClick: function onClick() {
          return !temp && toggleModal(image.id);
        },
        style: {
          backgroundImage: "url(".concat(window.transparent, ")")
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: image.url,
        className: temp && (_DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().tempImg),
        alt: ""
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().title)
      }, design && design["public"] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiEye, null) : '', design ? design.title : image.title), temp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().loaderWrap)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().loader)
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().wrap)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat((_DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().toggle), " ").concat(dropdown ? (_DesignIndexItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().active) : '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-item",
        onClick: this.toggleDropdown
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiMoreHorizontal, null)))), design && dropdown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index_item_dropdown_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
        design: design,
        toggleDropdown: this.toggleDropdown,
        direction: direction
      }) : '', image && dropdown ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_image_upload_dropdown_container__WEBPACK_IMPORTED_MODULE_3__["default"], {
        image: image,
        toggleDropdown: this.toggleDropdown,
        direction: direction
      }) : '');
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignIndexItem);

/***/ }),

/***/ "./frontend/components/browse/IndexItemDropdown.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/browse/IndexItemDropdown.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexItemDropdown.module.css */ "./frontend/components/browse/IndexItemDropdown.module.css");
/* harmony import */ var _IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var IndexItemDropdown = /*#__PURE__*/function (_React$Component) {
  function IndexItemDropdown(props) {
    var _this;
    _classCallCheck(this, IndexItemDropdown);
    _this = _callSuper(this, IndexItemDropdown, [props]);
    var design = _this.props.design;
    _this.state = {
      animate: false,
      title: design.title,
      move: false
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.togglePublic = _this.togglePublic.bind(_this);
    _this.toggleTrash = _this.toggleTrash.bind(_this);
    _this.toggleMove = _this.toggleMove.bind(_this);
    _this.deleteDesign = _this.deleteDesign.bind(_this);
    return _this;
  }
  _inherits(IndexItemDropdown, _React$Component);
  return _createClass(IndexItemDropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          _this2.setState({
            animate: true
          });
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleSubmit();
    }
  }, {
    key: "handleChange",
    value: function handleChange(form) {
      var _this3 = this;
      return function (e) {
        _this3.setState(_defineProperty({}, form, e.currentTarget.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      var _this$props = this.props,
        updateDesign = _this$props.updateDesign,
        design = _this$props.design;
      var title = this.state.title;
      if (design.title !== title) {
        updateDesign({
          id: design.id,
          title: title
        });
      }
    }
  }, {
    key: "toggleMove",
    value: function toggleMove() {
      this.setState({
        move: true
      });
      var requestFolders = this.props.requestFolders;
      requestFolders();
    }
  }, {
    key: "togglePublic",
    value: function togglePublic() {
      var _this$props2 = this.props,
        updateDesign = _this$props2.updateDesign,
        design = _this$props2.design;
      updateDesign({
        id: design.id,
        "public": !design["public"]
      });
    }
  }, {
    key: "toggleTrash",
    value: function toggleTrash() {
      var _this$props3 = this.props,
        updateDesign = _this$props3.updateDesign,
        design = _this$props3.design;
      updateDesign({
        id: design.id,
        trash: !design.trash
      });
    }
  }, {
    key: "deleteDesign",
    value: function deleteDesign() {
      var _this$props4 = this.props,
        deleteDesign = _this$props4.deleteDesign,
        design = _this$props4.design;
      deleteDesign(design.id);
    }
  }, {
    key: "changeFolder",
    value: function changeFolder(folderId) {
      var _this$props5 = this.props,
        updateDesign = _this$props5.updateDesign,
        design = _this$props5.design,
        toggleDropdown = _this$props5.toggleDropdown;
      updateDesign({
        id: design.id,
        folderId: folderId
      }).then(toggleDropdown());
    }

    // createDesign(item) {
    //   const { createDesign, currentUser, requestDesign, history, design, elements } = this.props;
    //   const newDesign = {
    //     creatorId: currentUser.id,
    //     title: item.name,
    //     description: item.description,
    //     public: false,
    //     width: item.width,
    //     height: item.height,
    //   };
    //   requestDesign(item.id).then(() => {
    //     debugger;
    //   });

    //   createDesign(design).then((res) => {
    //     history.push(`/design/${res.payload.design.id}`);
    //   });
    // }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$state = this.state,
        animate = _this$state.animate,
        title = _this$state.title,
        move = _this$state.move;
      var _this$props6 = this.props,
        design = _this$props6.design,
        folders = _this$props6.folders,
        currentUser = _this$props6.currentUser,
        direction = _this$props6.direction;
      if (design.userId !== currentUser.id) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "".concat((_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropdownCard), " ").concat(animate ? (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().animate) : ''),
          style: {
            right: "".concat(direction ? -278 : 10, "px")
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropDown)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().title)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, design.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().hr)
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
          href: design.thumbnail,
          download: true
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiDownload, {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "ml-8"
        }, "Download"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().hidden)
        }, "Full size PNG"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
          to: "/view/".concat(design.id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiLink, {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "ml-8"
        }, "Get shareable link")))));
      }
      if (move) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "".concat((_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropdownCard), " ").concat(animate ? (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().animate) : ''),
          style: {
            right: "".concat(direction ? -278 : 10, "px")
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropDown)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().title)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, design.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().hr)
        })), folders.map(function (folder) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
            className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem),
            onClick: function onClick() {
              return _this4.changeFolder(folder.id);
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiFolder, {
            className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
            className: "ml-8"
          }, folder.name));
        })));
      }
      if (design.trash) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: "".concat((_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropdownCard), " ").concat(animate ? (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().animate) : ''),
          style: {
            right: "".concat(direction ? -278 : 10, "px")
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropDown)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().title)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, design.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().hr)
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem),
          onClick: this.toggleTrash
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiRotateCcw, {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "ml-8"
        }, "Restore")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem),
          onClick: this.deleteDesign
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiTrash2, {
          className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "ml-8"
        }, "Permanently delete"))));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat((_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropdownCard), " ").concat(animate ? (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().animate) : ''),
        style: {
          right: "".concat(direction ? -278 : 10, "px")
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropDown)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().title)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().input),
        type: "text",
        value: title,
        onChange: this.handleChange('title'),
        onBlur: this.handleSubmit
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().hr)
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem),
        onClick: this.togglePublic
      }, design["public"] ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiEyeOff, {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-8"
      }, "Make design private")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiEye, {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-8"
      }, "Make design public"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem),
        onClick: this.toggleMove
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiFolder, {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-8"
      }, "Move to folder")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: design.thumbnail,
        download: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiDownload, {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-8"
      }, "Download"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().hidden)
      }, "Full size PNG"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
        to: "/view/".concat(design.id)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiLink, {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-8"
      }, "Get shareable link"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem),
        onClick: this.toggleTrash
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiTrash2, {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-8"
      }, "Move to Trash"))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IndexItemDropdown);

/***/ }),

/***/ "./frontend/components/browse/all_designs_container.js":
/*!*************************************************************!*\
  !*** ./frontend/components/browse/all_designs_container.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _AllDesigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllDesigns */ "./frontend/components/browse/AllDesigns.jsx");
/* harmony import */ var _actions_design_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/design_actions */ "./frontend/actions/design_actions.js");



var mapStateToProps = function mapStateToProps(state) {
  var designs = Object.values(state.entities.designs);
  return {
    folder: {
      name: 'All your designs'
    },
    designs: designs.filter(function (design) {
      return design.userId === state.session.id && !design.trash;
    })
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    requestDesigns: function requestDesigns() {
      return dispatch((0,_actions_design_actions__WEBPACK_IMPORTED_MODULE_2__.requestOwnedDesigns)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_AllDesigns__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/browse/browse_index_container.js":
/*!**************************************************************!*\
  !*** ./frontend/components/browse/browse_index_container.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _BrowseIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrowseIndex */ "./frontend/components/browse/BrowseIndex.jsx");
/* harmony import */ var _actions_folder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/folder_actions */ "./frontend/actions/folder_actions.js");



var mapStateToProps = function mapStateToProps(state) {
  var folders = Object.values(state.entities.folders);
  return {
    folders: folders.filter(function (folder) {
      return folder.ownerId === state.session.id;
    })
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    requestFolders: function requestFolders() {
      return dispatch((0,_actions_folder_actions__WEBPACK_IMPORTED_MODULE_2__.requestFolders)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_BrowseIndex__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/browse/deleted_designs_container.js":
/*!*****************************************************************!*\
  !*** ./frontend/components/browse/deleted_designs_container.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _AllDesigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllDesigns */ "./frontend/components/browse/AllDesigns.jsx");
/* harmony import */ var _actions_design_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/design_actions */ "./frontend/actions/design_actions.js");



var mapStateToProps = function mapStateToProps(state) {
  var designs = Object.values(state.entities.designs);
  return {
    folder: {
      name: 'Trash'
    },
    designs: designs.filter(function (design) {
      return design.userId === state.session.id && design.trash;
    })
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    requestDesigns: function requestDesigns() {
      return dispatch((0,_actions_design_actions__WEBPACK_IMPORTED_MODULE_2__.requestOwnedDesigns)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_AllDesigns__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/browse/folder/AllFolders.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/browse/folder/AllFolders.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _create_folder_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create_folder_container */ "./frontend/components/browse/folder/create_folder_container.js");
/* harmony import */ var _edit_folder_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit_folder_container */ "./frontend/components/browse/folder/edit_folder_container.js");
/* harmony import */ var _AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AllFolders.module.css */ "./frontend/components/browse/folder/AllFolders.module.css");
/* harmony import */ var _AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var AllFolders = /*#__PURE__*/function (_React$Component) {
  function AllFolders(props) {
    var _this;
    _classCallCheck(this, AllFolders);
    _this = _callSuper(this, AllFolders, [props]);
    _this.state = {
      create: null
    };
    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.setWrapperRef = _this.setWrapperRef.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }
  _inherits(AllFolders, _React$Component);
  return _createClass(AllFolders, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var requestFolders = this.props.requestFolders;
      requestFolders();
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(node) {
      this.wrapperRef = node;
    }
  }, {
    key: "toggleModal",
    value: function toggleModal(what) {
      var create = this.state.create;
      if (create === null) {
        this.setState({
          create: what
        });
      } else {
        this.setState({
          create: null
        });
      }
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
        this.setState({
          create: null
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var create = this.state.create;
      var folders = this.props.folders;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat((_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().indexArea), " ").concat(create ? (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().blur) : '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().indexTitle)
      }, "All your folders"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().list)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: "/folder/all-designs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-index btn-folder"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().iconWrap)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiGrid, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-16"
      }, "All your designs")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: "/folder/likes"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-index btn-folder"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().iconWrap)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiHeart, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-16"
      }, "Likes")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: "/folder/uploads"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-index btn-folder"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().iconWrap)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiUploadCloud, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-16"
      }, "Uploads")))), folders.map(function (folder) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
          className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem),
          key: folder.id
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
          to: "/folder/".concat(folder.id)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          type: "button",
          className: "btn-index btn-folder"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().iconWrap)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiStar, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: "ml-16"
        }, folder.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          type: "button",
          className: "btn-item btn-absolute",
          onClick: function onClick() {
            return _this2.toggleModal(folder);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiMoreHorizontal, null)));
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
        to: "/folder/trash"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-index btn-folder"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().iconWrap)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiTrash2, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-16"
      }, "Trash")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-index btn-folder",
        onClick: function onClick() {
          return _this2.toggleModal('create');
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat((_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().iconWrap), " ").concat((_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().create))
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__.FiFolderPlus, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-16"
      }, "Create a folder"))))), create ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().modalWrap)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_AllFolders_module_css__WEBPACK_IMPORTED_MODULE_3___default().boxWrap),
        ref: this.setWrapperRef
      }, create === 'create' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_create_folder_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
        toggleModal: this.toggleModal
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_edit_folder_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
        toggleModal: this.toggleModal,
        folder: create
      }))) : '');
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllFolders);

/***/ }),

/***/ "./frontend/components/browse/folder/CreateFolder.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/browse/folder/CreateFolder.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CreateFolder_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateFolder.module.css */ "./frontend/components/browse/folder/CreateFolder.module.css");
/* harmony import */ var _CreateFolder_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CreateFolder_module_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var CreateFolder = /*#__PURE__*/function (_React$Component) {
  function CreateFolder(props) {
    var _this;
    _classCallCheck(this, CreateFolder);
    _this = _callSuper(this, CreateFolder, [props]);
    var folder = _this.props.folder;
    _this.state = {
      animate: false,
      name: folder.name
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.deleteFolder = _this.deleteFolder.bind(_this);
    return _this;
  }
  _inherits(CreateFolder, _React$Component);
  return _createClass(CreateFolder, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          _this2.setState({
            animate: true
          });
        });
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var name = this.state.name;
      var _this$props = this.props,
        action = _this$props.action,
        toggleModal = _this$props.toggleModal,
        folder = _this$props.folder;
      action({
        id: folder.id,
        name: name
      }).then(toggleModal);
    }
  }, {
    key: "handleChange",
    value: function handleChange(form) {
      var _this3 = this;
      return function (e) {
        _this3.setState(_defineProperty({}, form, e.currentTarget.value));
      };
    }
  }, {
    key: "deleteFolder",
    value: function deleteFolder() {
      var _this$props2 = this.props,
        folder = _this$props2.folder,
        deleteFolder = _this$props2.deleteFolder,
        toggleModal = _this$props2.toggleModal;
      deleteFolder(folder.id).then(toggleModal);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
        animate = _this$state.animate,
        name = _this$state.name;
      var formType = this.props.formType;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat((_CreateFolder_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropdownCard), " ").concat(animate ? (_CreateFolder_module_css__WEBPACK_IMPORTED_MODULE_1___default().animate) : '')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: (_CreateFolder_module_css__WEBPACK_IMPORTED_MODULE_1___default().createDropDown)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        className: (_CreateFolder_module_css__WEBPACK_IMPORTED_MODULE_1___default().customForm)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_CreateFolder_module_css__WEBPACK_IMPORTED_MODULE_1___default().title)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, formType)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_CreateFolder_module_css__WEBPACK_IMPORTED_MODULE_1___default().custom)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        name: "name",
        placeholder: "Folder Name",
        value: name,
        onChange: this.handleChange('name')
      })), formType === 'Edit Folder' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_CreateFolder_module_css__WEBPACK_IMPORTED_MODULE_1___default().submit)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-blue",
        onClick: this.deleteFolder
      }, "Delete Folder")) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_CreateFolder_module_css__WEBPACK_IMPORTED_MODULE_1___default().submit)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "submit",
        className: "btn-blue",
        onClick: this.handleSubmit
      }, formType)))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateFolder);

/***/ }),

/***/ "./frontend/components/browse/folder/all_folders_container.js":
/*!********************************************************************!*\
  !*** ./frontend/components/browse/folder/all_folders_container.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _AllFolders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllFolders */ "./frontend/components/browse/folder/AllFolders.jsx");
/* harmony import */ var _actions_folder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/folder_actions */ "./frontend/actions/folder_actions.js");



var mapStateToProps = function mapStateToProps(state) {
  var folders = Object.values(state.entities.folders);
  return {
    folders: folders.filter(function (folder) {
      return folder.ownerId === state.session.id;
    })
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    requestFolders: function requestFolders() {
      return dispatch((0,_actions_folder_actions__WEBPACK_IMPORTED_MODULE_2__.requestFolders)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_AllFolders__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/browse/folder/create_folder_container.js":
/*!**********************************************************************!*\
  !*** ./frontend/components/browse/folder/create_folder_container.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _CreateFolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateFolder */ "./frontend/components/browse/folder/CreateFolder.jsx");
/* harmony import */ var _actions_folder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/folder_actions */ "./frontend/actions/folder_actions.js");




var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.entities.users[state.session.id],
    toggleModal: ownProps.toggleModal,
    folder: {
      name: ''
    },
    formType: 'Create New Folder'
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    action: function action(folder) {
      return dispatch((0,_actions_folder_actions__WEBPACK_IMPORTED_MODULE_2__.createFolder)(folder));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)(_CreateFolder__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/browse/folder/edit_folder_container.js":
/*!********************************************************************!*\
  !*** ./frontend/components/browse/folder/edit_folder_container.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _CreateFolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateFolder */ "./frontend/components/browse/folder/CreateFolder.jsx");
/* harmony import */ var _actions_folder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/folder_actions */ "./frontend/actions/folder_actions.js");




var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.entities.users[state.session.id],
    toggleModal: ownProps.toggleModal,
    folder: ownProps.folder,
    formType: 'Edit Folder'
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    action: function action(folder) {
      return dispatch((0,_actions_folder_actions__WEBPACK_IMPORTED_MODULE_2__.updateFolder)(folder));
    },
    deleteFolder: function deleteFolder(folderId) {
      return dispatch((0,_actions_folder_actions__WEBPACK_IMPORTED_MODULE_2__.deleteFolder)(folderId));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)(_CreateFolder__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/browse/folder_designs_container.js":
/*!****************************************************************!*\
  !*** ./frontend/components/browse/folder_designs_container.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _AllDesigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllDesigns */ "./frontend/components/browse/AllDesigns.jsx");
/* harmony import */ var _actions_folder_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/folder_actions */ "./frontend/actions/folder_actions.js");



var mapStateToProps = function mapStateToProps(state, ownProps) {
  var designs = Object.values(state.entities.designs);
  var folderId = ownProps.match.params.folderId;
  return {
    folder: state.entities.folders[folderId],
    designs: designs.filter(function (design) {
      return design.userId === state.session.id && design.folderId === parseInt(folderId, 10) && !design.trash;
    })
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    requestDesigns: function requestDesigns() {
      return dispatch((0,_actions_folder_actions__WEBPACK_IMPORTED_MODULE_2__.requestFolder)(ownProps.match.params.folderId));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_AllDesigns__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/browse/image/AllImages.jsx":
/*!********************************************************!*\
  !*** ./frontend/components/browse/image/AllImages.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _AllImages_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllImages.module.css */ "./frontend/components/browse/image/AllImages.module.css");
/* harmony import */ var _AllImages_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_AllImages_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DesignIndexItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DesignIndexItem */ "./frontend/components/browse/DesignIndexItem.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var AllImages = /*#__PURE__*/function (_React$Component) {
  function AllImages(props) {
    var _this;
    _classCallCheck(this, AllImages);
    _this = _callSuper(this, AllImages, [props]);
    _this.state = {
      imageUrl: '',
      uploadedFile: null,
      title: 'temp',
      width: 0,
      height: 0
    };
    _this.handleFile = _this.handleFile.bind(_this);
    return _this;
  }
  _inherits(AllImages, _React$Component);
  return _createClass(AllImages, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fetchUserUploads = this.props.fetchUserUploads;
      fetchUserUploads();
    }
  }, {
    key: "handleFile",
    value: function handleFile(e) {
      var _this2 = this;
      var reader = new FileReader();
      var file = e.currentTarget.files[0];
      reader.onloadend = function () {
        var image = new Image();
        image.onload = function () {
          _this2.setState({
            imageUrl: reader.result,
            uploadedFile: file,
            title: file.name,
            width: image.width,
            height: image.height
          }, _this2.uploadImage);
        };
        image.src = reader.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({
          imageUrl: '',
          uploadedFile: null
        });
      }
    }
  }, {
    key: "uploadImage",
    value: function uploadImage() {
      var _this3 = this;
      var _this$state = this.state,
        title = _this$state.title,
        uploadedFile = _this$state.uploadedFile,
        width = _this$state.width,
        height = _this$state.height;
      var receiveUpload = this.props.receiveUpload;
      var formData = new FormData();
      formData.append('uploaded_image[title]', title);
      if (uploadedFile) {
        formData.append('uploaded_image[image]', uploadedFile);
        formData.append('uploaded_image[width]', width);
        formData.append('uploaded_image[height]', height);
      }
      $.ajax({
        url: '/api/uploaded_images',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
      }).then(function (payload) {
        _this3.setState({
          imageUrl: '',
          uploadedFile: null
        });
        receiveUpload(payload);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        images = _this$props.images,
        folder = _this$props.folder,
        toggleModal = _this$props.toggleModal;
      var _this$state2 = this.state,
        width = _this$state2.width,
        height = _this$state2.height,
        imageUrl = _this$state2.imageUrl,
        title = _this$state2.title;
      if (!folder) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_AllImages_module_css__WEBPACK_IMPORTED_MODULE_1___default().indexArea)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_AllImages_module_css__WEBPACK_IMPORTED_MODULE_1___default().titleBar)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
        className: (_AllImages_module_css__WEBPACK_IMPORTED_MODULE_1___default().indexTitle)
      }, folder.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: (_AllImages_module_css__WEBPACK_IMPORTED_MODULE_1___default().uploadBtnLabel)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: (_AllImages_module_css__WEBPACK_IMPORTED_MODULE_1___default().uploadBtnText)
      }, "Upload"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        className: (_AllImages_module_css__WEBPACK_IMPORTED_MODULE_1___default().hidden),
        type: "file",
        accept: "image/*",
        onChange: this.handleFile
      }))), images.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "grey"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", null, "This folder is full of potential")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_AllImages_module_css__WEBPACK_IMPORTED_MODULE_1___default().masonry)
      }, imageUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_AllImages_module_css__WEBPACK_IMPORTED_MODULE_1___default().masonItem),
        style: {
          flexGrow: width * 100 / height,
          flexBasis: width * 240 / height
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        style: {
          paddingBottom: "".concat(height / width * 100.0, "%")
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DesignIndexItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
        image: {
          url: imageUrl,
          title: title,
          width: width,
          height: height
        },
        temp: true
      })), images.map(function (image) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          key: image.id,
          className: (_AllImages_module_css__WEBPACK_IMPORTED_MODULE_1___default().masonItem),
          style: {
            flexGrow: image.width * 100 / image.height,
            flexBasis: image.width * 240 / image.height
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          style: {
            paddingBottom: "".concat(image.height / image.width * 100.0, "%")
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DesignIndexItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          image: image,
          toggleModal: toggleModal
        }));
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AllImages);

/***/ }),

/***/ "./frontend/components/browse/image/ImageDropdown.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/browse/image/ImageDropdown.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../IndexItemDropdown.module.css */ "./frontend/components/browse/IndexItemDropdown.module.css");
/* harmony import */ var _IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




// download original and trash
var ImageDropdown = /*#__PURE__*/function (_React$Component) {
  function ImageDropdown(props) {
    var _this;
    _classCallCheck(this, ImageDropdown);
    _this = _callSuper(this, ImageDropdown, [props]);
    var image = _this.props.image;
    _this.state = {
      animate: false,
      title: image.title
    };
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }
  _inherits(ImageDropdown, _React$Component);
  return _createClass(ImageDropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          _this2.setState({
            animate: true
          });
        });
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleSubmit();
    }
  }, {
    key: "handleChange",
    value: function handleChange(form) {
      var _this3 = this;
      return function (e) {
        _this3.setState(_defineProperty({}, form, e.currentTarget.value));
      };
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit() {
      var _this$props = this.props,
        updateImage = _this$props.updateImage,
        image = _this$props.image;
      var title = this.state.title;
      if (image.title !== title) {
        updateImage({
          id: image.id,
          title: title
        });
      }
    }
  }, {
    key: "deleteUpload",
    value: function deleteUpload(id) {
      var deleteImage = this.props.deleteImage;
      deleteImage(id);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$props2 = this.props,
        direction = _this$props2.direction,
        image = _this$props2.image;
      var _this$state = this.state,
        title = _this$state.title,
        animate = _this$state.animate;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat((_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropdownCard), " ").concat(animate ? (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().animate) : ''),
        style: {
          right: "".concat(direction ? -278 : 10, "px")
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().dropDown)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().title)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().input),
        type: "text",
        value: title,
        onChange: this.handleChange('title'),
        onBlur: this.handleSubmit
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().hr)
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: image.url,
        download: true
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiDownload, {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-8"
      }, "Download"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().hidden)
      }, "Original Image"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().listItem),
        onClick: function onClick() {
          return _this4.deleteUpload(image.id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiTrash2, {
        className: (_IndexItemDropdown_module_css__WEBPACK_IMPORTED_MODULE_1___default().icon)
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
        className: "ml-8"
      }, "Delete"))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageDropdown);

/***/ }),

/***/ "./frontend/components/browse/image/upload_dropdown_container.js":
/*!***********************************************************************!*\
  !*** ./frontend/components/browse/image/upload_dropdown_container.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ImageDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageDropdown */ "./frontend/components/browse/image/ImageDropdown.jsx");
/* harmony import */ var _actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/uploaded_image_actions */ "./frontend/actions/uploaded_image_actions.js");




var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateImage: function updateImage(uploadedImage) {
      return dispatch((0,_actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_2__.updateUpload)(uploadedImage));
    },
    deleteImage: function deleteImage(uploadedImageId) {
      return dispatch((0,_actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_2__.deleteUpload)(uploadedImageId));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(null, mapDispatchToProps)(_ImageDropdown__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/browse/image/uploads_container.js":
/*!***************************************************************!*\
  !*** ./frontend/components/browse/image/uploads_container.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _AllImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllImages */ "./frontend/components/browse/image/AllImages.jsx");
/* harmony import */ var _actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/uploaded_image_actions */ "./frontend/actions/uploaded_image_actions.js");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/modal_actions */ "./frontend/actions/modal_actions.js");




var mapStateToProps = function mapStateToProps(state) {
  var uploadedImages = state.entities.users[state.session.id].uploadedImages;
  return {
    folder: {
      name: 'Uploads'
    },
    images: uploadedImages ? uploadedImages.map(function (id) {
      return state.entities.uploadedImages[id];
    }) : []
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUserUploads: function fetchUserUploads() {
      return dispatch((0,_actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_2__.fetchUserUploads)());
    },
    receiveUpload: function receiveUpload(payload) {
      return dispatch((0,_actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_2__.receiveUpload)(payload));
    },
    toggleModal: function toggleModal(id) {
      return dispatch((0,_actions_modal_actions__WEBPACK_IMPORTED_MODULE_3__.toggleModal)('uploadedModal', id));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_AllImages__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/browse/index_item_dropdown_container.js":
/*!*********************************************************************!*\
  !*** ./frontend/components/browse/index_item_dropdown_container.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _IndexItemDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexItemDropdown */ "./frontend/components/browse/IndexItemDropdown.jsx");
/* harmony import */ var _actions_design_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/design_actions */ "./frontend/actions/design_actions.js");
/* harmony import */ var _reducers_design_elements_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/design/elements_selector */ "./frontend/reducers/design/elements_selector.js");
/* harmony import */ var _actions_folder_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/folder_actions */ "./frontend/actions/folder_actions.js");






var mapStateToProps = function mapStateToProps(state, ownProps) {
  var folders = Object.values(state.entities.folders);
  return {
    currentUser: state.entities.users[state.session.id],
    design: ownProps.design,
    toggleDropdown: ownProps.toggleDropdown,
    folders: folders.filter(function (folder) {
      return folder.ownerId === state.session.id;
    }),
    elements: ownProps.design ? (0,_reducers_design_elements_selector__WEBPACK_IMPORTED_MODULE_3__["default"])(state, ownProps.design.id) : []
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateDesign: function updateDesign(design) {
      return dispatch((0,_actions_design_actions__WEBPACK_IMPORTED_MODULE_2__.updateDesign)(design));
    },
    deleteDesign: function deleteDesign(designId) {
      return dispatch((0,_actions_design_actions__WEBPACK_IMPORTED_MODULE_2__.deleteDesign)(designId));
    },
    requestFolders: function requestFolders() {
      return dispatch((0,_actions_folder_actions__WEBPACK_IMPORTED_MODULE_4__.requestFolders)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)((0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.withRouter)(_IndexItemDropdown__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/browse/liked_designs_container.js":
/*!***************************************************************!*\
  !*** ./frontend/components/browse/liked_designs_container.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _AllDesigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllDesigns */ "./frontend/components/browse/AllDesigns.jsx");


// import { requestOwnedDesigns } from '../../actions/design_actions';

var mapStateToProps = function mapStateToProps(state) {
  // const designs = Object.values(state.entities.designs);
  return {
    folder: {
      name: 'Likes'
    },
    designs: []
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // requestDesigns: () => dispatch(requestOwnedDesigns()),
    requestDesigns: function requestDesigns() {}
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_AllDesigns__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/browse/public_designs_container.js":
/*!****************************************************************!*\
  !*** ./frontend/components/browse/public_designs_container.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _AllDesigns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllDesigns */ "./frontend/components/browse/AllDesigns.jsx");
/* harmony import */ var _actions_design_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/design_actions */ "./frontend/actions/design_actions.js");



var mapStateToProps = function mapStateToProps(state) {
  var designs = Object.values(state.entities.designs);
  return {
    folder: {
      name: 'All public designs'
    },
    designs: designs.filter(function (design) {
      return design["public"] && !design.trash;
    })
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    requestDesigns: function requestDesigns() {
      return dispatch((0,_actions_design_actions__WEBPACK_IMPORTED_MODULE_2__.requestTemplates)());
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_AllDesigns__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/browse_container.js":
/*!*************************************************!*\
  !*** ./frontend/components/browse_container.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Browse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Browse */ "./frontend/components/Browse.jsx");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/modal_actions */ "./frontend/actions/modal_actions.js");



var mapStateToProps = function mapStateToProps(state) {
  return {
    mode: state.ui.mode,
    sessionId: state.session.id,
    uploadedModal: state.ui.modal.uploadedModal
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleModal: function toggleModal(modal, id) {
      return dispatch((0,_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__.toggleModal)(modal, id));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_Browse__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/editor/Design.jsx":
/*!***********************************************!*\
  !*** ./frontend/components/editor/Design.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_moveable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-moveable */ "./node_modules/react-moveable/dist/moveable.esm.js");
/* harmony import */ var _elements_Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/Element */ "./frontend/components/editor/elements/Element.jsx");
/* harmony import */ var _Design_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Design.module.css */ "./frontend/components/editor/Design.module.css");
/* harmony import */ var _Design_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Design_module_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





// const Shape = () => <div>I am a shape</div>
var Design = /*#__PURE__*/function (_React$Component) {
  function Design(props) {
    var _this;
    _classCallCheck(this, Design);
    _this = _callSuper(this, Design, [props]);
    _this.state = {
      target: null
    };
    _this.frame = {
      translate: [0, 0],
      rotate: 0
    };
    _this.keepRatio = false;
    _this.myRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
    _this.holdShift = _this.holdShift.bind(_this);
    _this.releaseShift = _this.releaseShift.bind(_this);
    return _this;
  }
  _inherits(Design, _React$Component);
  return _createClass(Design, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.holdShift);
      document.addEventListener('keyup', this.releaseShift);
      var target = document.querySelector('.target');
      this.setState({
        target: target
      });
      this.element = this.props.elements[0];
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
        zoom = _this$props.zoom,
        selection = _this$props.selection;
      if (zoom !== prevProps.zoom) {
        this.myRef.current.updateRect();
      }
      if (prevProps.selection && !selection) {
        this.setState({
          target: null
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.holdShift);
      document.removeEventListener('keyup', this.releaseShift);
    }
  }, {
    key: "holdShift",
    value: function holdShift(e) {
      if (e.shiftKey) {
        this.keepRatio = true;
      }
    }
  }, {
    key: "releaseShift",
    value: function releaseShift() {
      this.keepRatio = false;
    }

    // onControlledDragStop(e, element, position) {
    //   const { updateElement, zoom } = this.props;
    //   const { x, y } = position;
    //   updateElement(null, { ...element, posX: x / zoom, posY: y / zoom });
    // }
  }, {
    key: "select",
    value: function select(id) {
      var target = document.getElementById(id);
      var _this$props2 = this.props,
        setSelection = _this$props2.setSelection,
        elements = _this$props2.elements;
      this.setState({
        target: target
      });
      this.element = elements[id];
      setSelection(this.element.id);
    }
  }, {
    key: "updateSelected",
    value: function updateSelected() {
      var receiveElement = this.props.receiveElement;
      receiveElement(this.element);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props3 = this.props,
        elements = _this$props3.elements,
        design = _this$props3.design,
        zoom = _this$props3.zoom;
      var target = this.state.target;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_Design_module_css__WEBPACK_IMPORTED_MODULE_2___default().design),
        style: {
          width: design.width * zoom,
          height: design.height * zoom
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_moveable__WEBPACK_IMPORTED_MODULE_3__["default"], {
        ref: this.myRef,
        target: target,
        draggable: true,
        throttleDrag: 0,
        resizable: true,
        keepRatio: this.keepRatio,
        throttleResize: 0,
        rotatable: true,
        rotationPosition: "top",
        throttleRotate: 0,
        onDragStart: function onDragStart(_ref) {
          var set = _ref.set;
          _this2.frame.rotate = target.style.transform ? parseFloat(target.style.transform.split('rotate(')[1].split('deg)')[0]) : 0;
          _this2.frame.translate = [parseInt(target.style.left, 10), parseInt(target.style.top, 10)];
          set(_this2.frame.translate);
        },
        onDrag: function onDrag(_ref2) {
          var beforeTranslate = _ref2.beforeTranslate;
          _this2.frame.translate = beforeTranslate;
        },
        onDragEnd: function onDragEnd(_ref3) {
          var isDrag = _ref3.isDrag;
          _this2.element.posX = _this2.frame.translate[0] / zoom;
          _this2.element.posY = _this2.frame.translate[1] / zoom;
          if (isDrag) _this2.updateSelected();
        },
        onResizeStart: function onResizeStart(_ref4) {
          var setOrigin = _ref4.setOrigin,
            dragStart = _ref4.dragStart;
          setOrigin(['%', '%']);
          _this2.frame.rotate = target.style.transform ? parseFloat(target.style.transform.split('rotate(')[1].split('deg)')[0]) : 0;
          _this2.frame.translate = [parseInt(target.style.left, 10), parseInt(target.style.top, 10)];
          if (dragStart) {
            dragStart.set(_this2.frame.translate);
          }
        },
        onResize: function onResize(_ref5) {
          var width = _ref5.width,
            height = _ref5.height,
            drag = _ref5.drag;
          _this2.frame.translate = drag.beforeTranslate;
          target.style.width = "".concat(width, "px");
          target.style.height = "".concat(height, "px");
          // console.log(this.element)
          _this2.element.elementableAttributes.width = width / zoom;
          _this2.element.elementableAttributes.height = height / zoom;
          _this2.setState({});
        },
        onResizeEnd: function onResizeEnd(_ref6) {
          var isDrag = _ref6.isDrag;
          if (isDrag) _this2.updateSelected();
        },
        onRotateStart: function onRotateStart(_ref7) {
          var set = _ref7.set;
          _this2.frame.translate = [parseInt(target.style.left, 10), parseInt(target.style.top, 10)];
          _this2.frame.rotate = target.style.transform ? parseFloat(target.style.transform.split('rotate(')[1].split('deg)')[0]) : 0;
          set(_this2.frame.rotate);
        },
        onRotate: function onRotate(_ref8) {
          var beforeRotate = _ref8.beforeRotate;
          _this2.frame.rotate = beforeRotate;
        },
        onRotateEnd: function onRotateEnd(_ref9) {
          var isDrag = _ref9.isDrag;
          _this2.element.rotate = _this2.frame.rotate;
          if (isDrag) _this2.updateSelected();
        },
        onRender: function onRender() {
          target.style.left = "".concat(_this2.frame.translate[0], "px");
          target.style.top = "".concat(_this2.frame.translate[1], "px");
          target.style.transform = "rotate(".concat(_this2.frame.rotate, "deg)");
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_Design_module_css__WEBPACK_IMPORTED_MODULE_2___default().elementsContainer),
        id: "noElement"
      }, elements.map(function (element, index) {
        if (element._destroy) return null;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          key: element.id,
          id: index,
          style: {
            position: 'absolute',
            zIndex: element.zIndex,
            left: element.posX * zoom,
            top: element.posY * zoom,
            transform: "rotate(".concat(element.rotate, "deg)")
            // transform: `translate(${element.posX * zoom}px, ${element.posY * zoom}px)`,
          },
          onClick: function onClick() {
            return _this2.select(index);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements_Element__WEBPACK_IMPORTED_MODULE_1__["default"], {
          element: element,
          zoom: zoom
        }));
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Design);

/***/ }),

/***/ "./frontend/components/editor/DesignDrawer.jsx":
/*!*****************************************************!*\
  !*** ./frontend/components/editor/DesignDrawer.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _ToolsNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToolsNav */ "./frontend/components/editor/ToolsNav.jsx");
/* harmony import */ var _drawers_ElementsDrawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawers/ElementsDrawer */ "./frontend/components/editor/drawers/ElementsDrawer.jsx");
/* harmony import */ var _drawers_TextDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawers/TextDrawer */ "./frontend/components/editor/drawers/TextDrawer.jsx");
/* harmony import */ var _drawers_uploads_drawer_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawers/uploads_drawer_container */ "./frontend/components/editor/drawers/uploads_drawer_container.js");
/* harmony import */ var _drawers_unsplash_drawer_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drawers/unsplash_drawer_container */ "./frontend/components/editor/drawers/unsplash_drawer_container.js");
/* harmony import */ var _drawers_EmptyDrawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drawers/EmptyDrawer */ "./frontend/components/editor/drawers/EmptyDrawer.jsx");
/* harmony import */ var _DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DesignDrawer.module.css */ "./frontend/components/editor/DesignDrawer.module.css");
/* harmony import */ var _DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_7__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }









var DesignDrawer = /*#__PURE__*/function (_React$Component) {
  function DesignDrawer(props) {
    var _this;
    _classCallCheck(this, DesignDrawer);
    _this = _callSuper(this, DesignDrawer, [props]);
    _this.state = {
      drawer: 1,
      closed: false,
      animate: true
    };
    _this.changeDrawer = _this.changeDrawer.bind(_this);
    _this.closeDrawer = _this.closeDrawer.bind(_this);
    return _this;
  }
  _inherits(DesignDrawer, _React$Component);
  return _createClass(DesignDrawer, [{
    key: "changeDrawer",
    value: function changeDrawer(id) {
      var closed = this.state.closed;
      if (closed) {
        this.setState({
          drawer: id,
          closed: false,
          animate: false
        });
      } else {
        this.setState({
          drawer: id,
          closed: false,
          animate: true
        });
      }
    }
  }, {
    key: "closeDrawer",
    value: function closeDrawer() {
      this.setState({
        closed: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        addElement = _this$props.addElement,
        zoom = _this$props.zoom;
      var _this$state = this.state,
        drawer = _this$state.drawer,
        closed = _this$state.closed,
        animate = _this$state.animate;
      var drawers = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_drawers_EmptyDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_drawers_unsplash_drawer_container__WEBPACK_IMPORTED_MODULE_5__["default"], {
        addElement: addElement
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_drawers_ElementsDrawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
        addElement: addElement
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_drawers_TextDrawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        addElement: addElement,
        zoom: zoom
      }),
      /*#__PURE__*/
      // <EmptyDrawer />,
      react__WEBPACK_IMPORTED_MODULE_0__.createElement(_drawers_uploads_drawer_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
        addElement: addElement
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_drawers_EmptyDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_drawers_EmptyDrawer__WEBPACK_IMPORTED_MODULE_6__["default"], null)];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_7___default().designDrawer)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ToolsNav__WEBPACK_IMPORTED_MODULE_1__["default"], {
        changeDrawer: this.changeDrawer,
        current: drawer,
        closed: closed,
        animate: animate
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat((_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_7___default().drawer), " ").concat(closed ? '' : (_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_7___default().showDrawer))
      }, drawers[drawer]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_7___default().handle)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "".concat((_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_7___default().container), " btn-none"),
        onClick: this.closeDrawer
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "xMidYMid meet",
        viewBox: "199 149 104 404",
        width: "20",
        height: "80"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        d: "M200 550C200.3 533.74 216.97 517.07 250 500C283.03 482.93 299.7 466.26 300 450L300 250C299.67 233.13 283 216.46 250 200C217 183.54 200.33 166.87 200 150L200 550Z",
        id: "fEGO0r42v"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
        xlinkHref: "#fEGO0r42v",
        opacity: "1",
        fill: "#293039",
        fillOpacity: "1"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
        xlinkHref: "#fEGO0r42v",
        opacity: "1",
        fillOpacity: "0",
        stroke: "#000000",
        strokeWidth: "0",
        strokeOpacity: "1"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_7___default().handleIcon)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__.FiChevronLeft, null)))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignDrawer);

/***/ }),

/***/ "./frontend/components/editor/DesignTools.jsx":
/*!****************************************************!*\
  !*** ./frontend/components/editor/DesignTools.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DesignTools_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesignTools.module.css */ "./frontend/components/editor/DesignTools.module.css");
/* harmony import */ var _DesignTools_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DesignTools_module_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }


var DesignTools = /*#__PURE__*/function (_React$Component) {
  function DesignTools(props) {
    var _this;
    _classCallCheck(this, DesignTools);
    _this = _callSuper(this, DesignTools, [props]);
    _this.state = {
      dropdown: null,
      selected: {},
      selectedId: null
    };
    _this.updateStuff = _this.updateStuff.bind(_this);
    _this.deleteElement = _this.deleteElement.bind(_this);
    // this.deleteKeyDown = this.deleteKeyDown.bind(this);
    return _this;
  }

  // componentDidMount() {
  //   document.addEventListener('keydown', this.deleteKeyDown);
  // }
  _inherits(DesignTools, _React$Component);
  return _createClass(DesignTools, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var element = this.props.element;
      if (!prevProps.element && element) {
        this.setState({
          selected: element
        });
      } else if (prevProps.element && !element) {
        this.setState({
          selected: {}
        });
      } else if (prevProps.element && element && prevProps.element.id !== element.id) {
        this.setState({
          selected: element
        });
      }
      // if (!prevProps.element && element && element.id !== prevProps.element.id) {
      //   console.log('hello')
      // }
      // if (Object.keys(prevProps.selected)[0] !== Object.keys(selected)[0]) {
      //   this.updateSelected();
      // }
    }

    // componentWillUnmount() {
    //   document.removeEventListener('keydown', this.deleteKeyDown);
    // }
  }, {
    key: "changeValue",
    value: function changeValue(attr) {
      var _this2 = this;
      if (attr === 'posX' || attr === 'posY' || attr === 'transparency' || attr === 'zIndex') {
        return function (e) {
          var selected = _this2.state.selected;
          selected[attr] = e.target.value;
          _this2.setState({
            selected: selected
          });
        };
      }
      return function (e) {
        var selected = _this2.state.selected;
        selected.elementableAttributes[attr] = e.target.value;
        _this2.setState({
          selected: selected
        });
      };
    }

    // deleteKeyDown(event) {
    //   const { selected } = this.state;
    //   if (event.keyCode === 8 && Object.keys(selected).length !== 0) {
    //     this.deleteElement();
    //   }
    // }
  }, {
    key: "deleteElement",
    value: function deleteElement() {
      var selected = this.state.selected;
      var _this$props = this.props,
        receiveElement = _this$props.receiveElement,
        setSelection = _this$props.setSelection;
      receiveElement(_objectSpread(_objectSpread({}, selected), {}, {
        _destroy: true
      }));
      setSelection(null);
    }
  }, {
    key: "updateStuff",
    value: function updateStuff(e) {
      e.preventDefault();
      var selected = this.state.selected;
      var receiveElement = this.props.receiveElement;
      receiveElement({
        elementableAttributes: {
          color: selected.elementableAttributes.color
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var selection = this.props.selection;
      var selected = this.state.selected;
      if (Object.keys(selected).length === 0) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: (_DesignTools_module_css__WEBPACK_IMPORTED_MODULE_1___default().designTools)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
          className: (_DesignTools_module_css__WEBPACK_IMPORTED_MODULE_1___default().nothingSelected)
        }, "Nothing Selected"));
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignTools_module_css__WEBPACK_IMPORTED_MODULE_1___default().designTools)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        className: (_DesignTools_module_css__WEBPACK_IMPORTED_MODULE_1___default().designForm),
        onChange: this.updateStuff
        // onSubmit={(e) => e.preventDefault()}
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignTools_module_css__WEBPACK_IMPORTED_MODULE_1___default().leftNav)
      }, (selected.elementableType === 'Text' || selected.elementableType === 'Shape') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        className: "btn-color",
        style: {
          backgroundColor: selected.elementableAttributes.color
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "color",
        className: (_DesignTools_module_css__WEBPACK_IMPORTED_MODULE_1___default().hidden),
        size: selected.elementableAttributes.color.length + 1,
        value: selected.elementableAttributes.color,
        onChange: this.changeValue('color')
      })), selected.elementableType === 'Text' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Text:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        className: "input-attr",
        size: selected.elementableAttributes.text.length + 1,
        value: selected.elementableAttributes.text,
        onChange: this.changeValue('text')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Size:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        className: "input-attr",
        size: selected.elementableAttributes.fontSize.toString().length + 1,
        value: selected.elementableAttributes.fontSize,
        onChange: this.changeValue('fontSize')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Font:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        className: "input-attr",
        size: selected.elementableAttributes.fontFamily.toString().length + 1,
        value: selected.elementableAttributes.fontFamily,
        onChange: this.changeValue('fontFamily')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Weight:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        id: "attr-weight",
        type: "text",
        className: "input-attr",
        size: selected.elementableAttributes.fontWeight.toString().length + 1,
        value: selected.elementableAttributes.fontWeight,
        onChange: this.changeValue('fontWeight')
      })) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DesignTools_module_css__WEBPACK_IMPORTED_MODULE_1___default().rightNav)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Opacity:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        className: "input-attr",
        size: selected.transparency.toString().length + 1,
        value: selected.transparency,
        onChange: this.changeValue('transparency')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Order:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        type: "text",
        className: "input-attr",
        size: selected.zIndex.toString().length + 1,
        value: selected.zIndex,
        onChange: this.changeValue('zIndex')
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-color",
        onClick: this.deleteElement
      }, "Delete"))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesignTools);

/***/ }),

/***/ "./frontend/components/editor/Editor.jsx":
/*!***********************************************!*\
  !*** ./frontend/components/editor/Editor.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Editor_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.module.css */ "./frontend/components/editor/Editor.module.css");
/* harmony import */ var _Editor_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Editor_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditorNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EditorNav */ "./frontend/components/editor/EditorNav.jsx");
/* harmony import */ var _DesignDrawer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DesignDrawer */ "./frontend/components/editor/DesignDrawer.jsx");
/* harmony import */ var _WorkArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkArea */ "./frontend/components/editor/WorkArea.jsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var Editor = /*#__PURE__*/function (_React$Component) {
  function Editor(props) {
    var _this;
    _classCallCheck(this, Editor);
    _this = _callSuper(this, Editor, [props]);
    _this.state = {
      design: {},
      // design attributes
      elements: [],
      // key-value pair elementId and the current element, array index=z-index order
      zoom: 0.5,
      selection: null,
      selected: {},
      // kv pair or array index and element, with or without eleId
      loading: false
      // undoHistory: [], array of key-value pair of elementId and the element copy before
    };
    _this.changeZoomFactor = _this.changeZoomFactor.bind(_this);
    _this.updateDesign = _this.updateDesign.bind(_this);
    _this.setSelected = _this.setSelected.bind(_this);
    _this.setSelection = _this.setSelection.bind(_this);
    _this.updateElement = _this.updateElement.bind(_this);
    _this.addElement = _this.addElement.bind(_this);
    return _this;
  }
  _inherits(Editor, _React$Component);
  return _createClass(Editor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;
      // only loads when refresh page, not changing routes
      var requestDesign = this.props.requestDesign;
      requestDesign().then(function () {
        var _this2$props = _this2.props,
          design = _this2$props.design,
          elements = _this2$props.elements;
        _this2.setState({
          design: design,
          elements: elements
        });
      });
    }
  }, {
    key: "setSelection",
    value: function setSelection(idx) {
      this.setState({
        selection: idx
      });
    }
  }, {
    key: "setSelected",
    value: function setSelected(id) {
      var elements = this.props.elements;
      if (id === null) {
        this.setState({
          selected: {}
        });
      } else {
        this.setState({
          selected: _defineProperty({}, id, elements[id])
        });
      }
    }
  }, {
    key: "changeZoomFactor",
    value: function changeZoomFactor(fact) {
      this.setState({
        zoom: fact
      });
    }
  }, {
    key: "updateElement",
    value: function updateElement(idx, element) {
      var receiveElement = this.props.receiveElement;
      receiveElement(element);
    }

    // addElement(element) {
    //   const { elements } = this.state;
    //   elements.push(element);
    //   this.setState({ elements, selected: { [elements.length - 1]: element } });
    // }
  }, {
    key: "addElement",
    value: function addElement(element) {
      var _this$props = this.props,
        createElement = _this$props.createElement,
        design = _this$props.design;
      createElement(design.id, _objectSpread(_objectSpread({}, element), {}, {
        id: "temp-".concat(Date.now())
      }));
    }
  }, {
    key: "screenshot",
    value: function screenshot() {
      var _this$state$design = this.state.design,
        id = _this$state$design.id,
        width = _this$state$design.width,
        height = _this$state$design.height;
      return fetch("".concat(undefined, "screenshot?id=").concat(id, "&width=").concat(width, "&height=").concat(height)).then(function (res) {
        return res.blob();
      }).then(function (blob) {
        var file = new File([blob], 'File name', {
          type: 'image/png'
        });
        return file;
      });
    }
  }, {
    key: "updateDesign",
    value: function updateDesign() {
      var _this3 = this;
      var design = this.state.design;
      var _this$props2 = this.props,
        updateDesign = _this$props2.updateDesign,
        elements = _this$props2.elements;
      elements.forEach(function (element) {
        if (typeof element.id === 'string') {
          delete element.id;
        }
      });
      design.elementsAttributes = elements;
      delete design.thumbnail;
      this.setState({
        loading: true
      });
      updateDesign(design).then(function () {
        _this3.screenshot().then(function (file) {
          var formData = new FormData();
          formData.append('design[id]', design.id);
          formData.append('design[thumbnail]', file);
          $.ajax({
            url: "/api/designs/".concat(design.id),
            method: 'PATCH',
            data: formData,
            processData: false,
            contentType: false
          }).then(function () {
            return _this3.setState({
              loading: false
            });
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var _this$state = this.state,
        design = _this$state.design,
        zoom = _this$state.zoom,
        selected = _this$state.selected,
        loading = _this$state.loading,
        selection = _this$state.selection;
      var elements = this.props.elements;
      // return <Viewer design={design} elements={elements} zoom={zoom} />
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_Editor_module_css__WEBPACK_IMPORTED_MODULE_1___default().editorContainer)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_EditorNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        updateDesign: this.updateDesign,
        loading: loading
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_Editor_module_css__WEBPACK_IMPORTED_MODULE_1___default().editorBottomContainer)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DesignDrawer__WEBPACK_IMPORTED_MODULE_3__["default"], {
        addElement: this.addElement,
        zoom: zoom
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_WorkArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
        design: design,
        elements: elements,
        zoom: zoom,
        updateElementPos: this.updateElementPos,
        selected: selected,
        setSelected: this.setSelected,
        updateElement: this.updateElement,
        selection: selection,
        setSelection: this.setSelection
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_Editor_module_css__WEBPACK_IMPORTED_MODULE_1___default().zoomBar)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-icon",
        onClick: function onClick() {
          return _this4.changeZoomFactor(1);
        }
      }, "100%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-icon",
        onClick: function onClick() {
          return _this4.changeZoomFactor(0.75);
        }
      }, "75%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-icon",
        onClick: function onClick() {
          return _this4.changeZoomFactor(0.5);
        }
      }, "50%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: "btn-icon",
        onClick: function onClick() {
          return _this4.changeZoomFactor(0.25);
        }
      }, "25%"))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Editor);

/***/ }),

/***/ "./frontend/components/editor/EditorNav.jsx":
/*!**************************************************!*\
  !*** ./frontend/components/editor/EditorNav.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _EditorNav_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditorNav.module.css */ "./frontend/components/editor/EditorNav.module.css");
/* harmony import */ var _EditorNav_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_EditorNav_module_css__WEBPACK_IMPORTED_MODULE_1__);




var EditorNav = function EditorNav(_ref) {
  var updateDesign = _ref.updateDesign,
    loading = _ref.loading,
    history = _ref.history;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_EditorNav_module_css__WEBPACK_IMPORTED_MODULE_1___default().editorNav)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: (_EditorNav_module_css__WEBPACK_IMPORTED_MODULE_1___default().leftNav)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    to: "/",
    className: loading ? 'disabled' : ''
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn-icon btn-editor",
    disabled: loading,
    onClick: function onClick() {
      history.goBack();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiChevronLeft, null), "Home"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: (_EditorNav_module_css__WEBPACK_IMPORTED_MODULE_1___default().rightNav)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn-icon btn-editor",
    onClick: updateDesign,
    disabled: loading
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiRefreshCw, {
    className: "spin"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiSave, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "ml-4"
  }, "Save")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.withRouter)(EditorNav));

/***/ }),

/***/ "./frontend/components/editor/ToolsNav.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/editor/ToolsNav.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesignDrawer.module.css */ "./frontend/components/editor/DesignDrawer.module.css");
/* harmony import */ var _DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_1__);



var ToolsNav = function ToolsNav(_ref) {
  var changeDrawer = _ref.changeDrawer,
    current = _ref.current,
    closed = _ref.closed,
    animate = _ref.animate;
  var activeButton = function activeButton(id) {
    return current === id && !closed ? 'active btn-tools' : 'btn-tools';
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_1___default().toolsNav)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: animate ? (_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_1___default().highlight) : (_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_1___default().highlightClosed),
    style: {
      transform: "translate3d(0px, ".concat(current * 72, "px, 0px)")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "".concat((_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_1___default().background), " ").concat(closed ? (_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_1___default().hidden) : '')
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: (_DesignDrawer_module_css__WEBPACK_IMPORTED_MODULE_1___default().buttonsNav)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: activeButton(0),
    onClick: function onClick() {
      return changeDrawer(0);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiLayout, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Templates")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: activeButton(1),
    onClick: function onClick() {
      return changeDrawer(1);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiImage, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Photos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: activeButton(2),
    onClick: function onClick() {
      return changeDrawer(2);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiGrid, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Elements")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: activeButton(3),
    onClick: function onClick() {
      return changeDrawer(3);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiType, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Text")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: activeButton(4),
    onClick: function onClick() {
      return changeDrawer(4);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiUploadCloud, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Uploads")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: activeButton(5),
    onClick: function onClick() {
      return changeDrawer(5);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiFolder, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "Folders")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: activeButton(6),
    onClick: function onClick() {
      return changeDrawer(6);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiMoreHorizontal, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", null, "More"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolsNav);

/***/ }),

/***/ "./frontend/components/editor/Viewer.jsx":
/*!***********************************************!*\
  !*** ./frontend/components/editor/Viewer.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _elements_Element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/Element */ "./frontend/components/editor/elements/Element.jsx");
/* harmony import */ var _Viewer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Viewer.module.css */ "./frontend/components/editor/Viewer.module.css");
/* harmony import */ var _Viewer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Viewer_module_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




// eslint-disable-next-line react/prefer-stateless-function
var Viewer = /*#__PURE__*/function (_React$Component) {
  function Viewer(props) {
    var _this;
    _classCallCheck(this, Viewer);
    _this = _callSuper(this, Viewer, [props]);
    _this.state = {
      zoom: 1
    };
    return _this;
  }
  _inherits(Viewer, _React$Component);
  return _createClass(Viewer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var requestDesign = this.props.requestDesign;
      requestDesign();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        elements = _this$props.elements,
        design = _this$props.design;
      var zoom = this.state.zoom;
      if (elements.length === 0) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "viewer",
        className: (_Viewer_module_css__WEBPACK_IMPORTED_MODULE_2___default().design),
        style: {
          width: design.width * zoom,
          height: design.height * zoom
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_Viewer_module_css__WEBPACK_IMPORTED_MODULE_2___default().elementsContainer)
      }, elements.map(function (element, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          key: element.id ? element.id : index,
          style: {
            position: 'absolute',
            zIndex: element.zIndex,
            left: element.posX * zoom,
            top: element.posY * zoom,
            transform: "rotate(".concat(element.rotate, "deg)")
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_elements_Element__WEBPACK_IMPORTED_MODULE_1__["default"], {
          element: element,
          zoom: zoom
        }));
      })));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Viewer);

/***/ }),

/***/ "./frontend/components/editor/WorkArea.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/editor/WorkArea.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Design */ "./frontend/components/editor/Design.jsx");
/* harmony import */ var _design_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./design_container */ "./frontend/components/editor/design_container.js");
/* harmony import */ var _WorkArea_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkArea.module.css */ "./frontend/components/editor/WorkArea.module.css");
/* harmony import */ var _WorkArea_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_WorkArea_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _design_tools_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./design_tools_container */ "./frontend/components/editor/design_tools_container.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






// eslint-disable-next-line react/prefer-stateless-function
var WorkArea = /*#__PURE__*/function (_React$Component) {
  function WorkArea(props) {
    var _this;
    _classCallCheck(this, WorkArea);
    _this = _callSuper(this, WorkArea, [props]);
    _this.setWrapperRef = _this.setWrapperRef.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }
  _inherits(WorkArea, _React$Component);
  return _createClass(WorkArea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }, {
    key: "setWrapperRef",
    value: function setWrapperRef(node) {
      this.wrapperRef = node;
    }
  }, {
    key: "handleClickOutside",
    value: function handleClickOutside(event) {
      var setSelection = this.props.setSelection;
      if (this.wrapperRef && this.wrapperRef.contains(event.target) && (event.target.id === 'noElement' || event.target.id === 'noElementGrey' || event.target.id === 'noElementShadow')) {
        setSelection(null);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        design = _this$props.design,
        elements = _this$props.elements,
        zoom = _this$props.zoom,
        updateElementPos = _this$props.updateElementPos,
        selected = _this$props.selected,
        setSelected = _this$props.setSelected,
        updateElement = _this$props.updateElement,
        selection = _this$props.selection,
        setSelection = _this$props.setSelection;
      if (Object.keys(design).length === 0) return null;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_WorkArea_module_css__WEBPACK_IMPORTED_MODULE_3___default().workContainer)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_design_tools_container__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selected: selected,
        updateElement: updateElement,
        setSelected: setSelected,
        selection: selection,
        setSelection: setSelection
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_WorkArea_module_css__WEBPACK_IMPORTED_MODULE_3___default().workArea),
        ref: this.setWrapperRef,
        id: "noElementGrey"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_WorkArea_module_css__WEBPACK_IMPORTED_MODULE_3___default().designContainer),
        id: "noElementShadow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_design_container__WEBPACK_IMPORTED_MODULE_2__["default"]
      // elements={elements}
      // design={design}
      , {
        zoom: zoom,
        updateElement: updateElement,
        setSelection: setSelection,
        selection: selection
      }))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WorkArea);

/***/ }),

/***/ "./frontend/components/editor/design_container.js":
/*!********************************************************!*\
  !*** ./frontend/components/editor/design_container.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _Design__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Design */ "./frontend/components/editor/Design.jsx");
/* harmony import */ var _actions_element_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/element_actions */ "./frontend/actions/element_actions.js");
/* harmony import */ var _reducers_design_elements_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/design/elements_selector */ "./frontend/reducers/design/elements_selector.js");





var mapStateToProps = function mapStateToProps(state, ownProps) {
  var design = state.entities.designs[ownProps.match.params.id];
  return {
    design: design,
    elements: design ? (0,_reducers_design_elements_selector__WEBPACK_IMPORTED_MODULE_3__["default"])(state, design.id) : []
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    receiveElement: function receiveElement(element) {
      return dispatch((0,_actions_element_actions__WEBPACK_IMPORTED_MODULE_2__.receiveElement)(element));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_Design__WEBPACK_IMPORTED_MODULE_1__["default"])));

/***/ }),

/***/ "./frontend/components/editor/design_tools_container.js":
/*!**************************************************************!*\
  !*** ./frontend/components/editor/design_tools_container.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _DesignTools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesignTools */ "./frontend/components/editor/DesignTools.jsx");
/* harmony import */ var _actions_element_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/element_actions */ "./frontend/actions/element_actions.js");



var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    element: state.entities.elements[ownProps.selection]
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    receiveElement: function receiveElement(element) {
      return dispatch((0,_actions_element_actions__WEBPACK_IMPORTED_MODULE_2__.receiveElement)(element));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_DesignTools__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/editor/drawers/DrawerSearch.jsx":
/*!*************************************************************!*\
  !*** ./frontend/components/editor/drawers/DrawerSearch.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _DrawerSearch_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawerSearch.module.css */ "./frontend/components/editor/drawers/DrawerSearch.module.css");
/* harmony import */ var _DrawerSearch_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DrawerSearch_module_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var DrawerSearch = /*#__PURE__*/function (_React$Component) {
  function DrawerSearch(props) {
    var _this;
    _classCallCheck(this, DrawerSearch);
    _this = _callSuper(this, DrawerSearch, [props]);
    _this.state = {
      queryString: ''
    };
    return _this;
  }
  _inherits(DrawerSearch, _React$Component);
  return _createClass(DrawerSearch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        placeholder = _this$props.placeholder,
        handleSearch = _this$props.handleSearch,
        value = _this$props.value,
        handleSubmit = _this$props.handleSubmit,
        handleClear = _this$props.handleClear;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DrawerSearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().searchBar)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", {
        onSubmit: handleSubmit
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DrawerSearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().searchInput)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_DrawerSearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().inputIcon)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiSearch, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        className: (_DrawerSearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().input),
        type: "text",
        placeholder: placeholder,
        onChange: handleSearch,
        value: value
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        className: value !== '' ? 'btn-none' : "btn-none ".concat((_DrawerSearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().notVisible)),
        type: "button",
        onClick: handleClear
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "submit",
        className: (_DrawerSearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().hiddenButton)
      }, "Search")));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerSearch);

/***/ }),

/***/ "./frontend/components/editor/drawers/ElementsDrawer.jsx":
/*!***************************************************************!*\
  !*** ./frontend/components/editor/drawers/ElementsDrawer.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DrawerSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawerSearch */ "./frontend/components/editor/drawers/DrawerSearch.jsx");
/* harmony import */ var _ElementsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ElementsDrawer.module.css */ "./frontend/components/editor/drawers/ElementsDrawer.module.css");
/* harmony import */ var _ElementsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ElementsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scrollbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollbar.module.css */ "./frontend/components/editor/drawers/scrollbar.module.css");
/* harmony import */ var _scrollbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scrollbar_module_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var ElementsDrawer = /*#__PURE__*/function (_React$Component) {
  function ElementsDrawer(props) {
    var _this;
    _classCallCheck(this, ElementsDrawer);
    _this = _callSuper(this, ElementsDrawer, [props]);
    _this.state = {
      info: false
    };
    return _this;
  }
  _inherits(ElementsDrawer, _React$Component);
  return _createClass(ElementsDrawer, [{
    key: "addElement",
    value: function addElement(shape) {
      var addElement = this.props.addElement;
      var element = {
        elementableType: 'Shape',
        transparency: 1,
        zIndex: 0,
        posX: 0,
        posY: 0,
        // _destroy: true
        elementableAttributes: {
          shape: shape,
          color: '#c7d0d8',
          width: 500,
          height: 500
        }
      };
      addElement(element);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var mockupResponse = [
      // need default width height and desc to search
      {
        id: 1,
        shape: 'circle',
        url: window.circle
      }, {
        id: 2,
        shape: 'rectangle',
        url: window.rectangle
      }, {
        id: 3,
        shape: 'triangle',
        url: window.triangle
      }, {
        id: 4,
        shape: 'hexagon',
        url: window.hexagon
      }, {
        id: 5,
        shape: 'pentagon',
        url: window.pentagon
      }, {
        id: 6,
        shape: 'rounded-square',
        url: window.roundedSquare
      }, {
        id: 7,
        shape: 'heart',
        url: window.heart
      }, {
        id: 8,
        shape: 'star',
        url: window.star
      }, {
        id: 9,
        shape: 'right-triangle',
        url: window.rightTriangle
      }];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_scrollbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().customScroll)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_ElementsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().elementsDrawer)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_ElementsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemList)
      }, mockupResponse.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          key: item.id,
          className: (_ElementsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),
          onClick: function onClick() {
            return _this2.addElement(item.shape);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
          href: item.url
        })));
      })))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ElementsDrawer);

/***/ }),

/***/ "./frontend/components/editor/drawers/EmptyDrawer.jsx":
/*!************************************************************!*\
  !*** ./frontend/components/editor/drawers/EmptyDrawer.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _scrollbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollbar.module.css */ "./frontend/components/editor/drawers/scrollbar.module.css");
/* harmony import */ var _scrollbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scrollbar_module_css__WEBPACK_IMPORTED_MODULE_1__);


var EmptyDrawer = function EmptyDrawer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_scrollbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().customScroll)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "flex-center h-100 white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "This drawer is empty")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmptyDrawer);

/***/ }),

/***/ "./frontend/components/editor/drawers/ImageItem.jsx":
/*!**********************************************************!*\
  !*** ./frontend/components/editor/drawers/ImageItem.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ImageItem_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageItem.module.css */ "./frontend/components/editor/drawers/ImageItem.module.css");
/* harmony import */ var _ImageItem_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImageItem_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var ImageItem = /*#__PURE__*/function (_React$Component) {
  function ImageItem(props) {
    var _this;
    _classCallCheck(this, ImageItem);
    _this = _callSuper(this, ImageItem, [props]);
    _this.state = {
      dropDown: false
    };
    return _this;
  }
  _inherits(ImageItem, _React$Component);
  return _createClass(ImageItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        thumb = _this$props.thumb,
        id = _this$props.id,
        toggleModal = _this$props.toggleModal,
        addElement = _this$props.addElement,
        image = _this$props.image;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_ImageItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().item)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        type: "button",
        className: (_ImageItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().more),
        onClick: function onClick() {
          return toggleModal(id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiMoreHorizontal, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: thumb,
        className: (_ImageItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().image),
        onClick: function onClick() {
          return addElement(image);
        },
        alt: ""
      }));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageItem);

/***/ }),

/***/ "./frontend/components/editor/drawers/TextDrawer.jsx":
/*!***********************************************************!*\
  !*** ./frontend/components/editor/drawers/TextDrawer.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DrawerSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawerSearch */ "./frontend/components/editor/drawers/DrawerSearch.jsx");
/* harmony import */ var _TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextDrawer.module.css */ "./frontend/components/editor/drawers/TextDrawer.module.css");
/* harmony import */ var _TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scrollbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollbar.module.css */ "./frontend/components/editor/drawers/scrollbar.module.css");
/* harmony import */ var _scrollbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scrollbar_module_css__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var mockupResponse = [
// need default width height and desc to search
{
  id: 1,
  text: 'Add a heading',
  fontWeight: 800,
  fontSize: 28,
  fontFamily: 'Open Sans'
}, {
  id: 2,
  text: 'Add a subheading',
  fontWeight: 400,
  fontSize: 18,
  fontFamily: 'Open Sans'
}, {
  id: 3,
  text: 'Add a little bit of body text',
  fontWeight: 300,
  fontSize: 12,
  fontFamily: 'Open Sans'
}];
var TextDrawer = /*#__PURE__*/function (_React$Component) {
  function TextDrawer(props) {
    var _this;
    _classCallCheck(this, TextDrawer);
    _this = _callSuper(this, TextDrawer, [props]);
    _this.state = {
      info: false
    };
    return _this;
  }
  _inherits(TextDrawer, _React$Component);
  return _createClass(TextDrawer, [{
    key: "getTextWidth",
    value: function getTextWidth(text, font) {
      var canvas = this.canvas || (this.canvas = document.createElement('canvas'));
      var context = canvas.getContext('2d');
      context.font = font;
      var metrics = context.measureText(text);
      // console.log(text, font, metrics.width);
      return metrics.width;
    }
  }, {
    key: "addElement",
    value: function addElement(_ref) {
      var text = _ref.text,
        fontWeight = _ref.fontWeight,
        fontSize = _ref.fontSize,
        fontFamily = _ref.fontFamily;
      var _this$props = this.props,
        addElement = _this$props.addElement,
        zoom = _this$props.zoom;
      var element = {
        elementableType: 'Text',
        transparency: 1,
        zIndex: 0,
        posX: 0,
        posY: 0,
        // _destroy: true
        elementableAttributes: {
          color: '#000000',
          text: text,
          fontFamily: fontFamily,
          fontWeight: fontWeight,
          fontSize: fontSize,
          height: fontSize,
          width: this.getTextWidth(text, "".concat(fontWeight, " ").concat(fontSize, "px ").concat(fontFamily)) + 10
        }
      };
      addElement(element);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_scrollbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().customScroll)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().textDrawer)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Click Text to add to page"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().highlights)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat((_TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().highlightItem), " ").concat((_TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().heading)),
        onClick: function onClick() {
          return _this2.addElement(mockupResponse[0]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Add a heading")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat((_TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().highlightItem), " ").concat((_TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().subheading)),
        onClick: function onClick() {
          return _this2.addElement(mockupResponse[1]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Add a subheading")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "".concat((_TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().highlightItem), " ").concat((_TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().body)),
        onClick: function onClick() {
          return _this2.addElement(mockupResponse[2]);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Add a little bit of body text"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", null, "Font Combinations"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().itemList)
      }, mockupResponse.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          key: item.id,
          className: (_TextDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().item),
          onClick: function onClick() {
            return _this2.addElement(item);
          }
        }, item.text);
      })))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextDrawer);

/***/ }),

/***/ "./frontend/components/editor/drawers/UnsplashDrawer.jsx":
/*!***************************************************************!*\
  !*** ./frontend/components/editor/drawers/UnsplashDrawer.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _DrawerSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrawerSearch */ "./frontend/components/editor/drawers/DrawerSearch.jsx");
/* harmony import */ var _ImageItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageItem */ "./frontend/components/editor/drawers/ImageItem.jsx");
/* harmony import */ var _scrollbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scrollbar.module.css */ "./frontend/components/editor/drawers/scrollbar.module.css");
/* harmony import */ var _scrollbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scrollbar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UnsplashDrawer_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UnsplashDrawer.module.css */ "./frontend/components/editor/drawers/UnsplashDrawer.module.css");
/* harmony import */ var _UnsplashDrawer_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UnsplashDrawer_module_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }





var UnsplashDrawer = /*#__PURE__*/function (_React$Component) {
  function UnsplashDrawer(props) {
    var _this;
    _classCallCheck(this, UnsplashDrawer);
    _this = _callSuper(this, UnsplashDrawer, [props]);
    _this.state = {
      query: '',
      page: 1,
      popular: true
    };
    _this.addElement = _this.addElement.bind(_this);
    _this.handleSearch = _this.handleSearch.bind(_this);
    _this.submitSearch = _this.submitSearch.bind(_this);
    _this.clearSearch = _this.clearSearch.bind(_this);
    return _this;
  }
  _inherits(UnsplashDrawer, _React$Component);
  return _createClass(UnsplashDrawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fetchUnsplashPopular = this.props.fetchUnsplashPopular;
      fetchUnsplashPopular();
    }
  }, {
    key: "handleSearch",
    value: function handleSearch(e) {
      this.setState({
        query: e.target.value
      });
    }
  }, {
    key: "clearSearch",
    value: function clearSearch() {
      this.setState({
        query: '',
        popular: true
      });
    }
  }, {
    key: "submitSearch",
    value: function submitSearch(e) {
      e.preventDefault();
      var fetchUnsplashQuery = this.props.fetchUnsplashQuery;
      var _this$state = this.state,
        page = _this$state.page,
        query = _this$state.query;
      fetchUnsplashQuery(page, query);
      this.setState({
        popular: false
      });
    }
  }, {
    key: "addElement",
    value: function addElement(_ref) {
      var width = _ref.width,
        height = _ref.height,
        url = _ref.full;
      var addElement = this.props.addElement;
      var element = {
        elementableType: 'Image',
        transparency: 1,
        zIndex: 0,
        posX: 0,
        posY: 0,
        elementableAttributes: {
          url: url,
          width: width,
          height: height
        }
      };
      addElement(element);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        popularResults = _this$props.popularResults,
        searchResults = _this$props.searchResults,
        toggleModal = _this$props.toggleModal;
      var _this$state2 = this.state,
        query = _this$state2.query,
        popular = _this$state2.popular;
      var images = popular ? popularResults : searchResults;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DrawerSearch__WEBPACK_IMPORTED_MODULE_1__["default"], {
        placeholder: "Search millions of photos",
        handleSearch: this.handleSearch,
        handleClear: this.clearSearch,
        value: query,
        handleSubmit: this.submitSearch
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_scrollbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().customScroll)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_UnsplashDrawer_module_css__WEBPACK_IMPORTED_MODULE_4___default().unsplashDrawer)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_UnsplashDrawer_module_css__WEBPACK_IMPORTED_MODULE_4___default().masonry)
      }, images.map(function (image) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          key: image.id,
          className: (_UnsplashDrawer_module_css__WEBPACK_IMPORTED_MODULE_4___default().masonItem),
          style: {
            flexGrow: image.width * 85 / image.height,
            flexBasis: image.width * 95 / image.height
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          style: {
            paddingBottom: "".concat(image.height / image.width * 100.0, "%")
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ImageItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
          thumb: image.thumb,
          id: image.id,
          image: image,
          toggleModal: toggleModal,
          addElement: _this2.addElement
        }));
      })))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnsplashDrawer);

/***/ }),

/***/ "./frontend/components/editor/drawers/UploadsDrawer.jsx":
/*!**************************************************************!*\
  !*** ./frontend/components/editor/drawers/UploadsDrawer.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _scrollbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scrollbar.module.css */ "./frontend/components/editor/drawers/scrollbar.module.css");
/* harmony import */ var _scrollbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scrollbar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadsDrawer.module.css */ "./frontend/components/editor/drawers/UploadsDrawer.module.css");
/* harmony import */ var _UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var UploadsDrawer = /*#__PURE__*/function (_React$Component) {
  function UploadsDrawer(props) {
    var _this;
    _classCallCheck(this, UploadsDrawer);
    _this = _callSuper(this, UploadsDrawer, [props]);
    _this.state = {
      imageUrl: '',
      uploadedFile: null,
      title: 'temp',
      width: 0,
      height: 0
    };
    _this.handleFile = _this.handleFile.bind(_this);
    return _this;
  }
  _inherits(UploadsDrawer, _React$Component);
  return _createClass(UploadsDrawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fetchUserUploads = this.props.fetchUserUploads;
      fetchUserUploads();
    }
  }, {
    key: "handleFile",
    value: function handleFile(e) {
      var _this2 = this;
      var reader = new FileReader();
      var file = e.currentTarget.files[0];
      reader.onloadend = function () {
        var image = new Image();
        image.onload = function () {
          _this2.setState({
            imageUrl: reader.result,
            uploadedFile: file,
            title: file.name,
            width: image.width,
            height: image.height
          }, _this2.uploadImage);
        };
        image.src = reader.result;
      };
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({
          imageUrl: '',
          uploadedFile: null
        });
      }
    }
  }, {
    key: "uploadImage",
    value: function uploadImage() {
      var _this3 = this;
      var _this$state = this.state,
        title = _this$state.title,
        uploadedFile = _this$state.uploadedFile,
        width = _this$state.width,
        height = _this$state.height;
      var receiveUpload = this.props.receiveUpload;
      var formData = new FormData();
      formData.append('uploaded_image[title]', title);
      if (uploadedFile) {
        formData.append('uploaded_image[image]', uploadedFile);
        formData.append('uploaded_image[width]', width);
        formData.append('uploaded_image[height]', height);
      }
      $.ajax({
        url: '/api/uploaded_images',
        method: 'POST',
        data: formData,
        contentType: false,
        processData: false
      }).then(function (payload) {
        _this3.setState({
          imageUrl: '',
          uploadedFile: null
        });
        receiveUpload(payload);
      });
    }
  }, {
    key: "addElement",
    value: function addElement(_ref) {
      var width = _ref.width,
        height = _ref.height,
        url = _ref.url;
      var addElement = this.props.addElement;
      var element = {
        elementableType: 'Image',
        transparency: 1,
        zIndex: 0,
        posX: 0,
        posY: 0,
        elementableAttributes: {
          url: url,
          width: width,
          height: height
        }
      };
      addElement(element);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;
      var images = this.props.images;
      var _this$state2 = this.state,
        width = _this$state2.width,
        height = _this$state2.height,
        imageUrl = _this$state2.imageUrl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().header)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", {
        htmlFor: "upload-button",
        className: (_UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().uploadBtn)
      }, "Upload an Image", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {
        id: "upload-button",
        className: (_UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().hidden),
        type: "file",
        accept: "image/*",
        onChange: this.handleFile
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_scrollbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().customScroll)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().uploadsDrawer)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().masonry)
      }, imageUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().masonItem),
        style: {
          flexGrow: width * 85 / height,
          flexBasis: width * 95 / height
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        style: {
          paddingBottom: "".concat(height / width * 100.0, "%")
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        className: (_UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().tempImg),
        src: imageUrl,
        alt: ""
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().temp)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: (_UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().loader)
      }))), images.map(function (image) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          key: image.id,
          className: (_UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().masonItem),
          style: {
            flexGrow: image.width * 85 / image.height,
            flexBasis: image.width * 95 / image.height
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
          style: {
            paddingBottom: "".concat(image.height / image.width * 100.0, "%")
          }
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
          src: image.url,
          alt: "",
          onClick: function onClick() {
            return _this4.addElement(image);
          },
          className: (_UploadsDrawer_module_css__WEBPACK_IMPORTED_MODULE_2___default().image)
        }));
      })))));
    }
  }]);
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadsDrawer);

/***/ }),

/***/ "./frontend/components/editor/drawers/unsplash_drawer_container.js":
/*!*************************************************************************!*\
  !*** ./frontend/components/editor/drawers/unsplash_drawer_container.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _UnsplashDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnsplashDrawer */ "./frontend/components/editor/drawers/UnsplashDrawer.jsx");
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/modal_actions */ "./frontend/actions/modal_actions.js");
/* harmony import */ var _actions_unsplash_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../actions/unsplash_actions */ "./frontend/actions/unsplash_actions.js");




var mapStateToProps = function mapStateToProps(state) {
  return {
    searchResults: state.ui.unsplashSearchResults.map(function (id) {
      return state.entities.unsplash[id];
    }),
    popularResults: state.ui.unsplashPopularResults.map(function (id) {
      return state.entities.unsplash[id];
    })
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUnsplashPopular: function fetchUnsplashPopular(page) {
      return dispatch((0,_actions_unsplash_actions__WEBPACK_IMPORTED_MODULE_3__.fetchUnsplashPopular)(page));
    },
    fetchUnsplashQuery: function fetchUnsplashQuery(page, query) {
      return dispatch((0,_actions_unsplash_actions__WEBPACK_IMPORTED_MODULE_3__.fetchUnsplashQuery)(page, query));
    },
    toggleModal: function toggleModal(id) {
      return dispatch((0,_actions_modal_actions__WEBPACK_IMPORTED_MODULE_2__.toggleModal)('externalModal', id));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_UnsplashDrawer__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/editor/drawers/uploads_drawer_container.js":
/*!************************************************************************!*\
  !*** ./frontend/components/editor/drawers/uploads_drawer_container.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _UploadsDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadsDrawer */ "./frontend/components/editor/drawers/UploadsDrawer.jsx");
/* harmony import */ var _actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../actions/uploaded_image_actions */ "./frontend/actions/uploaded_image_actions.js");



var mapStateToProps = function mapStateToProps(state) {
  var uploadedImages = state.entities.users[state.session.id].uploadedImages;
  return {
    images: uploadedImages ? uploadedImages.map(function (id) {
      return state.entities.uploadedImages[id];
    }) : []
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUserUploads: function fetchUserUploads() {
      return dispatch((0,_actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_2__.fetchUserUploads)());
    },
    receiveUpload: function receiveUpload(payload) {
      return dispatch((0,_actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_2__.receiveUpload)(payload));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_UploadsDrawer__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/editor/editor_container.js":
/*!********************************************************!*\
  !*** ./frontend/components/editor/editor_container.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor */ "./frontend/components/editor/Editor.jsx");
/* harmony import */ var _actions_design_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/design_actions */ "./frontend/actions/design_actions.js");
/* harmony import */ var _reducers_design_elements_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/design/elements_selector */ "./frontend/reducers/design/elements_selector.js");
/* harmony import */ var _actions_element_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/element_actions */ "./frontend/actions/element_actions.js");





var mapStateToProps = function mapStateToProps(state, ownProps) {
  var design = state.entities.designs[ownProps.match.params.id];
  return {
    design: design,
    elements: design ? (0,_reducers_design_elements_selector__WEBPACK_IMPORTED_MODULE_3__["default"])(state, design.id) : []
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    requestDesign: function requestDesign() {
      return dispatch((0,_actions_design_actions__WEBPACK_IMPORTED_MODULE_2__.requestDesign)(ownProps.match.params.id));
    },
    updateDesign: function updateDesign(design) {
      return dispatch((0,_actions_design_actions__WEBPACK_IMPORTED_MODULE_2__.updateDesign)(design));
    },
    receiveElement: function receiveElement(element) {
      return dispatch((0,_actions_element_actions__WEBPACK_IMPORTED_MODULE_4__.receiveElement)(element));
    },
    createElement: function createElement(designId, element) {
      return dispatch((0,_actions_element_actions__WEBPACK_IMPORTED_MODULE_4__.createElement)(designId, element));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_Editor__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/editor/elements/Element.jsx":
/*!*********************************************************!*\
  !*** ./frontend/components/editor/elements/Element.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Shape */ "./frontend/components/editor/elements/Shape.jsx");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Text */ "./frontend/components/editor/elements/Text.jsx");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image */ "./frontend/components/editor/elements/Image.jsx");
/* harmony import */ var _Element_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Element.module.css */ "./frontend/components/editor/elements/Element.module.css");
/* harmony import */ var _Element_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Element_module_css__WEBPACK_IMPORTED_MODULE_4__);





var components = {
  Shape: _Shape__WEBPACK_IMPORTED_MODULE_1__["default"],
  Text: _Text__WEBPACK_IMPORTED_MODULE_2__["default"],
  Image: _Image__WEBPACK_IMPORTED_MODULE_3__["default"]
};
var Element = function Element(_ref) {
  var element = _ref.element,
    zoom = _ref.zoom;
  var transparency = element.transparency;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "".concat((_Element_module_css__WEBPACK_IMPORTED_MODULE_4___default().element), " no-cursor"),
    style: {
      opacity: transparency,
      height: element.elementableAttributes.height * zoom,
      width: element.elementableAttributes.width * zoom
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components[element.elementableType], {
    elementAttr: element.elementableAttributes,
    zoom: zoom
  }, null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Element);

/***/ }),

/***/ "./frontend/components/editor/elements/Image.jsx":
/*!*******************************************************!*\
  !*** ./frontend/components/editor/elements/Image.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var Image = function Image(_ref) {
  var url = _ref.elementAttr.url,
    zoom = _ref.zoom;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: url,
    style: {
      width: '100%',
      height: '100%',
      cursor: 'move'
    },
    alt: ""
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ "./frontend/components/editor/elements/Shape.jsx":
/*!*******************************************************!*\
  !*** ./frontend/components/editor/elements/Shape.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


// const shapeGen = (shape) => <use href={window.circle} />;

var shapeGen = function shapeGen(shape) {
  var mockupResponse = [
  // need default width height and desc to search
  {
    id: 1,
    shape: 'circle',
    url: window.circle
  }, {
    id: 2,
    shape: 'rectangle',
    url: window.rectangle
  }, {
    id: 3,
    shape: 'triangle',
    url: window.triangle
  }, {
    id: 4,
    shape: 'hexagon',
    url: window.hexagon
  }, {
    id: 5,
    shape: 'pentagon',
    url: window.pentagon
  }, {
    id: 6,
    shape: 'rounded-square',
    url: window.roundedSquare
  }, {
    id: 7,
    shape: 'heart',
    url: window.heart
  }, {
    id: 8,
    shape: 'star',
    url: window.star
  }, {
    id: 9,
    shape: 'right-triangle',
    url: window.rightTriangle
  }];
  for (var _i = 0, _mockupResponse = mockupResponse; _i < _mockupResponse.length; _i++) {
    var item = _mockupResponse[_i];
    if (item.shape === shape) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
        href: item.url
      });
    }
  }
};

// const shapeGen = (shape) => {
//   switch (shape) {
//     case 'rectangle':
//       return <rect width="100%" height="100%" />;
//     case 'circle':
//       // return <object data="./assets/mite-alt.svg" />;
//       return <use href="./assets/mite-alt.svg#haha" />;
//       // return <image xlinkHref="./assets/mite-alt.svg" alt="" />;
//       // return <ellipse cx="50%" cy="50%" rx="50%" ry="50%" />;
//     case 'triangle':
//       return (
//         <svg viewBox="0 0 500 433" preserveAspectRatio="none">
//           <path d="m0 433l250-433 250 433h-500z" />
//         </svg>
//       );
//     default:
//       return null;
//   }
// };

var Shape = function Shape(_ref) {
  var _ref$elementAttr = _ref.elementAttr,
    shape = _ref$elementAttr.shape,
    width = _ref$elementAttr.width,
    height = _ref$elementAttr.height,
    color = _ref$elementAttr.color,
    zoom = _ref.zoom;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    width: width * zoom,
    height: height * zoom,
    className: "cursor",
    style: {
      fill: color
    }
  }, shapeGen(shape));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Shape);

/***/ }),

/***/ "./frontend/components/editor/elements/Text.jsx":
/*!******************************************************!*\
  !*** ./frontend/components/editor/elements/Text.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

// import styles from './Text.module.css';

var Text = function Text(_ref) {
  var _ref$elementAttr = _ref.elementAttr,
    color = _ref$elementAttr.color,
    fontFamily = _ref$elementAttr.fontFamily,
    fontSize = _ref$elementAttr.fontSize,
    fontWeight = _ref$elementAttr.fontWeight,
    text = _ref$elementAttr.text,
    zoom = _ref.zoom;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    // className={styles.text}
    style: {
      color: color,
      fontFamily: fontFamily,
      fontSize: fontSize * zoom,
      fontWeight: fontWeight
    }
  }, text);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Text);

/***/ }),

/***/ "./frontend/components/editor/viewer_container.js":
/*!********************************************************!*\
  !*** ./frontend/components/editor/viewer_container.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Viewer */ "./frontend/components/editor/Viewer.jsx");
/* harmony import */ var _actions_design_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/design_actions */ "./frontend/actions/design_actions.js");
/* harmony import */ var _reducers_design_elements_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers/design/elements_selector */ "./frontend/reducers/design/elements_selector.js");




var mapStateToProps = function mapStateToProps(state, ownProps) {
  var design = state.entities.designs[ownProps.match.params.id];
  return {
    design: design,
    elements: design ? (0,_reducers_design_elements_selector__WEBPACK_IMPORTED_MODULE_3__["default"])(state, design.id) : []
  };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    requestDesign: function requestDesign() {
      return dispatch((0,_actions_design_actions__WEBPACK_IMPORTED_MODULE_2__.requestDesign)(ownProps.match.params.id));
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_Viewer__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/modal/ImageShow.jsx":
/*!*************************************************!*\
  !*** ./frontend/components/modal/ImageShow.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _with_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with_modal */ "./frontend/components/modal/with_modal.jsx");
/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.module.css */ "./frontend/components/modal/modal.module.css");
/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imageShow_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageShow.module.css */ "./frontend/components/modal/imageShow.module.css");
/* harmony import */ var _imageShow_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_imageShow_module_css__WEBPACK_IMPORTED_MODULE_3__);




var download = function download(link) {
  $.ajax({
    url: link,
    headers: {
      Authorization: "Client-ID ".concat(undefined)
    }
  }).then(function (res) {
    var reslink = document.createElement('a');
    reslink.href = res.url;
    reslink.target = '_blank';
    document.body.appendChild(reslink);
    reslink.click();
    document.body.removeChild(reslink);
  });
};

// eslint-disable-next-line arrow-body-style
var ImageShow = function ImageShow(_ref) {
  var image = _ref.image,
    user = _ref.user,
    external = _ref.external;
  if (!image) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_imageShow_module_css__WEBPACK_IMPORTED_MODULE_3___default().content)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_imageShow_module_css__WEBPACK_IMPORTED_MODULE_3___default().preview),
    style: {
      backgroundImage: "url(".concat(window.transparent, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: image.full || image.url,
    alt: "",
    className: (_imageShow_module_css__WEBPACK_IMPORTED_MODULE_3___default().image)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_imageShow_module_css__WEBPACK_IMPORTED_MODULE_3___default().info)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", {
    className: (_imageShow_module_css__WEBPACK_IMPORTED_MODULE_3___default().title)
  }, image.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_imageShow_module_css__WEBPACK_IMPORTED_MODULE_3___default().profile)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: (_imageShow_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileImg),
    style: {
      backgroundImage: "url(".concat(image.creator_thumb || 'https://via.placeholder.com/320', ")")
    }
  }), external ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Photo by", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: (_imageShow_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),
    href: "".concat(image.creator_link, "?utm_source=Gwaphics&utm_medium=referral")
  }, image.creator), ' on ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: (_imageShow_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),
    href: "https://unsplash.com/?utm_source=Gwaphics&utm_medium=referral"
  }, "Unsplash")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "By", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: (_imageShow_module_css__WEBPACK_IMPORTED_MODULE_3___default().name)
  }, user.username))), external ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn-blue",
    onClick: function onClick() {
      return download(image.download);
    }
  }, "Download") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: image.url,
    download: true,
    className: (_imageShow_module_css__WEBPACK_IMPORTED_MODULE_3___default().stretch)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    className: "btn-blue"
  }, "Download")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_with_modal__WEBPACK_IMPORTED_MODULE_1__["default"])(ImageShow));

/***/ }),

/***/ "./frontend/components/modal/external_image_modal_container.js":
/*!*********************************************************************!*\
  !*** ./frontend/components/modal/external_image_modal_container.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ImageShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageShow */ "./frontend/components/modal/ImageShow.jsx");


var mapStateToProps = function mapStateToProps(state) {
  var image = state.entities.unsplash[state.ui.modal.externalModal];
  return {
    image: image
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, null)(_ImageShow__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/modal/uploaded_image_modal_container.js":
/*!*********************************************************************!*\
  !*** ./frontend/components/modal/uploaded_image_modal_container.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ImageShow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageShow */ "./frontend/components/modal/ImageShow.jsx");


var mapStateToProps = function mapStateToProps(state) {
  var image = state.entities.uploadedImages[state.ui.modal.uploadedModal];
  return {
    image: image,
    user: image && state.entities.users[image.uploaderId]
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, null)(_ImageShow__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./frontend/components/modal/with_modal.jsx":
/*!**************************************************!*\
  !*** ./frontend/components/modal/with_modal.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var _with_modal_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./with_modal.module.css */ "./frontend/components/modal/with_modal.module.css");
/* harmony import */ var _with_modal_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_with_modal_module_css__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["active", "toggleModal"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }



var withModal = function withModal(Component) {
  return /*#__PURE__*/function (_React$Component) {
    function _class(props) {
      var _this;
      _classCallCheck(this, _class);
      _this = _callSuper(this, _class, [props]);
      _this.setWrapperRef = _this.setWrapperRef.bind(_this);
      _this.handleClickOutside = _this.handleClickOutside.bind(_this);
      return _this;
    }
    _inherits(_class, _React$Component);
    return _createClass(_class, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
      }
    }, {
      key: "setWrapperRef",
      value: function setWrapperRef(node) {
        this.wrapperRef = node;
      }
    }, {
      key: "handleClickOutside",
      value: function handleClickOutside(event) {
        var toggleModal = this.props.toggleModal;
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
          toggleModal(null);
        }
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          active = _this$props.active,
          toggleModal = _this$props.toggleModal,
          restProps = _objectWithoutProperties(_this$props, _excluded);
        if (!active) return null;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          className: (_with_modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().modalBackground)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
          ref: this.setWrapperRef,
          className: (_with_modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().wrapper)
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
          type: "button",
          className: (_with_modal_module_css__WEBPACK_IMPORTED_MODULE_1___default().close),
          onClick: function onClick() {
            return toggleModal(null);
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__.FiX, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _extends({}, restProps, {
          toggleModal: toggleModal
        }))));
      }
    }]);
  }(react__WEBPACK_IMPORTED_MODULE_0__.Component);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withModal);

/***/ }),

/***/ "./frontend/entry.jsx":
/*!****************************!*\
  !*** ./frontend/entry.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _components_Root__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Root */ "./frontend/components/Root.jsx");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/store */ "./frontend/store/store.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




// import * as designActions from './actions/design_actions';
// import { signup, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', function () {
  // const store = configureStore();

  var store;
  if (window.currentUser) {
    var preloadedState = {
      entities: {
        users: _defineProperty({}, window.currentUser.id, window.currentUser)
      },
      session: {
        id: window.currentUser.id
      },
      ui: {
        mode: 'browse'
      }
    };
    store = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])(preloadedState);
    delete window.currentUser;
  } else {
    store = (0,_store_store__WEBPACK_IMPORTED_MODULE_3__["default"])();
  }

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.signup = signup;
  // window.login = login;
  // window.logout = logout;
  // window.requestOwnedDesigns = designActions.requestOwnedDesigns;
  // window.requestTemplates = designActions.requestTemplates;
  // window.requestDesign = designActions.requestDesign;
  // window.createDesign = designActions.createDesign;
  // window.updateDesign = designActions.updateDesign;
  // window.deleteDesign = designActions.deleteDesign;

  var root = document.getElementById('root');
  react_dom__WEBPACK_IMPORTED_MODULE_1__.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Root__WEBPACK_IMPORTED_MODULE_2__["default"], {
    store: store
  }), root);
});

/***/ }),

/***/ "./frontend/reducers/design/designs_reducer.js":
/*!*****************************************************!*\
  !*** ./frontend/reducers/design/designs_reducer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/design_actions */ "./frontend/actions/design_actions.js");
/* harmony import */ var _actions_folder_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/folder_actions */ "./frontend/actions/folder_actions.js");
/* harmony import */ var _actions_element_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/element_actions */ "./frontend/actions/element_actions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var designsReducer = function designsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = _objectSpread({}, state);
  switch (action.type) {
    case _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_DESIGNS:
      return _objectSpread(_objectSpread({}, state), action.designs);
    case _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_DESIGN:
      return _objectSpread(_objectSpread({}, state), _defineProperty({}, action.payload.design.id, action.payload.design));
    case _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_DESIGN:
      delete nextState[action.payload.design.id];
      return nextState;
    case _actions_element_actions__WEBPACK_IMPORTED_MODULE_2__.CREATE_ELEMENT:
      var newDesign = _objectSpread({}, nextState[action.designId]);
      newDesign.elements = [].concat(_toConsumableArray(nextState[action.designId].elements), [action.element.id]);
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, newDesign.id, newDesign));
    case _actions_folder_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_FOLDER:
      return _objectSpread(_objectSpread({}, state), action.payload.designs);
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (designsReducer);

/***/ }),

/***/ "./frontend/reducers/design/elements_reducer.js":
/*!******************************************************!*\
  !*** ./frontend/reducers/design/elements_reducer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/design_actions */ "./frontend/actions/design_actions.js");
/* harmony import */ var _actions_element_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/element_actions */ "./frontend/actions/element_actions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var elementsReducer = function elementsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = _objectSpread({}, state);
  switch (action.type) {
    case _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_DESIGN:
      return _objectSpread(_objectSpread({}, state), action.payload.elements);
    case _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_DESIGN:
      if (action.payload.elements) {
        Object.keys(action.payload.elements).forEach(function (id) {
          delete nextState[id];
        });
        return nextState;
      }
      return state;
    case _actions_element_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_ELEMENT:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.element.id, action.element));
    case _actions_element_actions__WEBPACK_IMPORTED_MODULE_1__.CREATE_ELEMENT:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.element.id, action.element));
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementsReducer);

/***/ }),

/***/ "./frontend/reducers/design/elements_selector.js":
/*!*******************************************************!*\
  !*** ./frontend/reducers/design/elements_selector.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var elementsOnDesign = function elementsOnDesign(state, designId) {
  var copy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var design = state.entities.designs[designId];
  var map = design.elements.map(function (eleId) {
    var element = _objectSpread({}, state.entities.elements[eleId]);
    // if (element) {
    //   switch (element.elementableType) {
    //     case 'Shape':
    //       element.elementableAttributes = state.entities.shapes[element.elementableId];
    //       break;
    //     case 'Text':
    //       element.elementableAttributes = state.entities.text[element.elementableId];
    //       break;
    //     default:
    //       break;
    //   }
    //   if (copy) {
    //     delete element.id;
    //     delete element.elementableId;
    //     delete element.elementableAttributes.id;
    //   }
    // }
    return element;
  });
  return map.filter(function (el) {
    return Object.keys(el) !== 0;
  });
  // return map;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementsOnDesign);

/***/ }),

/***/ "./frontend/reducers/design/shapes_reducer.js":
/*!****************************************************!*\
  !*** ./frontend/reducers/design/shapes_reducer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/design_actions */ "./frontend/actions/design_actions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var shapesReducer = function shapesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = _objectSpread({}, state);
  switch (action.type) {
    case _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_DESIGN:
      return _objectSpread(_objectSpread({}, state), action.payload.shapes);
    case _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_DESIGN:
      if (action.payload.shapes) {
        Object.keys(action.payload.shapes).forEach(function (id) {
          delete nextState[id];
        });
        return nextState;
      }
      return state;
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shapesReducer);

/***/ }),

/***/ "./frontend/reducers/design/text_reducer.js":
/*!**************************************************!*\
  !*** ./frontend/reducers/design/text_reducer.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../actions/design_actions */ "./frontend/actions/design_actions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var textReducer = function textReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = _objectSpread({}, state);
  switch (action.type) {
    case _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_DESIGN:
      return _objectSpread(_objectSpread({}, state), action.payload.text);
    case _actions_design_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_DESIGN:
      if (action.payload.shapes) {
        Object.keys(action.payload.shapes).forEach(function (id) {
          delete nextState[id];
        });
        return nextState;
      }
      return state;
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (textReducer);

/***/ }),

/***/ "./frontend/reducers/entities_reducer.js":
/*!***********************************************!*\
  !*** ./frontend/reducers/entities_reducer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users_reducer */ "./frontend/reducers/users_reducer.js");
/* harmony import */ var _design_designs_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./design/designs_reducer */ "./frontend/reducers/design/designs_reducer.js");
/* harmony import */ var _design_shapes_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./design/shapes_reducer */ "./frontend/reducers/design/shapes_reducer.js");
/* harmony import */ var _design_elements_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./design/elements_reducer */ "./frontend/reducers/design/elements_reducer.js");
/* harmony import */ var _design_text_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./design/text_reducer */ "./frontend/reducers/design/text_reducer.js");
/* harmony import */ var _folders_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./folders_reducer */ "./frontend/reducers/folders_reducer.js");
/* harmony import */ var _uploaded_images_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./uploaded_images_reducer */ "./frontend/reducers/uploaded_images_reducer.js");
/* harmony import */ var _unsplash_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./unsplash_reducer */ "./frontend/reducers/unsplash_reducer.js");









var entitiesReducer = (0,redux__WEBPACK_IMPORTED_MODULE_8__.combineReducers)({
  users: _users_reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  designs: _design_designs_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  elements: _design_elements_reducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  shapes: _design_shapes_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  text: _design_text_reducer__WEBPACK_IMPORTED_MODULE_4__["default"],
  folders: _folders_reducer__WEBPACK_IMPORTED_MODULE_5__["default"],
  uploadedImages: _uploaded_images_reducer__WEBPACK_IMPORTED_MODULE_6__["default"],
  unsplash: _unsplash_reducer__WEBPACK_IMPORTED_MODULE_7__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (entitiesReducer);

/***/ }),

/***/ "./frontend/reducers/errors_reducer.js":
/*!*********************************************!*\
  !*** ./frontend/reducers/errors_reducer.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _session_errors_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session_errors_reducer */ "./frontend/reducers/session_errors_reducer.js");


var errorsReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
  session: _session_errors_reducer__WEBPACK_IMPORTED_MODULE_0__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (errorsReducer);

/***/ }),

/***/ "./frontend/reducers/folders_reducer.js":
/*!**********************************************!*\
  !*** ./frontend/reducers/folders_reducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_folder_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/folder_actions */ "./frontend/actions/folder_actions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var foldersReducer = function foldersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = _objectSpread({}, state);
  switch (action.type) {
    case _actions_folder_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_FOLDERS:
      return _objectSpread(_objectSpread({}, state), action.folders);
    case _actions_folder_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_FOLDER:
      return _objectSpread(_objectSpread({}, state), _defineProperty({}, action.payload.folder.id, action.payload.folder));
    case _actions_folder_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_FOLDER:
      delete nextState[action.payload.folder.id];
      return nextState;
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (foldersReducer);

/***/ }),

/***/ "./frontend/reducers/modal_reducer.js":
/*!********************************************!*\
  !*** ./frontend/reducers/modal_reducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/modal_actions */ "./frontend/actions/modal_actions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var defaultState = {
  uploadedModal: null,
  externalModal: null
};
var modalReducer = function modalReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  switch (action.type) {
    case _actions_modal_actions__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_MODAL:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.modal, action.id));
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalReducer);

/***/ }),

/***/ "./frontend/reducers/mode_reducer.js":
/*!*******************************************!*\
  !*** ./frontend/reducers/mode_reducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_mode_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/mode_actions */ "./frontend/actions/mode_actions.js");
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");


var modeReducer = function modeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'splash';
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  switch (action.type) {
    case _actions_mode_actions__WEBPACK_IMPORTED_MODULE_0__.UPDATE_MODE:
      return action.mode;
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.LOGOUT_CURRENT_USER:
      return 'splash';
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_CURRENT_USER:
      return 'browse';
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modeReducer);

/***/ }),

/***/ "./frontend/reducers/root_reducer.js":
/*!*******************************************!*\
  !*** ./frontend/reducers/root_reducer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _entities_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entities_reducer */ "./frontend/reducers/entities_reducer.js");
/* harmony import */ var _errors_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors_reducer */ "./frontend/reducers/errors_reducer.js");
/* harmony import */ var _session_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session_reducer */ "./frontend/reducers/session_reducer.js");
/* harmony import */ var _ui_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui_reducer */ "./frontend/reducers/ui_reducer.js");





var rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({
  entities: _entities_reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  errors: _errors_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  session: _session_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  ui: _ui_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ "./frontend/reducers/session_errors_reducer.js":
/*!*****************************************************!*\
  !*** ./frontend/reducers/session_errors_reducer.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");

var sessionErrorsReducer = function sessionErrorsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_SESSION_ERRORS:
      return action.errors;
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_CURRENT_USER:
      return [];
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionErrorsReducer);

/***/ }),

/***/ "./frontend/reducers/session_reducer.js":
/*!**********************************************!*\
  !*** ./frontend/reducers/session_reducer.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");

var sessionReducer = function sessionReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    id: null
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  switch (action.type) {
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_CURRENT_USER:
      return {
        id: action.user.id
      };
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.LOGOUT_CURRENT_USER:
      return {
        id: null
      };
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sessionReducer);

/***/ }),

/***/ "./frontend/reducers/ui_reducer.js":
/*!*****************************************!*\
  !*** ./frontend/reducers/ui_reducer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _mode_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mode_reducer */ "./frontend/reducers/mode_reducer.js");
/* harmony import */ var _modal_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal_reducer */ "./frontend/reducers/modal_reducer.js");
/* harmony import */ var _unsplash_search_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsplash_search_reducer */ "./frontend/reducers/unsplash_search_reducer.js");
/* harmony import */ var _unsplash_popular_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unsplash_popular_reducer */ "./frontend/reducers/unsplash_popular_reducer.js");





var uiReducer = (0,redux__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({
  mode: _mode_reducer__WEBPACK_IMPORTED_MODULE_0__["default"],
  modal: _modal_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  unsplashSearchResults: _unsplash_search_reducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  unsplashPopularResults: _unsplash_popular_reducer__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiReducer);

/***/ }),

/***/ "./frontend/reducers/unsplash_popular_reducer.js":
/*!*******************************************************!*\
  !*** ./frontend/reducers/unsplash_popular_reducer.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_unsplash_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/unsplash_actions */ "./frontend/actions/unsplash_actions.js");

var unsplashPopularReducer = function unsplashPopularReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  switch (action.type) {
    case _actions_unsplash_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_UNSPLASH_POPULAR_IMAGES:
      return action.images.map(function (image) {
        return image.id;
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unsplashPopularReducer);

/***/ }),

/***/ "./frontend/reducers/unsplash_reducer.js":
/*!***********************************************!*\
  !*** ./frontend/reducers/unsplash_reducer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_unsplash_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/unsplash_actions */ "./frontend/actions/unsplash_actions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var unsplashReducer = function unsplashReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = _objectSpread({}, state);
  switch (action.type) {
    case _actions_unsplash_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_UNSPLASH_POPULAR_IMAGES:
      action.images.forEach(function (image) {
        nextState[image.id] = {
          title: image.alt_description,
          id: image.id,
          thumb: image.urls.thumb,
          full: image.urls.full,
          download: image.links.download_location,
          width: image.width,
          height: image.height,
          creator: image.user.name,
          creator_link: image.user.links.html,
          creator_thumb: image.user.profile_image.small
        };
      });
      return nextState;
    case _actions_unsplash_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_UNSPLASH_SEARCH_IMAGES:
      action.images.forEach(function (image) {
        nextState[image.id] = {
          title: image.alt_description,
          id: image.id,
          thumb: image.urls.thumb,
          full: image.urls.full,
          download: image.links.download_location,
          width: image.width,
          height: image.height,
          creator: image.user.name,
          creator_link: image.user.links.html,
          creator_thumb: image.user.profile_image.small
        };
      });
      return nextState;
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unsplashReducer);

/***/ }),

/***/ "./frontend/reducers/unsplash_search_reducer.js":
/*!******************************************************!*\
  !*** ./frontend/reducers/unsplash_search_reducer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_unsplash_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/unsplash_actions */ "./frontend/actions/unsplash_actions.js");

var unsplashSearchReducer = function unsplashSearchReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  switch (action.type) {
    case _actions_unsplash_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_UNSPLASH_SEARCH_IMAGES:
      return action.images.map(function (image) {
        return image.id;
      });
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (unsplashSearchReducer);

/***/ }),

/***/ "./frontend/reducers/uploaded_images_reducer.js":
/*!******************************************************!*\
  !*** ./frontend/reducers/uploaded_images_reducer.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/uploaded_image_actions */ "./frontend/actions/uploaded_image_actions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var uploadedImagesReducer = function uploadedImagesReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  var nextState = _objectSpread({}, state);
  switch (action.type) {
    case _actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_USER_UPLOADS:
      return _objectSpread(_objectSpread({}, state), action.payload.uploadedImages);
    case _actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_0__.REMOVE_UPLOAD:
      delete nextState[action.payload.uploadedImage.id];
      return nextState;
    case _actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_UPLOAD:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.payload.uploadedImage.id, action.payload.uploadedImage));
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uploadedImagesReducer);

/***/ }),

/***/ "./frontend/reducers/users_reducer.js":
/*!********************************************!*\
  !*** ./frontend/reducers/users_reducer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/session_actions */ "./frontend/actions/session_actions.js");
/* harmony import */ var _actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/uploaded_image_actions */ "./frontend/actions/uploaded_image_actions.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;
  Object.freeze(state);
  switch (action.type) {
    case _actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_USER_UPLOADS:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.payload.user.id, action.payload.user));
    case _actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_1__.REMOVE_UPLOAD:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.payload.user.id, action.payload.user));
    case _actions_uploaded_image_actions__WEBPACK_IMPORTED_MODULE_1__.RECEIVE_UPLOAD:
      return _objectSpread(_objectSpread({}, state), {}, _defineProperty({}, action.payload.user.id, action.payload.user));
    case _actions_session_actions__WEBPACK_IMPORTED_MODULE_0__.RECEIVE_CURRENT_USER:
      return _objectSpread(_objectSpread({}, state), _defineProperty({}, action.user.id, action.user));
    default:
      return state;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usersReducer);

/***/ }),

/***/ "./frontend/store/store.js":
/*!*********************************!*\
  !*** ./frontend/store/store.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_root_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/root_reducer */ "./frontend/reducers/root_reducer.js");




var configureStore = function configureStore() {
  var preloadedState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0,redux__WEBPACK_IMPORTED_MODULE_2__.createStore)(_reducers_root_reducer__WEBPACK_IMPORTED_MODULE_1__["default"], preloadedState,
  // applyMiddleware(thunk, logger),
  (0,redux__WEBPACK_IMPORTED_MODULE_2__.applyMiddleware)(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (configureStore);

/***/ }),

/***/ "./frontend/util/design_api_util.js":
/*!******************************************!*\
  !*** ./frontend/util/design_api_util.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createDesign: () => (/* binding */ createDesign),
/* harmony export */   deleteDesign: () => (/* binding */ deleteDesign),
/* harmony export */   fetchDesign: () => (/* binding */ fetchDesign),
/* harmony export */   fetchOwnedDesigns: () => (/* binding */ fetchOwnedDesigns),
/* harmony export */   fetchTemplates: () => (/* binding */ fetchTemplates),
/* harmony export */   updateDesign: () => (/* binding */ updateDesign)
/* harmony export */ });
var fetchOwnedDesigns = function fetchOwnedDesigns() {
  return $.ajax({
    url: '/api/designs/owned',
    method: 'GET'
  });
};
var fetchTemplates = function fetchTemplates() {
  return $.ajax({
    url: '/api/designs/templates',
    method: 'GET'
  });
};
var fetchDesign = function fetchDesign(designId) {
  return $.ajax({
    url: "/api/designs/".concat(designId),
    method: 'GET'
  });
};
var createDesign = function createDesign(design) {
  return $.ajax({
    url: '/api/designs',
    method: 'POST',
    data: {
      design: design
    }
  });
};
var updateDesign = function updateDesign(design) {
  return $.ajax({
    url: "/api/designs/".concat(design.id),
    method: 'PATCH',
    data: {
      design: design
    }
  });
};
var deleteDesign = function deleteDesign(designId) {
  return $.ajax({
    url: "/api/designs/".concat(designId),
    method: 'DELETE'
  });
};

/***/ }),

/***/ "./frontend/util/folder_api_util.js":
/*!******************************************!*\
  !*** ./frontend/util/folder_api_util.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFolder: () => (/* binding */ createFolder),
/* harmony export */   deleteFolder: () => (/* binding */ deleteFolder),
/* harmony export */   fetchFolder: () => (/* binding */ fetchFolder),
/* harmony export */   fetchFolders: () => (/* binding */ fetchFolders),
/* harmony export */   updateFolder: () => (/* binding */ updateFolder)
/* harmony export */ });
var fetchFolders = function fetchFolders() {
  return $.ajax({
    url: '/api/folders',
    method: 'GET'
  });
};
var fetchFolder = function fetchFolder(folderId) {
  return $.ajax({
    url: "/api/folders/".concat(folderId),
    method: 'GET'
  });
};
var createFolder = function createFolder(folder) {
  return $.ajax({
    url: '/api/folders',
    method: 'POST',
    data: {
      folder: folder
    }
  });
};
var updateFolder = function updateFolder(folder) {
  return $.ajax({
    url: "/api/folders/".concat(folder.id),
    method: 'PATCH',
    data: {
      folder: folder
    }
  });
};
var deleteFolder = function deleteFolder(folderId) {
  return $.ajax({
    url: "/api/folders/".concat(folderId),
    method: 'DELETE'
  });
};

/***/ }),

/***/ "./frontend/util/route_util.jsx":
/*!**************************************!*\
  !*** ./frontend/util/route_util.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthRoute: () => (/* binding */ AuthRoute),
/* harmony export */   ProtectedRoute: () => (/* binding */ ProtectedRoute)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");



var Auth = function Auth(_ref) {
  var Component = _ref.component,
    path = _ref.path,
    loggedIn = _ref.loggedIn,
    exact = _ref.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: path,
    exact: exact,
    render: function render(props) {
      return !loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
        to: "/"
      });
    }
  });
};
var Protected = function Protected(_ref2) {
  var Component = _ref2.component,
    path = _ref2.path,
    loggedIn = _ref2.loggedIn,
    exact = _ref2.exact;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, {
    path: path,
    exact: exact,
    render: function render(props) {
      return loggedIn ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Redirect, {
        to: "/"
      });
    }
  });
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    loggedIn: Boolean(state.session.id)
  };
};
var AuthRoute = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(Auth));
var ProtectedRoute = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.withRouter)((0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(mapStateToProps, null)(Protected));

/***/ }),

/***/ "./frontend/util/session_api_util.js":
/*!*******************************************!*\
  !*** ./frontend/util/session_api_util.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   signup: () => (/* binding */ signup)
/* harmony export */ });
var signup = function signup(user) {
  return $.ajax({
    url: '/api/users',
    method: 'POST',
    data: {
      user: user
    }
  });
};
var login = function login(user) {
  return $.ajax({
    url: '/api/session',
    method: 'POST',
    data: {
      user: user
    }
  });
};
var logout = function logout() {
  return $.ajax({
    url: '/api/session',
    method: 'DELETE'
  });
};

/***/ }),

/***/ "./frontend/util/unsplash_api_util.js":
/*!********************************************!*\
  !*** ./frontend/util/unsplash_api_util.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchUnsplashPopular: () => (/* binding */ fetchUnsplashPopular),
/* harmony export */   fetchUnsplashQuery: () => (/* binding */ fetchUnsplashQuery)
/* harmony export */ });
// import cache from './unsplash_cache';

var fetchUnsplashQuery = function fetchUnsplashQuery(page, query) {
  return $.ajax({
    method: 'GET',
    url: 'https://api.unsplash.com/search/photos',
    data: {
      query: query,
      per_page: 20,
      page: page
    },
    headers: {
      Authorization: "Client-ID ".concat(undefined)
    }
  });
};
var fetchUnsplashPopular = function fetchUnsplashPopular(page) {
  return $.ajax({
    method: 'GET',
    url: 'https://api.unsplash.com/photos',
    data: {
      order_by: 'popular',
      per_page: 20,
      page: page
    },
    headers: {
      Authorization: "Client-ID ".concat(undefined)
    }
  });
};

// export const fetchUnsplashPopular = (page) => {
//   const promise = new Promise((resolve, reject) => {
//     resolve(cache);
//   });
//   return promise;
// };

/***/ }),

/***/ "./frontend/util/uploaded_image_api_util.js":
/*!**************************************************!*\
  !*** ./frontend/util/uploaded_image_api_util.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deleteUpload: () => (/* binding */ deleteUpload),
/* harmony export */   fetchUserUploads: () => (/* binding */ fetchUserUploads),
/* harmony export */   updateUpload: () => (/* binding */ updateUpload)
/* harmony export */ });
var fetchUserUploads = function fetchUserUploads() {
  return $.ajax({
    url: '/api/uploaded_images',
    method: 'GET'
  });
};
var updateUpload = function updateUpload(uploadedImage) {
  return $.ajax({
    url: "/api/uploaded_images/".concat(uploadedImage.id),
    method: 'PATCH',
    data: {
      uploadedImage: uploadedImage
    }
  });
};
var deleteUpload = function deleteUpload(uploadedImageId) {
  return $.ajax({
    url: "/api/uploaded_images/".concat(uploadedImageId),
    method: 'DELETE'
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/Browse.module.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/Browse.module.css ***!
  \*****************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".Browse-module__container--3daeb {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  transition: all 0.3s;\n}\n\n.Browse-module__blurred--3-W_7 {\n  filter: blur(4px);\n}", ""]);
// Exports
exports.locals = {
	"container": "Browse-module__container--3daeb",
	"blurred": "Browse-module__blurred--3-W_7"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/NavBar.module.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/NavBar.module.css ***!
  \*****************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".NavBar-module__navBar--3OkbM {\n  padding: 8px 0;\n  font-size: 1.4rem;\n  display: flex;\n  justify-content: center;\n}\n\n.NavBar-module__nav--cUdZL {\n  display: flex;\n  align-items: center;\n}\n\n.NavBar-module__nav--cUdZL > li {\n  padding: 8px 12px;\n  letter-spacing: .01rem;\n}\n\n.NavBar-module__logo--FDrOm > img{\n  width: 56px;\n  height: 56px;\n}\n", ""]);
// Exports
exports.locals = {
	"navBar": "NavBar-module__navBar--3OkbM",
	"nav": "NavBar-module__nav--cUdZL",
	"logo": "NavBar-module__logo--FDrOm"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/CreateDropDown.module.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/CreateDropDown.module.css ***!
  \******************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".CreateDropDown-module__createDropDown--tRcuL {\n  width: 366px;\n}\n\n.CreateDropDown-module__customForm--2CFva {\n  margin: 8px 0;\n}\n\n.CreateDropDown-module__custom--2nIVl {\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  margin: 0 16px;\n}\n\n.CreateDropDown-module__custom--2nIVl input {\n  border-radius: 4px;\n  border: 1px solid #ddd;\n  height: 40px;\n  box-sizing: border-box;\n  padding-left: 10px;\n  font-size: 1.4rem;\n  margin-right: 8px;\n  width: 150px;\n}\n\n.CreateDropDown-module__custom--2nIVl input:focus {\n  border: 1px solid rgb(0, 201, 208);\n}\n\n.CreateDropDown-module__errorInput--1zMIW {\n  border: 1px solid red;\n}\n\n.CreateDropDown-module__custom--2nIVl div {\n  width: 50px;\n  color: #5a5a5a;\n}\n\n.CreateDropDown-module__submit--rGcut {\n  display: flex;\n  padding: 0 16px;\n  flex-direction: column;\n  margin-top: 16px;\n}\n\n.CreateDropDown-module__customHeader--iXmbH {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  margin-bottom: 8px;\n}\n\n.CreateDropDown-module__icon--1jSl8 {\n  transform: rotate(0deg);\n  transition: all 0.5s;\n}\n\n.CreateDropDown-module__rotate--3lLLe {\n  transform: rotate(-45deg);\n}\n\n.CreateDropDown-module__error--EfN2i {\n  background-color: #ffd6da;\n  padding: 12px 16px;\n  border-radius: 4px;\n  color: #a80000;\n  margin: 0 16px;\n  margin-top: 8px;\n}\n\n.CreateDropDown-module__hidden--2UziP {\n  display: none;\n}\n\n.CreateDropDown-module__listItem--IM0fc {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  padding: 0 16px;\n  color: #303030;\n  cursor: pointer;\n}\n\n.CreateDropDown-module__listItem--IM0fc svg {\n  font-size: 2rem;\n}\n\n.CreateDropDown-module__listItem--IM0fc:hover {\n  background-color: rgb(238,238,238);\n}\n\n.CreateDropDown-module__listItem--IM0fc:hover small {\n  display: inline;\n}\n\n.CreateDropDown-module__listItem--IM0fc small {\n  margin-left: 12px;\n  color: #949494;\n}", ""]);
// Exports
exports.locals = {
	"createDropDown": "CreateDropDown-module__createDropDown--tRcuL",
	"customForm": "CreateDropDown-module__customForm--2CFva",
	"custom": "CreateDropDown-module__custom--2nIVl",
	"errorInput": "CreateDropDown-module__errorInput--1zMIW",
	"submit": "CreateDropDown-module__submit--rGcut",
	"customHeader": "CreateDropDown-module__customHeader--iXmbH",
	"icon": "CreateDropDown-module__icon--1jSl8",
	"rotate": "CreateDropDown-module__rotate--3lLLe",
	"error": "CreateDropDown-module__error--EfN2i",
	"hidden": "CreateDropDown-module__hidden--2UziP",
	"listItem": "CreateDropDown-module__listItem--IM0fc"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/HaveUserNav.module.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/HaveUserNav.module.css ***!
  \***************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".HaveUserNav-module__containerRef--3OgDN {\n  position: relative;\n}\n\n.HaveUserNav-module__profileImg--1JWp_ {\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  cursor: pointer;\n}\n\n\n.HaveUserNav-module__btnSpan--1zjds {\n  padding: 0 6px;\n}", ""]);
// Exports
exports.locals = {
	"containerRef": "HaveUserNav-module__containerRef--3OgDN",
	"profileImg": "HaveUserNav-module__profileImg--1JWp_",
	"btnSpan": "HaveUserNav-module__btnSpan--1zjds"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/MainAuth.module.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/MainAuth.module.css ***!
  \************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".MainAuth-module__splash--1lR8v {\n  width: 720px;\n  position: absolute;\n  right: 0px;\n  top: 100px;\n  z-index: -1;\n}", ""]);
// Exports
exports.locals = {
	"splash": "MainAuth-module__splash--1lR8v"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/UserDropDown.module.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/UserDropDown.module.css ***!
  \****************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".UserDropDown-module__dropdownCard--1G-Qk {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  transition: opacity 0.3s ease-in-out;\n  right: 0;\n  top: 50px;\n  border-radius: 4px;\n  padding: 8px 0;\n  background-color: white;\n  border: 1px solid rgb(222,222,222);\n  box-shadow: 0 2px 12px rgb(222,222,222);\n}\n\n.UserDropDown-module__profile--hguJA {\n  display: flex;\n  width: 212px;\n  padding: 8px 16px;\n}\n\n.UserDropDown-module__profileText--3hBAY {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-left: 12px;\n}\n\n.UserDropDown-module__profileText--3hBAY > small {\n  color: rgb(113, 116, 119);\n}\n\n.UserDropDown-module__profileImg--1x_od > img{\n  border-radius: 50%;\n  width: 64px;\n  height: 64px;\n}\n\n.UserDropDown-module__hr--37ntn {\n  border: 0;\n  border-top: 1px solid rgb(222,222,222);\n}\n\n.UserDropDown-module__listItem--ECY12 {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  padding: 0 16px;\n  color: #303030;\n  cursor: pointer;\n}\n\n.UserDropDown-module__listItem--ECY12:hover {\n  background-color: rgb(238,238,238);\n}\n\n.UserDropDown-module__disabled--2p6KG {\n  cursor: not-allowed;\n}\n\n.UserDropDown-module__animate--YKjIS {\n  opacity: 1;\n}\n\n.UserDropDown-module__gone--3fBsj {\n  opacity: 0;\n}\n\n.UserDropDown-module__listItem--ECY12 > svg{\n  font-size: 2rem;\n}", ""]);
// Exports
exports.locals = {
	"dropdownCard": "UserDropDown-module__dropdownCard--1G-Qk",
	"profile": "UserDropDown-module__profile--hguJA",
	"profileText": "UserDropDown-module__profileText--3hBAY",
	"profileImg": "UserDropDown-module__profileImg--1x_od",
	"hr": "UserDropDown-module__hr--37ntn",
	"listItem": "UserDropDown-module__listItem--ECY12",
	"disabled": "UserDropDown-module__disabled--2p6KG",
	"animate": "UserDropDown-module__animate--YKjIS",
	"gone": "UserDropDown-module__gone--3fBsj"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/UserNav.module.css":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/UserNav.module.css ***!
  \***********************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".UserNav-module__userNav--1tbYf {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n}\n", ""]);
// Exports
exports.locals = {
	"userNav": "UserNav-module__userNav--1tbYf"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/AllDesigns.module.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/AllDesigns.module.css ***!
  \****************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".AllDesigns-module__indexArea--2ZdHe {\n  flex-grow: 1;\n  padding: 32px 32px 0 16px;\n}\n\n.AllDesigns-module__indexTitle--1k53v {\n  margin-bottom: 32px;\n  font-size: 3.2rem;\n  line-height: 1.3;\n}\n\n.AllDesigns-module__masonry--3R6q_ {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n/* .masonItem {\n  height: 250px;\n  flex: 1 0 auto;\n  margin: 0 24px 56px 0;\n  border: 1px solid #ddddde;\n  border-radius: 4px;\n} */\n\n.AllDesigns-module__masonry--3R6q_::after {\n  content: '';\n  flex-grow: 999999999;\n}\n\n.AllDesigns-module__masonItem--1fKYI {\n  margin: 0 24px 56px 0;\n  position: relative;\n}\n\n.AllDesigns-module__masonItem--1fKYI > i {\n  display: block;\n}\n\n.AllDesigns-module__masonItem--1fKYI > div {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  vertical-align: bottom;\n}", ""]);
// Exports
exports.locals = {
	"indexArea": "AllDesigns-module__indexArea--2ZdHe",
	"indexTitle": "AllDesigns-module__indexTitle--1k53v",
	"masonry": "AllDesigns-module__masonry--3R6q_",
	"masonItem": "AllDesigns-module__masonItem--1fKYI"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/BrowseIndex.module.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/BrowseIndex.module.css ***!
  \*****************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".BrowseIndex-module__container--3Lfxn {\n  flex-grow: 1;\n  display: flex;\n  justify-content: stretch;\n  height: 100%;\n  overflow: hidden;\n}\n\n.BrowseIndex-module__sideBar--1I7Dh {\n  /* width: 244px; */\n  min-width: 244px;\n  /* flex-grow: 1; */\n}\n\n.BrowseIndex-module__list--1Y0ot {\n  padding-top: 32px;\n  padding-left: 16px;\n}\n\n.BrowseIndex-module__listItem--1quaI > * {\n  width: 100%;\n  justify-content: flex-start;\n}\n\n.BrowseIndex-module__listItem--1quaI ~ .BrowseIndex-module__listItem--1quaI {\n  margin-top: 8px;\n}\n\n.BrowseIndex-module__main--1s4r5 {\n  overflow-y: scroll;\n  height: 100%;\n  width: 100%;\n}", ""]);
// Exports
exports.locals = {
	"container": "BrowseIndex-module__container--3Lfxn",
	"sideBar": "BrowseIndex-module__sideBar--1I7Dh",
	"list": "BrowseIndex-module__list--1Y0ot",
	"listItem": "BrowseIndex-module__listItem--1quaI",
	"main": "BrowseIndex-module__main--1s4r5"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/DesignIndexItem.module.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/DesignIndexItem.module.css ***!
  \*********************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".DesignIndexItem-module__card--3HPIK {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n\n.DesignIndexItem-module__card--3HPIK img {\n\n  border-radius: 4px;\n}\n\n.DesignIndexItem-module__imageBorder--Q5vWQ {\n  border: 1px solid #ddddde;\n  border-radius: 4px;\n  cursor: pointer;\n  background-size: 300px 300px;\n}\n\n.DesignIndexItem-module__wrap--3_joM {\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.DesignIndexItem-module__card--3HPIK img {\n  z-index: -1;\n}\n\n.DesignIndexItem-module__title--3wuLv {\n  height: 20px;\n  padding: 8px 4px;\n  font-size: 1.4rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.DesignIndexItem-module__title--3wuLv > * {\n  margin-right: 8px;\n}\n\n.DesignIndexItem-module__toggle--3U28O {\n  position: absolute;\n  top: -60px;\n  right: 10px;\n  transition: all 0.3s;\n  pointer-events: all;\n}\n\n.DesignIndexItem-module__card--3HPIK:hover .DesignIndexItem-module__toggle--3U28O {\n  top: 10px;\n}\n\n.DesignIndexItem-module__active--2xGdE {\n  top: 10px;\n}\n\n.DesignIndexItem-module__loaderWrap--19EhG {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  top: 0px;\n  width: 100%;\n  height: calc(100% - 36px);\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.DesignIndexItem-module__loader--3Pbnl {\n  border: 8px solid #ffd22e;\n  border-top: 8px solid transparent;\n  border-radius: 50%;\n  width: 48px;\n  height: 48px;\n  animation: DesignIndexItem-module__spin--3F3nW 1s linear infinite;\n}\n\n@keyframes DesignIndexItem-module__spin--3F3nW {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.DesignIndexItem-module__tempImg--1tvEd {\n  opacity: 0.6;\n  filter: saturate(0);\n}", ""]);
// Exports
exports.locals = {
	"card": "DesignIndexItem-module__card--3HPIK",
	"imageBorder": "DesignIndexItem-module__imageBorder--Q5vWQ",
	"wrap": "DesignIndexItem-module__wrap--3_joM",
	"title": "DesignIndexItem-module__title--3wuLv",
	"toggle": "DesignIndexItem-module__toggle--3U28O",
	"active": "DesignIndexItem-module__active--2xGdE",
	"loaderWrap": "DesignIndexItem-module__loaderWrap--19EhG",
	"loader": "DesignIndexItem-module__loader--3Pbnl",
	"spin": "DesignIndexItem-module__spin--3F3nW",
	"tempImg": "DesignIndexItem-module__tempImg--1tvEd"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/IndexItemDropdown.module.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/IndexItemDropdown.module.css ***!
  \***********************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".IndexItemDropdown-module__dropdownCard--13Toj {\n  position: absolute;\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n  right: 10px;\n  top: 50px;\n  border-radius: 4px;\n  padding: 8px 0;\n  background-color: white;\n  border: 1px solid rgb(222,222,222);\n  box-shadow: 0 2px 12px rgba(0,0,0,0.2);\n  font-size: 1.4rem;\n}\n\n.IndexItemDropdown-module__title--2xn0J {\n  display: flex;\n  align-items: center;\n  min-height: 40px;\n  padding: 0 16px;\n}\n\n.IndexItemDropdown-module__title--2xn0J input {\n  font-size: 1.9rem;\n  font-weight: 800;\n  padding-bottom: 4px;\n  border-bottom: 2px dotted transparent;\n  width: 100%;\n}\n\n.IndexItemDropdown-module__title--2xn0J input:focus {\n  border-bottom: 2px dotted #5a5a5a;\n}\n\n.IndexItemDropdown-module__dropDown--2GZQW {\n  width: 320px;\n}\n\n.IndexItemDropdown-module__customForm--2nmD7 {\n  margin: 8px 0;\n}\n\n.IndexItemDropdown-module__custom--1ADiF {\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  margin: 0 16px;\n}\n\n.IndexItemDropdown-module__custom--1ADiF input {\n  border-radius: 4px;\n  border: 1px solid #ddd;\n  height: 40px;\n  box-sizing: border-box;\n  padding-left: 10px;\n  font-size: 1.4rem;\n  margin-right: 8px;\n  width: 150px;\n}\n\n.IndexItemDropdown-module__custom--1ADiF input:focus {\n  border: 1px solid rgb(0, 201, 208);\n}\n\n.IndexItemDropdown-module__errorInput--1TCOv {\n  border: 1px solid red;\n}\n\n.IndexItemDropdown-module__custom--1ADiF div {\n  width: 50px;\n  color: #5a5a5a;\n}\n\n.IndexItemDropdown-module__submit--2Bvj0 {\n  display: flex;\n  padding: 0 16px;\n  flex-direction: column;\n  margin-top: 16px;\n}\n\n.IndexItemDropdown-module__customHeader--1E_lD {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  margin-bottom: 8px;\n}\n\n.IndexItemDropdown-module__icon--307f4 {\n  transform: rotate(0deg);\n  transition: all 0.5s;\n}\n\n.IndexItemDropdown-module__rotate--2vdGD {\n  transform: rotate(-45deg);\n}\n\n.IndexItemDropdown-module__error--1qUBP {\n  background-color: #ffd6da;\n  padding: 12px 16px;\n  border-radius: 4px;\n  color: #a80000;\n  margin: 0 16px;\n  margin-top: 8px;\n}\n\n.IndexItemDropdown-module__hidden--3ov3H {\n  display: none;\n}\n\n.IndexItemDropdown-module__listItem--1zBF_ {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  padding: 0 16px;\n  color: #303030;\n  cursor: pointer;\n  pointer-events: all;\n}\n\n.IndexItemDropdown-module__listItem--1zBF_ svg {\n  font-size: 2rem;\n}\n\n.IndexItemDropdown-module__listItem--1zBF_:hover {\n  background-color: rgb(238,238,238);\n}\n\n.IndexItemDropdown-module__listItem--1zBF_:hover small {\n  display: inline;\n}\n\n.IndexItemDropdown-module__listItem--1zBF_ small {\n  margin-left: 12px;\n  color: #949494;\n}\n\n.IndexItemDropdown-module__animate--3HVoh {\n  opacity: 1;\n}\n\n.IndexItemDropdown-module__hr--1eaxV {\n  border: 0;\n  border-top: 1px solid rgb(222,222,222);\n}\n\n.IndexItemDropdown-module__dropDown--2GZQW a {\n  text-decoration: none;\n}", ""]);
// Exports
exports.locals = {
	"dropdownCard": "IndexItemDropdown-module__dropdownCard--13Toj",
	"title": "IndexItemDropdown-module__title--2xn0J",
	"dropDown": "IndexItemDropdown-module__dropDown--2GZQW",
	"customForm": "IndexItemDropdown-module__customForm--2nmD7",
	"custom": "IndexItemDropdown-module__custom--1ADiF",
	"errorInput": "IndexItemDropdown-module__errorInput--1TCOv",
	"submit": "IndexItemDropdown-module__submit--2Bvj0",
	"customHeader": "IndexItemDropdown-module__customHeader--1E_lD",
	"icon": "IndexItemDropdown-module__icon--307f4",
	"rotate": "IndexItemDropdown-module__rotate--2vdGD",
	"error": "IndexItemDropdown-module__error--1qUBP",
	"hidden": "IndexItemDropdown-module__hidden--3ov3H",
	"listItem": "IndexItemDropdown-module__listItem--1zBF_",
	"animate": "IndexItemDropdown-module__animate--3HVoh",
	"hr": "IndexItemDropdown-module__hr--1eaxV"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/folder/AllFolders.module.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/folder/AllFolders.module.css ***!
  \***********************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".AllFolders-module__indexArea--bNi2L {\n  flex-grow: 1;\n  padding: 32px 32px 0 16px;\n  position: relative;\n  box-sizing: border-box;\n  min-height: 100%;\n}\n\n.AllFolders-module__indexTitle--2BuUT {\n  margin-bottom: 32px;\n  font-size: 3.2rem;\n  line-height: 1.3;\n}\n\n.AllFolders-module__list--17FtE {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.AllFolders-module__listItem--chse6 {\n  width: 304px;\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: stretch;\n  position: relative;\n}\n\n.AllFolders-module__listItem--chse6:hover button {\n  opacity: 1;\n}\n\n.AllFolders-module__listItem--chse6 > a {\n  height: 100%;\n  flex-grow: 1;\n}\n\n.AllFolders-module__iconWrap--L2O3o {\n  background-color: #dedede;\n  width: 56px;\n  height: 56px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 4px;\n}\n\n.AllFolders-module__create--3FRDY {\n  background-color: #ffce1c;\n}\n\n.AllFolders-module__modalWrap--1H1rF {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.AllFolders-module__boxWrap--CSHwI {\n  position: relative;\n}\n\n.AllFolders-module__blur--3BEA6 {\n  filter: blur(4px);\n  -webkit-filter: blur(4px);\n}", ""]);
// Exports
exports.locals = {
	"indexArea": "AllFolders-module__indexArea--bNi2L",
	"indexTitle": "AllFolders-module__indexTitle--2BuUT",
	"list": "AllFolders-module__list--17FtE",
	"listItem": "AllFolders-module__listItem--chse6",
	"iconWrap": "AllFolders-module__iconWrap--L2O3o",
	"create": "AllFolders-module__create--3FRDY",
	"modalWrap": "AllFolders-module__modalWrap--1H1rF",
	"boxWrap": "AllFolders-module__boxWrap--CSHwI",
	"blur": "AllFolders-module__blur--3BEA6"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/folder/CreateFolder.module.css":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/folder/CreateFolder.module.css ***!
  \*************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".CreateFolder-module__dropdownCard--CDIe- {\n  z-index: 1;\n  opacity: 0;\n  transition: opacity 0.3s ease-in-out;\n  right: 0;\n  top: 50px;\n  border-radius: 4px;\n  padding: 8px 0;\n  background-color: white;\n  border: 1px solid rgb(222,222,222);\n  box-shadow: 0 2px 12px rgb(222,222,222);\n  font-size: 1.4rem;\n}\n\n.CreateFolder-module__createDropDown--1pQ9E {\n  width: 320px;\n}\n\n.CreateFolder-module__customForm--39c8D {\n  margin: 8px 0;\n}\n\n.CreateFolder-module__title--33x-e {\n  padding: 0 16px;\n}\n\n.CreateFolder-module__custom--2TNx6 {\n  display: flex;\n  align-items: center;\n  font-size: 1.4rem;\n  margin: 0 16px;\n}\n\n.CreateFolder-module__custom--2TNx6 input {\n  border-radius: 4px;\n  border: 1px solid #ddd;\n  height: 40px;\n  box-sizing: border-box;\n  padding-left: 10px;\n  font-size: 1.4rem;\n  width: 100%;\n  margin-top: 12px;\n}\n\n.CreateFolder-module__custom--2TNx6 input:focus {\n  border: 1px solid #dc85ff;\n}\n\n.CreateFolder-module__errorInput--FKy4L {\n  border: 1px solid red;\n}\n\n.CreateFolder-module__custom--2TNx6 div {\n  width: 50px;\n  color: #5a5a5a;\n}\n\n.CreateFolder-module__submit--27QOp {\n  display: flex;\n  padding: 0 16px;\n  flex-direction: column;\n  margin-top: 16px;\n}\n\n.CreateFolder-module__customHeader--2H7Xi {\n  display: flex;\n  align-items: center;\n  padding: 0 16px;\n  margin-bottom: 8px;\n}\n\n.CreateFolder-module__icon--1w79O {\n  transform: rotate(0deg);\n  transition: all 0.5s;\n}\n\n.CreateFolder-module__rotate--GTz4N {\n  transform: rotate(-45deg);\n}\n\n.CreateFolder-module__error--1r8Ub {\n  background-color: #ffd6da;\n  padding: 12px 16px;\n  border-radius: 4px;\n  color: #a80000;\n  margin: 0 16px;\n  margin-top: 8px;\n}\n\n.CreateFolder-module__hidden--1iRzC {\n  display: none;\n}\n\n.CreateFolder-module__listItem--344Hh {\n  display: flex;\n  align-items: center;\n  height: 40px;\n  padding: 0 16px;\n  color: #303030;\n  cursor: pointer;\n}\n\n.CreateFolder-module__hr--26sqi {\n  border: 0;\n  border-top: 1px solid rgb(222,222,222);\n}\n\n.CreateFolder-module__listItem--344Hh svg {\n  font-size: 2rem;\n}\n\n.CreateFolder-module__listItem--344Hh:hover {\n  background-color: rgb(238,238,238);\n}\n\n.CreateFolder-module__listItem--344Hh:hover small {\n  display: inline;\n}\n\n.CreateFolder-module__listItem--344Hh small {\n  margin-left: 12px;\n  color: #949494;\n}\n\n.CreateFolder-module__animate--1xMFA {\n  opacity: 1;\n}", ""]);
// Exports
exports.locals = {
	"dropdownCard": "CreateFolder-module__dropdownCard--CDIe-",
	"createDropDown": "CreateFolder-module__createDropDown--1pQ9E",
	"customForm": "CreateFolder-module__customForm--39c8D",
	"title": "CreateFolder-module__title--33x-e",
	"custom": "CreateFolder-module__custom--2TNx6",
	"errorInput": "CreateFolder-module__errorInput--FKy4L",
	"submit": "CreateFolder-module__submit--27QOp",
	"customHeader": "CreateFolder-module__customHeader--2H7Xi",
	"icon": "CreateFolder-module__icon--1w79O",
	"rotate": "CreateFolder-module__rotate--GTz4N",
	"error": "CreateFolder-module__error--1r8Ub",
	"hidden": "CreateFolder-module__hidden--1iRzC",
	"listItem": "CreateFolder-module__listItem--344Hh",
	"hr": "CreateFolder-module__hr--26sqi",
	"animate": "CreateFolder-module__animate--1xMFA"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/image/AllImages.module.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/image/AllImages.module.css ***!
  \*********************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".AllImages-module__indexArea--F25jX {\n  flex-grow: 1;\n  padding: 32px 32px 0 16px;\n}\n\n.AllImages-module__titleBar--hqTmi {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 32px;\n}\n\n.AllImages-module__indexTitle--EMWRY {\n  font-size: 3.2rem;\n  line-height: 1.3;\n}\n\n.AllImages-module__uploadBtnText--46ih3 {\n  padding: 0 24px;\n}\n\n.AllImages-module__masonry--2CVrj {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.AllImages-module__masonry--2CVrj::after {\n  content: '';\n  flex-grow: 999999999;\n}\n\n.AllImages-module__masonItem--3ZS_Z {\n  margin: 0 24px 56px 0;\n  position: relative;\n}\n\n.AllImages-module__masonItem--3ZS_Z > i {\n  display: block;\n}\n\n.AllImages-module__masonItem--3ZS_Z > div {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  vertical-align: bottom;\n}\n\n.AllImages-module__hidden--sBL-J {\n  display: none;\n}\n\n.AllImages-module__uploadBtnLabel--2PnDi {\n  color: #5a5a5a;\n  border: 2px solid #dcdcdc;\n  cursor: pointer;\n  height: 40px;\n  min-width: 40px;\n  border-radius: 4px;\n  letter-spacing: .01rem;\n  font-weight: 600;\n  font-size: 1.4rem;\n  line-height: 1.4;\n  /* font-family: 'Open Sans', sans-serif; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: border-color 0.5s, background-color 0.5s;\n}\n\n.AllImages-module__uploadBtnLabel--2PnDi:hover {\n  border-color: #949494;\n}\n\n.AllImages-module__uploadBtnLabel--2PnDi:active {\n  background-color: #dcdcdc;\n}", ""]);
// Exports
exports.locals = {
	"indexArea": "AllImages-module__indexArea--F25jX",
	"titleBar": "AllImages-module__titleBar--hqTmi",
	"indexTitle": "AllImages-module__indexTitle--EMWRY",
	"uploadBtnText": "AllImages-module__uploadBtnText--46ih3",
	"masonry": "AllImages-module__masonry--2CVrj",
	"masonItem": "AllImages-module__masonItem--3ZS_Z",
	"hidden": "AllImages-module__hidden--sBL-J",
	"uploadBtnLabel": "AllImages-module__uploadBtnLabel--2PnDi"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/Design.module.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/Design.module.css ***!
  \************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".Design-module__design--2BmwN {\n  background-color: white;\n  border: 1px solid #dddddd;\n  box-shadow: 0 2px 8px rgba(14,19,24,.07);\n  position: relative;\n}\n\n.Design-module__elementsContainer--3grSv {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n.Design-module__selected--3u2xG {\n  pointer-events: none;\n  position: absolute;\n  z-index: 99;\n  border: 2px solid aqua;\n}\n", ""]);
// Exports
exports.locals = {
	"design": "Design-module__design--2BmwN",
	"elementsContainer": "Design-module__elementsContainer--3grSv",
	"selected": "Design-module__selected--3u2xG"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/DesignDrawer.module.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/DesignDrawer.module.css ***!
  \******************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".DesignDrawer-module__designDrawer--2KB6S {\n  height: 100%;\n  background-color: #293039;\n  position: relative;\n  display: flex;\n}\n\n.DesignDrawer-module__toolsNav--26EWZ {\n  width: 72px;\n  background-color: #0e1318;\n  margin-right: 8px;\n  position: relative;\n  z-index: 2;\n}\n\n.DesignDrawer-module__buttonsNav--3hLFR {\n  position: absolute;\n  z-index: 3;\n}\n\n.DesignDrawer-module__drawer--3zSP7 {\n  background-color: #293039;\n  width: 360px;\n  height: 100%;\n  margin-left: -360px;\n  transition: all 1s ease;\n\n}\n\n\n.DesignDrawer-module__highlight--2XWYb {\n  width: 72px;\n  height: 72px;\n  position: absolute;\n  z-index: 2;\n  top: 0px;\n  transition: transform 0.2s ease;\n}\n\n.DesignDrawer-module__highlightClosed--k1A3I {\n  width: 72px;\n  height: 72px;\n  position: absolute;\n  z-index: 2;\n  top: 0px;\n  transition: transform 0s ease;\n}\n\n.DesignDrawer-module__background--sakEj {\n  width: 100%;\n  height: 100%;\n  background-color: #293039;\n  opacity: 1;\n  transition: opacity 0.3s ease;\n}\n\n.DesignDrawer-module__hidden--38MdY {\n  opacity: 0;\n}\n\n.DesignDrawer-module__handle--2UHgT {\n  position: absolute;\n  top: 50%;\n  right: -19px;\n  margin-top: -40px;\n  z-index: 10;\n}\n\n.DesignDrawer-module__container--2U6cL {\n  position: relative;\n}\n\n.DesignDrawer-module__handleIcon--2xuE1 {\n  position: absolute;\n  top: 50%;\n  font-size: 1.6rem;\n  margin-top: -12px;\n  right: 5px;\n  color: #eeeeee;\n}\n\n.DesignDrawer-module__showDrawer--2QQyR {\n  margin-left: 0px;\n}", ""]);
// Exports
exports.locals = {
	"designDrawer": "DesignDrawer-module__designDrawer--2KB6S",
	"toolsNav": "DesignDrawer-module__toolsNav--26EWZ",
	"buttonsNav": "DesignDrawer-module__buttonsNav--3hLFR",
	"drawer": "DesignDrawer-module__drawer--3zSP7",
	"highlight": "DesignDrawer-module__highlight--2XWYb",
	"highlightClosed": "DesignDrawer-module__highlightClosed--k1A3I",
	"background": "DesignDrawer-module__background--sakEj",
	"hidden": "DesignDrawer-module__hidden--38MdY",
	"handle": "DesignDrawer-module__handle--2UHgT",
	"container": "DesignDrawer-module__container--2U6cL",
	"handleIcon": "DesignDrawer-module__handleIcon--2xuE1",
	"showDrawer": "DesignDrawer-module__showDrawer--2QQyR"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/DesignTools.module.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/DesignTools.module.css ***!
  \*****************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".DesignTools-module__designTools--3camB {\n  padding: 8px;\n  background-color: white;\n  border-bottom: 1px solid #dddddd;\n  min-height: 24px;\n  font-size: 1.4rem;\n  font-weight: 600;\n}\n\n.DesignTools-module__nothingSelected--3wZVO {\n  font-size: 1.4rem;\n  color: #5a5a5a;\n  font-weight: 600;\n}\n\n.DesignTools-module__designForm--22h6F {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.DesignTools-module__leftNav--BcQo1 {\n  display: flex;\n  align-items: center;\n}\n\n.DesignTools-module__rightNav--1YBx5 {\n  display: flex;\n  align-items: center;\n}\n\n.DesignTools-module__leftNav--BcQo1 > *{\n  margin-right: 4px;\n}\n\n.DesignTools-module__rightNav--1YBx5 > *{\n  margin-left: 4px;\n}\n\n.DesignTools-module__hidden--2V-cx {\n  visibility: hidden;\n}\n", ""]);
// Exports
exports.locals = {
	"designTools": "DesignTools-module__designTools--3camB",
	"nothingSelected": "DesignTools-module__nothingSelected--3wZVO",
	"designForm": "DesignTools-module__designForm--22h6F",
	"leftNav": "DesignTools-module__leftNav--BcQo1",
	"rightNav": "DesignTools-module__rightNav--1YBx5",
	"hidden": "DesignTools-module__hidden--2V-cx"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/Editor.module.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/Editor.module.css ***!
  \************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".Editor-module__editorContainer--1Xhol {\n  background-color: #edf0f2;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n}\n\n.Editor-module__editorBottomContainer--1a2Wg {\n  display: flex;\n  flex-grow: 1;\n  overflow: hidden;\n  position: relative;\n}\n\n.Editor-module__zoomBar--Bu27K {\n  position: absolute;\n  bottom: 25px;\n  right: 25px;\n  padding: 5px;\n  display: flex;\n  z-index: 10;\n  border: 1px solid #dddddd;\n  background-color: rgba(237,240,242,.9);\n}\n\n.Editor-module__zoomBar--Bu27K > * {\n  margin-left: 5px;\n}\n", ""]);
// Exports
exports.locals = {
	"editorContainer": "Editor-module__editorContainer--1Xhol",
	"editorBottomContainer": "Editor-module__editorBottomContainer--1a2Wg",
	"zoomBar": "Editor-module__zoomBar--Bu27K"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/EditorNav.module.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/EditorNav.module.css ***!
  \***************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".EditorNav-module__editorNav--3zaBN {\n  /* background-color: #ffffff; */\n  background-image: linear-gradient(-30deg, #dc85ff , #ffbc2a);\n  /* border-bottom: 1px solid #dddddd; */\n  padding: 8px 4px;\n  flex-shrink: 0;\n  display: flex;\n  justify-content: space-between;\n}\n\n.EditorNav-module__leftNav--2wF9X {\n  display: flex;\n}\n\n.EditorNav-module__rightNav--2HoHI {\n  display: flex;\n}\n\n.EditorNav-module__leftNav--2wF9X > *{\n  margin: 0 4px;\n}\n\n.EditorNav-module__rightNav--2HoHI > *{\n  margin: 0 4px;\n}", ""]);
// Exports
exports.locals = {
	"editorNav": "EditorNav-module__editorNav--3zaBN",
	"leftNav": "EditorNav-module__leftNav--2wF9X",
	"rightNav": "EditorNav-module__rightNav--2HoHI"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/Viewer.module.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/Viewer.module.css ***!
  \************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".Viewer-module__design--2D9hU {\n  background-color: white;\n  position: relative;\n}\n\n.Viewer-module__elementsContainer--9-16y {\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}", ""]);
// Exports
exports.locals = {
	"design": "Viewer-module__design--2D9hU",
	"elementsContainer": "Viewer-module__elementsContainer--9-16y"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/WorkArea.module.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/WorkArea.module.css ***!
  \**************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".WorkArea-module__workArea--3QuIq {\n  background-color: #edf0f2;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.WorkArea-module__workContainer--2iEmb {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.WorkArea-module__designContainer--2ZiaP {\n  padding: 50px;\n  margin: auto;\n}\n\n", ""]);
// Exports
exports.locals = {
	"workArea": "WorkArea-module__workArea--3QuIq",
	"workContainer": "WorkArea-module__workContainer--2iEmb",
	"designContainer": "WorkArea-module__designContainer--2ZiaP"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/DrawerSearch.module.css":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/DrawerSearch.module.css ***!
  \**************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".DrawerSearch-module__searchBar--1diLV {\n  color: #0e1318;\n}\n\n.DrawerSearch-module__searchInput--284gO {\n  border-radius: 4px;\n  height: 40px;\n  background-color: white;\n  font-size: 2em;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 4px;\n  margin: 24px 32px 8px 16px;\n}\n\n.DrawerSearch-module__searchInput--284gO svg {\n  width: 40px;\n}\n\n.DrawerSearch-module__inputIcon--2mqsM {\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n\n.DrawerSearch-module__input--8eV_2 {\n  width: 100%;\n  padding-left: 4px;\n  font-size: 1.4rem;\n}\n\n.DrawerSearch-module__hiddenButton--30Hpx {\n  display: none;\n}\n\n.DrawerSearch-module__notVisible--3T9dm {\n  visibility: hidden;\n}", ""]);
// Exports
exports.locals = {
	"searchBar": "DrawerSearch-module__searchBar--1diLV",
	"searchInput": "DrawerSearch-module__searchInput--284gO",
	"inputIcon": "DrawerSearch-module__inputIcon--2mqsM",
	"input": "DrawerSearch-module__input--8eV_2",
	"hiddenButton": "DrawerSearch-module__hiddenButton--30Hpx",
	"notVisible": "DrawerSearch-module__notVisible--3T9dm"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/ElementsDrawer.module.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/ElementsDrawer.module.css ***!
  \****************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".ElementsDrawer-module__elementsDrawer--VlRBx {\n  width: 312px;\n  display: flex;\n  flex-direction: column;\n  padding-left: 16px;\n  padding-right: 24px;\n}\n\n.ElementsDrawer-module__itemList--2Xn1L {\n  margin-top: 16px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.ElementsDrawer-module__item--lEfH5 {\n  width: 100px;\n  height: 100px;\n  margin-bottom: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.ElementsDrawer-module__item--lEfH5 > svg {\n  fill: #c7d0d8;\n  width: 100px;\n  height: 100px;\n}", ""]);
// Exports
exports.locals = {
	"elementsDrawer": "ElementsDrawer-module__elementsDrawer--VlRBx",
	"itemList": "ElementsDrawer-module__itemList--2Xn1L",
	"item": "ElementsDrawer-module__item--lEfH5"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/ImageItem.module.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/ImageItem.module.css ***!
  \***********************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".ImageItem-module__more--1g1x- {\n  position: absolute;\n  display: none;\n  top: 4px;\n  right: 4px;\n  color: white;\n  background-color: rgba(0,0,0,0.6);\n  height: 16px;\n  border-radius: 8px;\n  min-width: 32px;\n  border-color: transparent;\n}\n\n.ImageItem-module__more--1g1x-:hover {\n  background-color: #dc85ff;\n  border-color: transparent;\n}\n\n.ImageItem-module__item--3wjkt {\n  position: relative;\n}\n\n.ImageItem-module__item--3wjkt:hover .ImageItem-module__more--1g1x- {\n  display: flex;\n}\n\n.ImageItem-module__more--1g1x- svg {\n  font-size: 1.6rem;\n}\n\n.ImageItem-module__image--1MONl {\n  cursor: pointer;\n}", ""]);
// Exports
exports.locals = {
	"more": "ImageItem-module__more--1g1x-",
	"item": "ImageItem-module__item--3wjkt",
	"image": "ImageItem-module__image--1MONl"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/TextDrawer.module.css":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/TextDrawer.module.css ***!
  \************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".TextDrawer-module__textDrawer--3gfW7 {\n  width: 312px;\n  display: flex;\n  flex-direction: column;\n  padding-left: 16px;\n  padding-right: 24px;\n  color: white;\n}\n\n.TextDrawer-module__textDrawer--3gfW7 > * {\n  margin-bottom: 8px;\n}\n\n.TextDrawer-module__itemList--34kpt {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.TextDrawer-module__item--2ARiv {\n  background: hsla(0,0%,100%,.07);\n  border-radius: 4px;\n  width: 152px;\n  height: 152px;\n  margin-bottom: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: background-color 0.3s;\n  cursor: pointer;\n}\n\n.TextDrawer-module__item--2ARiv:hover {\n  background: hsla(0,0%,100%,.14);  \n}\n\n\n/* .item > svg {\n  fill: #c7d0d8;\n  width: 152px;\n  height: 152px;\n} */\n\n.TextDrawer-module__highlights--2L4mv {\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 20px;\n}\n\n.TextDrawer-module__highlightItem--15_EF {\n  background: hsla(0,0%,100%,.07);\n  border-radius: 4px;\n  margin-bottom: 8px;\n  transition: background-color 0.3s;\n  cursor: pointer;\n}\n\n.TextDrawer-module__highlightItem--15_EF:hover {\n  background: hsla(0,0%,100%,.14);\n}\n\n.TextDrawer-module__highlightItem--15_EF > p {\n  padding: 16px;\n  line-height: 1;\n}\n\n.TextDrawer-module__heading--3BCdk {\n  font-weight: 800;\n  font-size: 28px;\n}\n\n.TextDrawer-module__subheading--3-wkh {\n  font-weight: 400;\n  font-size: 18px;\n}\n\n.TextDrawer-module__body--1Ucvx {\n  font-weight: 300;\n  font-size: 12px;\n}", ""]);
// Exports
exports.locals = {
	"textDrawer": "TextDrawer-module__textDrawer--3gfW7",
	"itemList": "TextDrawer-module__itemList--34kpt",
	"item": "TextDrawer-module__item--2ARiv",
	"highlights": "TextDrawer-module__highlights--2L4mv",
	"highlightItem": "TextDrawer-module__highlightItem--15_EF",
	"heading": "TextDrawer-module__heading--3BCdk",
	"subheading": "TextDrawer-module__subheading--3-wkh",
	"body": "TextDrawer-module__body--1Ucvx"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/UnsplashDrawer.module.css":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/UnsplashDrawer.module.css ***!
  \****************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".UnsplashDrawer-module__unsplashDrawer--neIZ1 {\n  width: 320px;\n  display: flex;\n  flex-direction: column;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-top: 8px;\n}\n\n.UnsplashDrawer-module__masonry--2a44r {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.UnsplashDrawer-module__masonry--2a44r::after {\n  content: '';\n  flex-grow: 999999999;\n}\n\n.UnsplashDrawer-module__masonItem--2sbK6 {\n  margin: 0 8px 8px 0;\n  position: relative;\n}\n\n.UnsplashDrawer-module__masonItem--2sbK6 > i {\n  display: block;\n}\n\n.UnsplashDrawer-module__masonItem--2sbK6 > div {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  vertical-align: bottom;\n}", ""]);
// Exports
exports.locals = {
	"unsplashDrawer": "UnsplashDrawer-module__unsplashDrawer--neIZ1",
	"masonry": "UnsplashDrawer-module__masonry--2a44r",
	"masonItem": "UnsplashDrawer-module__masonItem--2sbK6"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/UploadsDrawer.module.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/UploadsDrawer.module.css ***!
  \***************************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".UploadsDrawer-module__header--3AKD3 {\n    display: flex;\n  flex-direction: column;\n  margin: 24px 32px 8px 16px;\n}\n\n.UploadsDrawer-module__uploadsDrawer--249oT {\n  width: 320px;\n  display: flex;\n  flex-direction: column;\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-top: 8px;\n}\n\n.UploadsDrawer-module__masonry--3BtV5 {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.UploadsDrawer-module__masonry--3BtV5::after {\n  content: '';\n  flex-grow: 999999999;\n}\n\n.UploadsDrawer-module__masonItem--YPHfz {\n  margin: 0 8px 8px 0;\n  position: relative;\n}\n\n.UploadsDrawer-module__masonItem--YPHfz > i {\n  display: block;\n}\n\n.UploadsDrawer-module__masonItem--YPHfz > img {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  vertical-align: bottom;\n}\n\n.UploadsDrawer-module__hidden--1iZ08 {\n  display: none;\n}\n\n.UploadsDrawer-module__uploadBtn--26qMa {\n  background-color: #dc85ff;\n  border-color: transparent;\n  color: #ffffff;\n  cursor: pointer;\n  height: 40px;\n  min-width: 40px;\n  border-radius: 4px;\n  letter-spacing: .01rem;\n  font-weight: 600;\n  font-size: 1.4rem;\n  line-height: 1.4;\n  /* font-family: 'Open Sans', sans-serif; */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: border-color 0.5s, background-color 0.5s;\n}\n\n.UploadsDrawer-module__uploadBtn--26qMa:hover {\n  background-color: #ffba25;\n}\n\n.UploadsDrawer-module__uploadBtn--26qMa:active {\n  background-color: #ffd22e;\n}\n\n.UploadsDrawer-module__temp--2049h {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.UploadsDrawer-module__tempImg--2zdJM {\n  filter: saturate(0);\n  opacity: 0.6;\n}\n\n.UploadsDrawer-module__image--2ekzI {\n  cursor: pointer;\n}\n\n.UploadsDrawer-module__loader--1c5lR {\n  border: 8px solid #ffd22e;\n  border-top: 8px solid transparent;\n  border-radius: 50%;\n  width: 48px;\n  height: 48px;\n  animation: UploadsDrawer-module__spin--1Q4o- 1s linear infinite;\n}\n\n@keyframes UploadsDrawer-module__spin--1Q4o- {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n", ""]);
// Exports
exports.locals = {
	"header": "UploadsDrawer-module__header--3AKD3",
	"uploadsDrawer": "UploadsDrawer-module__uploadsDrawer--249oT",
	"masonry": "UploadsDrawer-module__masonry--3BtV5",
	"masonItem": "UploadsDrawer-module__masonItem--YPHfz",
	"hidden": "UploadsDrawer-module__hidden--1iZ08",
	"uploadBtn": "UploadsDrawer-module__uploadBtn--26qMa",
	"temp": "UploadsDrawer-module__temp--2049h",
	"tempImg": "UploadsDrawer-module__tempImg--2zdJM",
	"image": "UploadsDrawer-module__image--2ekzI",
	"loader": "UploadsDrawer-module__loader--1c5lR",
	"spin": "UploadsDrawer-module__spin--1Q4o-"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/scrollbar.module.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/scrollbar.module.css ***!
  \***********************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".scrollbar-module__customScroll--2M8qd {\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: calc(100% - 72px);\n  margin-right: 4px;\n  margin-top: 4px;\n}\n\n.scrollbar-module__customScroll--2M8qd:hover::-webkit-scrollbar-thumb {\n  background-color: #5f646b;\n}\n\n.scrollbar-module__customScroll--2M8qd::-webkit-scrollbar {\n  width: 8px;\n  background-color: #293039;\n}\n\n.scrollbar-module__customScroll--2M8qd::-webkit-scrollbar-thumb {\n  background: #293039; \n  border-radius: 4px;\n}", ""]);
// Exports
exports.locals = {
	"customScroll": "scrollbar-module__customScroll--2M8qd"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/elements/Element.module.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/elements/Element.module.css ***!
  \**********************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".Element-module__element--QMC9D {\n  position: relative;\n}\n\n\n", ""]);
// Exports
exports.locals = {
	"element": "Element-module__element--QMC9D"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/modal/imageShow.module.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/modal/imageShow.module.css ***!
  \**************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".imageShow-module__content--20GOb {\n  display: flex;\n}\n\n.imageShow-module__preview--1QHhj {\n  flex-grow: 1;\n}\n\n.imageShow-module__image--2JhwC {\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\n.imageShow-module__title--1t12v {\n  text-transform: capitalize;\n}\n\n.imageShow-module__info--1aDVq {\n  min-width: 320px;\n  margin-left: 32px;\n  display: flex;\n  flex-direction: column;\n}\n\n.imageShow-module__profile--3TylG {\n  display: flex;\n  align-items: center;\n}\n\n.imageShow-module__profileImg--HKYSw {\n  width: 40px;\n  height: 40px;\n  background-size: cover;\n  border-radius: 50%;\n}\n\n.imageShow-module__info--1aDVq > * {\n  margin-bottom: 32px;\n}\n\n.imageShow-module__info--1aDVq p {\n  margin-left: 8px;\n  font-size: 1.4rem;\n  color: #888;\n}\n\n.imageShow-module__name--10OQv {\n  color: black;\n}\n\n.imageShow-module__stretch--ykFA7 {\n  display: flex;\n  flex-direction: column;\n}", ""]);
// Exports
exports.locals = {
	"content": "imageShow-module__content--20GOb",
	"preview": "imageShow-module__preview--1QHhj",
	"image": "imageShow-module__image--2JhwC",
	"title": "imageShow-module__title--1t12v",
	"info": "imageShow-module__info--1aDVq",
	"profile": "imageShow-module__profile--3TylG",
	"profileImg": "imageShow-module__profileImg--HKYSw",
	"name": "imageShow-module__name--10OQv",
	"stretch": "imageShow-module__stretch--ykFA7"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/modal/modal.module.css":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/modal/modal.module.css ***!
  \**********************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".modal-module__modal--30kMV {\n  width: 100%;\n  /* max-width: 920px; */\n  /* max-width: 1376px; */\n  border-radius: 8px;\n  background-color: white;\n  padding: 32px;\n  box-sizing: border-box;\n  /* margin: 16px 0; */\n}", ""]);
// Exports
exports.locals = {
	"modal": "modal-module__modal--30kMV"
};
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/modal/with_modal.module.css":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/modal/with_modal.module.css ***!
  \***************************************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, ".with_modal-module__modalBackground--771r5 {\n  position: absolute;\n  background-color: rgba(0,0,0,0.4);\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  overflow-y: auto;\n  padding: 16px;\n  z-index: 99;\n}\n\n.with_modal-module__wrapper--nEKIx {\n  width: 100%;\n  max-width: 1376px;\n  /* max-width: 920px; */\n  position: relative;\n  margin: auto 48px;\n}\n\n.with_modal-module__close--1PcF7 {\n  position: absolute;\n  top: 0;\n  right: -40px;\n  min-width: 32px;\n  width: 32px;\n  height: 32px;\n  background-color: rgba(0,0,0,0.2);\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  transition: background-color 0.3s;\n  border-color: transparent;\n}\n\n.with_modal-module__close--1PcF7:hover {\n  border-color: transparent;\n  background-color: rgba(0,0,0,0.4);\n}", ""]);
// Exports
exports.locals = {
	"modalBackground": "with_modal-module__modalBackground--771r5",
	"wrapper": "with_modal-module__wrapper--nEKIx",
	"close": "with_modal-module__close--1PcF7"
};
module.exports = exports;


/***/ }),

/***/ "./frontend/components/Browse.module.css":
/*!***********************************************!*\
  !*** ./frontend/components/Browse.module.css ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./Browse.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/Browse.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/NavBar.module.css":
/*!***********************************************!*\
  !*** ./frontend/components/NavBar.module.css ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./NavBar.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/NavBar.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/auth/CreateDropDown.module.css":
/*!************************************************************!*\
  !*** ./frontend/components/auth/CreateDropDown.module.css ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./CreateDropDown.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/CreateDropDown.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/auth/HaveUserNav.module.css":
/*!*********************************************************!*\
  !*** ./frontend/components/auth/HaveUserNav.module.css ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./HaveUserNav.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/HaveUserNav.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/auth/MainAuth.module.css":
/*!******************************************************!*\
  !*** ./frontend/components/auth/MainAuth.module.css ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./MainAuth.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/MainAuth.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/auth/UserDropDown.module.css":
/*!**********************************************************!*\
  !*** ./frontend/components/auth/UserDropDown.module.css ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./UserDropDown.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/UserDropDown.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/auth/UserNav.module.css":
/*!*****************************************************!*\
  !*** ./frontend/components/auth/UserNav.module.css ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./UserNav.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/auth/UserNav.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/browse/AllDesigns.module.css":
/*!**********************************************************!*\
  !*** ./frontend/components/browse/AllDesigns.module.css ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./AllDesigns.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/AllDesigns.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/browse/BrowseIndex.module.css":
/*!***********************************************************!*\
  !*** ./frontend/components/browse/BrowseIndex.module.css ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./BrowseIndex.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/BrowseIndex.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/browse/DesignIndexItem.module.css":
/*!***************************************************************!*\
  !*** ./frontend/components/browse/DesignIndexItem.module.css ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./DesignIndexItem.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/DesignIndexItem.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/browse/IndexItemDropdown.module.css":
/*!*****************************************************************!*\
  !*** ./frontend/components/browse/IndexItemDropdown.module.css ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./IndexItemDropdown.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/IndexItemDropdown.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/browse/folder/AllFolders.module.css":
/*!*****************************************************************!*\
  !*** ./frontend/components/browse/folder/AllFolders.module.css ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./AllFolders.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/folder/AllFolders.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/browse/folder/CreateFolder.module.css":
/*!*******************************************************************!*\
  !*** ./frontend/components/browse/folder/CreateFolder.module.css ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./CreateFolder.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/folder/CreateFolder.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/browse/image/AllImages.module.css":
/*!***************************************************************!*\
  !*** ./frontend/components/browse/image/AllImages.module.css ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./AllImages.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/browse/image/AllImages.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/Design.module.css":
/*!******************************************************!*\
  !*** ./frontend/components/editor/Design.module.css ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./Design.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/Design.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/DesignDrawer.module.css":
/*!************************************************************!*\
  !*** ./frontend/components/editor/DesignDrawer.module.css ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./DesignDrawer.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/DesignDrawer.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/DesignTools.module.css":
/*!***********************************************************!*\
  !*** ./frontend/components/editor/DesignTools.module.css ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./DesignTools.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/DesignTools.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/Editor.module.css":
/*!******************************************************!*\
  !*** ./frontend/components/editor/Editor.module.css ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./Editor.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/Editor.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/EditorNav.module.css":
/*!*********************************************************!*\
  !*** ./frontend/components/editor/EditorNav.module.css ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./EditorNav.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/EditorNav.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/Viewer.module.css":
/*!******************************************************!*\
  !*** ./frontend/components/editor/Viewer.module.css ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./Viewer.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/Viewer.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/WorkArea.module.css":
/*!********************************************************!*\
  !*** ./frontend/components/editor/WorkArea.module.css ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./WorkArea.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/WorkArea.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/drawers/DrawerSearch.module.css":
/*!********************************************************************!*\
  !*** ./frontend/components/editor/drawers/DrawerSearch.module.css ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./DrawerSearch.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/DrawerSearch.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/drawers/ElementsDrawer.module.css":
/*!**********************************************************************!*\
  !*** ./frontend/components/editor/drawers/ElementsDrawer.module.css ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./ElementsDrawer.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/ElementsDrawer.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/drawers/ImageItem.module.css":
/*!*****************************************************************!*\
  !*** ./frontend/components/editor/drawers/ImageItem.module.css ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./ImageItem.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/ImageItem.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/drawers/TextDrawer.module.css":
/*!******************************************************************!*\
  !*** ./frontend/components/editor/drawers/TextDrawer.module.css ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./TextDrawer.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/TextDrawer.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/drawers/UnsplashDrawer.module.css":
/*!**********************************************************************!*\
  !*** ./frontend/components/editor/drawers/UnsplashDrawer.module.css ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./UnsplashDrawer.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/UnsplashDrawer.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/drawers/UploadsDrawer.module.css":
/*!*********************************************************************!*\
  !*** ./frontend/components/editor/drawers/UploadsDrawer.module.css ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./UploadsDrawer.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/UploadsDrawer.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/drawers/scrollbar.module.css":
/*!*****************************************************************!*\
  !*** ./frontend/components/editor/drawers/scrollbar.module.css ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./scrollbar.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/drawers/scrollbar.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/editor/elements/Element.module.css":
/*!****************************************************************!*\
  !*** ./frontend/components/editor/elements/Element.module.css ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./Element.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/editor/elements/Element.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/modal/imageShow.module.css":
/*!********************************************************!*\
  !*** ./frontend/components/modal/imageShow.module.css ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./imageShow.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/modal/imageShow.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/modal/modal.module.css":
/*!****************************************************!*\
  !*** ./frontend/components/modal/modal.module.css ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./modal.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/modal/modal.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./frontend/components/modal/with_modal.module.css":
/*!*********************************************************!*\
  !*** ./frontend/components/modal/with_modal.module.css ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./with_modal.module.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./frontend/components/modal/with_modal.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkGwaphics"] = self["webpackChunkGwaphics"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor.react-redux","vendor.babel","vendor.react-icons","vendor.prop-types","vendor.scheduler","vendor.egjs","vendor.react","vendor.react-is","vendor.react-dom","vendor.path-to-regexp","vendor.daybrush","vendor.tiny-invariant","vendor.value-equal","vendor.tiny-warning","vendor.style-loader","vendor.resolve-pathname","vendor.redux","vendor.redux-thunk","vendor.redux-logger","vendor.react-router","vendor.react-router-dom","vendor.react-moveable","vendor.react-css-styled","vendor.object-assign","vendor.hoist-non-react-statics","vendor.history","vendor.framework-utils","vendor.css-styled","vendor.css-loader","vendor.scena","vendor.moveable"], () => (__webpack_require__("./frontend/entry.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.8ed414ed4195ef1ffeca.js.map