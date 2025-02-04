"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelsds_web"]("publication_book",{

/***/ "./src/assets/scripts/pages/publication_book.js":
/*!******************************************************!*\
  !*** ./src/assets/scripts/pages/publication_book.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/assets/scripts/getData.js\");\n\r\n\r\nconst createPublicationContainer = (yearRange) => {\r\n  const yearContainer = document.createElement(\"div\");\r\n  yearContainer.classList.add(\"publication__year-container\");\r\n  yearContainer.setAttribute(\"year-range\", yearRange);\r\n\r\n  const yearTitle = document.createElement(\"div\");\r\n  yearTitle.classList.add(\"publication__year-title\");\r\n\r\n  const yearText = document.createElement(\"h3\");\r\n  yearText.classList.add(\"title\");\r\n  yearText.textContent = yearRange;\r\n\r\n  yearTitle.appendChild(yearText);\r\n  yearContainer.appendChild(yearTitle);\r\n\r\n  const listContainer = document.createElement(\"div\");\r\n  listContainer.classList.add(\"publication__list-container\");\r\n  yearContainer.appendChild(listContainer);\r\n\r\n  return yearContainer;\r\n};\r\n\r\nconst drawPublications = (data) => {\r\n  const publicationContainer = document.querySelector(\".publication-container\");\r\n\r\n  // const yearRanges = {\r\n  //   \"2020~\": [],\r\n  // };\r\n\r\n  // // 데이터를 년도 범위에 따라 분류\r\n  // data.forEach((item) => {\r\n  //   const { Year } = item;\r\n\r\n  //   if (Year >= 2020) {\r\n  //     yearRanges[\"2020~\"].push(item);\r\n  //   }\r\n  // });\r\n\r\n  ////\r\n  const yearRanges = {};\r\n  for (let year = 2021; year <= 2030; year++) {\r\n    yearRanges[year] = [];\r\n  }\r\n\r\n  // 데이터를 년도 범위에 따라 분류\r\n  data.forEach((item) => {\r\n    let { Date } = item;\r\n    // Date = parseInt(Date.split(\"-\")[0]); // \"YYYY-MM-DD\" → YYYY 추출\r\n    console.log(Date)\r\n    Date = parseInt(Date); // YYYY\r\n\r\n    if (yearRanges.hasOwnProperty(Date)) {\r\n      yearRanges[Date].push(item);\r\n    }\r\n  });\r\n  //\r\n  \r\n\r\n  Object.entries(yearRanges).forEach(([yearRange, items]) => {\r\n    const yearContainer = createPublicationContainer(yearRange);\r\n    publicationContainer.appendChild(yearContainer);\r\n\r\n    const listContainer = yearContainer.querySelector(\".publication__list-container\");\r\n\r\n    // 아이템별로 리스트 생성\r\n    const length = items.length;\r\n    items.forEach((item, index) => {\r\n      const { Title, Publication, Authors, Year } = item;\r\n\r\n      const listItem = document.createElement(\"div\");\r\n      listItem.classList.add(\"publication__list\");\r\n\r\n      const content = document.createElement(\"div\");\r\n      content.classList.add(\"publication__list-content\");\r\n\r\n      const titleElement = document.createElement(\"h4\");\r\n      titleElement.classList.add(\"title\");\r\n      titleElement.innerHTML = `${Title}`;\r\n\r\n      const descriptionElement = document.createElement(\"p\");\r\n      descriptionElement.classList.add(\"description\");\r\n      descriptionElement.innerHTML = `${Authors} 공역. ${Publication}, ${Year}.`;\r\n\r\n      content.appendChild(titleElement);\r\n      content.appendChild(descriptionElement);\r\n\r\n      listItem.appendChild(content);\r\n\r\n      listContainer.appendChild(listItem);\r\n    });\r\n  });\r\n};\r\n\r\nconst changeShowTag = (event) => {\r\n  const selectedYearTag = event.target.textContent;\r\n\r\n  const yearRange = document.querySelectorAll(\".publication__year-container\");\r\n  yearRange.forEach((container) => {\r\n    const yearTag = container.getAttribute(\"year-range\");\r\n\r\n    if (yearTag === selectedYearTag || selectedYearTag === \"All\") {\r\n      container.style.display = \"block\";\r\n    } else {\r\n      container.style.display = \"none\";\r\n    }\r\n  });\r\n\r\n  const tags = document.querySelectorAll(\".tag__item\");\r\n  tags.forEach((tag) => {\r\n    tag.classList.toggle(\"selected\", tag.textContent === selectedYearTag);\r\n  });\r\n};\r\n\r\nconst sheetName = \"Book\";\r\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, function (data) {\r\n  drawPublications(data);\r\n});\r\n\r\nconst tags = document.querySelectorAll(\".tag__item\");\r\n\r\ntags.forEach((tag) => {\r\n  tag.addEventListener(\"click\", changeShowTag);\r\n});\r\n\n\n//# sourceURL=webpack://lsds-web/./src/assets/scripts/pages/publication_book.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c05044a4979367b6274a")
/******/ })();
/******/ 
/******/ }
);