"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelsds_web"]("gallery",{

/***/ "./src/assets/scripts/getData.js":
/*!***************************************!*\
  !*** ./src/assets/scripts/getData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchDriveImageWithRetry: () => (/* binding */ fetchDriveImageWithRetry),\n/* harmony export */   getExcelData: () => (/* binding */ getExcelData)\n/* harmony export */ });\nconst getExcelData = (sheetName, callback) => {\r\n  const xhr = new XMLHttpRequest();\r\n\r\n  // 🔥 Cloudflare Worker URL을 사용하여 API 요청\r\n  const url = `https://little-firefly-f09.dongbum80.workers.dev/${sheetName}`;\r\n  xhr.open(\"GET\", url, true);\r\n\r\n  xhr.onload = function () {\r\n    if (xhr.status === 200) {\r\n      var response = xhr.responseText;\r\n      const result = convertToKeyValue(JSON.parse(response));\r\n      callback(result);\r\n    }\r\n  };\r\n\r\n  xhr.onerror = function () {\r\n    console.error(\"요청 실패\");\r\n  };\r\n\r\n  xhr.send();\r\n};\r\n\r\nconst convertToKeyValue = (data) => {\r\n  const keys = data.values[0];\r\n  const result = [];\r\n\r\n  for (let i = 1; i < data.values.length; i++) {\r\n    let obj = {};\r\n    let row = data.values[i];\r\n    for (let j = 0; j < keys.length; j++) {\r\n      obj[keys[j]] = row[j];\r\n    }\r\n    result.push(obj);\r\n  }\r\n  return result;\r\n};\r\n\r\n\r\n// ✅ Google Drive에서 이미지를 가져오는 함수 (지수 백오프 + 캐싱 추가)\r\nfunction fetchDriveImageWithRetry(imageElement, imageID, size = \"w1048\", retries = 5, delay = 1000) {\r\n  if (!imageID) {\r\n    imageElement.src = \"./images/empty.png\";\r\n    return;\r\n  }\r\n\r\n  let attempt = 0;\r\n\r\n  function loadImage() {\r\n    if (attempt >= retries) {\r\n      console.error(`❌ 이미지 로딩 실패 (ID: ${imageID})`);\r\n      imageElement.src = \"./images/empty.png\"; // 최종 실패 시 기본 이미지 표시\r\n      return;\r\n    }\r\n\r\n    // Google Drive 이미지 URL 설정\r\n    imageElement.src = `https://drive.google.com/thumbnail?id=${imageID}&sz=${size}`;\r\n\r\n    // 🔥 onerror 이벤트 핸들러: 로드 실패 시 재시도\r\n    imageElement.onerror = () => {\r\n      console.warn(`⚠️ 이미지 로딩 실패, 재시도 중 (${attempt + 1}/${retries})...`);\r\n      \r\n      attempt++;\r\n      setTimeout(loadImage, delay); // 백오프 알고리즘 적용 (점점 대기 시간 증가)\r\n      \r\n      // 지수 백오프 적용 (최대 64초 대기)\r\n      delay = Math.min(delay * 2, 64000);\r\n    };\r\n  }\r\n\r\n  loadImage(); // 첫 번째 로드 시도\r\n}\r\n\n\n//# sourceURL=webpack://lsds-web/./src/assets/scripts/getData.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("045709bd1ae887180244")
/******/ })();
/******/ 
/******/ }
);