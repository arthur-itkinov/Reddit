webpackHotUpdate("main",{

/***/ "./src/context/postsContext.tsx":
/*!**************************************!*\
  !*** ./src/context/postsContext.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.PostContextProvider = exports.postContext = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar usePostsData_1 = __webpack_require__(/*! ../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\r\nexports.postContext = react_1.default.createContext([]);\r\nfunction PostContextProvider(_a) {\r\n    var children = _a.children;\r\n    var data = (0, usePostsData_1.usePostsData)()[0];\r\n    return (react_1.default.createElement(exports.postContext.Provider, { value: data }, children));\r\n}\r\nexports.PostContextProvider = PostContextProvider;\r\n\n\n//# sourceURL=webpack:///./src/context/postsContext.tsx?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.usePostsData = void 0;\r\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nvar tokenContext_1 = __webpack_require__(/*! ../context/tokenContext */ \"./src/context/tokenContext.ts\");\r\nvar usePostsData = function () {\r\n    var _a = (0, react_1.useState)([]), data = _a[0], setData = _a[1];\r\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\r\n    (0, react_1.useEffect)(function () {\r\n        if (token && token.length > 0 && token !== 'undefined') {\r\n            axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true', {\r\n                headers: { Authorization: \"Bearer \".concat(token) }\r\n            })\r\n                .then(function (resp) {\r\n                var userData = resp.data.data.children.map(function (item) {\r\n                    var _a;\r\n                    return ({\r\n                        id: item.data.id,\r\n                        author: item.data.author,\r\n                        title: item.data.title,\r\n                        rating: item.data.ups,\r\n                        avatar: item.data.sr_detail.icon_img ? item.data.sr_detail.icon_img : \"\thttps://cs13.pikabu.ru/post_img/big/2023/02/13/8/1676295806122712757.png\",\r\n                        previewImg: item.data.preview ? (_a = item.data.preview.images) === null || _a === void 0 ? void 0 : _a[0].source.url.replace(/(\\&amp\\;)/g, \"&\") :\r\n                            \"https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295972138872283.png\",\r\n                        dataPostUtc: item.data.created_utc,\r\n                    });\r\n                });\r\n                setData(userData);\r\n            })\r\n                .catch(console.log);\r\n        }\r\n    }, [token]);\r\n    return [data];\r\n};\r\nexports.usePostsData = usePostsData;\r\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nvar Card_1 = __webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\r\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nvar postsContext_1 = __webpack_require__(/*! ../../context/postsContext */ \"./src/context/postsContext.tsx\");\r\nfunction CardsList() {\r\n    var posts = (0, react_1.useContext)(postsContext_1.postContext);\r\n    console.log(posts);\r\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList }, posts.length === 0 ?\r\n        react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430!\") : posts.map(function (post) {\r\n        return react_1.default.createElement(Card_1.Card, { key: post.id, author: post.author, avatar: post.avatar, dataPostUtc: post.dataPostUtc, previewImg: post.previewImg, rating: post.rating, title: post.title, id: post.id });\r\n    })));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ })

})