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

/***/ "./src/assets/scripts/pages/gallery.js":
/*!*********************************************!*\
  !*** ./src/assets/scripts/pages/gallery.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/assets/scripts/getData.js\");\n\r\nconst sheetName = \"Gallery\";\r\n\r\nconst params = new URLSearchParams(window.location.search);\r\nconst galleryId = params.get(\"title\");\r\nconst galleryContainer = document.querySelector(\".gallery__list-container\");\r\nconst boardContainer = document.querySelector(\".board__list-container\");\r\n\r\nconst drawGallerys = (gallery) => {\r\n  let { ImageID, Title, Date } = gallery;\r\n  ImageID = ImageID.split(\",\");\r\n\r\n  const galleryList = document.createElement(\"a\");\r\n  galleryList.classList.add(\"gallery__list\");\r\n  const titleLink = Title.replace(/\\s+/g, \"-\");\r\n  galleryList.href = `./gallery?title=${titleLink}`;\r\n\r\n  const imageContainer = document.createElement(\"div\");\r\n  imageContainer.classList.add(\"gallery__list__image\");\r\n  const image = document.createElement(\"img\");\r\n  // image.src = ImageID[0]\r\n  //   ? `https://drive.google.com/thumbnail?id=${ImageID[0]}&sz=w1048`\r\n  //   : \"./images/empty.png\";\r\n  // 🔥 지수 백오프 적용 (이미지 로드 실패 시 자동 재시도)\r\n  fetchDriveImageWithRetry(image, member.ImageID[0]);\r\n  image.alt = Title;\r\n\r\n  const infoContainer = document.createElement(\"div\");\r\n  infoContainer.classList.add(\"gallery__list__info\");\r\n  const title = document.createElement(\"div\");\r\n  title.classList.add(\"gallery__list__title\");\r\n  title.textContent = Title;\r\n  const date = document.createElement(\"div\");\r\n  date.classList.add(\"gallery__list__date\");\r\n  date.textContent = Date;\r\n\r\n  infoContainer.appendChild(title);\r\n  infoContainer.appendChild(date);\r\n\r\n  imageContainer.appendChild(image);\r\n\r\n  galleryList.appendChild(imageContainer);\r\n  galleryList.appendChild(infoContainer);\r\n\r\n  galleryContainer.appendChild(galleryList);\r\n};\r\n\r\nconst drawGalleryDetail = (gallery) => {\r\n  let { ImageID, Title, Text, Date } = gallery;\r\n  ImageID = ImageID.split(\",\");\r\n\r\n  const boardTitle = document.createElement(\"h2\");\r\n  boardTitle.classList.add(\"board__list__title\");\r\n  boardTitle.classList.add(\"font-bold\");\r\n  boardTitle.textContent = Title;\r\n\r\n  const boardDate = document.createElement(\"div\");\r\n  boardDate.classList.add(\"board__list__date\");\r\n  boardDate.textContent = Date;\r\n\r\n  const boardContents = document.createElement(\"div\");\r\n  boardContents.classList.add(\"board__list__contents\");\r\n  ImageID.forEach((imageID, index) => {\r\n    const image = document.createElement(\"img\");\r\n    image.src = imageID\r\n      ? `https://drive.google.com/thumbnail?id=${imageID}&sz=w1048`\r\n      : \"./images/empty.png\";\r\n    image.alt = `${Title} ${index + 1}`;\r\n    boardContents.appendChild(image);\r\n  });\r\n  const contents = document.createElement(\"p\");\r\n  contents.innerHTML = Text;\r\n  boardContents.appendChild(contents);\r\n\r\n  boardContainer.appendChild(boardTitle);\r\n  boardContainer.appendChild(boardDate);\r\n  boardContainer.appendChild(boardContents);\r\n};\r\n\r\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, (gallerys) => {\r\n  // 갤러리\r\n  if (galleryId) {\r\n    boardContainer.style.display = \"block\";\r\n    galleryContainer.style.display = \"none\";\r\n\r\n    const result = gallerys.find(\r\n      (gallery) => gallery.Title.replace(/\\s+/g, \"-\") === galleryId\r\n    );\r\n    drawGalleryDetail(result);\r\n  }\r\n  // 갤러리 리스트\r\n  else {\r\n    gallerys.forEach((gallery) => {\r\n      drawGallerys(gallery);\r\n    });\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://lsds-web/./src/assets/scripts/pages/gallery.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b45b4bc862870f0252c9")
/******/ })();
/******/ 
/******/ }
);