webpackHotUpdate("main",{

/***/ "./src/shared/Post/Comment/CommentUser/CommentUser.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/Post/Comment/CommentUser/CommentUser.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CommentUser = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar commentuser_css_1 = __importDefault(__webpack_require__(/*! ./commentuser.css */ \"./src/shared/Post/Comment/CommentUser/commentuser.css\"));\r\nfunction CommentUser(_a) {\r\n    var authorName = _a.authorName, createdUtc = _a.createdUtc, kind = _a.kind;\r\n    var formattedDate = new Date(createdUtc * 1000).toString();\r\n    return (react_1.default.createElement(\"div\", { className: commentuser_css_1.default.userLink },\r\n        react_1.default.createElement(\"img\", { className: commentuser_css_1.default.avatar, src: \"https://avatars.mds.yandex.net/i?id=dd07e23f2462439717d2e625288661a0_l-5322694-images-thumbs&n=13\", alt: \"avatar\" }),\r\n        react_1.default.createElement(\"a\", { href: \"#user-url\", className: commentuser_css_1.default.username }, authorName),\r\n        react_1.default.createElement(\"span\", { className: commentuser_css_1.default.publishedLabel },\r\n            Math.round((newdate - formattedDate) / 3600 / 1000),\r\n            \" \\u0447\\u0430\\u0441 \\u043D\\u0430\\u0437\\u0430\\u0434\"),\r\n        react_1.default.createElement(\"span\", { className: commentuser_css_1.default.league }, kind)));\r\n}\r\nexports.CommentUser = CommentUser;\r\n\n\n//# sourceURL=webpack:///./src/shared/Post/Comment/CommentUser/CommentUser.tsx?");

/***/ })

})