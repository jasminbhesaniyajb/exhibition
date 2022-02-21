/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"D:\\\\learn\\\\exhibition\\\\exhibition-app\\\\pages\\\\_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_redux_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThCO0FBRVU7U0FFL0JDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFXLENBQUMsRUFBRSxDQUFDO0lBQ2xELE1BQU0sNkVBQUVELFNBQVM7V0FBS0MsU0FBUzs7Ozs7O0FBQ2pDLENBQUM7QUFFRCxpRUFBZUgsMkRBQWlCLENBQUNDLEtBQUssQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhoaWJpdGlvbi1hcHAvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiLi4vcmVkdXgvc3RvcmVcIjtcclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcclxuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iXSwibmFtZXMiOlsid3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n// import { createWrapper } from \"next-redux-wrapper\"\n\n// import userReducer from \"./redux/userSlice\";\nconst middlewarethunk = [\n    (redux_thunk__WEBPACK_IMPORTED_MODULE_5___default())\n];\nconst store = ()=>{\n    const combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({\n    });\n    const persistConfig = {\n        key: \"exhibition\",\n        storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default()),\n        blacklist: []\n    };\n    const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistReducer)(persistConfig, combinedReducer);\n    const cstore = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n        reducer: persistedReducer,\n        middleware: [\n            ...middlewarethunk\n        ]\n    });\n    cstore.__persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_3__.persistStore)(cstore);\n    return cstore;\n};\nconst makeStore = store;\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ0M7QUFDWDtBQUNxQjtBQUNiO0FBQy9DLEVBQXFEO0FBQ3RCO0FBRS9CLEVBQStDO0FBRS9DLEtBQUssQ0FBQ08sZUFBZSxHQUFHLENBQUNEO0lBQUFBLG9EQUFLO0FBQUEsQ0FBQztBQUUvQixLQUFLLENBQUNFLEtBQUssT0FBUyxDQUFDO0lBQ25CLEtBQUssQ0FBQ0MsZUFBZSxHQUFHUCxzREFBZSxDQUFDLENBQUM7SUFFekMsQ0FBQztJQUVELEtBQUssQ0FBQ1EsYUFBYSxHQUFHLENBQUM7UUFDckJDLEdBQUcsRUFBRSxDQUFZO1FBQ2pCTixPQUFPO1FBQ1BPLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDZixDQUFDO0lBRUQsS0FBSyxDQUFDQyxnQkFBZ0IsR0FBR1YsNkRBQWMsQ0FBQ08sYUFBYSxFQUFFRCxlQUFlO0lBRXRFLEtBQUssQ0FBQ0ssTUFBTSxHQUFHZCxnRUFBYyxDQUFDLENBQUM7UUFDN0JlLE9BQU8sRUFBRUYsZ0JBQWdCO1FBQ3pCRyxVQUFVLEVBQUUsQ0FBQztlQUFHVCxlQUFlO1FBQUEsQ0FBQztJQUNsQyxDQUFDO0lBRURPLE1BQU0sQ0FBQ0csV0FBVyxHQUFHYiwyREFBWSxDQUFDVSxNQUFNO0lBQ3hDLE1BQU0sQ0FBQ0EsTUFBTTtBQUNmLENBQUM7QUFFRCxLQUFLLENBQUNJLFNBQVMsR0FBR1YsS0FBSztBQUVoQixLQUFLLENBQUNXLE9BQU8sR0FBR2xCLGlFQUFhLENBQUNpQixTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhoaWJpdGlvbi1hcHAvLi9yZWR1eC9zdG9yZS5qcz8zNTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyLCBwZXJzaXN0U3RvcmUgfSBmcm9tIFwicmVkdXgtcGVyc2lzdFwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiO1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiXHJcbmltcG9ydCB0aHVuayBmcm9tIFwicmVkdXgtdGh1bmtcIjtcclxuXHJcbi8vIGltcG9ydCB1c2VyUmVkdWNlciBmcm9tIFwiLi9yZWR1eC91c2VyU2xpY2VcIjtcclxuXHJcbmNvbnN0IG1pZGRsZXdhcmV0aHVuayA9IFt0aHVua107XHJcblxyXG5jb25zdCBzdG9yZSA9ICgpID0+IHtcclxuICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgLy8gdXNlcnM6IHVzZXJSZWR1Y2VyLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gICAga2V5OiBcImV4aGliaXRpb25cIixcclxuICAgIHN0b3JhZ2UsXHJcbiAgICBibGFja2xpc3Q6IFtdLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCBjb21iaW5lZFJlZHVjZXIpO1xyXG5cclxuICBjb25zdCBjc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiBwZXJzaXN0ZWRSZWR1Y2VyLFxyXG4gICAgbWlkZGxld2FyZTogWy4uLm1pZGRsZXdhcmV0aHVua10sXHJcbiAgfSk7XHJcblxyXG4gIGNzdG9yZS5fX3BlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShjc3RvcmUpO1xyXG4gIHJldHVybiBjc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCBtYWtlU3RvcmUgPSBzdG9yZTtcclxuXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUpO1xyXG4iXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJjcmVhdGVXcmFwcGVyIiwiY29tYmluZVJlZHVjZXJzIiwicGVyc2lzdFJlZHVjZXIiLCJwZXJzaXN0U3RvcmUiLCJzdG9yYWdlIiwidGh1bmsiLCJtaWRkbGV3YXJldGh1bmsiLCJzdG9yZSIsImNvbWJpbmVkUmVkdWNlciIsInBlcnNpc3RDb25maWciLCJrZXkiLCJibGFja2xpc3QiLCJwZXJzaXN0ZWRSZWR1Y2VyIiwiY3N0b3JlIiwicmVkdWNlciIsIm1pZGRsZXdhcmUiLCJfX3BlcnNpc3RvciIsIm1ha2VTdG9yZSIsIndyYXBwZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();