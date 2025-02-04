"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatelsds_web"]("people_alumni",{

/***/ "./src/assets/scripts/pages/alumni.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/pages/alumni.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getData */ \"./src/assets/scripts/getData.js\");\n\r\n\r\nconst drawMembers = async (members) => {\r\n  const listContainer = document.querySelector(\".members__list-container\");\r\n\r\n  members.forEach(async (member) => {\r\n    if (member.Tag !== \"Alumni\") return;\r\n    const listItem = document.createElement(\"div\");\r\n    listItem.classList.add(\"members__list\");\r\n\r\n    const content = document.createElement(\"div\");\r\n    content.classList.add(\"members__list__content\");\r\n\r\n    const imageContainer = document.createElement(\"div\");\r\n    imageContainer.classList.add(\"members__list__content__image-container\");\r\n\r\n    const image = document.createElement(\"img\");\r\n    image.classList.add(\"members__list__content__image\");\r\n    // const imageUrl = member.ImageID\r\n    //   ? `https://drive.google.com/thumbnail?id=${member.ImageID}`\r\n    //   : \"./images/empty.png\";\r\n    // image.src = imageUrl;\r\n    if (member.ImageID) {\r\n      image.src = await (0,_getData__WEBPACK_IMPORTED_MODULE_0__.fetchDriveImage)(member.ImageID, \"w1048\");\r\n    } else {\r\n      image.src = \"./images/empty.png\"; // 기본 이미지\r\n    }\r\n    image.alt = member.Name;\r\n\r\n    imageContainer.appendChild(image);\r\n\r\n    const textContainer = document.createElement(\"div\");\r\n    textContainer.classList.add(\"members__list__content__text-container\");\r\n\r\n    const rank = document.createElement(\"div\");\r\n    rank.classList.add(\"members__list__content__text-container__rank\");\r\n    rank.classList.add(\"font-bold\");\r\n    rank.textContent = member.Rank;\r\n\r\n    const name = document.createElement(\"div\");\r\n    name.classList.add(\"members__list__content__text-container__name\");\r\n    name.classList.add(\"font-bold\");\r\n    name.textContent = member.Name;\r\n\r\n    const topicContainer = document.createElement(\"div\");\r\n    topicContainer.classList.add(\r\n      \"members__list__content__text-container__topic-container\"\r\n    );\r\n    if (member[\"Research Subject\"] !== \"\") {\r\n      const researchSubject = document.createElement(\"p\");\r\n      researchSubject.textContent = \"Research Subject\";\r\n\r\n      const researchSubjectDetail = document.createElement(\"span\");\r\n      researchSubjectDetail.textContent = member[\"Research Subject\"];\r\n\r\n      topicContainer.appendChild(researchSubject);\r\n      topicContainer.appendChild(researchSubjectDetail);\r\n    }\r\n\r\n    if (member[\"Current Affiliation\"] !== \"\") {\r\n      const affiliation = document.createElement(\"p\");\r\n      affiliation.textContent = \"Current Affiliation\";\r\n\r\n      const affiliationDetail = document.createElement(\"span\");\r\n      affiliationDetail.textContent = member[\"Current Affiliation\"];\r\n\r\n      topicContainer.appendChild(affiliation);\r\n      topicContainer.appendChild(affiliationDetail);\r\n    }\r\n\r\n    const contactContainer = document.createElement(\"div\");\r\n    contactContainer.classList.add(\r\n      \"members__list__content__text-container__contact-container\"\r\n    );\r\n\r\n    const email = document.createElement(\"div\");\r\n    email.classList.add(\"members__list__content__text-container__email\");\r\n\r\n    const emailIcon = document.createElement(\"i\");\r\n    emailIcon.classList.add(\"fa-solid\");\r\n    emailIcon.classList.add(\"fa-envelope\");\r\n\r\n    const emailAddr = document.createElement(\"span\");\r\n    emailAddr.textContent = member.Email;\r\n\r\n    email.appendChild(emailIcon);\r\n    email.appendChild(emailAddr);\r\n\r\n    contactContainer.appendChild(email);\r\n\r\n    textContainer.appendChild(rank);\r\n    textContainer.appendChild(name);\r\n    textContainer.appendChild(topicContainer);\r\n    textContainer.appendChild(contactContainer);\r\n\r\n    content.appendChild(imageContainer);\r\n    content.appendChild(textContainer);\r\n\r\n    listItem.appendChild(content);\r\n\r\n    listContainer.appendChild(listItem);\r\n  });\r\n};\r\n\r\nconst sheetName = \"Members\";\r\n(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getExcelData)(sheetName, function (data) {\r\n  drawMembers(data);\r\n});\r\n\n\n//# sourceURL=webpack://lsds-web/./src/assets/scripts/pages/alumni.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ed5c53e685d3f911b390")
/******/ })();
/******/ 
/******/ }
);