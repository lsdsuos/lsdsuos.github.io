"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelsds_web"]("people_members",{

/***/ "./src/assets/scripts/getData.js":
/*!***************************************!*\
  !*** ./src/assets/scripts/getData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchDriveImage: () => (/* binding */ fetchDriveImage),\n/* harmony export */   fetchWithExponentialBackoff: () => (/* binding */ fetchWithExponentialBackoff),\n/* harmony export */   getExcelData: () => (/* binding */ getExcelData)\n/* harmony export */ });\nconst getExcelData = (sheetName, callback) => {\r\n  const xhr = new XMLHttpRequest();\r\n\r\n  // 🔥 Cloudflare Worker URL을 사용하여 API 요청\r\n  const url = `https://little-firefly-f09.dongbum80.workers.dev/${sheetName}`;\r\n  xhr.open(\"GET\", url, true);\r\n\r\n  xhr.onload = function () {\r\n    if (xhr.status === 200) {\r\n      var response = xhr.responseText;\r\n      const result = convertToKeyValue(JSON.parse(response));\r\n      callback(result);\r\n    }\r\n  };\r\n\r\n  xhr.onerror = function () {\r\n    console.error(\"요청 실패\");\r\n  };\r\n\r\n  xhr.send();\r\n};\r\n\r\nconst convertToKeyValue = (data) => {\r\n  const keys = data.values[0];\r\n  const result = [];\r\n\r\n  for (let i = 1; i < data.values.length; i++) {\r\n    let obj = {};\r\n    let row = data.values[i];\r\n    for (let j = 0; j < keys.length; j++) {\r\n      obj[keys[j]] = row[j];\r\n    }\r\n    result.push(obj);\r\n  }\r\n  return result;\r\n};\r\n\r\n// 지수 백오프 알고리즘\r\nasync function fetchWithExponentialBackoff(url, retries = 5, delay = 1000) {\r\n  for (let attempt = 0; attempt < retries; attempt++) {\r\n      try {\r\n          const response = await fetch(url);\r\n          \r\n          if (response.ok) {\r\n              return await response.blob(); // 이미지 데이터 반환\r\n          } else if (response.status === 429) {\r\n              console.warn(`429 Too Many Requests - 재시도 ${attempt + 1}회 (대기 ${delay}ms)`);\r\n          } else {\r\n              console.error(`HTTP 오류 ${response.status}`);\r\n              return null;\r\n          }\r\n      } catch (error) {\r\n          console.error(\"네트워크 오류\", error);\r\n      }\r\n\r\n      // 요청이 실패했으면 대기 후 재시도\r\n      await new Promise(resolve => setTimeout(resolve, delay));\r\n\r\n      // 지수적으로 대기 시간 증가 (최대 64초)\r\n      delay = Math.min(delay * 2, 64000);\r\n  }\r\n\r\n  console.error(\"최대 재시도 횟수를 초과했습니다.\");\r\n  return null;\r\n}\r\n\r\n\r\n// ✅ Google Drive에서 이미지를 가져오는 함수 (지수 백오프 + 캐싱 추가)\r\nasync function fetchDriveImage(imageID, size = \"w1048\") {\r\n  const cacheKey = `drive_image_${imageID}`;\r\n  const cachedImage = localStorage.getItem(cacheKey);\r\n\r\n  if (cachedImage) {\r\n      console.log(\"✅ 캐시에서 로드:\", imageID);\r\n      return cachedImage;\r\n  }\r\n\r\n  const imageUrl = `https://drive.google.com/thumbnail?id=${imageID}&sz=${size}`;\r\n  const blob = await fetchWithExponentialBackoff(imageUrl);\r\n\r\n  if (blob) {\r\n      const imgURL = URL.createObjectURL(blob);\r\n      localStorage.setItem(cacheKey, imgURL);\r\n\r\n      // 1시간 후 캐시 삭제\r\n      setTimeout(() => localStorage.removeItem(cacheKey), 3600000);\r\n      return imgURL;\r\n  }\r\n\r\n  return \"./images/empty.png\"; // 요청 실패 시 기본 이미지 반환\r\n}\n\n//# sourceURL=webpack://lsds-web/./src/assets/scripts/getData.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f4a5161f79765c25ad0a")
/******/ })();
/******/ 
/******/ }
);