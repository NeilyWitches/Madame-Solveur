/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/button */ \"./src/scripts/button.js\");\n/* harmony import */ var _scripts_game_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_canvas */ \"./src/scripts/game_canvas.js\");\n// import Example from \"./scripts/example\"\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // const main = document.getElementById(\"main\")\n  // new Example(main)\n  // const canvas = document.getElementById('game-canvas');\n  // const ctx = canvas.getContext('2d');\n  new _scripts_game_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  new _scripts_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBRUFFLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQU07QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFJRiw0REFBSjtBQUNBLE1BQUlELHVEQUFKO0FBQ0gsQ0FQRCIsInNvdXJjZXMiOlsid2VicGFjazovL21tZV9zb2x2ZXVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEV4YW1wbGUgZnJvbSBcIi4vc2NyaXB0cy9leGFtcGxlXCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4vc2NyaXB0cy9idXR0b25cIlxuaW1wb3J0IEdhbWVDYW52YXMgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX2NhbnZhc1wiXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICAvLyBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpXG4gICAgLy8gbmV3IEV4YW1wbGUobWFpbilcbiAgICAvLyBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgICAvLyBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBuZXcgR2FtZUNhbnZhcygpO1xuICAgIG5ldyBCdXR0b24oKTtcbn0pIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIkdhbWVDYW52YXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/button.js":
/*!*******************************!*\
  !*** ./src/scripts/button.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_canvas */ \"./src/scripts/game_canvas.js\");\n\n\nclass Button extends _game_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.draw_rect();\n  }\n\n  draw_rect() {\n    this.ctx.fillStyle = 'rgb(200, 0, 0)';\n    const rect_width = 250;\n    const rect_height = 50;\n    const rect_centered_dims = this.center_box(this.canv_dims[0], this.canv_dims[1], rect_width, rect_height);\n    this.ctx.fillRect(...rect_centered_dims);\n    const text = \"Start\";\n    this.ctx.fillStyle = \"black\";\n    const font = \"bold \" + rect_centered_dims[3] + \"px Arial\";\n    this.ctx.font = font;\n    this.ctx.textBaseline = \"top\";\n    this.ctx.textAlign = \"center\";\n    this.ctx.fillText(text, this.canv_dims[0] / 2, rect_centered_dims[1]);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxNQUFNQyxNQUFOLFNBQXFCRCxvREFBckIsQ0FBZ0M7QUFDNUJFLEVBQUFBLFdBQVcsR0FBRztBQUNWO0FBQ0EsU0FBS0MsU0FBTDtBQUNIOztBQUVEQSxFQUFBQSxTQUFTLEdBQUc7QUFDUixTQUFLQyxHQUFMLENBQVNDLFNBQVQsR0FBcUIsZ0JBQXJCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsVUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsVUFBTUMsa0JBQWtCLEdBQUcsS0FBS0MsVUFBTCxDQUFnQixLQUFLQyxTQUFMLENBQWUsQ0FBZixDQUFoQixFQUFtQyxLQUFLQSxTQUFMLENBQWUsQ0FBZixDQUFuQyxFQUFzREosVUFBdEQsRUFBa0VDLFdBQWxFLENBQTNCO0FBQ0EsU0FBS0gsR0FBTCxDQUFTTyxRQUFULENBQWtCLEdBQUdILGtCQUFyQjtBQUVBLFVBQU1JLElBQUksR0FBRyxPQUFiO0FBQ0EsU0FBS1IsR0FBTCxDQUFTQyxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsVUFBTVEsSUFBSSxHQUFHLFVBQVVMLGtCQUFrQixDQUFDLENBQUQsQ0FBNUIsR0FBa0MsVUFBL0M7QUFDQSxTQUFLSixHQUFMLENBQVNTLElBQVQsR0FBZ0JBLElBQWhCO0FBQ0EsU0FBS1QsR0FBTCxDQUFTVSxZQUFULEdBQXdCLEtBQXhCO0FBQ0EsU0FBS1YsR0FBTCxDQUFTVyxTQUFULEdBQXFCLFFBQXJCO0FBQ0EsU0FBS1gsR0FBTCxDQUFTWSxRQUFULENBQWtCSixJQUFsQixFQUF3QixLQUFLRixTQUFMLENBQWUsQ0FBZixJQUFvQixDQUE1QyxFQUErQ0Ysa0JBQWtCLENBQUMsQ0FBRCxDQUFqRTtBQUNIOztBQXBCMkI7O0FBdUJoQywrREFBZVAsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL21tZV9zb2x2ZXVyLy4vc3JjL3NjcmlwdHMvYnV0dG9uLmpzP2JjOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDYW52YXMgZnJvbSBcIi4vZ2FtZV9jYW52YXNcIjtcblxuY2xhc3MgQnV0dG9uIGV4dGVuZHMgR2FtZUNhbnZhcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZHJhd19yZWN0KCk7XG4gICAgfVxuXG4gICAgZHJhd19yZWN0KCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSAncmdiKDIwMCwgMCwgMCknO1xuICAgICAgICBjb25zdCByZWN0X3dpZHRoID0gMjUwO1xuICAgICAgICBjb25zdCByZWN0X2hlaWdodCA9IDUwO1xuICAgICAgICBjb25zdCByZWN0X2NlbnRlcmVkX2RpbXMgPSB0aGlzLmNlbnRlcl9ib3godGhpcy5jYW52X2RpbXNbMF0sIHRoaXMuY2Fudl9kaW1zWzFdLCByZWN0X3dpZHRoLCByZWN0X2hlaWdodCk7XG4gICAgICAgIHRoaXMuY3R4LmZpbGxSZWN0KC4uLnJlY3RfY2VudGVyZWRfZGltcyk7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IFwiU3RhcnRcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xuICAgICAgICBjb25zdCBmb250ID0gXCJib2xkIFwiICsgcmVjdF9jZW50ZXJlZF9kaW1zWzNdICsgXCJweCBBcmlhbFwiO1xuICAgICAgICB0aGlzLmN0eC5mb250ID0gZm9udDtcbiAgICAgICAgdGhpcy5jdHgudGV4dEJhc2VsaW5lID0gXCJ0b3BcIjtcbiAgICAgICAgdGhpcy5jdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFRleHQodGV4dCwgdGhpcy5jYW52X2RpbXNbMF0gLyAyLCByZWN0X2NlbnRlcmVkX2RpbXNbMV0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyJdLCJuYW1lcyI6WyJHYW1lQ2FudmFzIiwiQnV0dG9uIiwiY29uc3RydWN0b3IiLCJkcmF3X3JlY3QiLCJjdHgiLCJmaWxsU3R5bGUiLCJyZWN0X3dpZHRoIiwicmVjdF9oZWlnaHQiLCJyZWN0X2NlbnRlcmVkX2RpbXMiLCJjZW50ZXJfYm94IiwiY2Fudl9kaW1zIiwiZmlsbFJlY3QiLCJ0ZXh0IiwiZm9udCIsInRleHRCYXNlbGluZSIsInRleHRBbGlnbiIsImZpbGxUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/button.js\n");

/***/ }),

/***/ "./src/scripts/game_canvas.js":
/*!************************************!*\
  !*** ./src/scripts/game_canvas.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass GameCanvas {\n  constructor() {\n    this.canvas = document.getElementById('game-canvas');\n    this.ctx = this.draw();\n    this.canv_dims = this.canv_dim();\n  }\n\n  draw() {\n    // const canvas = document.getElementById('game-canvas');\n    if (this.canvas.getContext) {\n      const ctx = this.canvas.getContext('2d'); // ctx.fillStyle = 'rgb(200, 0, 0)';\n      // ctx.fillRect(10, 10, 50, 50);\n\n      return ctx;\n    }\n  }\n\n  canv_dim() {\n    const dims = [];\n    const canv_width = this.canvas.getAttribute('width');\n    const canv_height = this.canvas.getAttribute('height');\n    dims.push(canv_width, canv_height);\n    return dims;\n  }\n\n  center_box(outer_width, outer_height, inner_width, inner_height) {\n    let wrh = inner_width / inner_height;\n    let newWidth = inner_width;\n    let newHeight = newWidth / wrh;\n\n    if (newHeight > outer_height) {\n      newHeight = outer_height;\n      newWidth = newHeight * wrh;\n    }\n\n    let xOffset = newWidth < outer_width ? (outer_width - newWidth) / 2 : 0;\n    let yOffset = newHeight < outer_height ? (outer_height - newHeight) / 2 : 0;\n    return [xOffset, yOffset, newWidth, newHeight];\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameCanvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX2NhbnZhcy5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsVUFBTixDQUFpQjtBQUNiQyxFQUFBQSxXQUFXLEdBQUk7QUFDWCxTQUFLQyxNQUFMLEdBQWNDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFkO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEtBQUtDLElBQUwsRUFBWDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0MsUUFBTCxFQUFqQjtBQUVIOztBQUVERixFQUFBQSxJQUFJLEdBQUc7QUFDSDtBQUNBLFFBQUksS0FBS0osTUFBTCxDQUFZTyxVQUFoQixFQUE0QjtBQUN4QixZQUFNSixHQUFHLEdBQUcsS0FBS0gsTUFBTCxDQUFZTyxVQUFaLENBQXVCLElBQXZCLENBQVosQ0FEd0IsQ0FFeEI7QUFDQTs7QUFDQSxhQUFPSixHQUFQO0FBQ0g7QUFDSjs7QUFFREcsRUFBQUEsUUFBUSxHQUFHO0FBQ1AsVUFBTUUsSUFBSSxHQUFHLEVBQWI7QUFFQSxVQUFNQyxVQUFVLEdBQUcsS0FBS1QsTUFBTCxDQUFZVSxZQUFaLENBQXlCLE9BQXpCLENBQW5CO0FBQ0EsVUFBTUMsV0FBVyxHQUFHLEtBQUtYLE1BQUwsQ0FBWVUsWUFBWixDQUF5QixRQUF6QixDQUFwQjtBQUNBRixJQUFBQSxJQUFJLENBQUNJLElBQUwsQ0FBVUgsVUFBVixFQUFzQkUsV0FBdEI7QUFFQSxXQUFPSCxJQUFQO0FBQ0g7O0FBRURLLEVBQUFBLFVBQVUsQ0FBQ0MsV0FBRCxFQUFjQyxZQUFkLEVBQTRCQyxXQUE1QixFQUF5Q0MsWUFBekMsRUFBdUQ7QUFDN0QsUUFBSUMsR0FBRyxHQUFHRixXQUFXLEdBQUdDLFlBQXhCO0FBQ0EsUUFBSUUsUUFBUSxHQUFHSCxXQUFmO0FBQ0EsUUFBSUksU0FBUyxHQUFHRCxRQUFRLEdBQUdELEdBQTNCOztBQUNBLFFBQUlFLFNBQVMsR0FBR0wsWUFBaEIsRUFBOEI7QUFDMUJLLE1BQUFBLFNBQVMsR0FBR0wsWUFBWjtBQUNBSSxNQUFBQSxRQUFRLEdBQUdDLFNBQVMsR0FBR0YsR0FBdkI7QUFDSDs7QUFDRCxRQUFJRyxPQUFPLEdBQUdGLFFBQVEsR0FBR0wsV0FBWCxHQUEwQixDQUFDQSxXQUFXLEdBQUdLLFFBQWYsSUFBMkIsQ0FBckQsR0FBMEQsQ0FBeEU7QUFDQSxRQUFJRyxPQUFPLEdBQUdGLFNBQVMsR0FBR0wsWUFBWixHQUE0QixDQUFDQSxZQUFZLEdBQUdLLFNBQWhCLElBQTZCLENBQXpELEdBQThELENBQTVFO0FBQ0EsV0FBTyxDQUFDQyxPQUFELEVBQVVDLE9BQVYsRUFBbUJILFFBQW5CLEVBQTZCQyxTQUE3QixDQUFQO0FBQ0g7O0FBdkNZOztBQTBDakIsK0RBQWV0QixVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW1lX3NvbHZldXIvLi9zcmMvc2NyaXB0cy9nYW1lX2NhbnZhcy5qcz8xM2ZkIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEdhbWVDYW52YXMge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZS1jYW52YXMnKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmRyYXcoKTtcbiAgICAgICAgdGhpcy5jYW52X2RpbXMgPSB0aGlzLmNhbnZfZGltKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIC8vIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lLWNhbnZhcycpO1xuICAgICAgICBpZiAodGhpcy5jYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSAncmdiKDIwMCwgMCwgMCknO1xuICAgICAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDEwLCAxMCwgNTAsIDUwKTtcbiAgICAgICAgICAgIHJldHVybiBjdHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYW52X2RpbSgpIHtcbiAgICAgICAgY29uc3QgZGltcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGNhbnZfd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgICAgIGNvbnN0IGNhbnZfaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgICAgZGltcy5wdXNoKGNhbnZfd2lkdGgsIGNhbnZfaGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gZGltcztcbiAgICB9XG5cbiAgICBjZW50ZXJfYm94KG91dGVyX3dpZHRoLCBvdXRlcl9oZWlnaHQsIGlubmVyX3dpZHRoLCBpbm5lcl9oZWlnaHQpIHtcbiAgICAgICAgbGV0IHdyaCA9IGlubmVyX3dpZHRoIC8gaW5uZXJfaGVpZ2h0O1xuICAgICAgICBsZXQgbmV3V2lkdGggPSBpbm5lcl93aWR0aDtcbiAgICAgICAgbGV0IG5ld0hlaWdodCA9IG5ld1dpZHRoIC8gd3JoO1xuICAgICAgICBpZiAobmV3SGVpZ2h0ID4gb3V0ZXJfaGVpZ2h0KSB7XG4gICAgICAgICAgICBuZXdIZWlnaHQgPSBvdXRlcl9oZWlnaHQ7XG4gICAgICAgICAgICBuZXdXaWR0aCA9IG5ld0hlaWdodCAqIHdyaDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgeE9mZnNldCA9IG5ld1dpZHRoIDwgb3V0ZXJfd2lkdGggPyAoKG91dGVyX3dpZHRoIC0gbmV3V2lkdGgpIC8gMikgOiAwO1xuICAgICAgICBsZXQgeU9mZnNldCA9IG5ld0hlaWdodCA8IG91dGVyX2hlaWdodCA/ICgob3V0ZXJfaGVpZ2h0IC0gbmV3SGVpZ2h0KSAvIDIpIDogMDtcbiAgICAgICAgcmV0dXJuIFt4T2Zmc2V0LCB5T2Zmc2V0LCBuZXdXaWR0aCwgbmV3SGVpZ2h0XTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVDYW52YXM7Il0sIm5hbWVzIjpbIkdhbWVDYW52YXMiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJkcmF3IiwiY2Fudl9kaW1zIiwiY2Fudl9kaW0iLCJnZXRDb250ZXh0IiwiZGltcyIsImNhbnZfd2lkdGgiLCJnZXRBdHRyaWJ1dGUiLCJjYW52X2hlaWdodCIsInB1c2giLCJjZW50ZXJfYm94Iiwib3V0ZXJfd2lkdGgiLCJvdXRlcl9oZWlnaHQiLCJpbm5lcl93aWR0aCIsImlubmVyX2hlaWdodCIsIndyaCIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwieE9mZnNldCIsInlPZmZzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game_canvas.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tbWVfc29sdmV1ci8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;