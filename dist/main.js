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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/button */ \"./src/scripts/button.js\");\n/* harmony import */ var _scripts_start_game_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/start_game_canvas */ \"./src/scripts/start_game_canvas.js\");\n/* harmony import */ var _scripts_level_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/level_1 */ \"./src/scripts/level_1.js\");\n// import Example from \"./scripts/example\"\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  // const main = document.getElementById(\"main\")\n  // new Example(main)\n  new _scripts_start_game_canvas__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  new _scripts_button__WEBPACK_IMPORTED_MODULE_0__[\"default\"](); // new Level1();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUFHLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLE1BQU07QUFDaEQ7QUFDQTtBQUNBLE1BQUlILGtFQUFKO0FBQ0EsTUFBSUQsdURBQUosR0FKZ0QsQ0FLaEQ7QUFDSCxDQU5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbW1lX3NvbHZldXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9zY3JpcHRzL2J1dHRvblwiXG5pbXBvcnQgU3RhcnRHYW1lQ2FudmFzIGZyb20gXCIuL3NjcmlwdHMvc3RhcnRfZ2FtZV9jYW52YXNcIlxuaW1wb3J0IExldmVsMSBmcm9tIFwiLi9zY3JpcHRzL2xldmVsXzFcIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKVxuICAgIC8vIG5ldyBFeGFtcGxlKG1haW4pXG4gICAgbmV3IFN0YXJ0R2FtZUNhbnZhcygpO1xuICAgIG5ldyBCdXR0b24oKTtcbiAgICAvLyBuZXcgTGV2ZWwxKCk7XG59KSJdLCJuYW1lcyI6WyJCdXR0b24iLCJTdGFydEdhbWVDYW52YXMiLCJMZXZlbDEiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/button.js":
/*!*******************************!*\
  !*** ./src/scripts/button.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _start_game_canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start_game_canvas */ \"./src/scripts/start_game_canvas.js\");\n\n\nclass Button extends _start_game_canvas__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.draw_rect();\n  }\n\n  draw_rect() {\n    this.ctx.fillStyle = 'rgb(200, 0, 0)';\n    const rect_width = 250;\n    const rect_height = 50;\n    const rect_centered_dims = this.center_box(this.canv_dims[0], this.canv_dims[1], rect_width, rect_height);\n    this.ctx.fillRect(...rect_centered_dims);\n    this.getClicked(rect_centered_dims[0], rect_centered_dims[1], rect_width, rect_height);\n    const text = \"Start\";\n    this.ctx.fillStyle = \"black\";\n    const font = \"bold \" + rect_centered_dims[3] + \"px Arial\";\n    this.ctx.font = font;\n    this.ctx.textBaseline = \"top\";\n    this.ctx.textAlign = \"center\";\n    this.ctx.fillText(text, this.canv_dims[0] / 2, rect_centered_dims[1]);\n  }\n\n  getClicked(xpoint, ypoint, rect_width, rect_height) {\n    this.canvas.addEventListener('click', e => {\n      const rect = this.canvas.getBoundingClientRect();\n      const x = e.clientX - rect.left;\n      const y = e.clientY - rect.top;\n\n      if (x > xpoint && x < xpoint + rect_width && y > ypoint && y < ypoint + rect_height) {\n        console.log('inside button.');\n      } else {\n        console.log('outside button');\n      }\n    });\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9idXR0b24uanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxNQUFNQyxNQUFOLFNBQXFCRCwwREFBckIsQ0FBcUM7QUFDakNFLEVBQUFBLFdBQVcsR0FBRztBQUNWO0FBQ0EsU0FBS0MsU0FBTDtBQUNIOztBQUVEQSxFQUFBQSxTQUFTLEdBQUc7QUFDUixTQUFLQyxHQUFMLENBQVNDLFNBQVQsR0FBcUIsZ0JBQXJCO0FBQ0EsVUFBTUMsVUFBVSxHQUFHLEdBQW5CO0FBQ0EsVUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsVUFBTUMsa0JBQWtCLEdBQUcsS0FBS0MsVUFBTCxDQUFnQixLQUFLQyxTQUFMLENBQWUsQ0FBZixDQUFoQixFQUFtQyxLQUFLQSxTQUFMLENBQWUsQ0FBZixDQUFuQyxFQUFzREosVUFBdEQsRUFBa0VDLFdBQWxFLENBQTNCO0FBQ0EsU0FBS0gsR0FBTCxDQUFTTyxRQUFULENBQWtCLEdBQUdILGtCQUFyQjtBQUNBLFNBQUtJLFVBQUwsQ0FBZ0JKLGtCQUFrQixDQUFDLENBQUQsQ0FBbEMsRUFBdUNBLGtCQUFrQixDQUFDLENBQUQsQ0FBekQsRUFBOERGLFVBQTlELEVBQTBFQyxXQUExRTtBQUVBLFVBQU1NLElBQUksR0FBRyxPQUFiO0FBQ0EsU0FBS1QsR0FBTCxDQUFTQyxTQUFULEdBQXFCLE9BQXJCO0FBQ0EsVUFBTVMsSUFBSSxHQUFHLFVBQVVOLGtCQUFrQixDQUFDLENBQUQsQ0FBNUIsR0FBa0MsVUFBL0M7QUFDQSxTQUFLSixHQUFMLENBQVNVLElBQVQsR0FBZ0JBLElBQWhCO0FBQ0EsU0FBS1YsR0FBTCxDQUFTVyxZQUFULEdBQXdCLEtBQXhCO0FBQ0EsU0FBS1gsR0FBTCxDQUFTWSxTQUFULEdBQXFCLFFBQXJCO0FBQ0EsU0FBS1osR0FBTCxDQUFTYSxRQUFULENBQWtCSixJQUFsQixFQUF3QixLQUFLSCxTQUFMLENBQWUsQ0FBZixJQUFvQixDQUE1QyxFQUErQ0Ysa0JBQWtCLENBQUMsQ0FBRCxDQUFqRTtBQUNIOztBQUVESSxFQUFBQSxVQUFVLENBQUNNLE1BQUQsRUFBU0MsTUFBVCxFQUFpQmIsVUFBakIsRUFBNkJDLFdBQTdCLEVBQTBDO0FBQ2hELFNBQUthLE1BQUwsQ0FBWUMsZ0JBQVosQ0FBOEIsT0FBOUIsRUFBd0NDLENBQUQsSUFBTztBQUMxQyxZQUFNQyxJQUFJLEdBQUcsS0FBS0gsTUFBTCxDQUFZSSxxQkFBWixFQUFiO0FBQ0EsWUFBTUMsQ0FBQyxHQUFHSCxDQUFDLENBQUNJLE9BQUYsR0FBWUgsSUFBSSxDQUFDSSxJQUEzQjtBQUNBLFlBQU1DLENBQUMsR0FBR04sQ0FBQyxDQUFDTyxPQUFGLEdBQVlOLElBQUksQ0FBQ08sR0FBM0I7O0FBQ0EsVUFBSUwsQ0FBQyxHQUFHUCxNQUFKLElBQWNPLENBQUMsR0FBR1AsTUFBTSxHQUFHWixVQUEzQixJQUF5Q3NCLENBQUMsR0FBR1QsTUFBN0MsSUFBdURTLENBQUMsR0FBR1QsTUFBTSxHQUFHWixXQUF4RSxFQUFxRjtBQUNoRndCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0osT0FGRCxNQUVPO0FBQ0hELFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0g7QUFDSixLQVREO0FBVUg7O0FBbENnQzs7QUFxQ3JDLCtEQUFlL0IsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL21tZV9zb2x2ZXVyLy4vc3JjL3NjcmlwdHMvYnV0dG9uLmpzP2JjOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFN0YXJ0R2FtZUNhbnZhcyBmcm9tIFwiLi9zdGFydF9nYW1lX2NhbnZhc1wiO1xuXG5jbGFzcyBCdXR0b24gZXh0ZW5kcyBTdGFydEdhbWVDYW52YXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmRyYXdfcmVjdCgpO1xuICAgIH1cblxuICAgIGRyYXdfcmVjdCgpIHtcbiAgICAgICAgdGhpcy5jdHguZmlsbFN0eWxlID0gJ3JnYigyMDAsIDAsIDApJztcbiAgICAgICAgY29uc3QgcmVjdF93aWR0aCA9IDI1MDtcbiAgICAgICAgY29uc3QgcmVjdF9oZWlnaHQgPSA1MDtcbiAgICAgICAgY29uc3QgcmVjdF9jZW50ZXJlZF9kaW1zID0gdGhpcy5jZW50ZXJfYm94KHRoaXMuY2Fudl9kaW1zWzBdLCB0aGlzLmNhbnZfZGltc1sxXSwgcmVjdF93aWR0aCwgcmVjdF9oZWlnaHQpO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCguLi5yZWN0X2NlbnRlcmVkX2RpbXMpO1xuICAgICAgICB0aGlzLmdldENsaWNrZWQocmVjdF9jZW50ZXJlZF9kaW1zWzBdLCByZWN0X2NlbnRlcmVkX2RpbXNbMV0sIHJlY3Rfd2lkdGgsIHJlY3RfaGVpZ2h0KTtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gXCJTdGFydFwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XG4gICAgICAgIGNvbnN0IGZvbnQgPSBcImJvbGQgXCIgKyByZWN0X2NlbnRlcmVkX2RpbXNbM10gKyBcInB4IEFyaWFsXCI7XG4gICAgICAgIHRoaXMuY3R4LmZvbnQgPSBmb250O1xuICAgICAgICB0aGlzLmN0eC50ZXh0QmFzZWxpbmUgPSBcInRvcFwiO1xuICAgICAgICB0aGlzLmN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgICAgICB0aGlzLmN0eC5maWxsVGV4dCh0ZXh0LCB0aGlzLmNhbnZfZGltc1swXSAvIDIsIHJlY3RfY2VudGVyZWRfZGltc1sxXSk7XG4gICAgfVxuXG4gICAgZ2V0Q2xpY2tlZCh4cG9pbnQsIHlwb2ludCwgcmVjdF93aWR0aCwgcmVjdF9oZWlnaHQpIHtcbiAgICAgICAgdGhpcy5jYW52YXMuYWRkRXZlbnRMaXN0ZW5lciAoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHggPSBlLmNsaWVudFggLSByZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCB5ID0gZS5jbGllbnRZIC0gcmVjdC50b3A7XG4gICAgICAgICAgICBpZiAoeCA+IHhwb2ludCAmJiB4IDwgeHBvaW50ICsgcmVjdF93aWR0aCAmJiB5ID4geXBvaW50ICYmIHkgPCB5cG9pbnQgKyByZWN0X2hlaWdodCkge1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaW5zaWRlIGJ1dHRvbi4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ291dHNpZGUgYnV0dG9uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il0sIm5hbWVzIjpbIlN0YXJ0R2FtZUNhbnZhcyIsIkJ1dHRvbiIsImNvbnN0cnVjdG9yIiwiZHJhd19yZWN0IiwiY3R4IiwiZmlsbFN0eWxlIiwicmVjdF93aWR0aCIsInJlY3RfaGVpZ2h0IiwicmVjdF9jZW50ZXJlZF9kaW1zIiwiY2VudGVyX2JveCIsImNhbnZfZGltcyIsImZpbGxSZWN0IiwiZ2V0Q2xpY2tlZCIsInRleHQiLCJmb250IiwidGV4dEJhc2VsaW5lIiwidGV4dEFsaWduIiwiZmlsbFRleHQiLCJ4cG9pbnQiLCJ5cG9pbnQiLCJjYW52YXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ4IiwiY2xpZW50WCIsImxlZnQiLCJ5IiwiY2xpZW50WSIsInRvcCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/button.js\n");

/***/ }),

/***/ "./src/scripts/level_1.js":
/*!********************************!*\
  !*** ./src/scripts/level_1.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Level1 {\n  constructor() {\n    this.canvas = document.getElementById('start-game-canvas');\n    this.ctx = this.draw();\n    this.canv_dims = this.canv_dim();\n  }\n\n  draw() {\n    if (this.canvas.getContext) {\n      const ctx = this.canvas.getContext('2d');\n      return ctx;\n    }\n  }\n\n  canv_dim() {\n    const dims = [];\n    const canv_width = this.canvas.getAttribute('width');\n    const canv_height = this.canvas.getAttribute('height');\n    dims.push(canv_width, canv_height);\n    return dims;\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sZXZlbF8xLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxNQUFOLENBQWE7QUFDVEMsRUFBQUEsV0FBVyxHQUFJO0FBQ1gsU0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsbUJBQXhCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0MsSUFBTCxFQUFYO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLQyxRQUFMLEVBQWpCO0FBQ0g7O0FBRURGLEVBQUFBLElBQUksR0FBRztBQUNILFFBQUksS0FBS0osTUFBTCxDQUFZTyxVQUFoQixFQUE0QjtBQUN4QixZQUFNSixHQUFHLEdBQUcsS0FBS0gsTUFBTCxDQUFZTyxVQUFaLENBQXVCLElBQXZCLENBQVo7QUFDQSxhQUFPSixHQUFQO0FBQ0g7QUFDSjs7QUFFREcsRUFBQUEsUUFBUSxHQUFHO0FBQ1AsVUFBTUUsSUFBSSxHQUFHLEVBQWI7QUFFQSxVQUFNQyxVQUFVLEdBQUcsS0FBS1QsTUFBTCxDQUFZVSxZQUFaLENBQXlCLE9BQXpCLENBQW5CO0FBQ0EsVUFBTUMsV0FBVyxHQUFHLEtBQUtYLE1BQUwsQ0FBWVUsWUFBWixDQUF5QixRQUF6QixDQUFwQjtBQUNBRixJQUFBQSxJQUFJLENBQUNJLElBQUwsQ0FBVUgsVUFBVixFQUFzQkUsV0FBdEI7QUFFQSxXQUFPSCxJQUFQO0FBQ0g7O0FBdEJROztBQXlCYiwrREFBZVYsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL21tZV9zb2x2ZXVyLy4vc3JjL3NjcmlwdHMvbGV2ZWxfMS5qcz85MWMyIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIExldmVsMSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lLWNhbnZhcycpO1xuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuZHJhdygpO1xuICAgICAgICB0aGlzLmNhbnZfZGltcyA9IHRoaXMuY2Fudl9kaW0oKTtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgICAgICBpZiAodGhpcy5jYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgICAgICAgY29uc3QgY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIHJldHVybiBjdHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYW52X2RpbSgpIHtcbiAgICAgICAgY29uc3QgZGltcyA9IFtdO1xuXG4gICAgICAgIGNvbnN0IGNhbnZfd2lkdGggPSB0aGlzLmNhbnZhcy5nZXRBdHRyaWJ1dGUoJ3dpZHRoJyk7XG4gICAgICAgIGNvbnN0IGNhbnZfaGVpZ2h0ID0gdGhpcy5jYW52YXMuZ2V0QXR0cmlidXRlKCdoZWlnaHQnKTtcbiAgICAgICAgZGltcy5wdXNoKGNhbnZfd2lkdGgsIGNhbnZfaGVpZ2h0KTtcblxuICAgICAgICByZXR1cm4gZGltcztcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExldmVsMTsiXSwibmFtZXMiOlsiTGV2ZWwxIiwiY29uc3RydWN0b3IiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZHJhdyIsImNhbnZfZGltcyIsImNhbnZfZGltIiwiZ2V0Q29udGV4dCIsImRpbXMiLCJjYW52X3dpZHRoIiwiZ2V0QXR0cmlidXRlIiwiY2Fudl9oZWlnaHQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/level_1.js\n");

/***/ }),

/***/ "./src/scripts/start_game_canvas.js":
/*!******************************************!*\
  !*** ./src/scripts/start_game_canvas.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass StartGameCanvas {\n  constructor() {\n    this.canvas = document.getElementById('start-game-canvas');\n    this.ctx = this.draw();\n    this.canv_dims = this.canv_dim();\n  }\n\n  draw() {\n    if (this.canvas.getContext) {\n      const ctx = this.canvas.getContext('2d');\n      return ctx;\n    }\n  }\n\n  canv_dim() {\n    const dims = [];\n    const canv_width = this.canvas.getAttribute('width');\n    const canv_height = this.canvas.getAttribute('height');\n    dims.push(canv_width, canv_height);\n    return dims;\n  }\n\n  center_box(outer_width, outer_height, inner_width, inner_height) {\n    let wrh = inner_width / inner_height;\n    let newWidth = inner_width;\n    let newHeight = newWidth / wrh;\n\n    if (newHeight > outer_height) {\n      newHeight = outer_height;\n      newWidth = newHeight * wrh;\n    }\n\n    let xOffset = newWidth < outer_width ? (outer_width - newWidth) / 2 : 0;\n    let yOffset = newHeight < outer_height ? (outer_height - newHeight) / 2 : 0;\n    return [xOffset, yOffset, newWidth, newHeight];\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StartGameCanvas);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zdGFydF9nYW1lX2NhbnZhcy5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsTUFBTUEsZUFBTixDQUFzQjtBQUNsQkMsRUFBQUEsV0FBVyxHQUFJO0FBQ1gsU0FBS0MsTUFBTCxHQUFjQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsbUJBQXhCLENBQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVcsS0FBS0MsSUFBTCxFQUFYO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixLQUFLQyxRQUFMLEVBQWpCO0FBRUg7O0FBRURGLEVBQUFBLElBQUksR0FBRztBQUNILFFBQUksS0FBS0osTUFBTCxDQUFZTyxVQUFoQixFQUE0QjtBQUN4QixZQUFNSixHQUFHLEdBQUcsS0FBS0gsTUFBTCxDQUFZTyxVQUFaLENBQXVCLElBQXZCLENBQVo7QUFDQSxhQUFPSixHQUFQO0FBQ0g7QUFDSjs7QUFFREcsRUFBQUEsUUFBUSxHQUFHO0FBQ1AsVUFBTUUsSUFBSSxHQUFHLEVBQWI7QUFFQSxVQUFNQyxVQUFVLEdBQUcsS0FBS1QsTUFBTCxDQUFZVSxZQUFaLENBQXlCLE9BQXpCLENBQW5CO0FBQ0EsVUFBTUMsV0FBVyxHQUFHLEtBQUtYLE1BQUwsQ0FBWVUsWUFBWixDQUF5QixRQUF6QixDQUFwQjtBQUNBRixJQUFBQSxJQUFJLENBQUNJLElBQUwsQ0FBVUgsVUFBVixFQUFzQkUsV0FBdEI7QUFFQSxXQUFPSCxJQUFQO0FBQ0g7O0FBRURLLEVBQUFBLFVBQVUsQ0FBQ0MsV0FBRCxFQUFjQyxZQUFkLEVBQTRCQyxXQUE1QixFQUF5Q0MsWUFBekMsRUFBdUQ7QUFDN0QsUUFBSUMsR0FBRyxHQUFHRixXQUFXLEdBQUdDLFlBQXhCO0FBQ0EsUUFBSUUsUUFBUSxHQUFHSCxXQUFmO0FBQ0EsUUFBSUksU0FBUyxHQUFHRCxRQUFRLEdBQUdELEdBQTNCOztBQUNBLFFBQUlFLFNBQVMsR0FBR0wsWUFBaEIsRUFBOEI7QUFDMUJLLE1BQUFBLFNBQVMsR0FBR0wsWUFBWjtBQUNBSSxNQUFBQSxRQUFRLEdBQUdDLFNBQVMsR0FBR0YsR0FBdkI7QUFDSDs7QUFDRCxRQUFJRyxPQUFPLEdBQUdGLFFBQVEsR0FBR0wsV0FBWCxHQUEwQixDQUFDQSxXQUFXLEdBQUdLLFFBQWYsSUFBMkIsQ0FBckQsR0FBMEQsQ0FBeEU7QUFDQSxRQUFJRyxPQUFPLEdBQUdGLFNBQVMsR0FBR0wsWUFBWixHQUE0QixDQUFDQSxZQUFZLEdBQUdLLFNBQWhCLElBQTZCLENBQXpELEdBQThELENBQTVFO0FBQ0EsV0FBTyxDQUFDQyxPQUFELEVBQVVDLE9BQVYsRUFBbUJILFFBQW5CLEVBQTZCQyxTQUE3QixDQUFQO0FBQ0g7O0FBcENpQjs7QUF1Q3RCLCtEQUFldEIsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL21tZV9zb2x2ZXVyLy4vc3JjL3NjcmlwdHMvc3RhcnRfZ2FtZV9jYW52YXMuanM/ZWRmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTdGFydEdhbWVDYW52YXMge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZS1jYW52YXMnKTtcbiAgICAgICAgdGhpcy5jdHggPSB0aGlzLmRyYXcoKTtcbiAgICAgICAgdGhpcy5jYW52X2RpbXMgPSB0aGlzLmNhbnZfZGltKCk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGRyYXcoKSB7XG4gICAgICAgIGlmICh0aGlzLmNhbnZhcy5nZXRDb250ZXh0KSB7XG4gICAgICAgICAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgcmV0dXJuIGN0eDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNhbnZfZGltKCkge1xuICAgICAgICBjb25zdCBkaW1zID0gW107XG5cbiAgICAgICAgY29uc3QgY2Fudl93aWR0aCA9IHRoaXMuY2FudmFzLmdldEF0dHJpYnV0ZSgnd2lkdGgnKTtcbiAgICAgICAgY29uc3QgY2Fudl9oZWlnaHQgPSB0aGlzLmNhbnZhcy5nZXRBdHRyaWJ1dGUoJ2hlaWdodCcpO1xuICAgICAgICBkaW1zLnB1c2goY2Fudl93aWR0aCwgY2Fudl9oZWlnaHQpO1xuXG4gICAgICAgIHJldHVybiBkaW1zO1xuICAgIH1cblxuICAgIGNlbnRlcl9ib3gob3V0ZXJfd2lkdGgsIG91dGVyX2hlaWdodCwgaW5uZXJfd2lkdGgsIGlubmVyX2hlaWdodCkge1xuICAgICAgICBsZXQgd3JoID0gaW5uZXJfd2lkdGggLyBpbm5lcl9oZWlnaHQ7XG4gICAgICAgIGxldCBuZXdXaWR0aCA9IGlubmVyX3dpZHRoO1xuICAgICAgICBsZXQgbmV3SGVpZ2h0ID0gbmV3V2lkdGggLyB3cmg7XG4gICAgICAgIGlmIChuZXdIZWlnaHQgPiBvdXRlcl9oZWlnaHQpIHtcbiAgICAgICAgICAgIG5ld0hlaWdodCA9IG91dGVyX2hlaWdodDtcbiAgICAgICAgICAgIG5ld1dpZHRoID0gbmV3SGVpZ2h0ICogd3JoO1xuICAgICAgICB9XG4gICAgICAgIGxldCB4T2Zmc2V0ID0gbmV3V2lkdGggPCBvdXRlcl93aWR0aCA/ICgob3V0ZXJfd2lkdGggLSBuZXdXaWR0aCkgLyAyKSA6IDA7XG4gICAgICAgIGxldCB5T2Zmc2V0ID0gbmV3SGVpZ2h0IDwgb3V0ZXJfaGVpZ2h0ID8gKChvdXRlcl9oZWlnaHQgLSBuZXdIZWlnaHQpIC8gMikgOiAwO1xuICAgICAgICByZXR1cm4gW3hPZmZzZXQsIHlPZmZzZXQsIG5ld1dpZHRoLCBuZXdIZWlnaHRdO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhcnRHYW1lQ2FudmFzOyJdLCJuYW1lcyI6WyJTdGFydEdhbWVDYW52YXMiLCJjb25zdHJ1Y3RvciIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJkcmF3IiwiY2Fudl9kaW1zIiwiY2Fudl9kaW0iLCJnZXRDb250ZXh0IiwiZGltcyIsImNhbnZfd2lkdGgiLCJnZXRBdHRyaWJ1dGUiLCJjYW52X2hlaWdodCIsInB1c2giLCJjZW50ZXJfYm94Iiwib3V0ZXJfd2lkdGgiLCJvdXRlcl9oZWlnaHQiLCJpbm5lcl93aWR0aCIsImlubmVyX2hlaWdodCIsIndyaCIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwieE9mZnNldCIsInlPZmZzZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/start_game_canvas.js\n");

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