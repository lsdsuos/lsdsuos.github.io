"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelsds_web"]("lab_facilities",{

/***/ "./src/assets/scripts/getData.js":
/*!***************************************!*\
  !*** ./src/assets/scripts/getData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchDriveImageWithRetry: () => (/* binding */ fetchDriveImageWithRetry),\n/* harmony export */   getExcelData: () => (/* binding */ getExcelData)\n/* harmony export */ });\nconst getExcelData = async (sheetName, callback) => {\r\n  try {\r\n    if (!navigator.onLine) {\r\n      console.error(\"❌ 인터넷 연결 없음\");\r\n      return;\r\n    }\r\n\r\n    // 🔥 Cloudflare Worker URL을 사용하여 API 요청\r\n    // ✅ API 요청 URL (Cloudflare Workers)\r\n    // const url = `https://little-firefly-f09.dongbum80.workers.dev/${sheetName}`;\r\n\r\n    // 🔥 Cloudflare Pages URL을 사용하여 API 요청\r\n    // ✅ API 요청 URL (Cloudflare Pages 에서 Cloudflare worker를 호출하게 됨)\r\n    const url = `https://cloudflare-proxy-deo.pages.dev/api/${sheetName}`;\r\n    // console.log(\"🔑 사용 중인 API_KEY, SHEET_ID:\");\r\n    // console.log(API_KEY, SHEET_ID);\r\n    // console.log(\"==================\");\r\n\r\n    // ✅ Google Sheets API 직접 호출 (Cloudflare Proxy 제거)\r\n    // const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}?key=${API_KEY}`;\r\n\r\n\r\n\r\n    console.log(`🚀 요청 URL: ${url}`);\r\n\r\n    // ✅ fetch()를 사용하여 요청\r\n    const response = await fetch(url, {\r\n      method: \"GET\",\r\n      headers: {\r\n        \"Accept\": \"application/json\"\r\n      }\r\n    });\r\n\r\n    console.log(\"🔍 응답 상태 코드:\", response.status);\r\n\r\n    if (!response.ok) {\r\n      console.error(`❌ API 요청 실패 - 상태 코드: ${response.status}`);\r\n      const errorText = await response.text();\r\n      console.error(`❌ 오류 메시지: ${errorText}`);\r\n      return;\r\n    }\r\n\r\n    const data = await response.json();\r\n    console.log(\"✅ API 응답 데이터:\", data);\r\n\r\n    // ✅ 데이터 변환 후 콜백 실행\r\n    const result = convertToKeyValue(data);\r\n    callback(result);\r\n\r\n  } catch (error) {\r\n    console.error(\"❌ 네트워크 요청 중 오류 발생:\", error);\r\n  }\r\n};\r\n\r\n\r\nconst convertToKeyValue = (data) => {\r\n  const keys = data.values[0];\r\n  const result = [];\r\n\r\n  for (let i = 1; i < data.values.length; i++) {\r\n    let obj = {};\r\n    let row = data.values[i];\r\n    for (let j = 0; j < keys.length; j++) {\r\n      obj[keys[j]] = row[j];\r\n    }\r\n    result.push(obj);\r\n  }\r\n  return result;\r\n};\r\n\r\n\r\n// ✅ Google Drive에서 이미지를 가져오는 함수 (지수 백오프 + 캐싱 추가)\r\nfunction fetchDriveImageWithRetry(imageElement, imageID, size = \"w1048\", retries = 5, delay = 1000) {\r\n  if (!imageID) {\r\n    imageElement.src = \"./images/empty.png\";\r\n    return;\r\n  }\r\n\r\n  let attempt = 0;\r\n\r\n  function loadImage() {\r\n    if (attempt >= retries) {\r\n      console.error(`❌ 이미지 로딩 실패 (ID: ${imageID})`);\r\n      imageElement.src = \"./images/empty.png\"; // 최종 실패 시 기본 이미지 표시\r\n      return;\r\n    }\r\n\r\n    // Google Drive 이미지 URL 설정\r\n    imageElement.src = `https://drive.google.com/thumbnail?id=${imageID}&sz=${size}`;\r\n\r\n    // 🔥 onerror 이벤트 핸들러: 로드 실패 시 재시도\r\n    imageElement.onerror = () => {\r\n      console.warn(`⚠️ 이미지 로딩 실패, 재시도 중 (${attempt + 1}/${retries})...`);\r\n\r\n      attempt++;\r\n      setTimeout(loadImage, delay); // 백오프 알고리즘 적용 (점점 대기 시간 증가)\r\n\r\n      // 지수 백오프 적용 (최대 64초 대기)\r\n      delay = Math.min(delay * 2, 64000);\r\n    };\r\n  }\r\n\r\n  loadImage(); // 첫 번째 로드 시도\r\n}\r\n\n\n//# sourceURL=webpack://lsds-web/./src/assets/scripts/getData.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d6afe8283618ae3c6ac7")
/******/ })();
/******/ 
/******/ }
);