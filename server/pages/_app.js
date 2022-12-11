(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 424:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(193);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: ./src/components/GlobalStyle.ts

const globalStyles = /*#__PURE__*/ (0,react_namespaceObject.css)("html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;}a{color:inherit;text-decoration:none;}*{box-sizing:border-box;}@media (prefers-color-scheme:dark){html{color-scheme:dark;}body{color:white;background:black;}}");

// EXTERNAL MODULE: ./src/sass/index.scss
var sass = __webpack_require__(352);
;// CONCATENATED MODULE: ./src/pages/_app.tsx




const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_namespaceObject.Global, {
                styles: [
                    globalStyles
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 352:
/***/ (() => {



/***/ }),

/***/ 193:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(424));
module.exports = __webpack_exports__;

})();