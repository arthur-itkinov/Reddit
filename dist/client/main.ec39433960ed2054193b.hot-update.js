webpackHotUpdate("main",{

/***/ "./src/shared/Post/Comment/CommentUser/CommentUser.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/Post/Comment/CommentUser/CommentUser.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentUser = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentuser_css_1 = __importDefault(__webpack_require__(/*! ./commentuser.css */ \"./src/shared/Post/Comment/CommentUser/commentuser.css\"));\r\nfunction CommentUser(_a) {\r\n    var authorName = _a.authorName, createdUtc = _a.createdUtc, kind = _a.kind;\r\n    var formattedDate = new Date(createdUtc * 1000).toLocaleString();\r\n    var date1 = +new Date();\r\n    var date2 = createdUtc * 1000;\r\n    var changeDate = new Date((date1 - date2) * 1000), _;\r\n    console.log(changeDate);\r\n    return (react_1.default.createElement(\"div\", { className: commentuser_css_1.default.userLink },\r\n        react_1.default.createElement(\"img\", { className: commentuser_css_1.default.avatar, src: \"https://avatars.mds.yandex.net/i?id=dd07e23f2462439717d2e625288661a0_l-5322694-images-thumbs&n=13\", alt: \"avatar\" }),\r\n        react_1.default.createElement(\"a\", { href: \"#user-url\", className: commentuser_css_1.default.username }, authorName),\r\n        react_1.default.createElement(\"span\", { className: commentuser_css_1.default.publishedLabel },\r\n            formattedDate,\r\n            \" \\u0447\\u0430\\u0441 \\u043D\\u0430\\u0437\\u0430\\u0434\"),\r\n        react_1.default.createElement(\"span\", { className: commentuser_css_1.default.league }, kind)));\r\n}\r\nexports.CommentUser = CommentUser;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comment/CommentUser/CommentUser.tsx?");

/***/ }),

/***/ "./src/shared/Post/Comment/CommentUser/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/Post/Comment/CommentUser/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CommentUser */ \"./src/shared/Post/Comment/CommentUser/CommentUser.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comment/CommentUser/index.ts?");

/***/ })

})