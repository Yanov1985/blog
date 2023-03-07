"use strict";
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
exports.id = "pages/api/comments";
exports.ids = ["pages/api/comments"];
exports.modules = {

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = import("graphql-request");;

/***/ }),

/***/ "(api)/./pages/api/comments.js":
/*!*******************************!*\
  !*** ./pages/api/comments.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ asynchandler)\n/* harmony export */ });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([graphql_request__WEBPACK_IMPORTED_MODULE_0__]);\ngraphql_request__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst graphqlAPI = \"https://api-eu-west-2.hygraph.com/v2/clesnsa2r2ceg01uee5sn7pj0/master\";\n/** *************************************************************\n* Any file inside the folder pages/api is mapped to /api/* and  *\n* will be treated as an API endpoint instead of a page.         *\n*************************************************************** */ // export a default function for API route to work\nasync function asynchandler(req, res) {\n    const graphQLClient = new graphql_request__WEBPACK_IMPORTED_MODULE_0__.GraphQLClient(graphqlAPI, {\n        headers: {\n            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`\n        }\n    });\n    const query = graphql_request__WEBPACK_IMPORTED_MODULE_0__.gql`\n    mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {\n      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }\n    }\n  `;\n    const result = await graphQLClient.request(query, {\n        name: req.body.name,\n        email: req.body.email,\n        comment: req.body.comment,\n        slug: req.body.slug\n    });\n    return res.status(200).send(result);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tbWVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBcUQ7QUFFckQsTUFBTUUsYUFBYUMsdUVBQXlDO0FBRTVEOzs7Z0VBR2dFLEdBRWhFLGtEQUFrRDtBQUNuQyxlQUFlRyxhQUFhQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUNuRCxNQUFNQyxnQkFBZ0IsSUFBSVQsMERBQWFBLENBQUVFLFlBQWE7UUFDcERRLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRVIsUUFBUUMsR0FBRyxDQUFDUSxjQUFjLENBQUMsQ0FBQztRQUN2RDtJQUNGO0lBRUEsTUFBTUMsUUFBUVosZ0RBQUcsQ0FBQzs7OztFQUlsQixDQUFDO0lBRUQsTUFBTWEsU0FBUyxNQUFNTCxjQUFjTSxPQUFPLENBQUNGLE9BQU87UUFDaERHLE1BQU1ULElBQUlVLElBQUksQ0FBQ0QsSUFBSTtRQUNuQkUsT0FBT1gsSUFBSVUsSUFBSSxDQUFDQyxLQUFLO1FBQ3JCQyxTQUFTWixJQUFJVSxJQUFJLENBQUNFLE9BQU87UUFDekJDLE1BQU1iLElBQUlVLElBQUksQ0FBQ0csSUFBSTtJQUNyQjtJQUVBLE9BQU9aLElBQUlhLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNSO0FBQzlCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29tbWVudHMuanM/MjVhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50LCBncWwgfSBmcm9tICdncmFwaHFsLXJlcXVlc3QnO1xuXG5jb25zdCBncmFwaHFsQVBJID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR1JBUEhDTVNfRU5EUE9JTlQ7XG5cbi8qKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIEFueSBmaWxlIGluc2lkZSB0aGUgZm9sZGVyIHBhZ2VzL2FwaSBpcyBtYXBwZWQgdG8gL2FwaS8qIGFuZCAgKlxuKiB3aWxsIGJlIHRyZWF0ZWQgYXMgYW4gQVBJIGVuZHBvaW50IGluc3RlYWQgb2YgYSBwYWdlLiAgICAgICAgICpcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xuXG4vLyBleHBvcnQgYSBkZWZhdWx0IGZ1bmN0aW9uIGZvciBBUEkgcm91dGUgdG8gd29ya1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gYXN5bmNoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IGdyYXBoUUxDbGllbnQgPSBuZXcgR3JhcGhRTENsaWVudCgoZ3JhcGhxbEFQSSksIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBhdXRob3JpemF0aW9uOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuR1JBUEhDTVNfVE9LRU59YCxcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBxdWVyeSA9IGdxbGBcbiAgICBtdXRhdGlvbiBDcmVhdGVDb21tZW50KCRuYW1lOiBTdHJpbmchLCAkZW1haWw6IFN0cmluZyEsICRjb21tZW50OiBTdHJpbmchLCAkc2x1ZzogU3RyaW5nISkge1xuICAgICAgY3JlYXRlQ29tbWVudChkYXRhOiB7bmFtZTogJG5hbWUsIGVtYWlsOiAkZW1haWwsIGNvbW1lbnQ6ICRjb21tZW50LCBwb3N0OiB7Y29ubmVjdDoge3NsdWc6ICRzbHVnfX19KSB7IGlkIH1cbiAgICB9XG4gIGA7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZ3JhcGhRTENsaWVudC5yZXF1ZXN0KHF1ZXJ5LCB7XG4gICAgbmFtZTogcmVxLmJvZHkubmFtZSxcbiAgICBlbWFpbDogcmVxLmJvZHkuZW1haWwsXG4gICAgY29tbWVudDogcmVxLmJvZHkuY29tbWVudCxcbiAgICBzbHVnOiByZXEuYm9keS5zbHVnLFxuICB9KTtcblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQocmVzdWx0KTtcbn0iXSwibmFtZXMiOlsiR3JhcGhRTENsaWVudCIsImdxbCIsImdyYXBocWxBUEkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfR1JBUEhDTVNfRU5EUE9JTlQiLCJhc3luY2hhbmRsZXIiLCJyZXEiLCJyZXMiLCJncmFwaFFMQ2xpZW50IiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJHUkFQSENNU19UT0tFTiIsInF1ZXJ5IiwicmVzdWx0IiwicmVxdWVzdCIsIm5hbWUiLCJib2R5IiwiZW1haWwiLCJjb21tZW50Iiwic2x1ZyIsInN0YXR1cyIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/comments.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/comments.js"));
module.exports = __webpack_exports__;

})();