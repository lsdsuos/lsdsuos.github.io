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

/***/ "./src/assets/scripts/pages/lab_facilities.js":
/*!****************************************************!*\
  !*** ./src/assets/scripts/pages/lab_facilities.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/assets/scripts/getData.js\");\n\r\n\r\nconst drawLabFacilities = (facilities) => {\r\n  const listContainer = document.querySelector(\r\n    \".lab_facilities__list-container\"\r\n  );\r\n\r\n  facilities.forEach((facility) => {\r\n    const listItem = document.createElement(\"div\");\r\n    listItem.classList.add(\"lab_facilities__list\");\r\n\r\n    const content = document.createElement(\"div\");\r\n    content.classList.add(\"lab_facilities__list__content\");\r\n\r\n    const imageContainer = document.createElement(\"div\");\r\n    imageContainer.classList.add(\r\n      \"lab_facilities__list__content__image-container\"\r\n    );\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.classList.add(\"lab_facilities__list__content__image\");\r\n    // const imageUrl = facility.ImageID\r\n    //   ? `https://drive.google.com/thumbnail?id=${facility.ImageID}`\r\n    //   : \"./images/empty.png\";\r\n    // image.src = imageUrl;\r\n\r\n    // 🔥 지수 백오프 적용 (이미지 로드 실패 시 자동 재시도)\r\n    (0,_getData__WEBPACK_IMPORTED_MODULE_0__.fetchDriveImageWithRetry)(image, facility.ImageID);\r\n    image.alt = facility.Name;\r\n\r\n    imageContainer.appendChild(image);\r\n\r\n    const textContainer = document.createElement(\"div\");\r\n    textContainer.classList.add(\r\n      \"lab_facilities__list__content__text-container\"\r\n    );\r\n\r\n    const name = document.createElement(\"div\");\r\n    name.classList.add(\"lab_facilities__list__content__text-container__name\");\r\n    name.classList.add(\"font-bold\");\r\n    name.textContent = facility.Name;\r\n\r\n    const infoContainer = document.createElement(\"div\");\r\n    infoContainer.classList.add(\r\n      \"lab_facilities__list__content__text-container__info-container\"\r\n    );\r\n\r\n    const model = document.createElement(\"div\");\r\n    model.classList.add(\"lab_facilities__list__content__text-container__model\");\r\n    model.textContent = \"모델 : \" + facility.Model;\r\n\r\n    const company = document.createElement(\"div\");\r\n    company.classList.add(\r\n      \"lab_facilities__list__content__text-container__company\"\r\n    );\r\n    company.textContent = \"제조사 : \" + facility.Company;\r\n\r\n    const task = document.createElement(\"div\");\r\n    task.classList.add(\"lab_facilities__list__content__text-container__task\");\r\n    task.textContent = \"기능 : \" + facility.Task;\r\n\r\n    infoContainer.appendChild(model);\r\n    infoContainer.appendChild(company);\r\n    infoContainer.appendChild(task);\r\n\r\n    textContainer.appendChild(name);\r\n    textContainer.appendChild(infoContainer);\r\n\r\n    content.appendChild(imageContainer);\r\n    content.appendChild(textContainer);\r\n\r\n    listItem.appendChild(content);\r\n\r\n    listContainer.appendChild(listItem);\r\n  });\r\n};\r\n\r\nconst sheetName = \"Lab Facilities\";\r\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, function (data) {\r\n  drawLabFacilities(data);\r\n});\r\n\n\n//# sourceURL=webpack://lsds-web/./src/assets/scripts/pages/lab_facilities.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7892f6f614dffe70d243")
/******/ })();
/******/ 
/******/ }
);